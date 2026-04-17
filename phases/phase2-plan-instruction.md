### Phase Overview

**Purpose:** Produce an implementation plan for the goal unit: ordered steps and a checklist for execution.

**Key Principle:** Plan per goal/subgoal before building. Do not execute until approved.

This phase establishes:

- **Execution approach**
- **Work breakdown**
- **Validation strategy**
- **Checklist** (numbered, one step per item)

---

### Rules

- Enter Phase 2 only after guidelines for this goal unit are finalized or explicitly approved  
- Build the plan strictly from this unit’s goal and guidelines  

- Do not assume project location or technology stack  
- Only include them if defined in guidelines, confirmed by the user, or clearly implied by the existing codebase  
- Otherwise, return to Phase 1 or mark as an explicit assumption before execution  

- Plan within the current goal or subgoal directory; do not merge unrelated scopes  

- Translate guidelines into ordered, actionable steps (avoid vague steps like “implement feature”)  
- Include dependencies where they affect order or correctness  

- If new assumptions or risks affect problem definition, return to Phase 1  
- Otherwise, note them briefly, but keep authoritative decisions in guidelines.md  

- End plan.md with a numbered Checklist (`1. [ ]`, `2. [ ]`, ...)  
- Each checklist item must correspond to exactly one step  

- If the plan changes materially, summarize what changed and why  

---

### Plan approval (Phase gate)

- Treat plan.md as a draft until explicitly approved  
- Do not begin Phase 3 until the user confirms the plan  

- Before asking for approval:
  - Provide a short recap of the approach, steps, and checklist  

- If changes are requested:
  - Revise plan.md and remain in Phase 2  

- Do not assume silence or partial agreement is approval  

- Exception: proceed if the user explicitly instructs to skip approval  

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
3.

*(Each checklist line must match one step in order.)*