// PLU Major and Minor Requirements (2025-2026 Catalog)
// Official data scraped from PLU catalog

const REQUIREMENTS = {
    majors: {
        // ==================== COMPUTER SCIENCE ====================
        'Computer Science (B.A.)': {
            name: 'Computer Science (B.A.)',
            totalCredits: 44,
            required: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 },
                { code: 'CSCI 270', title: 'Data Structures', credits: 4 },
                { code: 'CSCI 371', title: 'Design and Analysis of Algorithms', credits: 4 },
                { code: 'CSCI 499A', title: 'Capstone: Senior Seminar', credits: 2 },
                { code: 'CSCI 499B', title: 'Capstone: Senior Seminar', credits: 2 }
            ],
            electivesChoice: {
                description: 'One of CSCI 367 or CSCI 390',
                count: 1,
                credits: 4,
                options: ['CSCI 367', 'CSCI 390']
            },
            electives: {
                description: '12 additional hours from CSCI courses above 300',
                count: 3,
                credits: 12,
                options: ['CSCI 302', 'CSCI 313', 'CSCI 330', 'CSCI 333', 'CSCI 343', 'CSCI 367', 'CSCI 386', 'CSCI 390', 'CSCI 412', 'CSCI 444']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 245', title: 'Discrete Structures', credits: 4 }
            ]
        },
        'Computer Science (B.S.)': {
            name: 'Computer Science (B.S.)',
            totalCredits: 70,
            required: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 },
                { code: 'CSCI 270', title: 'Data Structures', credits: 4 },
                { code: 'CSCI 302', title: 'Computer Organization', credits: 4 },
                { code: 'CSCI 343', title: 'Programming Language Concepts', credits: 4 },
                { code: 'CSCI 371', title: 'Design and Analysis of Algorithms', credits: 4 },
                { code: 'CSCI 390', title: 'Objects and Design', credits: 4 },
                { code: 'CSCI 444', title: 'Operating Systems', credits: 4 },
                { code: 'CSCI 499A', title: 'Capstone: Senior Seminar', credits: 2 },
                { code: 'CSCI 499B', title: 'Capstone: Senior Seminar', credits: 2 }
            ],
            electives: {
                description: '12 additional hours from CSCI courses above 300 or MATH 356',
                count: 3,
                credits: 12,
                options: ['CSCI 313', 'CSCI 330', 'CSCI 333', 'CSCI 367', 'CSCI 386', 'CSCI 412', 'MATH 356']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 245', title: 'Discrete Structures', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 }
            ],
            labScience: {
                description: "8-10 hours of a year's sequence of lab science (choose one option)",
                options: [
                    { name: 'Physics (College)', courses: ['PHYS 125', 'PHYS 126', 'PHYS 135', 'PHYS 136'] },
                    { name: 'Physics (General)', courses: ['PHYS 153', 'PHYS 154', 'PHYS 163', 'PHYS 164'] },
                    { name: 'Chemistry', courses: ['CHEM 115', 'CHEM 116'] },
                    { name: 'Biology', courses: ['BIOL 225', 'BIOL 226'] },
                    { name: 'Earth Science', courses: ['ESCI 102', 'ESCI 201'] }
                ]
            }
        },
        
        // ==================== MATHEMATICS ====================
        'Mathematics (B.A.)': {
            name: 'Mathematics (B.A.)',
            totalCredits: 36,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 },
                { code: 'MATH 433', title: 'Abstract Algebra', credits: 4 },
                { code: 'MATH 455', title: 'Mathematical Analysis', credits: 4 },
                { code: 'MATH 499A', title: 'Capstone: Senior Seminar I', credits: 2 },
                { code: 'MATH 499B', title: 'Capstone: Senior Seminar II', credits: 2 }
            ],
            electivesChoice: {
                description: 'One Introduction to Proofs course (MATH 317, 318, or 319)',
                count: 1,
                credits: 4,
                options: ['MATH 317', 'MATH 318', 'MATH 319']
            },
            supporting: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 }
            ],
            recommended: {
                description: 'Strongly recommended (not required): one course from CSCI 371, ECON 344, or PHYS 153',
                options: ['CSCI 371', 'ECON 344', 'PHYS 153']
            }
        },
        'Mathematics (B.S.)': {
            name: 'Mathematics (B.S.)',
            totalCredits: 49,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 },
                { code: 'MATH 433', title: 'Abstract Algebra', credits: 4 },
                { code: 'MATH 455', title: 'Mathematical Analysis', credits: 4 },
                { code: 'MATH 499A', title: 'Capstone: Senior Seminar I', credits: 2 },
                { code: 'MATH 499B', title: 'Capstone: Senior Seminar II', credits: 2 }
            ],
            electivesChoice: {
                description: 'One Introduction to Proofs course (MATH 317, 318, or 319)',
                count: 1,
                credits: 4,
                options: ['MATH 317', 'MATH 318', 'MATH 319']
            },
            electives: {
                description: '8 additional hours from upper-division MATH (at most one more from 317/318/319)',
                count: 2,
                credits: 8,
                options: ['MATH 317', 'MATH 318', 'MATH 319', 'MATH 342', 'MATH 348', 'MATH 351', 'MATH 356', 'MATH 381', 'MATH 422', 'MATH 480', 'PHYS 354']
            },
            supporting: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 }
            ],
            supportingChoice: {
                description: 'One required supporting course from: CSCI 371, ECON 344, or PHYS 153/163',
                count: 1,
                credits: 4,
                options: ['CSCI 371', 'ECON 344', 'PHYS 153']
            }
        },
        'Applied Mathematics (B.S.)': {
            name: 'Applied Mathematics (B.S.)',
            totalCredits: 48,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'MATH 318', title: 'Introduction to Proofs: Combinatorics', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 },
                { code: 'MATH 422', title: 'Mathematical Modeling', credits: 4 },
                { code: 'MATH 499A', title: 'Capstone: Senior Seminar I', credits: 2 },
                { code: 'MATH 499B', title: 'Capstone: Senior Seminar II', credits: 2 }
            ],
            electivesChoice: {
                description: 'One statistics course',
                count: 1,
                credits: 4,
                options: ['STAT 145', 'STAT 231', 'MATH 242']
            },
            electives: {
                description: '12 hours of electives (8 must be MATH/STAT)',
                count: 3,
                credits: 12,
                options: ['MATH 342', 'MATH 348', 'MATH 351', 'MATH 356', 'MATH 433', 'MATH 455', 'CSCI 330', 'CSCI 367', 'CSCI 371', 'CHEM 341', 'ECON 301', 'ECON 344', 'PHYS 331', 'PHYS 401', 'PHYS 354']
            },
            supporting: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 }
            ],
            supportingChoice: {
                description: 'One additional supporting course',
                count: 1,
                credits: 4,
                options: ['CHEM 115', 'CSCI 270', 'ECON 101', 'PHYS 153']
            }
        },
        'Mathematics Education (B.S.)': {
            name: 'Mathematics Education (B.S.)',
            totalCredits: 48,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'MATH 319', title: 'Introduction to Proofs: Geometry', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 },
                { code: 'MATH 433', title: 'Abstract Algebra', credits: 4 },
                { code: 'MATH 446', title: 'Mathematics in the Secondary School', credits: 4 },
                { code: 'MATH 499A', title: 'Capstone: Senior Seminar I', credits: 2 },
                { code: 'MATH 499B', title: 'Capstone: Senior Seminar II', credits: 2 }
            ],
            electivesChoice: {
                description: 'One Introduction to Proofs course (317 or 318)',
                count: 1,
                credits: 4,
                options: ['MATH 317', 'MATH 318']
            },
            supporting: [
                { code: 'EDUC 205', title: 'Introduction to Education', credits: 4 }
            ],
            supportingChoice: {
                description: 'One lab science course',
                count: 1,
                credits: 4,
                options: ['PHYS 125', 'PHYS 153', 'CHEM 115']
            }
        },
        
        // ==================== PHYSICS ====================
        'Physics (B.A.)': {
            name: 'Physics (B.A.)',
            totalCredits: 48,
            required: [
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 },
                { code: 'PHYS 223', title: 'Elementary Modern Physics', credits: 4 },
                { code: 'PHYS 499A', title: 'Capstone: Senior Seminar I', credits: 1 },
                { code: 'PHYS 499B', title: 'Capstone: Senior Seminar II', credits: 1 }
            ],
            electives: {
                description: 'Three courses from Physics/Engineering',
                count: 3,
                credits: 12,
                options: ['PHYS 310', 'PHYS 331', 'PHYS 336', 'PHYS 401', 'PHYS 354', 'MATH 351', 'ENGR 240', 'ENGR 333', 'ENGR 334', 'ENGR 355']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'ENGR 131', title: 'Introduction to Engineering', credits: 2 }
            ],
            supportingChoice: {
                description: 'CSCI 144 or DATA 133',
                count: 1,
                credits: 4,
                options: ['CSCI 144', 'DATA 133']
            }
        },
        'Physics (B.S.)': {
            name: 'Physics (B.S.)',
            totalCredits: 64,
            required: [
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 },
                { code: 'PHYS 223', title: 'Elementary Modern Physics', credits: 4 },
                { code: 'PHYS 310', title: 'Methods of Experimental Physics', credits: 4 },
                { code: 'PHYS 331', title: 'Electromagnetic Theory', credits: 4 },
                { code: 'PHYS 332', title: 'Electromagnetic Waves and Physical Optics', credits: 4 },
                { code: 'PHYS 336', title: 'Classical Mechanics', credits: 4 },
                { code: 'PHYS 354', title: 'Mathematical Physics', credits: 4 },
                { code: 'PHYS 401', title: 'Introduction to Quantum Mechanics', credits: 4 },
                { code: 'PHYS 499A', title: 'Capstone: Senior Seminar I', credits: 1 },
                { code: 'PHYS 499B', title: 'Capstone: Senior Seminar II', credits: 1 },
                { code: 'ENGR 333', title: 'Engineering Thermodynamics', credits: 4 }
            ],
            supporting: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 }
            ],
            supportingChoice: {
                description: 'DATA 133 or CSCI 144',
                count: 1,
                credits: 4,
                options: ['DATA 133', 'CSCI 144']
            }
        },
        'Applied Physics (B.S.)': {
            name: 'Applied Physics (B.S.)',
            totalCredits: 70,
            required: [
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 },
                { code: 'PHYS 223', title: 'Elementary Modern Physics', credits: 4 },
                { code: 'PHYS 310', title: 'Methods of Experimental Physics', credits: 4 },
                { code: 'PHYS 331', title: 'Electromagnetic Theory', credits: 4 },
                { code: 'PHYS 354', title: 'Mathematical Physics', credits: 4 },
                { code: 'PHYS 499A', title: 'Capstone: Senior Seminar I', credits: 1 },
                { code: 'PHYS 499B', title: 'Capstone: Senior Seminar II', credits: 1 },
                { code: 'ENGR 131', title: 'Introduction to Engineering', credits: 2 },
                { code: 'ENGR 334', title: 'Engineering Materials Science', credits: 4 }
            ],
            electives: {
                description: 'Four courses (one must be upper division)',
                count: 4,
                credits: 16,
                options: ['CSCI 302', 'ENGR 240', 'ENGR 333', 'ENGR 355', 'MATH 331', 'MATH 242', 'PHYS 221', 'PHYS 332', 'PHYS 336', 'PHYS 401', 'MATH 351']
            },
            supporting: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 }
            ],
            supportingChoice: {
                description: 'DATA 133 or CSCI 144',
                count: 1,
                credits: 4,
                options: ['DATA 133', 'CSCI 144']
            }
        },
        
        // ==================== BIOLOGY ====================
        'Biology (B.A.)': {
            name: 'Biology (B.A.)',
            totalCredits: 42,
            required: [
                { code: 'BIOL 225', title: 'Molecules, Cells, and Organisms', credits: 4 },
                { code: 'BIOL 226', title: 'Genes, Evolution, Diversity, and Ecology', credits: 4 },
                { code: 'BIOL 330', title: 'Genetics', credits: 4 },
                { code: 'BIOL 499', title: 'Capstone: Senior Seminar', credits: 2 }
            ],
            electives: {
                description: '20 additional upper-division BIOL hours (one from each category)',
                count: 5,
                credits: 20,
                options: []
            },
            electiveCategories: [
                { name: 'Cellular and Molecular Biology', options: ['BIOL 341', 'BIOL 342', 'BIOL 442', 'BIOL 443', 'BIOL 444', 'BIOL 445', 'BIOL 448', 'BIOL 449'] },
                { name: 'Organism Structure and Function', options: ['BIOL 352', 'BIOL 354', 'BIOL 355', 'BIOL 356', 'BIOL 357', 'BIOL 358', 'BIOL 359', 'BIOL 453'] },
                { name: 'Ecology and Evolution', options: ['BIOL 362', 'BIOL 363', 'BIOL 367', 'BIOL 368', 'BIOL 369', 'BIOL 461', 'BIOL 462'] }
            ],
            supporting: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'MATH 140', title: 'Precalculus', credits: 4 }
            ]
        },
        'Biology (B.S.)': {
            name: 'Biology (B.S.)',
            totalCredits: 69,
            required: [
                { code: 'BIOL 225', title: 'Molecules, Cells, and Organisms', credits: 4 },
                { code: 'BIOL 226', title: 'Genes, Evolution, Diversity, and Ecology', credits: 4 },
                { code: 'BIOL 330', title: 'Genetics', credits: 4 },
                { code: 'BIOL 499', title: 'Capstone: Senior Seminar', credits: 2 }
            ],
            electives: {
                description: '28 additional upper-division BIOL hours (one from each category)',
                count: 7,
                credits: 28,
                options: []
            },
            electiveCategories: [
                { name: 'Cellular and Molecular Biology', options: ['BIOL 341', 'BIOL 342', 'BIOL 442', 'BIOL 443', 'BIOL 444', 'BIOL 445', 'BIOL 448', 'BIOL 449'] },
                { name: 'Organism Structure and Function', options: ['BIOL 352', 'BIOL 354', 'BIOL 355', 'BIOL 356', 'BIOL 357', 'BIOL 358', 'BIOL 359', 'BIOL 453'] },
                { name: 'Ecology and Evolution', options: ['BIOL 362', 'BIOL 363', 'BIOL 367', 'BIOL 368', 'BIOL 369', 'BIOL 461', 'BIOL 462'] }
            ],
            supporting: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 }
            ],
            supportingChoice: {
                description: 'MATH 151 or MATH 145',
                count: 1,
                credits: 4,
                options: ['MATH 151', 'MATH 145']
            },
            labScience: {
                description: 'One year of Physics with lab',
                options: [
                    { name: 'College Physics', courses: ['PHYS 125', 'PHYS 126', 'PHYS 135', 'PHYS 136'] },
                    { name: 'General Physics', courses: ['PHYS 153', 'PHYS 154', 'PHYS 163', 'PHYS 164'] }
                ]
            }
        },
        
        // ==================== CHEMISTRY ====================
        'Chemistry (B.A.)': {
            name: 'Chemistry (B.A.)',
            totalCredits: 51,
            required: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 320', title: 'Analytical Chemistry', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 332', title: 'Organic Chemistry II', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 },
                { code: 'CHEM 341', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 342', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 343', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 499A', title: 'Capstone Seminar I', credits: 1 },
                { code: 'CHEM 499B', title: 'Capstone Seminar II', credits: 1 }
            ],
            electivesChoice: {
                description: 'CHEM 334 or CHEM 336',
                count: 1,
                credits: 1,
                options: ['CHEM 334', 'CHEM 336']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 }
            ]
        },
        'Chemistry (B.S.)': {
            name: 'Chemistry (B.S.)',
            totalCredits: 61,
            required: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 320', title: 'Analytical Chemistry', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 332', title: 'Organic Chemistry II', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 },
                { code: 'CHEM 341', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 342', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 343', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 344', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 410', title: 'Introduction to Research', credits: 2 },
                { code: 'CHEM 420', title: 'Instrumental Analysis', credits: 4 },
                { code: 'CHEM 499A', title: 'Capstone Seminar I', credits: 1 },
                { code: 'CHEM 499B', title: 'Capstone Seminar II', credits: 1 }
            ],
            electivesChoice: {
                description: 'CHEM 334 or CHEM 336',
                count: 1,
                credits: 1,
                options: ['CHEM 334', 'CHEM 336']
            },
            electives: {
                description: 'One upper-division elective',
                count: 1,
                credits: 3,
                options: ['CHEM 405', 'CHEM 450', 'CHEM 456']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 }
            ]
        },
        'Biochemistry (B.S.)': {
            name: 'Biochemistry (B.S.)',
            totalCredits: 72,
            required: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 320', title: 'Analytical Chemistry', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 332', title: 'Organic Chemistry II', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 },
                { code: 'CHEM 341', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 343', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 410', title: 'Introduction to Research', credits: 2 },
                { code: 'CHEM 420', title: 'Instrumental Analysis', credits: 4 },
                { code: 'CHEM 499A', title: 'Capstone Seminar I', credits: 1 },
                { code: 'CHEM 499B', title: 'Capstone Seminar II', credits: 1 },
                { code: 'BIOL 225', title: 'Molecules, Cells, and Organisms', credits: 4 },
                { code: 'BIOL 226', title: 'Genes, Evolution, Diversity, and Ecology', credits: 4 }
            ],
            electivesChoice: {
                description: 'CHEM 334 or CHEM 336',
                count: 1,
                credits: 1,
                options: ['CHEM 334', 'CHEM 336']
            },
            electives: {
                description: 'One elective from CHEM 342 or Biology courses',
                count: 1,
                credits: 4,
                options: ['CHEM 342', 'BIOL 330', 'BIOL 342', 'BIOL 358', 'BIOL 442', 'BIOL 445', 'BIOL 448', 'BIOL 453']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 }
            ]
        },
        'Chemical Physics (B.S.)': {
            name: 'Chemical Physics (B.S.)',
            totalCredits: 74,
            required: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 320', title: 'Analytical Chemistry', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 332', title: 'Organic Chemistry II', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 },
                { code: 'CHEM 341', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 342', title: 'Physical Chemistry', credits: 4 },
                { code: 'CHEM 343', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 344', title: 'Physical Chemistry Laboratory', credits: 1 },
                { code: 'CHEM 410', title: 'Introduction to Research', credits: 2 },
                { code: 'CHEM 499A', title: 'Capstone Seminar I', credits: 1 },
                { code: 'CHEM 499B', title: 'Capstone Seminar II', credits: 1 }
            ],
            electivesChoice: {
                description: 'CHEM 334 or CHEM 336',
                count: 1,
                credits: 1,
                options: ['CHEM 334', 'CHEM 336']
            },
            electives: {
                description: 'Physics electives (4 + 12 credits)',
                count: 4,
                credits: 16,
                options: ['PHYS 354', 'MATH 331', 'MATH 351', 'CHEM 420', 'PHYS 310', 'PHYS 331', 'PHYS 332', 'PHYS 336']
            },
            supporting: [
                { code: 'MATH 151', title: 'Calculus I', credits: 4 },
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 253', title: 'Multivariable Calculus', credits: 4 },
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 }
            ]
        },
        
        // ==================== DATA SCIENCE ====================
        'Data Science (B.S.)': {
            name: 'Data Science (B.S.)',
            totalCredits: 64,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 },
                { code: 'MATH 331', title: 'Linear Algebra', credits: 4 },
                { code: 'MATH 242', title: 'Introduction to Mathematical Statistics', credits: 4 },
                { code: 'MATH 348', title: 'Statistical Computing and Consulting', credits: 4 },
                { code: 'MATH 442', title: 'Statistical Modeling', credits: 4 },
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 },
                { code: 'CSCI 270', title: 'Data Structures', credits: 4 },
                { code: 'CSCI 330', title: 'Introduction to Machine Learning', credits: 4 },
                { code: 'DATA 233', title: 'Introduction to Data Science II', credits: 4 },
                { code: 'DATA 499A', title: 'Capstone: Culminating Experience I', credits: 2 },
                { code: 'DATA 499B', title: 'Capstone: Culminating Experience II', credits: 2 }
            ],
            electives: {
                description: '12 hours math/stats electives from: MATH 253, 318, 422, or MATH/STAT 342',
                count: 3,
                credits: 12,
                options: ['MATH 253', 'MATH 318', 'MATH 422', 'MATH 342']
            },
            electivesChoice: {
                description: '8 hours CS electives from: CSCI 333, 367, 371, or 390',
                count: 2,
                credits: 8,
                options: ['CSCI 333', 'CSCI 367', 'CSCI 371', 'CSCI 390']
            },
            supportingChoice: {
                description: 'Domain-Specific Elective (4 cr)',
                count: 1,
                credits: 4,
                options: ['BUSA 310', 'BUSA 467', 'COMA 461', 'ECON 344', 'ESCI 331', 'POLS 301', 'PSYC 242', 'SOCI 301']
            }
        },
        
        // ==================== PSYCHOLOGY ====================
        'Psychology (B.A.)': {
            name: 'Psychology (B.A.)',
            totalCredits: 36,
            required: [
                { code: 'PSYC 101', title: 'Introduction to Psychology', credits: 4 }
            ],
            electives: {
                description: 'Upper-division Psychology courses',
                count: 8,
                credits: 32,
                options: []
            },
            supporting: []
        },
        'Psychology (B.S.)': {
            name: 'Psychology (B.S.)',
            totalCredits: 48,
            required: [
                { code: 'PSYC 101', title: 'Introduction to Psychology', credits: 4 },
                { code: 'PSYC 242', title: 'Statistics for Psychological Research', credits: 4 }
            ],
            electives: {
                description: 'Upper-division Psychology courses',
                count: 10,
                credits: 40,
                options: []
            },
            supporting: []
        }
    },
    
    minors: {
        'Computer Science': {
            name: 'Computer Science Minor',
            totalCredits: 20,
            required: [
                { code: 'CSCI 144', title: 'Introduction to Computer Science', credits: 4 },
                { code: 'CSCI 270', title: 'Data Structures', credits: 4 }
            ],
            electives: {
                description: '8 hours of upper-division CSCI courses above 300 (except 499A/B)',
                count: 2,
                credits: 8,
                options: ['CSCI 302', 'CSCI 313', 'CSCI 330', 'CSCI 333', 'CSCI 343', 'CSCI 367', 'CSCI 371', 'CSCI 386', 'CSCI 390', 'CSCI 412', 'CSCI 444']
            },
            supportingChoice: {
                description: 'Required supporting: MATH 128, 151, or equivalent',
                count: 1,
                credits: 4,
                options: ['MATH 128', 'MATH 151']
            }
        },
        'Mathematics': {
            name: 'Mathematics Minor',
            totalCredits: 16,
            required: [
                { code: 'MATH 152', title: 'Calculus II', credits: 4 }
            ],
            electivesChoice: {
                description: 'MATH 245 or MATH 253',
                count: 1,
                credits: 4,
                options: ['MATH 245', 'MATH 253']
            },
            electives: {
                description: '8 hours of upper-division math (may include PHYS 354; at most one of 245/318; at most one of 351/354)',
                count: 2,
                credits: 8,
                options: ['MATH 317', 'MATH 318', 'MATH 319', 'MATH 331', 'MATH 342', 'MATH 348', 'MATH 351', 'MATH 356', 'MATH 422', 'MATH 433', 'MATH 455', 'PHYS 354']
            }
        },
        'Data Science': {
            name: 'Data Science Minor',
            totalCredits: 20,
            electivesChoice: {
                description: 'Computational Foundation: DATA 133 or CSCI 144',
                count: 1,
                credits: 4,
                options: ['DATA 133', 'CSCI 144']
            },
            required: [
                { code: 'DATA 233', title: 'Introduction to Data Science II', credits: 4 },
                { code: 'MATH 348', title: 'Statistical Computing and Consulting', credits: 4 }
            ],
            supportingChoice: {
                description: 'Statistical Foundation: one statistics course',
                count: 1,
                credits: 4,
                options: ['MATH 145', 'STAT 145', 'STAT 231', 'STAT 232', 'STAT 233', 'MATH 242']
            },
            electives: {
                description: 'Domain-Specific Elective (4 cr): from approved list',
                count: 1,
                credits: 4,
                options: ['BUSA 310', 'BUSA 467', 'COMA 461', 'CSCI 330', 'CSCI 333', 'CSCI 367', 'ECON 344', 'ESCI 331', 'POLS 301', 'PSYC 242', 'SOCI 301']
            }
        },
        'Statistics': {
            name: 'Statistics Minor',
            required: [],
            electivesChoice: {
                description: 'CSCI 144 or DATA 133',
                count: 1,
                credits: 4,
                options: ['CSCI 144', 'DATA 133']
            },
            electives: {
                description: 'Statistics courses',
                count: 3,
                credits: 12,
                options: ['STAT 231', 'STAT 232', 'SOCI 301', 'MATH 242', 'BUSA 467', 'ECON 344', 'PSYC 242', 'MATH 342', 'MATH 348']
            }
        },
        'Physics': {
            name: 'Physics Minor',
            required: [
                { code: 'PHYS 153', title: 'General Physics I', credits: 4 },
                { code: 'PHYS 154', title: 'General Physics II', credits: 4 },
                { code: 'PHYS 163', title: 'General Physics I Laboratory', credits: 1 },
                { code: 'PHYS 164', title: 'General Physics II Laboratory', credits: 1 },
                { code: 'PHYS 223', title: 'Elementary Modern Physics', credits: 4 }
            ],
            electives: {
                description: '8 additional hours (4 must be upper-division)',
                count: 2,
                credits: 8,
                options: ['PHYS 310', 'PHYS 331', 'PHYS 332', 'PHYS 336', 'PHYS 354', 'PHYS 401']
            }
        },
        'Biology': {
            name: 'Biology Minor',
            required: [
                { code: 'BIOL 225', title: 'Molecules, Cells, and Organisms', credits: 4 },
                { code: 'BIOL 226', title: 'Genes, Evolution, Diversity, and Ecology', credits: 4 }
            ],
            electives: {
                description: '12 hours elective (4 must be upper-division)',
                count: 3,
                credits: 12,
                options: []
            }
        },
        'Chemistry': {
            name: 'Chemistry Minor',
            required: [
                { code: 'CHEM 115', title: 'General Chemistry I', credits: 4 },
                { code: 'CHEM 116', title: 'General Chemistry II', credits: 4 },
                { code: 'CHEM 320', title: 'Analytical Chemistry', credits: 4 },
                { code: 'CHEM 331', title: 'Organic Chemistry I', credits: 4 },
                { code: 'CHEM 332', title: 'Organic Chemistry II', credits: 4 },
                { code: 'CHEM 333', title: 'Organic Chemistry I Laboratory', credits: 1 }
            ],
            electivesChoice: {
                description: 'CHEM 334 or CHEM 336',
                count: 1,
                credits: 1,
                options: ['CHEM 334', 'CHEM 336']
            }
        },
        'Psychology': {
            name: 'Psychology Minor',
            required: [
                { code: 'PSYC 101', title: 'Introduction to Psychology', credits: 4 }
            ],
            electives: {
                description: 'Upper-division Psychology courses',
                count: 3,
                credits: 12,
                options: []
            }
        },
        'Actuarial Science': {
            name: 'Actuarial Science Minor',
            required: [],
            electives: {
                description: '24 hours from BUSA, ECON, MATH (12 from MATH, 4 from ECON)',
                count: 6,
                credits: 24,
                options: ['BUSA 302', 'BUSA 335', 'BUSA 437', 'BUSA 438', 'ECON 101', 'ECON 301', 'ECON 313', 'ECON 337', 'ECON 344', 'MATH 331', 'MATH 342', 'MATH 348', 'MATH 356']
            }
        }
    },
    
    // General Education Requirements (PLU Core)
    generalEducation: {
        name: 'General Education Requirements',
        totalCredits: '40-47',
        pluCore: {
            name: 'PLU Core (15-19 credits)',
            requirements: [
                { 
                    code: 'FW', 
                    name: 'First-Year Writing', 
                    credits: 4, 
                    course: 'FYEP 101',
                    description: 'Required for all first-year students'
                },
                { 
                    code: 'FD', 
                    name: 'First-Year Diversity', 
                    credits: 4, 
                    course: 'FYEP 102',
                    description: 'Required for all first-year students'
                },
                { 
                    code: 'PLUS', 
                    name: 'PLU Seminar', 
                    credits: 1, 
                    course: 'PLUS 100',
                    description: 'Required for all first-year students in first year'
                },
                { 
                    code: 'RL', 
                    name: 'Academic Study of Religion', 
                    credits: 4, 
                    description: 'Any course with RL attribute'
                },
                { 
                    code: 'FT', 
                    name: 'Fitness and Wellness', 
                    credits: 2, 
                    description: 'FTWL 100 (1cr) + one activity course (1cr)',
                    note: 'Cannot use FTWL 250'
                },
                { 
                    code: 'GE', 
                    name: 'Global Engagement', 
                    credits: 4, 
                    description: 'Any course with GE attribute (study away or on-campus)'
                }
            ]
        },
        distributiveCore: {
            name: 'Distributive Core (24 credits)',
            description: 'Six Ways of Being and Knowing - each must be from a different program prefix',
            requirements: [
                { 
                    code: 'CX', 
                    name: 'Creative Expression', 
                    credits: 4, 
                    description: 'Any course with CX attribute'
                },
                { 
                    code: 'NW', 
                    name: 'Engaging the Natural World', 
                    credits: 4, 
                    description: 'Any course with NW attribute (includes lab/field experience)',
                    note: 'Must include lab or field experience'
                },
                { 
                    code: 'IT', 
                    name: 'Interpreting Text', 
                    credits: 4, 
                    description: 'Any course with IT attribute'
                },
                { 
                    code: 'ES', 
                    name: 'Examining Self and Society', 
                    credits: 4, 
                    description: 'Any course with ES attribute'
                },
                { 
                    code: 'VW', 
                    name: 'Exploring Values and Worldviews', 
                    credits: 4, 
                    description: 'Any course with VW attribute'
                },
                { 
                    code: 'QR', 
                    name: 'Quantitative Reasoning', 
                    credits: 4, 
                    description: 'Any course with QR attribute',
                    note: 'Can be satisfied by Math Placement score of 70+'
                }
            ]
        },
        culminating: {
            name: 'Culminating Experience (1-4 credits)',
            requirements: [
                { 
                    code: 'SR', 
                    name: 'Senior Culminating Experience', 
                    credits: '1-4', 
                    description: 'Senior seminar or capstone in your major'
                }
            ]
        }
    }
};

