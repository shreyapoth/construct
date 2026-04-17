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

### Rules

#### Questioning Rules

- Start Phase 1 by asking the user for initial guidelines using a concise scaffold:
  - "Please share a few baseline guidelines for this goal."
  - Examples:
    - required behaviors or acceptance criteria
    - constraints (tech, policy, performance, security)
    - out-of-scope boundaries / non-goals

- After the user provides input:
  - Ask **3–5 specific, actionable follow-up questions** (not open-ended)
  - Provide options when helpful, but allow custom input
  - Track unanswered items explicitly

- Non-critical questions may remain open and be tracked explicitly

- You may discuss options and tradeoffs when decisions are unclear  
- The user makes the final decision when multiple reasonable options exist

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

#### Goal Decomposition & Queue Management

- When the work **might** be **multiple independent outcomes**:
  - Offer a proposed grouping and ask for confirmation  
  - The user decides how goals are split  

- If a goal is decomposed:
  - The original goal becomes the **parent goal** and remains unchanged  
  - Store child units under `blueprint/<parent-id>/subgoals/<child-id>/`  
  - Do not nest subgoals  

- Each goal or subgoal is an independent unit and must begin from Phase 0  

- Subgoals inherit only resolved context  
- Do not carry unresolved questions into subgoals without restating them  

- Only after the user explicitly confirms a split:
  - Update `blueprint/blueprint-queue.md`  
  - Maintain ordered goals with statuses (`[active]`, `[queued]`, `[done]`)  
  - Track the current active goal  

---

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