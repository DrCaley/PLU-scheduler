// Sample course catalog - would be loaded from PDF/database in production
const COURSES = [
    // Computer Science (official PLU catalog 2025-2026)
    { code: 'CSCI 115', title: 'Solve It With the Computer', credits: 4, prereqs: [] },
    { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4, prereqs: [] },
    { code: 'CSCI 270', title: 'Data Structures', credits: 4, prereqs: ['CSCI 144'] },
    { code: 'CSCI 287', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 288', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 289', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 291', title: 'Directed Studies', credits: 1, prereqs: [] },
    { code: 'CSCI 302', title: 'Computer Organization', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 313', title: 'Artificial Intelligence with Applications in Games', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 330', title: 'Introduction to Machine Learning', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 333', title: 'Introduction to Bioinformatics', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 343', title: 'Programming Language Concepts', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 367', title: 'Databases and Web Programming', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 371', title: 'Design and Analysis of Algorithms', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 386', title: 'Computer Networks', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 387', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 388', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 389', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 390', title: 'Objects and Design', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 391', title: 'Problem Solving and Programming Seminar', credits: 1, prereqs: ['CSCI 270'] },
    { code: 'CSCI 412', title: 'Computer Graphics', credits: 4, prereqs: ['CSCI 270'] },
    { code: 'CSCI 444', title: 'Operating Systems', credits: 4, prereqs: ['CSCI 302'] },
    { code: 'CSCI 487', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 488', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 489', title: 'Special Topics in Computer Science', credits: 1, prereqs: [] },
    { code: 'CSCI 491', title: 'Independent Studies', credits: 1, prereqs: [] },
    { code: 'CSCI 495', title: 'Computer Science Internship', credits: 1, prereqs: [] },
    { code: 'CSCI 499A', title: 'Capstone: Senior Seminar - SR', credits: 2, prereqs: [] },
    { code: 'CSCI 499B', title: 'Capstone: Senior Seminar - SR', credits: 2, prereqs: ['CSCI 499A'] },
    
    // Mathematics (official PLU catalog 2025-2026)
    { code: 'MATH 105', title: 'Mathematics of Personal Finance', credits: 4, prereqs: [] },
    { code: 'MATH 107', title: 'Mathematical Explorations', credits: 4, prereqs: [] },
    { code: 'MATH 115', title: 'College Algebra and Trigonometry', credits: 4, prereqs: [] },
    { code: 'MATH 123', title: 'Modern Elementary Mathematics I: Number Sense and Algebraic Sense', credits: 4, prereqs: [] },
    { code: 'MATH 124', title: 'Modern Elementary Mathematics II: Measurement, Geometric Sense, Statistics and Probability', credits: 4, prereqs: ['MATH 123'] },
    { code: 'MATH 128', title: 'Linear Models and Calculus: An Introduction', credits: 4, prereqs: [] },
    { code: 'MATH 140', title: 'Precalculus', credits: 4, prereqs: ['MATH 115'] },
    { code: 'MATH 145', title: 'Statistics for Biologists', credits: 4, prereqs: ['MATH 140'] },
    { code: 'MATH 151', title: 'Calculus I', credits: 4, prereqs: ['MATH 140'] },
    { code: 'MATH 152', title: 'Calculus II', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 245', title: 'Discrete Structures', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4, prereqs: ['MATH 152'] },
    { code: 'MATH 317', title: 'Introduction to Proofs: Number Theory', credits: 4, prereqs: ['MATH 152'] },
    { code: 'MATH 318', title: 'Introduction to Proofs: Combinatorics', credits: 4, prereqs: ['MATH 152'] },
    { code: 'MATH 319', title: 'Introduction to Proofs: Geometry', credits: 4, prereqs: ['MATH 152'] },
    { code: 'MATH 331', title: 'Linear Algebra', credits: 4, prereqs: ['MATH 253'] },
    { code: 'MATH 342', title: 'Probability and Statistical Theory', credits: 4, prereqs: ['MATH 152', 'MATH 242'] },
    { code: 'MATH 348', title: 'Statistical Computing and Consulting', credits: 4, prereqs: ['MATH 151'] },
    { code: 'MATH 351', title: 'Differential Equations', credits: 4, prereqs: ['MATH 253'] },
    { code: 'MATH 356', title: 'Numerical Analysis', credits: 4, prereqs: ['MATH 152', 'CSCI 144'] },
    { code: 'MATH 381', title: 'Seminar in Problem Solving', credits: 1, prereqs: [] },
    { code: 'MATH 422', title: 'Mathematical Modeling', credits: 4, prereqs: ['MATH 253'] },
    { code: 'MATH 433', title: 'Abstract Algebra', credits: 4, prereqs: ['MATH 331'] },
    { code: 'MATH 442', title: 'Statistical Modeling', credits: 4, prereqs: ['MATH 331', 'MATH 242'] },
    { code: 'MATH 446', title: 'Mathematics in the Secondary School', credits: 4, prereqs: ['MATH 253'] },
    { code: 'MATH 455', title: 'Mathematical Analysis', credits: 4, prereqs: ['MATH 253', 'MATH 331'] },
    { code: 'MATH 499A', title: 'Capstone: Senior Seminar I', credits: 2, prereqs: ['MATH 331'] },
    { code: 'MATH 499B', title: 'Capstone: Senior Seminar II', credits: 2, prereqs: ['MATH 499A'] },
    
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
    
    // Physics (official PLU catalog 2025-2026)
    { code: 'PHYS 110', title: 'Astronomy', credits: 4, prereqs: ['MATH 115'] },
    { code: 'PHYS 125', title: 'College Physics I', credits: 4, prereqs: ['MATH 128'] },
    { code: 'PHYS 126', title: 'College Physics II', credits: 4, prereqs: ['PHYS 125'] },
    { code: 'PHYS 135', title: 'College Physics I Laboratory', credits: 1, prereqs: ['PHYS 125'] },
    { code: 'PHYS 136', title: 'College Physics II Laboratory', credits: 1, prereqs: ['PHYS 126'] },
    { code: 'PHYS 153', title: 'General Physics I', credits: 4, prereqs: ['MATH 151'] },
    { code: 'PHYS 154', title: 'General Physics II', credits: 4, prereqs: ['MATH 152', 'PHYS 153'] },
    { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1, prereqs: ['PHYS 153'] },
    { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1, prereqs: ['PHYS 154'] },
    { code: 'PHYS 223', title: 'Elementary Modern Physics', credits: 4, prereqs: ['PHYS 154', 'MATH 253'] },
    { code: 'PHYS 310', title: 'Methods of Experimental Physics', credits: 4, prereqs: ['PHYS 154'] },
    { code: 'PHYS 331', title: 'Electromagnetic Theory', credits: 4, prereqs: ['PHYS 154', 'MATH 253'] },
    { code: 'PHYS 332', title: 'Electromagnetic Waves and Physical Optics', credits: 4, prereqs: ['PHYS 331'] },
    { code: 'PHYS 336', title: 'Classical Mechanics', credits: 4, prereqs: ['PHYS 154', 'MATH 253'] },
    { code: 'PHYS 354', title: 'Mathematical Physics', credits: 4, prereqs: ['MATH 253'] },
    { code: 'PHYS 401', title: 'Introduction to Quantum Mechanics', credits: 4, prereqs: ['PHYS 223', 'PHYS 354'] },
    { code: 'PHYS 499A', title: 'Capstone: Senior Seminar I', credits: 1, prereqs: ['PHYS 223'] },
    { code: 'PHYS 499B', title: 'Capstone: Senior Seminar II', credits: 1, prereqs: ['PHYS 499A'] },
    
    // Engineering (official PLU catalog 2025-2026)
    { code: 'ENGR 131', title: 'Introduction to Engineering', credits: 2, prereqs: [] },
    { code: 'ENGR 240', title: 'Engineering Statics', credits: 4, prereqs: ['PHYS 153'] },
    { code: 'ENGR 333', title: 'Engineering Thermodynamics', credits: 4, prereqs: ['PHYS 153'] },
    { code: 'ENGR 334', title: 'Engineering Materials Science', credits: 4, prereqs: ['PHYS 154', 'CHEM 115'] },
    { code: 'ENGR 355', title: 'Electrical Circuits', credits: 4, prereqs: ['MATH 151', 'PHYS 154'] },
    
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
