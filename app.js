// PLU Schedule Planner - Main Application

// State
let currentUser = null;
let scheduleData = {};
let selectedTerm = null;

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const scheduleScreen = document.getElementById('schedule-screen');
const facultyScreen = document.getElementById('faculty-screen');
const courseModal = document.getElementById('course-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing session
    const savedUser = localStorage.getItem('plu_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (currentUser.isFaculty) {
            showFacultyScreen();
        } else {
            loadSchedule();
            showScheduleScreen();
        }
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
    document.getElementById('faculty-logout-btn').addEventListener('click', handleLogout);
    document.getElementById('show-summer').addEventListener('change', toggleSummer);
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.getElementById('course-search').addEventListener('input', handleCourseSearch);
    
    // Faculty checkbox toggle
    document.getElementById('reg-faculty').addEventListener('change', (e) => {
        const studentFields = document.getElementById('student-fields');
        const facultyFields = document.getElementById('faculty-fields');
        const startYear = document.getElementById('reg-start-year');
        const major = document.getElementById('reg-major');
        
        if (e.target.checked) {
            studentFields.classList.add('hidden');
            facultyFields.classList.remove('hidden');
            startYear.removeAttribute('required');
            major.removeAttribute('required');
        } else {
            studentFields.classList.remove('hidden');
            facultyFields.classList.add('hidden');
            startYear.setAttribute('required', '');
            major.setAttribute('required', '');
        }
    });
    
    // Faculty view tabs
    document.getElementById('tab-aggregate').addEventListener('click', () => switchFacultyTab('aggregate'));
    document.getElementById('tab-students').addEventListener('click', () => switchFacultyTab('students'));
    
    // Filter change
    document.getElementById('filter-dept').addEventListener('change', renderAggregateView);
    
    // Close student modal
    document.getElementById('close-student-modal').addEventListener('click', () => {
        document.getElementById('student-modal').classList.add('hidden');
    });
    
    // Close modal on outside click
    courseModal.addEventListener('click', (e) => {
        if (e.target === courseModal) closeModal();
    });
    document.getElementById('student-modal').addEventListener('click', (e) => {
        if (e.target.id === 'student-modal') {
            document.getElementById('student-modal').classList.add('hidden');
        }
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
        
        if (currentUser.isFaculty) {
            showFacultyScreen();
        } else {
            loadSchedule();
            showScheduleScreen();
        }
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const name = document.getElementById('reg-name').value;
    const isFaculty = document.getElementById('reg-faculty').checked;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    
    if (users[username]) {
        alert('Username already exists');
        return;
    }
    
    // Create new user
    let newUser;
    if (isFaculty) {
        const department = document.getElementById('reg-department').value;
        newUser = {
            username,
            password,
            name,
            department,
            isFaculty: true
        };
    } else {
        const startYear = parseInt(document.getElementById('reg-start-year').value);
        const major = document.getElementById('reg-major').value;
        newUser = {
            username,
            password,
            name,
            startYear,
            major,
            isFaculty: false
        };
        
        // Initialize empty schedule for students only
        const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
        schedules[username] = createEmptySchedule(startYear);
        localStorage.setItem('plu_schedules', JSON.stringify(schedules));
    }
    
    users[username] = newUser;
    localStorage.setItem('plu_users', JSON.stringify(users));
    
    // Auto-login
    currentUser = newUser;
    localStorage.setItem('plu_current_user', JSON.stringify(currentUser));
    
    if (isFaculty) {
        showFacultyScreen();
    } else {
        loadSchedule();
        showScheduleScreen();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('plu_current_user');
    scheduleScreen.classList.add('hidden');
    facultyScreen.classList.add('hidden');
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

// ==================== FACULTY VIEW ====================

function showFacultyScreen() {
    loginScreen.classList.add('hidden');
    registerScreen.classList.add('hidden');
    scheduleScreen.classList.add('hidden');
    facultyScreen.classList.remove('hidden');
    
    document.getElementById('faculty-display').textContent = currentUser.name;
    
    renderAggregateView();
    renderStudentList();
}

function switchFacultyTab(tab) {
    const aggregateView = document.getElementById('aggregate-view');
    const studentsView = document.getElementById('students-view');
    const tabAggregate = document.getElementById('tab-aggregate');
    const tabStudents = document.getElementById('tab-students');
    
    if (tab === 'aggregate') {
        aggregateView.classList.remove('hidden');
        studentsView.classList.add('hidden');
        tabAggregate.classList.add('active');
        tabStudents.classList.remove('active');
    } else {
        aggregateView.classList.add('hidden');
        studentsView.classList.remove('hidden');
        tabAggregate.classList.remove('active');
        tabStudents.classList.add('active');
    }
}

function renderAggregateView() {
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    const filterDept = document.getElementById('filter-dept').value;
    
    // Collect all terms across all schedules
    const allTerms = new Set();
    const courseDemand = {};
    
    Object.entries(schedules).forEach(([username, schedule]) => {
        Object.entries(schedule).forEach(([year, terms]) => {
            Object.entries(terms).forEach(([term, courses]) => {
                if (term === 'summer1' || term === 'summer2') return; // Skip summer for now
                
                const termKey = `${term} ${year}`;
                allTerms.add(termKey);
                
                courses.forEach(code => {
                    // Apply department filter
                    if (filterDept && !code.startsWith(filterDept)) return;
                    
                    if (!courseDemand[code]) {
                        courseDemand[code] = {};
                    }
                    if (!courseDemand[code][termKey]) {
                        courseDemand[code][termKey] = 0;
                    }
                    courseDemand[code][termKey]++;
                });
            });
        });
    });
    
    // Sort terms chronologically
    const sortedTerms = Array.from(allTerms).sort((a, b) => {
        const [termA, yearA] = a.split(' ');
        const [termB, yearB] = b.split(' ');
        const termOrder = { fall: 0, jterm: 1, spring: 2 };
        
        if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
        return termOrder[termA] - termOrder[termB];
    });
    
    // Render table header
    const headerRow = document.getElementById('aggregate-header');
    headerRow.innerHTML = `
        <th>Course</th>
        ${sortedTerms.map(term => {
            const [t, y] = term.split(' ');
            return `<th>${t.charAt(0).toUpperCase() + t.slice(1)} ${y}</th>`;
        }).join('')}
    `;
    
    // Render table body
    const tbody = document.getElementById('aggregate-body');
    const sortedCourses = Object.keys(courseDemand).sort();
    
    if (sortedCourses.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (sortedTerms.length + 1) + '" style="text-align: center; color: #666;">No schedule data available</td></tr>';
        return;
    }
    
    tbody.innerHTML = sortedCourses.map(code => {
        return `
            <tr>
                <td>${code}</td>
                ${sortedTerms.map(term => {
                    const count = courseDemand[code][term] || 0;
                    const demandClass = count >= 20 ? 'demand-high' : (count >= 10 ? 'demand-medium' : 'demand-low');
                    return `<td class="${demandClass}">${count || '-'}</td>`;
                }).join('')}
            </tr>
        `;
    }).join('');
}

function renderStudentList() {
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    
    const studentList = document.getElementById('student-list');
    
    // Get all students (non-faculty users)
    const students = Object.values(users).filter(u => !u.isFaculty);
    
    if (students.length === 0) {
        studentList.innerHTML = '<p style="color: #666;">No students registered yet</p>';
        return;
    }
    
    studentList.innerHTML = students.map(student => {
        const schedule = schedules[student.username];
        const totalCourses = schedule ? Object.values(schedule).reduce((sum, terms) => 
            sum + Object.values(terms).reduce((tSum, courses) => tSum + courses.length, 0), 0
        ) : 0;
        
        return `
            <div class="student-card" data-username="${student.username}">
                <div class="student-card-name">${student.name}</div>
                <div class="student-card-info">
                    ${student.major} • Class of ${student.startYear + 4} • ${totalCourses} courses planned
                </div>
            </div>
        `;
    }).join('');
    
    // Add click listeners
    studentList.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', () => {
            showStudentSchedule(card.dataset.username);
        });
    });
}

