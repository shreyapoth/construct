# Goals repository layout

This document defines how **goal work is stored on disk**. It is **not** part of the phase instruction text; keep it here so the instructions stay short and this layout can evolve independently.

## Root

All goal trees live under the repository root:

```text
goals/
```

Use **one folder per top-level goal**, named with a stable id (see [Naming](#naming)).

## Top-level goal folder

Each `goals/<goal-id>/` contains:

| Path | Role |
|------|------|
| `goal.md` | **Phase 0 — Goal:** one-line intent and any short clarifications for *this* goal unit. |
| `guidelines.md` | **Phase 1 — Guidelines:** requirements, constraints, scope, open questions, and goal-structure notes for *this* unit. |
| `subgoals/` | Optional. Present when this goal is split into smaller tracked units (see [Subgoals](#subgoals)). |

Example:

```text
goals/goal-001/
  goal.md
  guidelines.md
  subgoals/
    goal-001a/
      goal.md
    goal-001b/
      goal.md
    goal-001c/
      goal.md
```

## Naming

- **Top-level ids:** `goal-001`, `goal-002`, … — zero-padded or another consistent scheme; pick one and keep it.
- **Subgoal ids:** extend the parent id with a suffix: `goal-001a`, `goal-001b`, … so lineage is obvious.
- Folder names **match** the id (`goal-001a/` not `subgoal-a/`).

## Subgoals

- Use **`subgoals/`** when a single top-level goal is broken into parallel or sequential pieces that still belong under the same parent campaign.
- Each subgoal folder has at least **`goal.md`** (Phase 0 for that slice). Add **`guidelines.md`** when you run Phase 1 for that slice—same pattern as the parent.
- Deeper nesting (`subgoals/` under a subgoal) is allowed if you need it; keep the same id pattern (`goal-001a1`, etc.) or document your own rule in this file.

## Relationship to `docs/queue/goals-queue.md`

- **`docs/queue/goals-queue.md`** is the **ordered backlog** of what to run next (especially after a split).
- **`goals/`** is the **per-goal artifact tree** (what each goal and subgoal *is*, in writing).
- Keep them in sync in spirit: queue entries should point at or imply the right `goals/<id>/` path when those folders exist.

## Creating a new goal

1. Add `goals/<new-id>/`.
2. Write **`goal.md`** (Phase 0), then **`guidelines.md`** (Phase 1).
3. If split: create `subgoals/<child-id>/goal.md` (and `guidelines.md` when ready), and update **`docs/queue/goals-queue.md`** if you use the queue.
