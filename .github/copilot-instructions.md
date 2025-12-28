# GitHub Copilot Instructions for PLU Scheduler

**Purpose**: Ultra-lean bootstrap for GitHub Copilot integration with RAPID projects.

> **Note**: This file is specific to GitHub Copilot (VS Code). The RAPID method works with any AI assistant platform - see `guides/ai-integration-protocol.md` for the complete AI behavioral specification.

---

## 🚀 Bootstrap: Start Every Session Here

```bash
# 1. Check project status (ALWAYS FIRST)
.venv\Scripts\python scripts/rapid_status.py --ai

# 2. Search for method guidance
.venv\Scripts\python scripts/rapid_lookup.py --search "your topic"

# 3. Start session tracking
.venv\Scripts\python scripts/rapid_session.py --start
```

**Core Rules** (see `guides/ai-integration-protocol.md` for full behavioral specification):

- Method over instinct - use `rapid_lookup.py` to find guidance
- Look before you leap - check `method/templates/` before creating artifacts
- Admit when you don't know - if guidance not loaded, look it up

---

## 🛠️ CLI Tools Quick Reference

All tools: `.venv\Scripts\python scripts/<tool>.py [options]`

| Tool                 | Purpose              | Key Flags                               |
| -------------------- | -------------------- | --------------------------------------- |
| `rapid_status.py`    | Project context      | `--ai`, `--recs`, `--crs`               |
| `rapid_lookup.py`    | Search/retrieve      | `--search`, `--list`, `--list-sections` |
| `rapid_session.py`   | Track work           | `--start`, `--decision`, `--end`        |
| `rapid_phase.py`     | Phase lifecycle      | `--status`, `--validate`, `--complete`  |
| `rapid_iteration.py` | Iteration management | `--status`, `--close`, `--add-wi`       |
| `rapid_config.py`    | Configuration        | `--show`, `--mode`                      |
| `rapid_init.py`      | New project          | `--name`, `--template`                  |

**For detailed options**: `rapid_lookup.py --search "tool_name options"`

---

## Active RAPID Projects in This Workspace

### 🎯 PLU Scheduler

| Item              | Location                         |
| ----------------- | -------------------------------- |
| **Config File**   | `.rapid/rapid-config.json`       |
| **Status File**   | `.rapid/rapid-status.json`       |
| **Session Log**   | `.rapid/rapid-session-log.jsonl` |
| **Design Root**   | `design/`                        |
| **Current Phase** | ITR-001 Phase R (initial setup)                |

---

## Project Discovery

A RAPID project is identified by:

1. Presence of `rapid-config.json` (typically in `.rapid/` or project root)
2. The config's `paths` section defines where status, session log, and design artifacts are located
3. Defaults: `.rapid/rapid-status.json`, `.rapid/rapid-session-log.jsonl`, `design/{1-4}-*/`

---

_RAPID Method v3.3 - Copilot Instructions_
_Generated: 2025-12-28_
