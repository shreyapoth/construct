# Blueprint queue

Ordered backlog of goals to run through the workflow after you agree on a split. **Edit freely**—merge, reorder, rename, or delete rows when you change your mind.

Each goal file lives under **`blueprint/<goal-id>/`** (see `blueprint-repository/blueprint-repository-layout.md`).

## Status legend

- `[active]` = current goal being worked
- `[queued]` = not started yet
- `[iteration]` = reviewed and needs another execution/planning pass
- `[done]` = completed and reviewed

## Current goal

`current: blueprint/<goal-id>/goal.md`

Use this pointer to indicate the single active goal being worked right now. Update it whenever priority or status changes.

## Queue

1. `[active]` **<goal-id>** — one-line intent
2. `[queued]` **<goal-id>** — one-line intent
3. `[iteration]` **<goal-id>** — one-line intent
4. `[done]` **<goal-id>** — one-line intent

<!-- Example entry (remove when real):

1. [active] **goal-001** — one-line intent
2. [queued] **goal-002** — one-line intent
3. [iteration] **goal-003** — one-line intent
4. [done] **goal-000** — one-line intent

-->
