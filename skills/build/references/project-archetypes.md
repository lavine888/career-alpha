# Proof-of-Work Project Archetypes

Use these archetypes to avoid defaulting to generic app demos.

## 1. Benchmark Project

Best for proving:

- evaluation design;
- reliability;
- model / system comparison;
- performance tradeoffs;
- regression thinking.

Minimum artifacts:

- fixed task set;
- explicit metric;
- baseline;
- result table;
- failure cases;
- reproduction instructions.

Strong interview questions naturally emerge: task sampling, metric validity, variance, ablation, regressions.

---

## 2. Reliability / Failure-analysis Project

Best for proving:

- production mindset;
- failure taxonomy;
- recovery design;
- observability;
- defensive engineering.

Minimum artifacts:

- failure categories;
- reproduction cases;
- instrumentation / logs;
- interventions;
- before / after evidence.

Do not claim production reliability without production evidence. A local harness can prove **reliability engineering judgment**, not ownership of a production platform.

---

## 3. Vertical Workflow Project

Best for proving:

- domain understanding;
- product judgment;
- end-to-end workflow design;
- user feedback.

Minimum artifacts:

- real user / workflow description;
- non-trivial domain constraint;
- user test or operator feedback;
- one measurable outcome or decision log.

Avoid "AI for X" where X is merely a landing-page label.

---

## 4. Integration Project

Best for proving:

- API / SDK integration;
- systems glue;
- developer experience;
- deployment.

Minimum artifacts:

- working integration;
- setup docs;
- error handling;
- compatibility decisions;
- test or demo.

Stronger if contributed back to a real ecosystem.

---

## 5. Cost / Latency Optimization Project

Best for proving:

- engineering tradeoffs;
- measurement discipline;
- performance reasoning.

Minimum artifacts:

- baseline cost / latency;
- intervention;
- controlled comparison;
- quality tradeoff;
- limitations.

Avoid unsupported "X% optimization" claims when measurement setup is weak.

---

## 6. Open-source Extension Project

Best for proving:

- codebase reading;
- collaboration;
- external review;
- compatibility thinking.

If the work belongs in an existing repository, consider `/contributor` instead of building a separate clone.

---

## 7. Reproduction / Replication Project

Best for entering a new technical area quickly.

Examples:

- reproduce a paper result;
- reproduce an engineering blog benchmark;
- reproduce a bug / failure mode;
- reimplement a small public system and compare behavior.

The value comes from **verification and interpretation**, not pretending the reproduced idea is original.

---

## Choosing an archetype

Prefer the archetype that maximizes:

```text
career-relevant evidence / time-to-first-verifiable-artifact
```

A 3-day benchmark with clean evidence can be more valuable than a 3-week platform with no users, metrics or external validation.