// Get all planned courses from schedule
function getPlannedCourses(schedule) {
    const courses = [];
    if (!schedule) return courses;
    
    Object.values(schedule).forEach(year => {
        Object.values(year).forEach(term => {
            if (Array.isArray(term)) {
                courses.push(...term);
            }
        });
    });
    return courses;
}

// Check if a course code matches (handles variations like CSCI 144 vs CSCI144)
function courseMatches(plannedCode, requiredCode) {
    const normalize = (code) => code.replace(/\s+/g, '').toUpperCase();
    return normalize(plannedCode) === normalize(requiredCode);
}

// Check requirements completion
function checkRequirements(majors, minors, schedule) {
    const plannedCourses = getPlannedCourses(schedule);
    const results = {
        majors: [],
        minors: [],
        totalCredits: 0,
        upperCredits: 0
    };
    
    // Calculate total credits
    plannedCourses.forEach(course => {
        const courseData = COURSES.find(c => courseMatches(c.code, course));
        if (courseData) {
            results.totalCredits += courseData.credits;
            const courseNum = parseInt(course.match(/\d+/)?.[0] || '0');
            if (courseNum >= 300) {
                results.upperCredits += courseData.credits;
            }
        }
    });
    
    // Check major requirements
    majors.forEach(major => {
        const reqs = REQUIREMENTS.majors[major];
        if (reqs) {
            const majorResult = {
                name: reqs.name,
                required: [],
                electivesChoice: null,
                electives: null,
                supporting: [],
                supportingChoice: null,
                completed: 0,
                total: 0
            };
            
            // Check required courses
            reqs.required.forEach(req => {
                const completed = plannedCourses.some(c => courseMatches(c, req.code));
                majorResult.required.push({ ...req, completed });
                majorResult.total++;
                if (completed) majorResult.completed++;
            });
            
            // Track courses already used (required courses)
            const usedCourses = new Set();
            reqs.required.forEach(r => usedCourses.add(r.code.replace(/\s+/g, '').toUpperCase()));
            
            // Check electives choice (e.g., "one of CSCI 367 or 390")
            if (reqs.electivesChoice) {
                let choiceCompleted = 0;
                const choiceCoursesCompleted = [];
                reqs.electivesChoice.options.forEach(opt => {
                    const normalizedOpt = opt.replace(/\s+/g, '').toUpperCase();
                    if (plannedCourses.some(c => courseMatches(c, opt)) && !usedCourses.has(normalizedOpt)) {
                        if (choiceCompleted < reqs.electivesChoice.count) {
                            choiceCompleted++;
                            usedCourses.add(normalizedOpt);
                            // Find course info
                            const courseInfo = COURSES ? COURSES.find(c => courseMatches(c.code, opt)) : null;
                            choiceCoursesCompleted.push({
                                code: opt,
                                title: courseInfo ? courseInfo.title : '',
                                credits: courseInfo ? courseInfo.credits : 4,
                                completed: true
                            });
                        }
                    }
                });
                majorResult.electivesChoice = {
                    description: reqs.electivesChoice.description,
                    required: reqs.electivesChoice.count,
                    completed: Math.min(choiceCompleted, reqs.electivesChoice.count),
                    courses: choiceCoursesCompleted
                };
                majorResult.total += reqs.electivesChoice.count;
                majorResult.completed += majorResult.electivesChoice.completed;
            }
            
            // Check electives
            if (reqs.electives && reqs.electives.count > 0) {
                let electivesCompleted = 0;
                const electiveCoursesCompleted = [];
                
                plannedCourses.forEach(course => {
                    const normalizedCourse = course.replace(/\s+/g, '').toUpperCase();
                    // Skip if already used as required or electivesChoice
                    if (usedCourses.has(normalizedCourse)) return;
                    
                    let isValidElective = false;
                    if (reqs.electives.options.length > 0) {
                        // Check if it's in the specific options list
                        isValidElective = reqs.electives.options.some(opt => courseMatches(course, opt));
                    } else {
                        // Generic upper-division check
                        const prefix = course.split(/\s?\d/)[0];
                        const num = parseInt(course.match(/\d+/)?.[0] || '0');
                        const majorPrefix = getMajorPrefix(major);
                        isValidElective = (prefix === majorPrefix && num >= 300);
                    }
                    
                    if (isValidElective && electivesCompleted < reqs.electives.count) {
                        electivesCompleted++;
                        usedCourses.add(normalizedCourse);
                        // Find course info
                        const courseInfo = COURSES ? COURSES.find(c => courseMatches(c.code, course)) : null;
                        electiveCoursesCompleted.push({
                            code: course,
                            title: courseInfo ? courseInfo.title : '',
                            credits: courseInfo ? courseInfo.credits : 4,
                            completed: true
                        });
                    }
                });
                
                majorResult.electives = {
                    description: reqs.electives.description,
                    required: reqs.electives.count,
                    completed: Math.min(electivesCompleted, reqs.electives.count),
                    courses: electiveCoursesCompleted
                };
                majorResult.total += reqs.electives.count;
                majorResult.completed += majorResult.electives.completed;
            }
            
            // Check supporting courses
            if (reqs.supporting) {
                reqs.supporting.forEach(req => {
                    const completed = plannedCourses.some(c => courseMatches(c, req.code));
                    majorResult.supporting.push({ ...req, completed });
                    majorResult.total++;
                    if (completed) majorResult.completed++;
                });
            }
            
            // Check supporting choice
            if (reqs.supportingChoice) {
                let choiceCompleted = 0;
                reqs.supportingChoice.options.forEach(opt => {
                    if (plannedCourses.some(c => courseMatches(c, opt))) {
                        choiceCompleted++;
                    }
                });
                majorResult.supportingChoice = {
                    description: reqs.supportingChoice.description,
                    required: reqs.supportingChoice.count,
                    completed: Math.min(choiceCompleted, reqs.supportingChoice.count)
                };
                majorResult.total += reqs.supportingChoice.count;
                majorResult.completed += majorResult.supportingChoice.completed;
            }
            
            // Check lab science requirement
            if (reqs.labScience) {
                let labScienceCompleted = false;
                let completedOption = null;
                let completedCourses = [];
                
                // Check each lab science option
                for (const option of reqs.labScience.options) {
                    const coursesInOption = option.courses;
                    const completedInOption = coursesInOption.filter(course => 
                        plannedCourses.some(c => courseMatches(c, course))
                    );
                    
                    // Consider complete if at least 2 courses from an option are taken
                    if (completedInOption.length >= 2) {
                        labScienceCompleted = true;
                        completedOption = option.name;
                        completedCourses = completedInOption.map(code => {
                            const courseInfo = COURSES ? COURSES.find(c => courseMatches(c.code, code)) : null;
                            return {
                                code: code,
                                title: courseInfo ? courseInfo.title : '',
                                credits: courseInfo ? courseInfo.credits : 4,
                                completed: true
                            };
                        });
                        break;
                    } else if (completedInOption.length > 0 && !completedOption) {
                        // Track partial progress
                        completedOption = option.name + ' (partial)';
                        completedCourses = completedInOption.map(code => {
                            const courseInfo = COURSES ? COURSES.find(c => courseMatches(c.code, code)) : null;
                            return {
                                code: code,
                                title: courseInfo ? courseInfo.title : '',
                                credits: courseInfo ? courseInfo.credits : 4,
                                completed: true
                            };
                        });
                    }
                }
                
                majorResult.labScience = {
                    description: reqs.labScience.description,
                    options: reqs.labScience.options,
                    completed: labScienceCompleted,
                    completedOption: completedOption,
                    completedCourses: completedCourses
                };
                majorResult.total += 1;
                if (labScienceCompleted) majorResult.completed += 1;
            }
            
            results.majors.push(majorResult);
        }
    });
    
    // Check minor requirements
    minors.forEach(minor => {
        const reqs = REQUIREMENTS.minors[minor];
        if (reqs) {
            const minorResult = {
                name: reqs.name,
                required: [],
                electivesChoice: null,
                electives: null,
                supportingChoice: null,
                completed: 0,
                total: 0
            };
            
            // Check required courses
            if (reqs.required) {
                reqs.required.forEach(req => {
                    const completed = plannedCourses.some(c => courseMatches(c, req.code));
                    minorResult.required.push({ ...req, completed });
                    minorResult.total++;
                    if (completed) minorResult.completed++;
                });
            }
            
            // Check electives choice
            if (reqs.electivesChoice) {
                let choiceCompleted = 0;
                reqs.electivesChoice.options.forEach(opt => {
                    if (plannedCourses.some(c => courseMatches(c, opt))) {
                        choiceCompleted++;
                    }
                });
                minorResult.electivesChoice = {
                    description: reqs.electivesChoice.description,
                    required: reqs.electivesChoice.count,
                    completed: Math.min(choiceCompleted, reqs.electivesChoice.count)
                };
                minorResult.total += reqs.electivesChoice.count;
                minorResult.completed += minorResult.electivesChoice.completed;
            }
            
            // Check electives
            if (reqs.electives && reqs.electives.count > 0) {
                let electivesCompleted = 0;
                plannedCourses.forEach(course => {
                    if (reqs.electives.options.length > 0) {
                        if (reqs.electives.options.some(opt => courseMatches(course, opt))) {
                            if (!reqs.required || !reqs.required.some(r => courseMatches(course, r.code))) {
                                electivesCompleted++;
                            }
                        }
                    }
                });
                
                minorResult.electives = {
                    description: reqs.electives.description,
                    required: reqs.electives.count,
                    completed: Math.min(electivesCompleted, reqs.electives.count)
                };
                minorResult.total += reqs.electives.count;
                minorResult.completed += minorResult.electives.completed;
            }
            
            // Check supporting choice
            if (reqs.supportingChoice) {
                let choiceCompleted = 0;
                reqs.supportingChoice.options.forEach(opt => {
                    if (plannedCourses.some(c => courseMatches(c, opt))) {
                        choiceCompleted++;
                    }
                });
                minorResult.supportingChoice = {
                    description: reqs.supportingChoice.description,
                    required: reqs.supportingChoice.count,
                    completed: Math.min(choiceCompleted, reqs.supportingChoice.count)
                };
                minorResult.total += reqs.supportingChoice.count;
                minorResult.completed += minorResult.supportingChoice.completed;
            }
            
            results.minors.push(minorResult);
        }
    });
    
    return results;
}

// Helper to get department prefix from major name
function getMajorPrefix(major) {
    if (major.includes('Computer Science')) return 'CSCI';
    if (major.includes('Mathematics')) return 'MATH';
    if (major.includes('Biology')) return 'BIOL';
    if (major.includes('Chemistry') || major.includes('Biochemistry')) return 'CHEM';
    if (major.includes('Physics')) return 'PHYS';
    if (major.includes('Psychology')) return 'PSYC';
    return '';
}
