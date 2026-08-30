# Interview Defense Scoring Rubric

Score 1–10 only when enough interaction exists. Do not manufacture precision from one short answer.

## Technical Depth

### 1–3

- repeats terminology;
- cannot explain implementation or data flow;
- confuses tool / framework behavior.

### 4–6

- understands implementation;
- can explain normal path;
- weak on edge cases and alternatives.

### 7–8

- explains architecture, failure modes and tradeoffs;
- can reason beyond memorized implementation.

### 9–10

- can redesign under new constraints;
- understands systemic consequences and limitations.

## Ownership

### 1–3

- cannot separate personal work from team result;
- uses `led / owned` without decisions.

### 4–6

- clear implementation scope;
- some decisions are explainable.

### 7–8

- clear responsibility boundary;
- explains decisions, coordination and acceptance criteria.

### 9–10

- demonstrates end-to-end responsibility while accurately crediting others.

## Evidence Quality

### 1–3

- unsupported statements;
- numbers from memory;
- status ambiguity.

### 4–6

- artifacts exist but measurement / provenance is incomplete.

### 7–8

- reproducible evidence or strong external validation.

### 9–10

- multiple independent evidence types; strong provenance; limitations documented.

## Decision Quality

Look for:

- explicit alternatives;
- constraints;
- rejected options;
- tradeoffs;
- why the chosen approach fit the situation.

## Failure Understanding

High score requires:

- concrete failure cases;
- reproduction;
- failed fixes;
- residual limitations;
- learning after failure.

## Communication

High score is not “sounds polished”. It means:

- answers the question directly;
- separates fact from hypothesis;
- gives enough technical detail without drowning the interviewer;
- admits uncertainty precisely.

---

# Claim-level verdicts

Use alongside numeric scores:

- `DEFENSIBLE` — current wording and understanding align;
- `DEFENSIBLE_WITH_BOUNDARY` — usable if context is stated;
- `KNOWLEDGE_GAP` — evidence may exist, but candidate cannot explain it;
- `EVIDENCE_GAP` — candidate understands it, but claim outruns evidence;
- `OWNERSHIP_GAP` — team result is stronger than personal role;
- `DOWNGRADE` — resume wording should be weakened now;
- `REMOVE` — not worth defending in current form.

---

# Defense Report

```yaml
claim:
verdict:
technical_depth:
ownership:
evidence_quality:
decision_quality:
failure_understanding:
communication:
strongest_answer:
weakest_answer:
missing_knowledge:
missing_evidence:
recommended_action:
resume_wording_change:
```
