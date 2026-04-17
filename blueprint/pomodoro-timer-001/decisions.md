# Decisions

## Phase 1 — Guidelines

- **Default durations (fresh app):** 45 min work, 15 min break.
- **Presets:** Include 45/15 and 50/10 (work/break, minutes).
- **Custom:** User can set custom work and break lengths (with sane bounds at implementation).
- **Devices:** Must be usable on laptop and phone — responsive layout and touch-friendly controls.
- **Stack / location:** Static HTML/CSS/JS in repo root folder `pomodoro-timer-001/`, consistent with other static projects in this repo.
- **Assumptions (unless revised):** Optional persistence of last settings via browser storage per device; no “long break after N cycles” in v1 unless added later.
