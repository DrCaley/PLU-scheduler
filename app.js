// PLU Schedule Planner - Main Application

// State
let currentUser = null;
let scheduleData = {};
let selectedTerm = null;

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const scheduleScreen = document.getElementById('schedule-screen');
const courseModal = document.getElementById('course-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing session
    const savedUser = localStorage.getItem('plu_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        loadSchedule();
        showScheduleScreen();
    }

    // Event listeners
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        loginScreen.classList.add('hidden');
        registerScreen.classList.remove('hidden');
    });
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        registerScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    });
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('show-summer').addEventListener('change', toggleSummer);
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.getElementById('course-search').addEventListener('input', handleCourseSearch);
    
    // Close modal on outside click
    courseModal.addEventListener('click', (e) => {
        if (e.target === courseModal) closeModal();
    });
});

// Authentication
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    
    if (users[username] && users[username].password === password) {
        currentUser = users[username];
        localStorage.setItem('plu_current_user', JSON.stringify(currentUser));
        loadSchedule();
        showScheduleScreen();
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const name = document.getElementById('reg-name').value;
    const startYear = parseInt(document.getElementById('reg-start-year').value);
    const major = document.getElementById('reg-major').value;
    const isFaculty = document.getElementById('reg-faculty').checked;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    
    if (users[username]) {
        alert('Username already exists');
        return;
    }
    
    // Create new user
    const newUser = {
        username,
        password,
        name,
        startYear,
        major,
        isFaculty
    };
    
    users[username] = newUser;
    localStorage.setItem('plu_users', JSON.stringify(users));
    
    // Initialize empty schedule
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    schedules[username] = createEmptySchedule(startYear);
    localStorage.setItem('plu_schedules', JSON.stringify(schedules));
    
    // Auto-login
    currentUser = newUser;
    localStorage.setItem('plu_current_user', JSON.stringify(currentUser));
    loadSchedule();
    showScheduleScreen();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('plu_current_user');
    scheduleScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    document.getElementById('login-form').reset();
}

// Schedule Management
function createEmptySchedule(startYear) {
    const schedule = {};
    for (let i = 0; i < 5; i++) {
        const year = startYear + i;
        schedule[year] = {
            fall: [],
            jterm: [],
            spring: [],
            summer1: [],
            summer2: []
        };
    }
    return schedule;
}

function loadSchedule() {
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    scheduleData = schedules[currentUser.username] || createEmptySchedule(currentUser.startYear);
}

function saveSchedule() {
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    schedules[currentUser.username] = scheduleData;
    localStorage.setItem('plu_schedules', JSON.stringify(schedules));
    updateCreditSummary();
}

// UI Rendering
function showScheduleScreen() {
    loginScreen.classList.add('hidden');
    registerScreen.classList.add('hidden');
    scheduleScreen.classList.remove('hidden');
    
    // Update header
    document.getElementById('user-display').textContent = currentUser.name;
    document.getElementById('student-name').textContent = currentUser.name;
    document.getElementById('student-major').textContent = currentUser.major + ' Major';
    document.getElementById('grad-year').textContent = currentUser.startYear + 4;
    
    renderSchedule();
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';
    
    const years = Object.keys(scheduleData).sort();
    
    years.forEach(year => {
        const yearData = scheduleData[year];
        const yearBlock = document.createElement('div');
        yearBlock.className = 'year-block';
        
        const nextYear = parseInt(year) + 1;
        yearBlock.innerHTML = `
            <div class="year-header">Year ${parseInt(year) - currentUser.startYear + 1} (${year}-${String(nextYear).slice(2)})</div>
            <div class="terms-container">
                ${renderTerm(year, 'fall', 'Fall', yearData.fall)}
                ${renderTerm(year, 'jterm', 'J-Term', yearData.jterm)}
                ${renderTerm(year, 'spring', 'Spring', yearData.spring)}
                ${renderTerm(year, 'summer1', 'Sum 1', yearData.summer1, true)}
                ${renderTerm(year, 'summer2', 'Sum 2', yearData.summer2, true)}
            </div>
        `;
        
        container.appendChild(yearBlock);
    });
    
    // Add event listeners for add buttons
    document.querySelectorAll('.add-course-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const year = btn.dataset.year;
            const term = btn.dataset.term;
            openCourseModal(year, term);
        });
    });
    
    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const year = btn.dataset.year;
            const term = btn.dataset.term;
            const code = btn.dataset.code;
            removeCourse(year, term, code);
        });
    });
    
    updateCreditSummary();
}