function showStudentSchedule(username) {
    const users = JSON.parse(localStorage.getItem('plu_users') || '{}');
    const schedules = JSON.parse(localStorage.getItem('plu_schedules') || '{}');
    
    const student = users[username];
    const schedule = schedules[username];
    
    if (!student || !schedule) return;
    
    document.getElementById('student-modal-title').textContent = `${student.name}'s Schedule`;
    
    const container = document.getElementById('student-schedule-view');
    container.innerHTML = '';
    
    const years = Object.keys(schedule).sort();
    
    years.forEach(year => {
        const yearData = schedule[year];
        const yearBlock = document.createElement('div');
        yearBlock.style.marginBottom = '20px';
        
        const nextYear = parseInt(year) + 1;
        yearBlock.innerHTML = `
            <h3 style="margin-bottom: 10px;">Year ${parseInt(year) - student.startYear + 1} (${year}-${String(nextYear).slice(2)})</h3>
            <div style="display: flex; gap: 15px;">
                ${renderStudentTerm('Fall', yearData.fall)}
                ${renderStudentTerm('J-Term', yearData.jterm)}
                ${renderStudentTerm('Spring', yearData.spring)}
            </div>
        `;
        
        container.appendChild(yearBlock);
    });
    
    document.getElementById('student-modal').classList.remove('hidden');
}

function renderStudentTerm(termName, courses) {
    const termColors = {
        'Fall': '#f6e05e',
        'J-Term': '#68d391',
        'Spring': '#63b3ed'
    };
    
    return `
        <div style="flex: 1; min-width: 120px;">
            <div style="background: ${termColors[termName]}; padding: 8px; text-align: center; font-weight: 600; border-radius: 4px 4px 0 0;">
                ${termName}
            </div>
            <div style="background: #f8f8f8; border: 1px solid #ddd; border-top: none; padding: 10px; min-height: 100px; border-radius: 0 0 4px 4px;">
                ${courses.length > 0 
                    ? courses.map(code => `<div style="margin-bottom: 5px; font-size: 14px;">${code}</div>`).join('')
                    : '<div style="color: #999; font-size: 13px;">No courses</div>'
                }
            </div>
        </div>
    `;
}
