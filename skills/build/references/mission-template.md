# Career Alpha Mission Brief Template

## 1. Career claim to prove

Write one primary claim only.

```text
I want this project to prove that I can ____________________.
```

If the project tries to prove five unrelated skills, reduce scope.

## 2. User / problem

```text
Who has the problem?
What happens today?
Why does the problem matter?
Why is now a reasonable time to solve it?
```

## 3. Baseline

Define the current system / naïve solution before building.

```text
Baseline implementation:
Baseline metric:
Baseline data / task set:
Known limitations:
```

## 4. Intervention

```text
What will change?
Why might it help?
What will remain controlled?
```

## 5. Evaluation

```text
Primary metric:
Secondary metric:
Task / sample size:
Failure taxonomy:
Repeated trials required?:
```

## 6. Scope

### In scope

- 

### Non-goals

- 

Non-goals are mandatory for 2–7 day missions.

## 7. Deliverables

At least three:

- source repository;
- README;
- benchmark / test output;
- architecture diagram;
- demo;
- failure analysis;
- user feedback;
- deployment URL;
- PR / external review.

## 8. Definition of Done

Use observable conditions, not feelings.

Bad:

> Project looks polished.

Good:

> 50 fixed tasks run from one command and produce `results.csv`.

## 9. Evidence capture plan

Before coding, specify what must be retained:

- commits;
- raw results;
- logs;
- screenshots;
- links;
- test commands;
- model / dependency versions;
- user feedback;
- rejected approaches.

## 10. Schedule

### 72h version

```text
Day 1 — baseline + first raw evidence
Day 2 — intervention + comparison
Day 3 — failure analysis + packaging
```

### 7-day version

Use when external users, deployment or deeper ablation are needed.

## 11. Stop conditions

Stop / simplify when:

- baseline is not reproducible;
- the core metric cannot be defined;
- scope expands beyond the career claim;
- the project becomes a generic full-stack platform;
- a simpler artifact can prove the same claim.

## 12. Handoff to `/proof`

```yaml
career_claim:
artifact_links:
baseline:
result:
ownership:
failures:
limitations:
planned_but_not_completed:
```
