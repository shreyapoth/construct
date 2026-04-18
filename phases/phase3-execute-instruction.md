### Phase Overview

**Purpose:** Execute the **approved** `plan.md` for this goal **one plan step at a time**, with the user in control of when each step starts.

**Key Principle:** Execution is linear, **do not** run the next step until the user explicitly starts it.

**Enter Phase 3 only when:**
    - Phase 2 is **done** for this unit, and the user has **approved** that unit’s plan (see `phases/phase2-plan/phase2-plan-instruction.md`).

---

### Execution Rules

- Follow `plan.md` as the single **source of truth** (Steps + Checklist)  
- Step number corresponds directly to checklist number  

- If execution reveals the plan is incorrect or incomplete:
  - **Pause immediately**
  - Return to **Phase 2** (or Phase 1 if needed)
  - Revise and re-approve the plan before continuing  

- Execute **one step at a time**  
- Before starting a step:
  - State the step number  
  - Wait for an explicit user signal (e.g. “begin”, “go”, “start step N”)  

- Do **not** continue to the next step without explicit instruction  

- After completing a step:
  - Update the corresponding checklist item in `plan.md` (`N. [x]`)  
  - This update is the **only required output** (no separate report unless requested)  

- If the user requests to **skip, merge, or reorder** steps:
  - Treat it as a **plan change**
  - Return to **Phase 2**
  - Update and re-approve `plan.md` before continuing  

- Respect step dependencies implicitly:
  - Do not execute a step until prior steps are completed  
  - Follow the order defined in `plan.md` unless explicitly changed  

- Do **not** move to Phase 4 (Review) until:
  - All intended steps are complete **and**
  - The user explicitly approves wrapping execution  

- Phase 3 does **not** finalize goal status:
  - Do not mark goals as `[done]` or `[iteration]`
  - Prepare for review, but leave final status decisions to Phase 4  

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
