### Phase Overview

**Purpose:** Turn the goal into a bounded problem space: what must be true, what you must not break, and where the edges of the work are.

**Key Principle:** Anchor in **constraints and truth sources** before planning or building.

This phase establishes:

- **Requirements** — behaviors the system must support (stated as concrete expectations, not wishful phrasing)
- **Constraints** — technical, product, or organizational rules you must respect
- **Scope** — what is in vs out of scope so the goal does not sprawl
- **Goal structure** — one cohesive outcome vs several independent goals that should be split

Requirements here do not need to be a full specification, but they must be clear enough that a plan (next phase) can be checked against them.

---

### Rules

- Ground claims in **specifications, standards, prior decisions, and repo conventions** when they exist; call out when something is assumed.
- Prefer **specific, testable** requirement statements over vague intent.
- Capture **constraints** explicitly (platform, performance, compliance, dependencies, “must use X”) so they are visible during plan and execute.
- Define **scope** with explicit out-of-scope items when ambiguity is likely.
- When the work **might** be **multiple independent outcomes**, do **not** impose a final split by default. Instead:
  - Offer a **proposed grouping** as a suggestion (e.g. “We could split this into … because …”) and ask whether that structure works.
  - **The user decides** the shape of the split: they may merge proposed pieces, separate them further, rename goals, reorder priority, or keep a **single** goal. Treat your proposal as editable, not canonical.
  - If a goal is decomposed, the original goal becomes the **parent goal** and remains as the umbrella objective. Do **not** overwrite or discard the parent goal.
  - Store child units under **`blueprint/<parent-id>/subgoals/<child-id>/`** so decomposition is explicit in the filesystem. **Do not** nest subgoals (no `subgoals/` under a subgoal); if more splits are needed, add **another subgoal under the parent** next to the existing children.
  - Each subgoal is an independent unit and must go through **Phase 0 (goal)** before continuing to later phases.
  - After the user settles on one vs many goals, **persist the queue** if there is more than one goal: create or update **`blueprint/blueprint-queue.md`** with an **ordered list** of goals still to run through the workflow (short title + one-line intent per item is enough), set statuses (`[active]`, `[queued]`, `[done]`), and keep the **Current goal** pointer on the active one. Adjust all of these whenever grouping, status, or priority changes.
  - Each **distinct** goal in the queue must still go through **Phase 0 (goal)** again before later phases, **in queue order** unless the user reprioritizes.
- **Do not** require every open question to be answered before moving on; track them, prioritize correctness-critical gaps, and resurface when relevant.
- **Do not** bundle unrelated outcomes into one scope without acknowledging the split.
- **Do not** move on until the user **explicitly approves** this phase: briefly recap requirements, constraints, scope, and goal structure, then ask if they are ready to continue (they may revise first).

---

### Output Format

Requirements:

Constraints:

Scope (in / out):

Open questions:

Goal structure:

(If multiple goals after user alignment: maintain the ordered backlog in `blueprint/blueprint-queue.md`.)
