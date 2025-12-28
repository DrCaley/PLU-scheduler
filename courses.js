// Sample course catalog - would be loaded from PDF/database in production
const COURSES = [
    // Computer Science
    { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4, prereqs: [] },
    { code: 'CSCI 145', title: 'Computer Science II', credits: 4, prereqs: ['CSCI 144'] },
    { code: 'CSCI 231', title: 'Data Structures', credits: 4, prereqs: ['CSCI 145'] },
    { code: 'CSCI 270', title: 'Algorithms', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 280', title: 'Database Systems', credits: 4, prereqs: ['CSCI 145'] },
    { code: 'CSCI 330', title: 'Introduction to AI', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 331', title: 'Operating Systems', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 343', title: 'Programming Languages', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 360', title: 'Software Engineering', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 390', title: 'Objects and Design', credits: 4, prereqs: ['CSCI 231'] },
    { code: 'CSCI 487', title: 'Robotic Agents', credits: 4, prereqs: ['CSCI 330'] },
    { code: 'CSCI 491', title: 'Senior Seminar I', credits: 2, prereqs: [] },
    { code: 'CSCI 492', title: 'Senior Seminar II', credits: 2, prereqs: ['CSCI 491'] },
    { code: 'CSCI 499A', title: 'Independent Study', credits: 4, prereqs: [] },
    { code: 'CSCI 499B', title: 'Independent Study', credits: 4, prereqs: [] },
    
    // Mathematics
    { code: 'MATH 140', title: 'Calculus I', credits: 4, prereqs: [] },
    { code: 'MATH 151', title: 'Calculus II', credits: 4, prereqs: ['MATH 140'] },
    { code: 'MATH 152', title: 'Calculus III', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 242', title: 'Intro to Math Stats', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 245', title: 'Discrete Mathematics', credits: 4, prereqs: ['MATH 140'] },
    { code: 'MATH 253', title: 'Linear Algebra', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 331', title: 'Abstract Algebra', credits: 4, prereqs: ['MATH 253'] },
    
    // Data Science
    { code: 'DATA 133', title: 'Intro to Data Science', credits: 4, prereqs: [] },
    { code: 'DATA 233', title: 'Data Visualization', credits: 4, prereqs: ['DATA 133'] },
    
    // Statistics
    { code: 'STAT 231', title: 'Intro to Statistics', credits: 4, prereqs: [] },
    
    // Biology
    { code: 'BIOL 161', title: 'Introductory Biology I', credits: 4, prereqs: [] },
    { code: 'BIOL 162', title: 'Introductory Biology II', credits: 4, prereqs: ['BIOL 161'] },
    { code: 'BIOL 225', title: 'Cell Biology', credits: 4, prereqs: ['BIOL 161'] },
    { code: 'BIOL 226', title: 'Genetics', credits: 4, prereqs: ['BIOL 161'] },
    
    // Chemistry
    { code: 'CHEM 115', title: 'General Chemistry I', credits: 4, prereqs: [] },
    { code: 'CHEM 116', title: 'General Chemistry II', credits: 4, prereqs: ['CHEM 115'] },
    
    // Physics
    { code: 'PHYS 153', title: 'General Physics I', credits: 4, prereqs: ['MATH 140'] },
    { code: 'PHYS 154', title: 'General Physics II', credits: 4, prereqs: ['PHYS 153'] },
    
    // Writing
    { code: 'WRIT 101', title: 'College Writing', credits: 4, prereqs: [] },
    
    // English
    { code: 'ENGL 101', title: 'Intro to Literature', credits: 4, prereqs: [] },
    { code: 'ENGL 235', title: 'Literary Theory', credits: 4, prereqs: [] },
    
    // Religion
    { code: 'RELI 101', title: 'Intro to Religion', credits: 4, prereqs: [] },
    { code: 'RELI 230', title: 'World Religions', credits: 4, prereqs: [] },
    { code: 'RELI 364', title: 'Religion and Culture', credits: 4, prereqs: [] },
    
    // History
    { code: 'HIST 101', title: 'World History I', credits: 4, prereqs: [] },
    { code: 'HIST 102', title: 'World History II', credits: 4, prereqs: [] },
    
    // Psychology
    { code: 'PSYC 101', title: 'Introduction to Psychology', credits: 4, prereqs: [] },
    
    // Sociology
    { code: 'SOCI 101', title: 'Introduction to Sociology', credits: 4, prereqs: [] },
    
    // Social Work
    { code: 'SOCW 250', title: 'Intro to Social Work', credits: 4, prereqs: [] },
    
    // Philosophy
    { code: 'PHIL 101', title: 'Introduction to Philosophy', credits: 4, prereqs: [] },
    
    // Art
    { code: 'ART 101', title: 'Intro to Art', credits: 4, prereqs: [] },
    { code: 'ARTD 101', title: 'Drawing I', credits: 4, prereqs: [] },
    
    // Physical Education
    { code: 'PHED 100', title: 'Fitness and Wellness', credits: 1, prereqs: [] },
    { code: 'PHED 164', title: 'Weight Training', credits: 1, prereqs: [] },
    { code: 'PE 100', title: 'Low Impact Aerobics', credits: 1, prereqs: [] },
    
    // Anthropology
    { code: 'ANTH 101', title: 'Intro to Anthropology', credits: 4, prereqs: [] },
    { code: 'ANTH 102', title: 'Human Culture Diversity', credits: 4, prereqs: [] },
];

// Get course by code
function getCourse(code) {
    return COURSES.find(c => c.code === code);
}

// Search courses
function searchCourses(query) {
    const q = query.toLowerCase();
    return COURSES.filter(c => 
        c.code.toLowerCase().includes(q) || 
        c.title.toLowerCase().includes(q)
    ).slice(0, 10);
}
