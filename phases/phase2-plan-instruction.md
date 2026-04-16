### Phase Overview

**Purpose:** After **guidelines are finalized** for a goal unit, produce an **implementation plan**: ordered steps to achieve that goal (or subgoal), plus a **checklist** you can execute and tick off.

**Key Principle:** Plan the work **per goal / subgoal folder** before building, and **do not start execution (Phase 3)** until the user **approves** the plan for that unit.

This phase runs **once per** `blueprint/<goal-id>/` (and per `blueprint/.../subgoals/<child-id>/` when those exist). Each unit needs its own plan derived from **that folder’s** `goal.md` and **`guidelines.md`** (approved in Phases 0 and 1).

This phase establishes:

- **Execution approach** — strategy and sequencing for this unit only
- **Work breakdown** — concrete steps with dependencies
- **Validation** — how you’ll know each major step is done
- **Checklist** — at the **bottom** of **`plan.md`**, a **numbered** list: `1. [ ]`, `2. [ ]`, `3. [ ]`, … — each line is **one step** in order (see [Output](#output))

---

### Rules

- **Enter Phase 2 only when** Phase 1 **guidelines** for this goal unit are **finalized** (or explicitly approved to proceed with stated caveats).
- Build the plan from **this folder’s** `goal.md` and `guidelines.md`—do not silently merge unrelated goals.
- For **subgoals**, plan **inside** each subgoal directory (`blueprint/.../subgoals/<child-id>/`); do not fold subgoal work into the parent plan unless the user wants a single rollup document.
- Translate guidelines into **ordered, actionable steps**; avoid vague items like “implement feature.”
- Include **dependencies** where they affect order or correctness.
- If new risks or assumptions are discovered during planning:
  - If they **materially affect problem definition**, return to **Phase 1** and update `guidelines.md` before continuing.
  - Otherwise, note them **briefly** in plan context, but keep the **authoritative** versions in `guidelines.md`.
- End **`plan.md`** with a **Checklist** section: **numbered checkbox** lines only — `1. [ ]`, `2. [ ]`, … (not bullet `- [ ]`). Each number is one execution step; completed items become `1. [x]`, `2. [x]`, etc. during Phase 3.
- If the plan changes materially, summarize what changed and why before continuing.

---

### Plan approval (Phase gate)

Treat **`plan.md`** as a draft until the user says otherwise.

- **Do not** begin **Phase 3 (Execute)** for this goal unit—and do not treat the checklist as the live execution contract—until the user **explicitly approves** the plan (e.g. they confirm the steps and checklist match what they want).
- **Before asking for approval**, give a **short recap**: what’s in the approach, the ordered steps, and the checklist (or point to the files under `blueprint/.../`).
- If the user wants **changes**, stay in Phase 2: revise **`plan.md`** until they are satisfied. Re-ask for approval after non-trivial edits.
- **Do not** assume silence, partial agreement, or “keep going” on other topics counts as plan approval.
- **Exception:** if the user **clearly instructs** you to proceed to execution or to skip the approval step, follow that instruction.

---

### Output

Write **`plan.md`** in the **same directory** as the goal unit’s `goal.md` / `guidelines.md`.

| File | Contents |
|------|----------|
| `plan.md` | **Approach**, **Steps** (ordered plan text), then a **Checklist** section **at the bottom** using **`1. [ ]` / `2. [ ]` / …** so each line is one step. No separate `checklist.md`. No risks/assumptions/open-questions sections in `plan.md`. |

---

### Output Format

*(Content lives in `plan.md`.)*

Approach:

Steps:

1. <!-- Step 1 — what / how verified -->
2.
3.

---

## Checklist

1. [ ]
2. [ ]
3. [ ]

*(Each checklist line is one step; numbering must match execution order for Phase 3.)*
