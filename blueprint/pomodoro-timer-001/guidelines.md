# Guidelines

## Requirements

1. **Default session lengths (first visit / fresh state):** Work interval **45 minutes**, break interval **15 minutes**. These are the values shown when the user opens the app with no prior saved preference (exact persistence behavior is defined under assumptions below).
2. **Built-in presets:** The app must offer at least:
   - **45 / 15** (work / break minutes) — default preset matching the initial defaults.
   - **50 / 10** (work / break minutes) — alternate preset.
3. **Custom durations:** The user can set **custom** work and break lengths (within reasonable bounds; see constraints) instead of a preset.
4. **Responsive layout:** The UI must be **usable on a laptop and on a phone** — readable typography, tap-friendly controls on small screens, layout that adapts to narrow viewports (no reliance on hover-only actions for core flows).
5. **Core timer behaviors:** The user can **start**, **pause** or **stop** the running phase (wording may be “reset” or “stop” in the UI), and see **clear remaining time** for the active phase (work vs break).
6. **Phase clarity:** It must always be obvious whether the timer is in a **work** phase or a **break** phase.

## Constraints

- **Platform:** Deliver as a **web app** in this repository, implemented as **static HTML, CSS, and JavaScript** (no mandatory backend), consistent with the existing pattern used by other top-level static projects in the repo.
- **Deployment / usage:** Runs in a modern browser; no requirement for install from an app store.
- **Custom duration bounds:** Custom work and break inputs must use **sane minimum and maximum** limits (exact numbers to be chosen at implementation time; must prevent zero-length or absurdly long sessions).
- **Accessibility baseline:** Core actions and time remaining must remain usable without relying solely on color; contrast and touch targets should meet common mobile usability expectations.

## Scope (in / out)

**In scope**

- Presets (45/15, 50/10), custom work/break lengths, responsive UI, start/pause/stop (or equivalent), clear work vs break state.

**Out of scope**

- User accounts, cloud sync, calendar integration, team features, analytics, native mobile wrappers unless later promoted to a new goal.

## Open questions

| Topic | Status | Notes |
| --- | --- | --- |
| Alert when a phase ends (sound vs visual-only vs system notification) | `open` | Not specified; plan should pick a minimal default and optional sound toggle if low effort. |
| Remember last-used preset or custom values across visits (e.g. `localStorage`) | `assumed-by-user` | Assumed **yes** for good UX unless you object—persists per browser/device, not synced. |
| “Long break” after N work cycles | `assumed-by-user` | Assumed **out of scope** for v1 (only alternating work ↔ break) unless you want Pomodoro-style long breaks. |
| Exact folder name under repo root | `resolved` | Align implementation with goal id: **`pomodoro-timer-001/`** at repo root (same pattern as other static apps). |

## Goal structure

**Single goal** — one cohesive responsive web Pomodoro timer. No split into subgoals unless scope grows materially later.
