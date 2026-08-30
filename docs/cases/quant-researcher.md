# Career Alpha Case — Quant Researcher

> Fictional example for demonstrating the workflow. Results below are illustrative unless the user actually reproduces and records them.

## Starting point

**Profile**
- mathematics / CS background;
- knows Python, pandas and basic backtesting;
- has built several factor notebooks;
- no institutional quant internship;
- target: Quant Research / Systematic Research / Quant Developer.

A weak portfolio strategy is:

> “I backtested momentum, value and mean reversion.”

Those ideas are common. The hiring signal comes from research discipline, data quality, robustness and the ability to explain why an apparent edge may disappear.

---

## 1. `/radar` — Find where the hiring signal is shifting

Candidate themes:

| Direction | Demand | Scarcity | Proofability | Status |
| --- | ---: | ---: | ---: | --- |
| Generic factor backtests | 6 | 2 | 7 | SATURATED |
| Alternative data pipelines | 7 | 7 | 8 | GROWING |
| Research reproducibility / data QA | 8 | 8 | 9 | GROWING |
| LLM-generated trading signals | 6 | 5 | 7 | HYPE / EARLY |
| Execution / market microstructure tooling | 7 | 8 | 8 | EARLY / GROWING |

**Top hypothesis**

> A candidate who can show robust research infrastructure and honest failure analysis may signal more value than another notebook with a high Sharpe ratio.

---

## 2. `/wedge` — Pick the asymmetric research wedge

### Candidate A — “Find a high-return factor”

Crowded and easy to overfit.

### Candidate B — Robustness-first factor research

Show:
- data cleaning;
- universe construction;
- transaction costs;
- walk-forward / out-of-sample checks;
- sensitivity analysis;
- failure regimes.

### Candidate C — Alternative-data feature pipeline

Potentially strong, but data licensing and reproducibility can raise entry cost.

**Selected wedge**

> Robustness-first systematic research with reproducible data and failure analysis.

Why this wedge:
- highly interview-defensible;
- directly exposes research judgment;
- can be built without pretending to have proprietary alpha;
- transferable to quant research and data-heavy engineering roles.

---

## 3. `/build` — 7-day research mission

### Mission

Take one simple signal—e.g. short-term reversal or cross-sectional momentum—and build a research package whose goal is **not** to maximize backtest performance, but to explain when the signal survives and when it fails.

### Day 1 — Data contract

Define:
- universe;
- price source;
- survivorship handling;
- corporate-action assumptions;
- missing-data rules.

### Day 2 — Baseline

Implement the simplest version of the factor and record:
- gross return;
- turnover;
- drawdown;
- exposure profile.

### Day 3 — Cost model

Add at least one explicit transaction-cost assumption and compare results.

### Day 4 — Robustness

Run:
- subperiod analysis;
- parameter sensitivity;
- universe sensitivity;
- delayed execution / lag checks.

### Day 5 — Failure taxonomy

Document regimes where the effect weakens or reverses.

### Day 6 — Research hygiene

Add:
- reproducible config;
- testable data transforms;
- cached intermediate outputs;
- experiment table.

### Day 7 — Research memo

Deliver:
- methodology;
- assumptions;
- result table;
- failure cases;
- what would invalidate the thesis;
- next experiment.

---

## 4. `/proof` — Audit the claims

### Weak claim

> Built a strategy with Sharpe 2.1.

Problems:
- sample window?
- costs?
- benchmark?
- out-of-sample?
- data leakage?

Unless all are documented, this is a high-risk resume claim.

### Better claim

> Built a reproducible cross-sectional factor research pipeline with transaction-cost modeling, subperiod robustness checks and parameter sensitivity analysis; documented regimes where the signal degraded.

Evidence:
- code;
- config;
- research memo;
- experiment table;
- raw / processed data provenance;
- sensitivity charts.

Confidence: VERIFIED if artifacts exist.

### Ownership boundary

Do not claim proprietary alpha, live trading or production PnL without direct evidence.

---

## 5. `/position` — Translate the research

### Safe Position

> Quant-oriented researcher with strong reproducibility, data QA and robustness habits.

### Strong Position

> Systematic research candidate able to turn a trading hypothesis into a reproducible experiment with cost, sensitivity and failure-regime analysis.

### Future Position

> Production quant researcher with live strategy ownership.

Missing evidence:
- real execution;
- production infrastructure;
- live risk management;
- institutional research process.

### Resume bullet

> Built a reproducible factor-research pipeline with transaction-cost modeling, subperiod and parameter robustness checks, and explicit failure-regime analysis rather than optimizing solely for headline backtest performance.

---

## 6. `/interview` — Pressure test

Likely follow-ups:

1. Why this universe?
2. How did you avoid survivorship bias?
3. Why is your cost assumption reasonable?
4. What happens if you delay execution by one day?
5. Which parameter is the result most sensitive to?
6. What regime breaks the factor?
7. How would you know whether you overfit?
8. What would you test before allocating real capital?

A candidate who can answer these questions is signaling research judgment, not just library familiarity.

---

## 7. `/offer` — Use interviews as new data

Tag feedback by role:

- pure research;
- quant dev;
- data / research infra;
- execution / microstructure.

Repeated feedback such as “good research, weak C++ / systems depth” should route to a new `/wedge` or `/build` mission rather than another factor notebook.

---

## What this case demonstrates

Career Alpha treats **research process itself as Proof of Work**.

The career edge is not necessarily:

> “I found a secret factor.”

It can be:

> “I can run disciplined, reproducible research and tell you exactly why a result might be wrong.”