# Career Alpha Case — Robotics / Physical AI Engineer

> Fictional example for demonstrating the Career Alpha method across a hardware-adjacent field.

## Starting point

**Profile**
- CS / EE student;
- comfortable with Python and basic ROS;
- has followed robotics tutorials and run simulation demos;
- limited real hardware access;
- target: Robotics Software / Physical AI / Embodied AI Engineer.

A weak portfolio looks like:

> “Ran a robot navigation demo in simulation.”

That is useful for learning, but weak as a hiring signal because the exact same demo can often be reproduced from a tutorial.

---

## 1. `/radar` — Separate hype from engineering demand

Candidate themes:

| Direction | Demand | Scarcity | Proofability | Status |
| --- | ---: | ---: | ---: | --- |
| Generic humanoid demos | 8 | 4 | 3 | HYPE / CONSENSUS |
| Robot foundation models | 8 | 8 | 5 | EARLY |
| Simulation-to-real reliability | 8 | 8 | 8 | GROWING |
| Robot data / eval tooling | 8 | 9 | 9 | EARLY / GROWING |
| ROS integration / observability | 7 | 7 | 9 | GROWING |

**Top hypothesis**

> Reliability, data quality and evaluation around embodied systems may offer a stronger entry wedge than trying to compete on “I trained a foundation model.”

This matters especially for candidates without a large robot fleet or massive compute budget.

---

## 2. `/wedge` — Find an accessible wedge

### Candidate A — Train a robot foundation model

- high prestige;
- very high resource requirement;
- difficult to prove independently;
- not a good 2–7 day wedge.

### Candidate B — Simulation benchmark

- lower entry friction;
- high proofability;
- exposes systems thinking;
- can measure failure rather than only show success.

### Candidate C — ROS observability / recovery tooling

- less flashy;
- directly connected to real engineering pain;
- good open-source contribution path.

**Selected wedge**

> Robot task evaluation + failure recovery in simulation.

---

## 3. `/build` — 7-day proof-of-work mission

### Mission

Build a small benchmark for a navigation / manipulation task that measures not only task success, but also **failure type, recovery behavior and reproducibility**.

### Scope

Use an accessible simulator and a fixed task set.

Examples:
- navigation around dynamic obstacles;
- grasp-and-place with randomized object positions;
- instruction-following with a small set of environment variations.

### Baseline

Record the default policy / planner performance:
- task success;
- time to completion;
- collision / safety violations;
- retry count;
- unrecovered failures.

### Intervention

Add one bounded improvement:
- recovery policy;
- state reset logic;
- retry budget;
- better failure detector;
- task decomposition;
- observability / logging layer.

### Evaluation

Run the same fixed seeds / scenarios before and after the intervention.

Capture:
- success delta;
- failure-type distribution;
- new regressions;
- cases where recovery made things worse;
- latency / compute overhead if relevant.

### Deliverables

- reproducible environment setup;
- scenario config;
- benchmark runner;
- failure taxonomy;
- result CSV / JSON;
- architecture diagram;
- short demo video or GIF;
- README with known limitations.

---

## 4. `/contributor` — Add external validation

Possible contribution targets:
- simulator examples;
- ROS packages;
- logging / visualization tooling;
- benchmark docs;
- reproducibility fixes;
- tests around edge cases.

The goal is not to spam trivial PRs. A small merged fix in a relevant robotics package may add more external credibility than another isolated simulation screenshot.

Record:
- PR URL;
- changed files;
- test / validation method;
- maintainer feedback;
- merge status.

---

## 5. `/proof` — Audit the robotics claims

### Claim 1

> Built a reproducible task-evaluation benchmark for simulated robot navigation and categorized recovery failures across fixed scenarios.

Evidence:
- repo;
- scenario configs;
- benchmark output;
- demo;
- failure taxonomy.

Confidence: VERIFIED.

### Claim 2

> Improved robot reliability by 25%.

Only safe if “reliability” is explicitly defined and the before/after runs use comparable scenarios.

Otherwise rewrite:

> Increased fixed-scenario task success from X to Y after adding bounded recovery logic.

### Claim 3

> Built a production robotics system.

Not supported by simulation-only work.

Verdict: REMOVE / DOWNGRADE.

---

## 6. `/position` — Translate the evidence

### Safe Position

> Robotics software candidate focused on evaluation, reliability and reproducible simulation workflows.

### Strong Position

> Physical AI / robotics software candidate with hands-on experience building task benchmarks, failure taxonomies and recovery logic for embodied systems.

### Future Position

> Robotics engineer owning real-world deployment and sim-to-real reliability.

Missing evidence:
- hardware integration;
- sensor / actuator constraints;
- field failures;
- deployment / operations;
- real-time performance.

### Resume bullet

> Built a reproducible robotics task benchmark with fixed scenarios, failure taxonomy and recovery evaluation; measured success, retries and regressions rather than relying on demo-only validation.

---

## 7. `/interview` — Pressure test

Likely follow-ups:

1. Why did you choose these scenarios?
2. How did you control random seeds?
3. What failure types were most common?
4. When did recovery logic make performance worse?
5. What would break when moving from simulation to real hardware?
6. Which sensor / timing assumptions are unrealistic?
7. What would you log on a physical robot?
8. How would you design a sim-to-real acceptance test?

A good answer should clearly separate **simulation evidence** from **real-world claims**.

---

## 8. `/offer` — Read the market feedback

Track response by role family:

- robotics software;
- embodied AI research engineering;
- simulation / tooling;
- infrastructure / observability;
- controls / planning.

If interviews consistently value systems / C++ depth more than model knowledge, route back to `/wedge` and build an integration-oriented mission instead of stacking more perception demos.

---

## What this case demonstrates

Career Alpha can create leverage even when the candidate lacks expensive hardware.

The asymmetric move is often not:

> “Build the flashiest robot demo.”

It is:

> “Own a hard-to-fake engineering layer—evaluation, failure analysis, integration or reliability—and produce evidence that survives technical follow-up.”