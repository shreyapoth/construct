### Phase Overview

**Purpose:** Carry out the **approved** `plan.md` for this goal unit—**one plan step at a time**, with the user in control of when each step starts.

**Key Principle:** **Do not** run the next step until the user explicitly starts it (e.g. “begin”, “go”, “start step 2”, “continue with the next step”). Treat execution as a **linear, gated sequence**, not a batch job.

**Enter Phase 3 only when:**

- Phase 2 is **done** for this unit, and the user has **approved** that unit’s plan (see `phases/phase2-plan/phase2-plan-instruction.md`).
- You are working from **`blueprint/<...>/plan.md`** for **this** goal or subgoal folder—same scope as the plan you approved (steps + checklist at the bottom of that file).

This phase applies **per goal unit** (each `blueprint/<goal-id>/` and each `subgoals/<child-id>/` that has its own approved plan).

---

### Rules

- **Source of truth:** Follow the **Steps** and **Checklist** sections in this folder’s **`plan.md`**. The **Checklist** uses **`1. [ ]` / `2. [ ]` / …** — checklist **line number = step number** when the user says “begin step *N*”. If execution reveals the plan is wrong or incomplete, **pause**, return to **Phase 2** (or **Phase 1**) with the user, and revise the plan before continuing.
- **One step at a time:** Identify the **current** step (next not-yet-done checklist item). **Stop** after that step—do **not** automatically continue to the following step.
- **Before each step:** Say which **step number** you are on and **wait** for the user to **begin** (e.g. “begin”, “go”, “start step N”). Vague chat does not count unless they clearly mean to start the step.
- **After each step:** **Check off the plan** — set the matching checklist line in **`plan.md`** from `N. [ ]` to **`N. [x]`** when that step is done. That update **is** the Phase 3 output; do not require a separate report unless the user asks.
- **Dependencies:** If a step truly depends on a prior step, do not start it until the prior step is checked off **and** the user begins this one—unless the plan orders them differently with user approval.
- If the user asks to **skip**, **merge**, or **reorder** steps, treat that as a **plan change**: get agreement, update **`plan.md`** (Phase 2), re-approve if needed, then continue under the new order.
- **Do not** leave Phase 3 for **Phase 4 (Review)** until the user **explicitly approves** wrapping execution for this unit (brief recap vs **`plan.md`**, then ask if they are ready to review).
- Queue closure is finalized in **Phase 4 (Review)** based on `Final Status`; Phase 3 should prepare for review but not finalize `[done]`/`[iteration]` state transitions on its own.

---

### Per-step gate (“Begin” gate)

- The user controls pacing: **each** new step requires an explicit **begin**-style signal before work for that step starts.
- If they want to **run multiple steps in one go**, they must say so clearly (e.g. “do steps 3–5 now”); otherwise default to **single-step** mode.
- If they say **stop** or **pause**, halt before starting the next step even if the current step is finished.

---

### Output

- **Output = the checked plan.** Progress is recorded only by updating **`plan.md`**: each completed step becomes **`N. [x]`** in the **Checklist** section. No separate execution log, transcript template, or “Phase 3 report” is required unless the user asks for one.
- In chat, stay **minimal**: confirm step number, that **`plan.md`** checklist was updated, and that you are waiting for **begin** on the next step (or done / pause).
