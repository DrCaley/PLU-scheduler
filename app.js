// PLU Schedule Planner - Firebase Version

// State
let currentUser = null;
let userProfile = null;
let scheduleData = {};
let selectedTerm = null;
let editingStudentId = null;

// Firebase references
let db = null;
let auth = null;

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const setupScreen = document.getElementById('setup-screen');
const scheduleScreen = document.getElementById('schedule-screen');
const facultyScreen = document.getElementById('faculty-screen');
const courseModal = document.getElementById('course-modal');

// Initialize Firebase
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase
    firebase.initializeApp(window.firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    
    // Auth state listener
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            currentUser = user;
            
            // Check email domain
            const emailDomain = user.email.split('@')[1];
            if (emailDomain !== window.ALLOWED_DOMAIN) {
                alert(`Access restricted to @${window.ALLOWED_DOMAIN} email addresses.`);
                await auth.signOut();
                return;
            }
            
            // Check if user has a profile
            const profile = await getUserProfile(user.uid);
            if (profile) {
                userProfile = profile;
                if (userProfile.role === 'faculty') {
                    showFacultyScreen();
                } else {
                    await loadSchedule();
                    showScheduleScreen();
                }
            } else {
                // New user - show setup screen
                showSetupScreen(user);
            }
        } else {
            currentUser = null;
            userProfile = null;
            showLoginScreen();
        }
    });
    
    // Event listeners
    document.getElementById('google-signin-btn').addEventListener('click', handleGoogleSignIn);
    document.getElementById('setup-form').addEventListener('submit', handleSetupSubmit);
    document.getElementById('setup-role').addEventListener('change', handleRoleChange);
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('faculty-logout-btn').addEventListener('click', handleLogout);
    document.getElementById('show-summer').addEventListener('change', toggleSummer);
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.getElementById('course-search').addEventListener('input', handleCourseSearch);
    
    // Faculty view tabs
    document.getElementById('tab-aggregate').addEventListener('click', () => switchFacultyTab('aggregate'));
    document.getElementById('tab-students').addEventListener('click', () => switchFacultyTab('students'));
    
    // Filter change
    document.getElementById('filter-dept').addEventListener('change', renderAggregateView);
    
    // Close student modal
    document.getElementById('close-student-modal').addEventListener('click', () => {
        document.getElementById('student-modal').classList.add('hidden');
        editingStudentId = null;
        renderStudentList();
    });
    
    // Close modal on outside click
    courseModal.addEventListener('click', (e) => {
        if (e.target === courseModal) closeModal();
    });
    document.getElementById('student-modal').addEventListener('click', (e) => {
        if (e.target.id === 'student-modal') {
            document.getElementById('student-modal').classList.add('hidden');
            editingStudentId = null;
            renderStudentList();
        }
    });
});

// ==================== AUTHENTICATION ====================

async function handleGoogleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Hint to use PLU accounts
    provider.setCustomParameters({
        hd: window.ALLOWED_DOMAIN
    });
    
    try {
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error('Sign in error:', error);
        alert('Sign in failed: ' + error.message);
    }
}

function handleLogout() {
    auth.signOut();
}

function showLoginScreen() {
    loginScreen.classList.remove('hidden');
    setupScreen.classList.add('hidden');
    scheduleScreen.classList.add('hidden');
    facultyScreen.classList.add('hidden');
}

function showSetupScreen(user) {
    loginScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    scheduleScreen.classList.add('hidden');
    facultyScreen.classList.add('hidden');
    
    document.getElementById('setup-name').value = user.displayName || '';
    document.getElementById('setup-email').value = user.email;
}

function handleRoleChange(e) {
    const studentFields = document.getElementById('student-setup-fields');
    const facultyFields = document.getElementById('faculty-setup-fields');
    
    if (e.target.value === 'student') {
        studentFields.classList.remove('hidden');
        facultyFields.classList.add('hidden');
    } else if (e.target.value === 'faculty') {
        studentFields.classList.add('hidden');
        facultyFields.classList.remove('hidden');
    } else {
        studentFields.classList.add('hidden');
        facultyFields.classList.add('hidden');
    }
}

