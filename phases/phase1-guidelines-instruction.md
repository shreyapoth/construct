### Phase Overview

**Purpose:** Turn the goal into a bounded problem space: what must be true, what you must not break, and where the edges of the work are.

**Key Principle:** Anchor in **constraints and truth sources** before planning or building.

This phase establishes:

- **Requirements** — behaviors the system must support (stated as concrete expectations, not wishful phrasing)
- **Constraints** — technical, product, or organizational rules you must respect
- **Scope** — what is in vs out of scope so the goal does not sprawl
- **Goal structure** — one cohesive outcome vs several independent goals that should be split

Requirements do not need to be a full specification, but must be clear enough for planning and validation.

---

#### Questioning Rules

- Start Phase 1 by asking the user for initial guidelines using a concise scaffold:
  - "Please share a few baseline guidelines for this goal."
  - Examples:
    - required behaviors or acceptance criteria
    - constraints (tech, policy, performance, security)
    - out-of-scope boundaries / non-goals

- Ask clarifying questions about the goal
- Gather specific technical requirements 
- Understand constraints and preferences 
- Probe for details about edge cases
- Understand user's preferred approach

Examples of clarifying questions:
  - Should this support [specific scenario]?
  - Do you want [approach A] or [approach B]?
  - What should happen when [edge case]?
  - Should I use [technology X] for this?
  - How should errors be handled in [specific situation]?
  - Should this integrate with [existing system/feature]?
  - What’s the expected behavior for [boundary condition]?
  - Are there any performance requirements?
  - Should this be configurable? If so, how?

- If any planning-critical question is still open:
  - Do **not** proceed to Phase 2
  - Ask follow-up questions until resolved or explicitly accepted as an assumption

- You may discuss options and tradeoffs when decisions are unclear  

---

#### Decision & Assumption Rules

- Do not make assumptions to complete missing information  
- If required information is missing, ask a question instead of proceeding  
- If a question is unanswered, mark it as **Open** and do not resolve it silently  

- Only proceed with a decision when:
  - the user has explicitly answered, or  
  - the user explicitly accepts an assumption  
- Do not convert missing information into implied defaults  

---

#### Environment & Implementation Boundaries

- Do not assume:
  - project location (repo, folder, service)
  - technology stack (language, framework, runtime)
  - file or directory structure

- Always confirm these before planning or execution  

- Capture unresolved decisions in **Open questions**  
- Capture constraints in **Constraints**  
- Ask explicitly when they affect planning or correctness  

---
### Goal Decomposition

- Even if the goal is a **single cohesive product**, evaluate whether it contains multiple **distinct subsystems**

- A subsystem is present if:
  - it has a separate responsibility (e.g. UI, backend, real-time sync, persistence)
  - it can be built and tested independently
  - it introduces its own technical concerns or architecture

- If multiple subsystems are detected:
  - propose them as **subgoals**
  - do not keep them as flat plan steps

- Cohesive product ≠ single goal for planning purposes

### Example

Input:
- Build a collaborative document editor

  Incorrect (flat plan):
  1. Set up project
  2. Implement real-time editing
  3. Add authentication
  4. Add cursor presence
  5. Add version history
  6. Build UI

  Correct (subgoal decomposition):

  Subgoals:
  1. Real-time synchronization engine  
  2. Authentication & session management  
  3. Presence system  
  4. Versioning & document history  
  5. Editor UI  

Each subgoal is then planned independently in Phase 2.

---

- If a goal is decomposed:
  - The original goal becomes the **parent goal**
  - Store child units under `blueprint/<parent-id>/subgoals/<child-id>/`
  - Do not nest subgoals  

- Only after the user explicitly confirms a split:
  - Update `blueprint/blueprint-queue.md`  
  - Maintain ordered goals with statuses (`[active]`, `[queued]`, `[done]`)  
  - Track the current active goal  

---

### Subgoal Execution Model

- Each subgoal must start from phase 0 again 
- Subgoals do NOT go through full Phase 1

- Subgoal Phase 1 is **refinement only**:
  - inherit parent requirements, constraints, and decisions
  - do not re-ask previously resolved questions
  - only ask subgoal-specific questions if needed

- If no new information is needed:
  - skip questioning entirely
  - proceed directly to Phase 2

- **Do not move on until the user explicitly approves this phase**  
  - Provide a brief recap of requirements, constraints, scope, and goal structure  
  - Ask if they are ready to continue  

---

### Output Format

Requirements:

Constraints:

Scope (in / out):

Open questions:

Goal structure:

---

- For open questions, track status per item:
  - `open`
  - `resolved`
  - `assumed-by-user`

- If multiple goals exist, maintain the backlog in:
  - `blueprint/blueprint-queue.md`