### Phase Overview

**Purpose:** Execute the **approved** `plan.md` for this goal **one plan step at a time**, with the user in control of when each step starts.

**Key Principle:** Execution is linear, **do not** run the next step until the user explicitly starts it.

**Enter Phase 3 only when:**
    - Phase 2 is **done** for this unit, and the user has **approved** that unit’s plan (see `phases/phase2-plan/phase2-plan-instruction.md`).

---

### Rules

- Follow `plan.md` as the single **source of truth** (Steps + Checklist)
- Step number corresponds to checklist number
    - If execution reveals the plan is wrong or incomplete, **pause**, return to **Phase 2** (or **Phase 1**) with the user, and revise the plan before continuing.

- Execute **one step at a time**. Do **not** automatically continue to the following steps without explicit instruction.
- Before starting a step, state the step number and wait for a user “begin” signal (e.g. “begin”, “go”, “start step N”)
- If the user asks to **skip**, **merge**, or **reorder** steps, treat that as a **plan change**: get agreement, update **`plan.md`** (Phase 2), re-approve if needed, then continue under the new order.
- **Do not** leave Phase 3 for **Phase 4 (Review)** until the user **explicitly approves** wrapping execution for this unit (brief recap vs **`plan.md`**, then ask if they are ready to review).

- **After each step:** **Check off the plan** — set the matching checklist line in **`plan.md`** from `N. [ ]` to **`N. [x]`** when that step is done. That update **is** the Phase 3 output; do not require a separate report unless the user asks.
- **Dependencies:** If a step truly depends on a prior step, do not start it until the prior step is checked off **and** the user begins this one—unless the plan orders them differently with user approval.

- Queue closure is finalized in **Phase 4 (Review)** based on `Final Status`; Phase 3 should prepare for review but not finalize `[done]`/`[iteration]` state transitions on its own.

---

### Per-step gate (“Begin” gate)

- The user controls pacing: **each** new step requires an explicit **begin**-style signal before work for that step starts.
- If they want to **run multiple steps in one go**, they must say so clearly (e.g. “do steps 3–5 now”); otherwise default to **single-step** mode.
- If they say **stop** or **pause**, halt before starting the next step even if the current step is finished.

---

### Output

-  **Output = the checked plan.** Update the plan.md checklist (`N. [x]`)
- Do not produce additional logs or reports unless requested
- In chat, respond minimally: step number, checklist updated, waiting for next instruction