async function handleSetupSubmit(e) {
    e.preventDefault();
    
    const role = document.getElementById('setup-role').value;
    
    if (!role) {
        alert('Please select a role');
        return;
    }
    
    const profileData = {
        uid: currentUser.uid,
        email: currentUser.email,
        name: currentUser.displayName || document.getElementById('setup-name').value,
        role: role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    if (role === 'student') {
        const startYear = document.getElementById('setup-start-year').value;
        const major = document.getElementById('setup-major').value;
        
        if (!startYear || !major) {
            alert('Please fill in all student fields');
            return;
        }
        
        profileData.startYear = parseInt(startYear);
        profileData.major = major;
        
        // Create empty schedule
        const schedule = createEmptySchedule(profileData.startYear);
        await db.collection('schedules').doc(currentUser.uid).set({
            userId: currentUser.uid,
            schedule: schedule,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } else {
        profileData.department = document.getElementById('setup-department').value || '';
    }
    
    // Save profile
    await db.collection('users').doc(currentUser.uid).set(profileData);
    
    userProfile = profileData;
    
    if (role === 'faculty') {
        showFacultyScreen();
    } else {
        await loadSchedule();
        showScheduleScreen();
    }
}

// ==================== DATABASE FUNCTIONS ====================

async function getUserProfile(uid) {
    const doc = await db.collection('users').doc(uid).get();
    return doc.exists ? doc.data() : null;
}

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

async function loadSchedule() {
    const doc = await db.collection('schedules').doc(currentUser.uid).get();
    if (doc.exists) {
        scheduleData = doc.data().schedule;
    } else {
        scheduleData = createEmptySchedule(userProfile.startYear);
    }
}

async function saveSchedule() {
    const targetId = editingStudentId || currentUser.uid;
    await db.collection('schedules').doc(targetId).update({
        schedule: scheduleData,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    updateCreditSummary();
}

// ==================== STUDENT UI ====================

function showScheduleScreen() {
    loginScreen.classList.add('hidden');
    setupScreen.classList.add('hidden');
    scheduleScreen.classList.remove('hidden');
    facultyScreen.classList.add('hidden');
    
    document.getElementById('user-display').textContent = userProfile.name;
    document.getElementById('student-name').textContent = userProfile.name;
    document.getElementById('student-major').textContent = userProfile.major + ' Major';
    document.getElementById('grad-year').textContent = userProfile.startYear + 4;
    
    renderSchedule();
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';
    
    const years = Object.keys(scheduleData).sort();
    const startYear = userProfile.startYear || parseInt(years[0]);
    
    years.forEach(year => {
        const yearData = scheduleData[year];
        const yearBlock = document.createElement('div');
        yearBlock.className = 'year-block';
        
        const nextYear = parseInt(year) + 1;
        yearBlock.innerHTML = `
            <div class="year-header">Year ${parseInt(year) - startYear + 1} (${year}-${String(nextYear).slice(2)})</div>
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

// ==================== COURSE MODAL ====================

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
    
    resultsDiv.querySelectorAll('.course-option').forEach(option => {
        option.addEventListener('click', () => {
            addCourse(option.dataset.code);
        });
    });
}

async function addCourse(code) {
    if (!selectedTerm) return;
    
    const { year, term } = selectedTerm;
    
    if (scheduleData[year][term].includes(code)) {
        alert('Course already added to this term');
        return;
    }
    
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
    await saveSchedule();
    closeModal();
    
    if (editingStudentId) {
        showStudentSchedule(editingStudentId);
        renderAggregateView();
    } else {
        renderSchedule();
    }
}

async function removeCourse(year, term, code) {
    const index = scheduleData[year][term].indexOf(code);
    if (index > -1) {
        scheduleData[year][term].splice(index, 1);
        await saveSchedule();
        
        if (editingStudentId) {
            showStudentSchedule(editingStudentId);
            renderAggregateView();
        } else {
            renderSchedule();
        }
    }
}

function getAllPriorCourses(currentYear, currentTerm) {
    const courses = [];
    const termOrder = ['fall', 'jterm', 'spring', 'summer1', 'summer2'];
    const currentTermIndex = termOrder.indexOf(currentTerm);
    
    Object.keys(scheduleData).sort().forEach(year => {
        if (year < currentYear) {
            Object.values(scheduleData[year]).forEach(termCourses => {
                courses.push(...termCourses);
            });
        } else if (year === currentYear) {
            termOrder.forEach((term, index) => {
                if (index < currentTermIndex) {
                    courses.push(...scheduleData[year][term]);
                }
            });
        }
    });
    
    return courses;
}

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

async function showFacultyScreen() {
    loginScreen.classList.add('hidden');
    setupScreen.classList.add('hidden');
    scheduleScreen.classList.add('hidden');
    facultyScreen.classList.remove('hidden');
    
    document.getElementById('faculty-display').textContent = userProfile.name;
    
    await renderAggregateView();
    await renderStudentList();
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

async function renderAggregateView() {
    const filterDept = document.getElementById('filter-dept').value;
    
    // Get all schedules
    const schedulesSnapshot = await db.collection('schedules').get();
    
    const allTerms = new Set();
    const courseDemand = {};
    
    schedulesSnapshot.forEach(doc => {
        const data = doc.data();
        const schedule = data.schedule;
        
        Object.entries(schedule).forEach(([year, terms]) => {
            Object.entries(terms).forEach(([term, courses]) => {
                if (term === 'summer1' || term === 'summer2') return;
                
                const termKey = `${term} ${year}`;
                allTerms.add(termKey);
                
                courses.forEach(code => {
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
    
    const sortedTerms = Array.from(allTerms).sort((a, b) => {
        const [termA, yearA] = a.split(' ');
        const [termB, yearB] = b.split(' ');
        const termOrder = { fall: 0, jterm: 1, spring: 2 };
        
        if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
        return termOrder[termA] - termOrder[termB];
    });
    
    const headerRow = document.getElementById('aggregate-header');
    headerRow.innerHTML = `
        <th>Course</th>
        ${sortedTerms.map(term => {
            const [t, y] = term.split(' ');
            return `<th>${t.charAt(0).toUpperCase() + t.slice(1)} ${y}</th>`;
        }).join('')}
    `;
    
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

async function renderStudentList() {
    const studentList = document.getElementById('student-list');
    
    // Get all students
    const usersSnapshot = await db.collection('users').where('role', '==', 'student').get();
    
    if (usersSnapshot.empty) {
        studentList.innerHTML = '<p style="color: #666;">No students registered yet</p>';
        return;
    }
    
    // Get all schedules for course count
    const schedulesSnapshot = await db.collection('schedules').get();
    const schedules = {};
    schedulesSnapshot.forEach(doc => {
        schedules[doc.id] = doc.data().schedule;
    });
    
    const students = [];
    usersSnapshot.forEach(doc => {
        students.push({ id: doc.id, ...doc.data() });
    });
    
    studentList.innerHTML = students.map(student => {
        const schedule = schedules[student.uid];
        const totalCourses = schedule ? Object.values(schedule).reduce((sum, terms) => 
            sum + Object.values(terms).reduce((tSum, courses) => tSum + courses.length, 0), 0
        ) : 0;
        
        return `
            <div class="student-card" data-uid="${student.uid}">
                <div class="student-card-name">${student.name}</div>
                <div class="student-card-info">
                    ${student.major} • Class of ${student.startYear + 4} • ${totalCourses} courses planned
                </div>
            </div>
        `;
    }).join('');
    
    studentList.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', () => {
            showStudentSchedule(card.dataset.uid);
        });
    });
}

async function showStudentSchedule(uid) {
    const userDoc = await db.collection('users').doc(uid).get();
    const scheduleDoc = await db.collection('schedules').doc(uid).get();
    
    if (!userDoc.exists || !scheduleDoc.exists) return;
    
    const student = userDoc.data();
    const schedule = scheduleDoc.data().schedule;
    
    editingStudentId = uid;
    scheduleData = schedule;
    
    document.getElementById('student-modal-title').textContent = `${student.name}'s Schedule`;
    
    const container = document.getElementById('student-schedule-view');
    container.innerHTML = '';
    
    const scheduleContainer = document.createElement('div');
    scheduleContainer.className = 'faculty-schedule-grid';
    
    const years = Object.keys(schedule).sort();
    
    years.forEach(year => {
        const yearData = schedule[year];
        const yearBlock = document.createElement('div');
        yearBlock.className = 'year-block';
        
        const nextYear = parseInt(year) + 1;
        yearBlock.innerHTML = `
            <div class="year-header">Year ${parseInt(year) - student.startYear + 1} (${year}-${String(nextYear).slice(2)})</div>
            <div class="terms-container">
                ${renderTerm(year, 'fall', 'Fall', yearData.fall)}
                ${renderTerm(year, 'jterm', 'J-Term', yearData.jterm)}
                ${renderTerm(year, 'spring', 'Spring', yearData.spring)}
            </div>
        `;
        
        scheduleContainer.appendChild(yearBlock);
    });
    
    container.appendChild(scheduleContainer);
    
    // Credit summary
    const creditSummary = document.createElement('div');
    creditSummary.className = 'faculty-credit-summary';
    let totalCredits = 0, upperCredits = 0;
    Object.values(schedule).forEach(yearData => {
        Object.values(yearData).forEach(termCourses => {
            termCourses.forEach(code => {
                const course = getCourse(code);
                if (course) {
                    totalCredits += course.credits;
                    const courseNum = parseInt(code.split(' ')[1]);
                    if (courseNum >= 300) upperCredits += course.credits;
                }
            });
        });
    });
    creditSummary.innerHTML = `
        <div class="summary-item"><span class="label">Total Credits:</span> <span>${totalCredits}</span></div>
        <div class="summary-item"><span class="label">300+ Level:</span> <span>${upperCredits}</span></div>
    `;
    container.appendChild(creditSummary);
    
    // Re-attach event listeners
    container.querySelectorAll('.add-course-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openCourseModal(btn.dataset.year, btn.dataset.term);
        });
    });
    
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            removeCourse(btn.dataset.year, btn.dataset.term, btn.dataset.code);
        });
    });
    
    document.getElementById('student-modal').classList.remove('hidden');
}
