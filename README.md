# Construct

**Construct** is a **specification-driven workflow** for building software (or any well-scoped effort) with a human in the loop. 

## What it means in practice

- **The specification is the source of truth.** You refine what you want, under what rules, and how you will know you are done—before and while you build.
- **Phases are ordered.** You move **Goal → Guidelines → Plan → Execute → Review** with **explicit approval** before leaving a phase (unless you clearly ask to batch or skip).
- **One active goal at a time.** A **queue** tracks what is active, queued, in iteration, or done.
- **Subgoals are shallow.** Work can split into subgoals under a parent, but **subgoals do not nest**—if you need another split, add a sibling under the **parent**, not under another subgoal.

## How it works (short)

The workflow is split into **stages**. You usually move forward in order, and you **approve** each stage before the next (unless you explicitly ask to combine or skip steps).

0 — Goal  
Start with a clear outcome: what are you trying to build, improve, or fix?  
Keep it focused and high-level; no need to think about *how* yet.

---

1 — Guidelines  
Now define the **rules of the road**.  
What does success look like? What constraints matter? What should definitely not break?  
This is where you go back and forth, ask questions, and shape the problem until it feels solid.

---

2 — Plan  
Figure out the path forward.  
Break the work into **clear, ordered steps** and a checklist you can actually follow.  
You’re deciding *how* you’ll get there—still no building yet.

---

3 — Execute  
Time to build, one deliberate step at a time.  

Each step pauses for your approval, letting you review, catch issues early, and adjust as needed, letting execution stay svisible, and aligned with the plan.The goal is not just to move fast, but to move with control. 

---

4 — Review  
Take a step back and look at what you’ve built.  
Does it actually meet the goal and follow the guidelines?  
If yes, you’re done. If not, tighten things up or loop back and iterate.

Artifacts for each goal live under `**blueprint/<goal-id>/`** (for example `goal.md`, `guidelines.md`, `plan.md`, `review.md`, `decisions.md`). The exact tree and naming rules are **not** repeated in every doc—see the layout file below.

## Where to look (authoritative)


| What                                                           | Where                                                                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Full workflow** (phases, gates, inheritance, queue behavior) | `[.construct/instructions/construct-instructions.md](.construct/instructions/construct-instructions.md)`     |
| **Folder layout** under `blueprint/`                           | `[blueprint-repository/blueprint-repository-layout.md](blueprint-repository/blueprint-repository-layout.md)` |
| **Current goal + queue**                                       | `[blueprint/blueprint-queue.md](blueprint/blueprint-queue.md)`                                               |
| **Per-phase behavior** (0–4)                                   | `[phases/](phases/)` — one instruction file per phase                                                        |


If anything disagrees, **the layout doc and queue doc win** for paths and queue format; then `**construct-instructions.md`** for workflow; then phase files for phase-specific detail.

## Repository layout (conceptual)

- `**.construct/instructions/`** — top-level instructions for humans and agents.
- `**phases/`** — phase instruction files (what to do in each phase).
- `**blueprint/**` — queue plus per-goal folders and markdown artifacts.
- `**blueprint-repository/**` — canonical description of blueprint folder structure.

## Cursor (optional)

This repo includes `[.cursor/rules/construct-instructions-waterfall.mdc](.cursor/rules/construct-instructions-waterfall.mdc)`: it reminds the agent to follow the workflow and defines a `**construct**` chat trigger for a short, friendly welcome **without** dumping file paths in that greeting.

---

Start with `**[construct-instructions.md](.construct/instructions/construct-instructions.md)`** if you are new here.