function renderTerm(year, termKey, termName, courses, isSummer = false) {
    const termCredits = courses.reduce((sum, code) => {
        const course = getCourse(code);
        return sum + (course ? course.credits : 0);
    }, 0);
    
    const maxCourses = termKey === 'jterm' ? 3 : (isSummer ? 2 : 7);
    
    return `
        <div class="term ${isSummer ? 'summer' : ''}">
            <div class="term-header ${termKey}">${termName} ${year}</div>
            <div class="courses-list">
                ${courses.map(code => {
                    const course = getCourse(code);
                    return `
                        <div class="course-item">
                            <div>
                                <span class="course-code">${code}</span>
                                <span class="course-credits">(${course ? course.credits : '?'} cr)</span>
                            </div>
                            <button class="remove-btn" data-year="${year}" data-term="${termKey}" data-code="${code}">&times;</button>
                        </div>
                    `;
                }).join('')}
                ${courses.length < maxCourses ? `
                    <button class="add-course-btn" data-year="${year}" data-term="${termKey}">+ Add Course</button>
                ` : ''}
            </div>
            <div class="term-credits">${termCredits}</div>
        </div>
    `;
}

function updateCreditSummary() {
    let totalCredits = 0;
    let upperCredits = 0;
    
    Object.values(scheduleData).forEach(yearData => {
        Object.values(yearData).forEach(termCourses => {
            termCourses.forEach(code => {
                const course = getCourse(code);
                if (course) {
                    totalCredits += course.credits;
                    // Check if 300+ level
                    const courseNum = parseInt(code.split(' ')[1]);
                    if (courseNum >= 300) {
                        upperCredits += course.credits;
                    }
                }
            });
        });
    });
    
    document.getElementById('total-credits').textContent = totalCredits;
    document.getElementById('upper-credits').textContent = upperCredits;
}

// Course Modal
function openCourseModal(year, term) {
    selectedTerm = { year, term };
    courseModal.classList.remove('hidden');
    document.getElementById('course-search').value = '';
    document.getElementById('course-results').innerHTML = '<p style="color: #666;">Type to search courses...</p>';
    document.getElementById('course-search').focus();
}

function closeModal() {
    courseModal.classList.add('hidden');
    selectedTerm = null;
}

function handleCourseSearch(e) {
    const query = e.target.value.trim();
    const resultsDiv = document.getElementById('course-results');
    
    if (query.length < 2) {
        resultsDiv.innerHTML = '<p style="color: #666;">Type to search courses...</p>';
        return;
    }
    
    const results = searchCourses(query);
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p style="color: #666;">No courses found</p>';
        return;
    }
    
    resultsDiv.innerHTML = results.map(course => `
        <div class="course-option" data-code="${course.code}">
            <div class="course-option-code">${course.code}</div>
            <div class="course-option-title">${course.title}</div>
            <div class="course-option-credits">${course.credits} credits${course.prereqs.length ? ' • Prereqs: ' + course.prereqs.join(', ') : ''}</div>
        </div>
    `).join('');
    
    // Add click listeners
    resultsDiv.querySelectorAll('.course-option').forEach(option => {
        option.addEventListener('click', () => {
            addCourse(option.dataset.code);
        });
    });
}

function addCourse(code) {
    if (!selectedTerm) return;
    
    const { year, term } = selectedTerm;
    
    // Check if course already exists in this term
    if (scheduleData[year][term].includes(code)) {
        alert('Course already added to this term');
        return;
    }
    
    // Check prerequisites (simple version - just warn)
    const course = getCourse(code);
    if (course && course.prereqs.length > 0) {
        const allPriorCourses = getAllPriorCourses(year, term);
        const missingPrereqs = course.prereqs.filter(p => !allPriorCourses.includes(p));
        if (missingPrereqs.length > 0) {
            const proceed = confirm(`Warning: Missing prerequisites: ${missingPrereqs.join(', ')}\n\nAdd anyway?`);
            if (!proceed) return;
        }
    }
    
    scheduleData[year][term].push(code);
    saveSchedule();
    closeModal();
    renderSchedule();
}

function removeCourse(year, term, code) {
    const index = scheduleData[year][term].indexOf(code);
    if (index > -1) {
        scheduleData[year][term].splice(index, 1);
        saveSchedule();
        renderSchedule();
    }
}

function getAllPriorCourses(currentYear, currentTerm) {
    const courses = [];
    const termOrder = ['fall', 'jterm', 'spring', 'summer1', 'summer2'];
    const currentTermIndex = termOrder.indexOf(currentTerm);
    
    Object.keys(scheduleData).sort().forEach(year => {
        if (year < currentYear) {
            // All terms from prior years
            Object.values(scheduleData[year]).forEach(termCourses => {
                courses.push(...termCourses);
            });
        } else if (year === currentYear) {
            // Only terms before current term in same year
            termOrder.forEach((term, index) => {
                if (index < currentTermIndex) {
                    courses.push(...scheduleData[year][term]);
                }
            });
        }
    });
    
    return courses;
}

// Toggle Summer Sessions
function toggleSummer() {
    const show = document.getElementById('show-summer').checked;
    document.querySelectorAll('.year-block').forEach(block => {
        if (show) {
            block.classList.add('show-summer');
        } else {
            block.classList.remove('show-summer');
        }
    });
}
