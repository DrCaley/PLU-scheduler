# PLU Scheduler

An aid to students and advisors for planning students' next term class schedules along with long-term planning to ensure all graduation requirements are fulfilled.

## Features (Planned)

- **Term Planning**: Plan class schedules for upcoming terms
- **Graduation Tracking**: Track progress toward degree requirements
- **Prerequisite Visualization**: See course dependencies and recommended sequences
- **Advisor Collaboration**: Share plans with academic advisors for review

## Project Status

🚧 **Phase 1: Requirements** - Gathering requirements and defining scope

## Quick Start

```bash
# Check project status
.venv/bin/python scripts/rapid_status.py --ai

# Search for guidance
.venv/bin/python scripts/rapid_lookup.py --search "topic"

# Start a session
.venv/bin/python scripts/rapid_session.py --start
```

## Project Structure

```
├── .rapid/           # RAPID configuration
├── .github/          # GitHub configuration
├── design/           # Design artifacts by phase
│   ├── 1-domain/     # Phase R: Domain specs
│   ├── 2-logical/    # Phase A: Logical design
│   ├── 3-planning/  # Phase P: Impl design
│   ├── 4-implementation/   # Phase I: Delivery
│   └── archive/      # Iteration archives
└── README.md
```

## Repository

- **GitHub**: https://github.com/DrCaley/PLU-scheduler

## License

TBD

## RAPID Method

This project follows the 4-phase RAPID cycle:

1. **R**equirements - Capture and analyze domain
2. **A**rchitecture - Design logical structure
3. **P**lanning - Create implementation plans
4. **I**mplementation - Build and deliver

See the [RAPID Method documentation](https://github.com/rapid-method/rapid) for details.
