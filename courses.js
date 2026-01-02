// Sample course catalog - would be loaded from PDF/database in production
const COURSES = [
    // Generic GenEd Placeholders (for planning before selecting specific courses)
    { code: 'FW', title: 'First-Year Writing Requirement', credits: 4, prereqs: [], genEd: ['FW'], isPlaceholder: true },
    { code: 'FD', title: 'First-Year Diversity Requirement', credits: 4, prereqs: [], genEd: ['FD'], isPlaceholder: true },
    { code: 'RL', title: 'Academic Study of Religion Requirement', credits: 4, prereqs: [], genEd: ['RL'], isPlaceholder: true },
    { code: 'FT', title: 'Fitness & Wellness Requirement', credits: 2, prereqs: [], genEd: ['FT'], isPlaceholder: true },
    { code: 'GE', title: 'Global Engagement Requirement', credits: 4, prereqs: [], genEd: ['GE'], isPlaceholder: true },
    { code: 'CX', title: 'Creative Expression Requirement', credits: 4, prereqs: [], genEd: ['CX'], isPlaceholder: true },
    { code: 'NW', title: 'Engaging Natural World Requirement', credits: 4, prereqs: [], genEd: ['NW'], isPlaceholder: true },
    { code: 'IT', title: 'Interpreting Text Requirement', credits: 4, prereqs: [], genEd: ['IT'], isPlaceholder: true },
    { code: 'ES', title: 'Examining Self & Society Requirement', credits: 4, prereqs: [], genEd: ['ES'], isPlaceholder: true },
    { code: 'VW', title: 'Exploring Values & Worldviews Requirement', credits: 4, prereqs: [], genEd: ['VW'], isPlaceholder: true },
    { code: 'QR', title: 'Quantitative Reasoning Requirement', credits: 4, prereqs: [], genEd: ['QR'], isPlaceholder: true },
    { code: 'SR', title: 'Senior Culminating Experience', credits: 2, prereqs: [], genEd: ['SR'], isPlaceholder: true },
    
    // Combined GenEd Placeholders (courses that satisfy multiple requirements)
    { code: 'NW+GE', title: 'Natural World + Global Engagement', credits: 4, prereqs: [], genEd: ['NW', 'GE'], isPlaceholder: true },
    { code: 'IT+GE', title: 'Interpreting Text + Global Engagement', credits: 4, prereqs: [], genEd: ['IT', 'GE'], isPlaceholder: true },
    { code: 'ES+GE', title: 'Examining Self & Society + Global Engagement', credits: 4, prereqs: [], genEd: ['ES', 'GE'], isPlaceholder: true },
    { code: 'VW+GE', title: 'Values & Worldviews + Global Engagement', credits: 4, prereqs: [], genEd: ['VW', 'GE'], isPlaceholder: true },
    { code: 'CX+GE', title: 'Creative Expression + Global Engagement', credits: 4, prereqs: [], genEd: ['CX', 'GE'], isPlaceholder: true },
    { code: 'RL+GE', title: 'Religion + Global Engagement', credits: 4, prereqs: [], genEd: ['RL', 'GE'], isPlaceholder: true },
    { code: 'IT+VW', title: 'Interpreting Text + Values & Worldviews', credits: 4, prereqs: [], genEd: ['IT', 'VW'], isPlaceholder: true },
    { code: 'ES+VW', title: 'Examining Self & Society + Values & Worldviews', credits: 4, prereqs: [], genEd: ['ES', 'VW'], isPlaceholder: true },
    { code: 'CX+IT', title: 'Creative Expression + Interpreting Text', credits: 4, prereqs: [], genEd: ['CX', 'IT'], isPlaceholder: true },
    { code: 'NW+QR', title: 'Natural World + Quantitative Reasoning', credits: 4, prereqs: [], genEd: ['NW', 'QR'], isPlaceholder: true },
    
    // First-Year Experience Program (FYEP)
    { code: 'FYEP 101', title: 'First-Year Writing - FW', credits: 4, prereqs: [], genEd: ['FW'] },
    { code: 'FYEP 102', title: 'First-Year Diversity - FD', credits: 4, prereqs: [], genEd: ['FD'] },
    
    // PLU Seminar
    { code: 'PLUS 100', title: 'PLU Seminar', credits: 1, prereqs: [], genEd: ['PLUS'] },
    
    // Fitness and Wellness (FTWL)
    { code: 'FTWL 100', title: 'Fitness and Wellness', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 101', title: 'Aerobics', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 102', title: 'Badminton', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 103', title: 'Baseball/Softball', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 104', title: 'Basketball', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 105', title: 'Bowling', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 106', title: 'Fitness Swimming', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 107', title: 'Golf', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 108', title: 'Pickleball', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 109', title: 'Racquetball', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 110', title: 'Soccer', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 111', title: 'Tennis', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 112', title: 'Volleyball', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 113', title: 'Weight Training', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 114', title: 'Yoga', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 115', title: 'Dance Fitness', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 116', title: 'Running', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 117', title: 'Outdoor Activities', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 118', title: 'Cycling', credits: 1, prereqs: [], genEd: ['FT'] },
    { code: 'FTWL 119', title: 'Self-Defense', credits: 1, prereqs: [], genEd: ['FT'] },
    
    // Religion (RELI) - RL attribute
    { code: 'RELI 101', title: 'Intro to Religion - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 103', title: 'Introduction to the Bible - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 131', title: 'World Religions - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 201', title: 'Hebrew Bible - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 202', title: 'New Testament - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 203', title: 'History of Christianity - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 210', title: 'Judaism - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 215', title: 'Islam - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 220', title: 'Buddhism - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 225', title: 'Hinduism - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 230', title: 'World Religions - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 240', title: 'Religion and Science - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 255', title: 'Religion in America - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 260', title: 'Theology and Ethics - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    { code: 'RELI 364', title: 'Religion and Culture - RL', credits: 4, prereqs: [], genEd: ['RL'] },
    
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
    
    // Mathematics (official PLU catalog 2025-2026) - many satisfy QR
    { code: 'MATH 105', title: 'Mathematics of Personal Finance - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    { code: 'MATH 107', title: 'Mathematical Explorations - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    { code: 'MATH 115', title: 'College Algebra and Trigonometry - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    { code: 'MATH 123', title: 'Modern Elementary Mathematics I - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    { code: 'MATH 124', title: 'Modern Elementary Mathematics II - QR', credits: 4, prereqs: ['MATH 123'], genEd: ['QR'] },
    { code: 'MATH 128', title: 'Linear Models and Calculus - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    { code: 'MATH 140', title: 'Precalculus - QR', credits: 4, prereqs: ['MATH 115'], genEd: ['QR'] },
    { code: 'MATH 145', title: 'Statistics for Biologists - QR', credits: 4, prereqs: ['MATH 140'], genEd: ['QR'] },
    { code: 'MATH 151', title: 'Calculus I - QR', credits: 4, prereqs: ['MATH 140'], genEd: ['QR'] },
    { code: 'MATH 152', title: 'Calculus II - QR', credits: 4, prereqs: ['MATH 151'], genEd: ['QR'] },
    { code: 'MATH 242', title: 'Introduction to Mathematical Statistics - QR', credits: 4, prereqs: ['MATH 151'], genEd: ['QR'] },
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
    
    // Statistics (QR - Quantitative Reasoning)
    { code: 'STAT 231', title: 'Intro to Statistics - QR', credits: 4, prereqs: [], genEd: ['QR'] },
    
    // Biology (NW - Engaging Natural World)
    { code: 'BIOL 161', title: 'Introductory Biology I - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    { code: 'BIOL 162', title: 'Introductory Biology II - NW', credits: 4, prereqs: ['BIOL 161'], genEd: ['NW'] },
    { code: 'BIOL 225', title: 'Cell Biology', credits: 4, prereqs: ['BIOL 161'] },
    { code: 'BIOL 226', title: 'Genetics', credits: 4, prereqs: ['BIOL 161'] },
    
    // Chemistry (NW - Engaging Natural World)
    { code: 'CHEM 115', title: 'General Chemistry I - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    { code: 'CHEM 116', title: 'General Chemistry II - NW', credits: 4, prereqs: ['CHEM 115'], genEd: ['NW'] },
    
    // Physics (official PLU catalog 2025-2026) (NW - Engaging Natural World)
    { code: 'PHYS 110', title: 'Astronomy - NW', credits: 4, prereqs: ['MATH 115'], genEd: ['NW'] },
    { code: 'PHYS 125', title: 'College Physics I - NW', credits: 4, prereqs: ['MATH 128'], genEd: ['NW'] },
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
    
    // English (IT - Interpreting Text)
    { code: 'ENGL 101', title: 'Intro to Literature - IT', credits: 4, prereqs: [], genEd: ['IT'] },
    { code: 'ENGL 201', title: 'American Literature - IT', credits: 4, prereqs: [], genEd: ['IT'] },
    { code: 'ENGL 202', title: 'British Literature - IT', credits: 4, prereqs: [], genEd: ['IT'] },
    { code: 'ENGL 210', title: 'World Literature - IT, GE', credits: 4, prereqs: [], genEd: ['IT', 'GE'] },
    { code: 'ENGL 235', title: 'Literary Theory - IT', credits: 4, prereqs: [], genEd: ['IT'] },
    
    // History (ES - Examining Self and Society)
    { code: 'HIST 101', title: 'World History I - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    { code: 'HIST 102', title: 'World History II - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    { code: 'HIST 201', title: 'U.S. History I - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    { code: 'HIST 202', title: 'U.S. History II - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    
    // Psychology (ES - Examining Self and Society)
    { code: 'PSYC 101', title: 'Introduction to Psychology - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    
    // Sociology (ES - Examining Self and Society)
    { code: 'SOCI 101', title: 'Introduction to Sociology - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    
    // Social Work
    { code: 'SOCW 250', title: 'Intro to Social Work', credits: 4, prereqs: [] },
    
    // Philosophy (VW - Exploring Values and Worldviews)
    { code: 'PHIL 101', title: 'Introduction to Philosophy - VW', credits: 4, prereqs: [], genEd: ['VW'] },
    { code: 'PHIL 111', title: 'Logic - VW', credits: 4, prereqs: [], genEd: ['VW'] },
    { code: 'PHIL 250', title: 'Ethics - VW', credits: 4, prereqs: [], genEd: ['VW'] },
    { code: 'PHIL 260', title: 'Political Philosophy - VW', credits: 4, prereqs: [], genEd: ['VW'] },
    
    // Art (CX - Creative Expression)
    { code: 'ART 101', title: 'Intro to Art - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 101', title: 'Drawing I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 105', title: 'Painting I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 115', title: 'Photography I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 120', title: 'Ceramics I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 125', title: 'Sculpture I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'ARTD 135', title: 'Printmaking I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    
    // Music (CX - Creative Expression)
    { code: 'MUSI 101', title: 'Introduction to Music - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'MUSI 115', title: 'Music Theory I', credits: 4, prereqs: [] },
    { code: 'MUSI 121', title: 'Class Piano I', credits: 2, prereqs: [] },
    { code: 'MUSI 131', title: 'Class Voice I', credits: 2, prereqs: [] },
    
    // Theatre (CX - Creative Expression)
    { code: 'THEA 101', title: 'Introduction to Theatre - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    { code: 'THEA 115', title: 'Acting I - CX', credits: 4, prereqs: [], genEd: ['CX'] },
    
    // Communication
    { code: 'COMA 101', title: 'Fundamentals of Public Speaking', credits: 4, prereqs: [] },
    { code: 'COMA 201', title: 'Interpersonal Communication - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    
    // Anthropology (ES - Examining Self and Society)
    { code: 'ANTH 101', title: 'Intro to Anthropology - ES', credits: 4, prereqs: [], genEd: ['ES'] },
    { code: 'ANTH 102', title: 'Human Culture Diversity - ES, GE', credits: 4, prereqs: [], genEd: ['ES', 'GE'] },
    
    // Global Studies (GE - Global Engagement)
    { code: 'GLST 101', title: 'Introduction to Global Studies - GE', credits: 4, prereqs: [], genEd: ['GE'] },
    { code: 'GLST 201', title: 'Global Issues - GE', credits: 4, prereqs: [], genEd: ['GE'] },
    
    // Environmental Studies (NW - Engaging Natural World)
    { code: 'ENVT 101', title: 'Introduction to Environmental Studies - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    { code: 'ENVT 201', title: 'Environmental Science - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    
    // Geosciences (NW - Engaging Natural World)
    { code: 'GEOS 101', title: 'Physical Geology - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    { code: 'GEOS 102', title: 'Historical Geology - NW', credits: 4, prereqs: ['GEOS 101'], genEd: ['NW'] },
    { code: 'GEOS 110', title: 'Oceanography - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    { code: 'GEOS 120', title: 'Weather and Climate - NW', credits: 4, prereqs: [], genEd: ['NW'] },
    
    // Languages (GE - Global Engagement)
    { code: 'SPAN 101', title: 'Elementary Spanish I', credits: 4, prereqs: [] },
    { code: 'SPAN 102', title: 'Elementary Spanish II', credits: 4, prereqs: ['SPAN 101'] },
    { code: 'SPAN 201', title: 'Intermediate Spanish I', credits: 4, prereqs: ['SPAN 102'] },
    { code: 'SPAN 202', title: 'Intermediate Spanish II - GE', credits: 4, prereqs: ['SPAN 201'], genEd: ['GE'] },
    { code: 'FREN 101', title: 'Elementary French I', credits: 4, prereqs: [] },
    { code: 'FREN 102', title: 'Elementary French II', credits: 4, prereqs: ['FREN 101'] },
    { code: 'FREN 201', title: 'Intermediate French I', credits: 4, prereqs: ['FREN 102'] },
    { code: 'FREN 202', title: 'Intermediate French II - GE', credits: 4, prereqs: ['FREN 201'], genEd: ['GE'] },
    { code: 'GERM 101', title: 'Elementary German I', credits: 4, prereqs: [] },
    { code: 'GERM 102', title: 'Elementary German II', credits: 4, prereqs: ['GERM 101'] },
    { code: 'GERM 201', title: 'Intermediate German I', credits: 4, prereqs: ['GERM 102'] },
    { code: 'GERM 202', title: 'Intermediate German II - GE', credits: 4, prereqs: ['GERM 201'], genEd: ['GE'] },
    { code: 'CHIN 101', title: 'Elementary Chinese I', credits: 4, prereqs: [] },
    { code: 'CHIN 102', title: 'Elementary Chinese II', credits: 4, prereqs: ['CHIN 101'] },
    { code: 'CHIN 201', title: 'Intermediate Chinese I', credits: 4, prereqs: ['CHIN 102'] },
    { code: 'CHIN 202', title: 'Intermediate Chinese II - GE', credits: 4, prereqs: ['CHIN 201'], genEd: ['GE'] },
    { code: 'JAPN 101', title: 'Elementary Japanese I', credits: 4, prereqs: [] },
    { code: 'JAPN 102', title: 'Elementary Japanese II', credits: 4, prereqs: ['JAPN 101'] },
    { code: 'JAPN 201', title: 'Intermediate Japanese I', credits: 4, prereqs: ['JAPN 102'] },
    { code: 'JAPN 202', title: 'Intermediate Japanese II - GE', credits: 4, prereqs: ['JAPN 201'], genEd: ['GE'] },
    { code: 'NORW 101', title: 'Elementary Norwegian I', credits: 4, prereqs: [] },
    { code: 'NORW 102', title: 'Elementary Norwegian II', credits: 4, prereqs: ['NORW 101'] },
    { code: 'NORW 201', title: 'Intermediate Norwegian I', credits: 4, prereqs: ['NORW 102'] },
    { code: 'NORW 202', title: 'Intermediate Norwegian II - GE', credits: 4, prereqs: ['NORW 201'], genEd: ['GE'] },
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
