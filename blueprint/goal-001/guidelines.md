# Guidelines — goal-001 (simple Pomodoro timer)

## Requirements

1. **Work session timer** — User can start a focus/work countdown of a defined duration (default **25 minutes** unless configured). Elapsed time is visible while running.
2. **Break timer** — After a work session completes (or user ends it per rules below), user can run a **short break** countdown (default **5 minutes** unless configured). Elapsed time is visible while running.
3. **Session control** — User can **start** and **pause or stop** the active timer (behavior must be consistent and documented in the plan: e.g. pause vs reset semantics).
4. **Phase completion** — When a countdown reaches zero, the app **signals completion** in a noticeable way (at minimum **visual**; optional **audio** if chosen and feasible within constraints).
5. **Cycle clarity** — User can see whether the app is in **work** vs **break** mode (labels or equivalent).
6. **Basic configuration** — User can adjust **work length**, **short break length**, and (if implemented) **long break** length and **interval** (e.g. long break every *n* work sessions), **or** the app uses documented fixed defaults with a clear path to change them later (must be stated in plan).

## Constraints

- **Single user, local-first** — No accounts, authentication, or multi-user features in this goal.
- **No mandatory cloud** — Timer state and preferences should not *require* a server; offline-capable target is preferred once platform is chosen.
- **Simplicity** — Avoid scope creep: no social features, analytics dashboards, or task/project management unless explicitly pulled into a later goal.
- **Assumption (confirm or replace)** — **Deliverable form**: a **static web app** (HTML/CSS/JavaScript) runnable by opening `index.html` or via a minimal local static server, unless you specify a different platform (see Open questions). This assumption exists so planning can proceed; it is not fixed until you confirm.

## Scope

**In scope**

- Work timer, short break timer, controls (start / pause or stop), completion feedback, visible mode (work vs break), and configurable durations per requirements above.
- Accessible enough for a minimal app: **keyboard-operable** controls where applicable, **visible** countdown, **sufficient contrast** for default theme (WCAG-oriented defaults without claiming full audit unless requested).

**Out of scope (for this goal)**

- Accounts, sync across devices, server-side storage, native mobile app store packaging, team/shared timers, integrations (calendar, Slack, etc.), detailed analytics, or Pomodoro technique education content beyond minimal inline help if any.

## Open questions

1. **Platform** — Confirm **static web app** in-repo, or specify (e.g. desktop framework, mobile-first web).
2. **Long break** — Include **long break** (e.g. 15 min) every **4th** work session (classic Pomodoro), or **short-break-only** for v1?
3. **Persistence** — Should **settings** (durations) persist across page reloads (e.g. `localStorage`), or reset to defaults each visit?
4. **Sound** — Optional chime at phase end, **on by default** vs **off by default**, or **no sound** in v1?
5. **Timer behavior when tab is backgrounded** — Accept **wall-clock** drift vs **throttled** timers in background tabs; preference?

## Goal structure

**Single goal** — One cohesive product: a simple Pomodoro timer. No split into subgoals unless you later separate (e.g.) “core timer” vs “PWA packaging”; current scope fits one execution path.

If you want multiple deliverables as **separate** goals, say so and we can decompose under `goal-001/subgoals/` and update the queue.
