### Phase Overview
**Purpose:** Capture a clear, specific goal statement before any implementation work begins. 

**Key Principle:** NO implementation details
The purpose of this phase is to define a clear statement of intent.

The goal should:
- describe the desired outcome
- identify the primary user or system affected (if known)
- remain free of implementation details
- be understandable without additional context

The goal does NOT need to be fully detailed or exhaustive. It should provide enough clarity to guide later phases, while allowing refinement.

---

### Rules

- Prefer a single concise statement (one sentence recommended, but not strictly required)
- Do NOT include implementation details (e.g., specific technologies, architectures, repo paths, hosting)
- Do **not** imply or lock in **where** the work will live or **which** language/framework will be used unless the user already stated it; leave that for Phase 1 unless the context is obvious (e.g. extending an existing codebase whose stack is already known)
- Avoid bundling unrelated outcomes into one goal
- The goal may represent a complex system, as long as it describes a cohesive outcome
- **Do not** move on until the user **explicitly approves** this phase: briefly recap the goal, then ask if they are ready to continue (they may revise first)

- Focus only on:
  - understanding the idea
  - shaping it into a clear goal

- Do not expand scope beyond goal definition
- Do not add optional features unless the user explicitly asks

---

### Output Format

Write **`goal.md`** with a **status on line 1**, then the goal body (see below).

**Line 1 — status (required):** exactly one of:

- `[pending]` — goal captured; not the current focus of work yet (often aligns with `[queued]` in the blueprint queue)
- `[active]` — this goal is the one being worked through the phases
- `[completed]` — goal delivered and reviewed (often aligns with `[done]` in the queue)

Then a blank line and `# Goal`, then the statement of intent.

Example:

```markdown
[active]

# Goal

…
```

Goal:
