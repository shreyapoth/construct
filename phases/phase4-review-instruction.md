## Phase 4 — Review

### Phase Overview

**Purpose:** Validate that the implemented outcome satisfies the goal and aligns with the defined guidelines.

**Key Principle:** This phase is a **verification step**, not a redesign or explanation phase.

Evaluate correctness against:
- `goal.md`
- `guidelines.md`
- `plan.md`

---

### Rules

- Base all evaluation on existing artifacts; do **not** introduce new requirements or redesign here
- Prefer **concise, structured, binary checks** over explanations
- Do **not** restate full context (goal, plan, requirements)
- Identify only **real gaps or violations**, not speculative improvements
- If major issues are found, return to **Phase 1 or Phase 2**
- Keep output **minimal and precise**
- **Final status is owned by Phase 4**. After review is approved:
  - If `Final Status = done`, update **`blueprint/blueprint-queue.md`** to mark the goal as **`[done]`**, and set the **first line** of this goal’s **`goal.md`** to **`[completed]`**
  - If `Final Status = needs-iteration`, update **`blueprint/blueprint-queue.md`** to mark the goal as **`[iteration]`** (keep **`goal.md`** line 1 as **`[active]`** until the goal is fully done)
  - Update the `current:` pointer to the selected next active goal (or placeholder if pausing)
- After status update, ask the user:
  - **Do you want to move on to the next goal in the queue?**
  - **Or choose a different goal from the list?**
  - **Or take a break?**

---

### Validation Areas

- **Outcome** — what was implemented
- **Goal Alignment** — whether the goal was achieved
- **Requirement Check** — validation against `guidelines.md`
- **Constraint Check** — whether constraints were respected (if applicable)
- **Gaps** — missing or incorrect elements
- **Final Status** — completion decision

---

### Output Format

*(Write to `review.md` in the current goal folder)*

```md
Outcome:
- <what was implemented>

Goal Alignment:
- [met / partially met / not met]

Requirement Check:
- <requirement 1> — [met / not met]
- <requirement 2> — [met / not met]

Constraint Check:
- <constraint 1> — [satisfied / violated]
- <constraint 2> — [satisfied / violated]

Gaps:
- <only include if applicable>

Final Status:
- [done / needs-iteration]

Queue Update:
- queue status set to [done / iteration]
- `current:` updated to <next goal or pause placeholder>

Next Action Prompt:
- move to next goal in queue / choose different goal / take a break / finished all the goals