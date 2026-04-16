# Blueprint Repository Layout

Subgoals are **one level deep** only: `blueprint/<parent-id>/subgoals/<child-id>/`. A subgoal folder must **not** contain a `subgoals/` directory. Further splits become additional siblings under the same parent.

```text
blueprint/
  blueprint-queue.md

  goal-001/
    goal.md
    guidelines.md
    plan.md
    review.md
    decisions.md

    subgoals/
      goal-001a/
        goal.md
        guidelines.md
        plan.md
        review.md
        decisions.md
```
