# DS-01: Project Overview

**Version**: 0.2  
**Date**: 2025-12-28  
**Status**: Draft

## 1. Purpose

PLU Scheduler is an aid to students and advisors for planning students' next term class schedules along with long-term planning to ensure all graduation requirements are fulfilled.

## 2. Scope

### 2.1 In Scope

- User authentication (username/password)
- Student multi-year schedule planning (4-5 years)
- Faculty access to all student schedules
- Aggregate demand forecasting for faculty
- PDF import for PLU class schedule data
- Semester-specific course offering validation

### 2.2 Out of Scope

- Course registration (handled by existing systems)
- Grade tracking
- Financial aid calculations
- Real-time integration with PLU systems (initial version)

## 3. Stakeholders

| Role | Name | Responsibility |
|------|------|----------------|
| Product Owner | Dr. Caley | Requirements approval |
| Primary Users | PLU Students | Schedule planning |
| Secondary Users | Academic Advisors/Faculty | Guidance, demand forecasting |

## 4. Constraints

- Must be hostable cheaply/free (low daily usage)
- Must handle prerequisite chains and course sequencing
- Academic year/term structure constraints
- Initial version: no live integration, PDF import only

## 5. Key Concepts

- **Graduation Requirements**: Core, major, minor requirements students must complete
- **Prerequisites**: Courses that must be taken before other courses
- **Course Sequencing**: Optimal order for taking courses
- **Credit Hours**: Unit measurement for course workload
- **Degree Audit**: Tracking completion status of all requirements

---

## 6. Academic Calendar Structure

### 6.1 Terms Per Year

| Term | Duration | Max Classes | Notes |
|------|----------|-------------|-------|
| Fall Semester | ~16 weeks | 6-7 | Primary term |
| J-Term | ~4 weeks | 3 | Between Fall and Spring |
| Spring Semester | ~16 weeks | 6-7 | Primary term |
| Summer Session 1 | ~4-6 weeks | 2 | Optional, hideable |
| Summer Session 2 | ~4-6 weeks | 2 | Optional, hideable |

### 6.2 Planning Horizon

- Students plan 4-5 years ahead (8-10 semesters + J-terms)
- Summer sessions are rare, UI should allow hiding them

---

## 7. User Roles & Features

### 7.1 Student Features

- Login with username/password
- View/edit personal multi-year schedule grid
- Add classes to specific semesters/terms
- Hide/show summer sessions
- See which classes are offered in which semesters

### 7.2 Faculty Features

- Login with username/password
- View any student's schedule
- **Aggregate View**: See how many students plan to take a specific class in a given term/year
- Demand forecasting for course scheduling decisions

---

## 8. Data Requirements

### 8.1 Course Data

| Field | Description |
|-------|-------------|
| Course Code | e.g., CSCI 144 |
| Course Name | e.g., Introduction to Programming |
| Credits | Credit hours |
| Prerequisites | Required prior courses |
| Offered Terms | Which semesters course is typically offered |

### 8.2 Schedule Data (from PDF)

- Semester-specific class offerings
- Times, instructors, sections
- Extracted from PLU's published schedule PDFs

### 8.3 Student Data

| Field | Description |
|-------|-------------|
| Username | Login identifier |
| Password | Hashed credentials |
| Major(s) | Declared major(s) |
| Start Year | Freshman year |
| Planned Schedule | Grid of courses by term |

---

## 9. Technical Direction

### 9.1 Architecture Goals

- **Low-cost hosting**: Serverless or static-first approach
- **Web-based**: Accessible from any browser
- **PDF Parsing**: Extract schedule data from PLU PDFs
- **No initial integration**: Manual data import

### 9.2 Hosting Considerations

| Option | Cost | Pros | Cons |
|--------|------|------|------|
| Vercel/Netlify + Serverless | Free tier | Easy deployment, scales to zero | Cold starts |
| Firebase | Free tier | Auth included, real-time DB | Vendor lock-in |
| Supabase | Free tier | PostgreSQL, auth, open source | Usage limits |
| Static + JSON files | Free | Simplest, GitHub Pages | No real backend |

---

## 10. Open Questions

1. How should students authenticate? (PLU SSO integration later? Simple username/password initially?)
2. What PDF format does PLU publish schedules in? Need samples.
3. Should prerequisite checking be automated or advisory?
4. How to handle course conflicts (same time slot)?
5. What graduation requirement data is available?
