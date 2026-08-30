# Career Alpha End-to-End Case: From Generic Agent Demos to an Agent Reliability Wedge

> This is a **fictional but operational** case used to demonstrate how Career Alpha should behave across `/radar → /wedge → /build → /proof → /position → /interview → /offer`.
>
> 示例里的数字、公司和结果不是对任何真实用户的陈述。它们是为了展示 skill 的输入、推理边界、交接格式和最终产物。

## 0. Starting point

### Candidate profile

- CS master's student;
- comfortable with Python and TypeScript;
- has built several LLM / Agent demos;
- has hackathon experience but no big-tech internship;
- can spend 10–12 hours per week for the next month;
- target: AI Agent Engineer / Agent Application Engineer;
- market: Shenzhen, Hong Kong, remote-first AI startups.

### Current problem

The resume says things like:

> Built an AI Agent application using an LLM API, tools and memory.

The statement is not false, but it has weak market differentiation. Thousands of candidates can build a similar demo by following public tutorials. The goal is not to invent a stronger title. The goal is to create **a stronger underlying fact**.

---

# 1. `/radar`: discover where the demand is moving

## Input

```text
/radar

Background:
CS master's student. Python + TypeScript. Several agent demos. No big-tech internship.

Target:
AI Agent Engineer / AI Infrastructure-adjacent roles.

Region:
Shenzhen / Hong Kong / remote.

Time budget:
10–12h per week.
```

## Signal scan

The skill should separate **market signal** from social-media excitement. A reasonable output might look like this:

| Direction | Demand | Talent scarcity | Proofability | Timing | Alpha view |
| --- | ---: | ---: | ---: | ---: | --- |
| Generic RAG applications | 8 | 2 | 9 | 3 | SATURATED |
| Prompt engineering | 5 | 2 | 8 | 2 | SATURATED |
| Agent product integration | 8 | 5 | 8 | 6 | CONSENSUS / GROWING |
| Context engineering | 8 | 7 | 8 | 8 | GROWING |
| Agent evaluation | 9 | 8 | 9 | 9 | EARLY / GROWING |
| Agent reliability / observability | 9 | 8 | 8 | 9 | EARLY |

## Interpretation

The strongest opportunity is not necessarily the most technically difficult one. The interesting pattern is:

- companies are moving from demos to repeatable production behavior;
- production agents create new failure modes: tool errors, context drift, retries, latency, cost, non-determinism;
- these problems create demand for evaluation and reliability work;
- the candidate can build evidence in this direction without first becoming an infrastructure expert.

## Radar output

```yaml
trend: Agent reliability and evaluation
stage: EARLY_TO_GROWING
why_now:
  - production agent deployments create reliability problems
  - evaluation becomes necessary when behavior is non-deterministic
  - teams need repeatable evidence, not demo quality
candidate_fit:
  - already understands basic agent architecture
  - can code evaluation harnesses in Python
  - can create measurable results within one week
counter_evidence:
  - some teams may fold eval work into general application engineering
  - titles may not explicitly contain "Agent Reliability Engineer"
next_skill: /wedge
```

### Handoff

`/radar` does **not** say "become an Agent Reliability Engineer" as a fact. It passes a market hypothesis to `/wedge`.

---

# 2. `/wedge`: turn a broad trend into an entry point

A trend is not a job strategy. `/wedge` asks: **What small area can this candidate credibly enter?**

## Bad wedge

```text
Build another ChatGPT clone with tools and memory.
```

Why it is weak:

- extremely easy to reproduce;
- little evidence of system judgment;
- difficult to distinguish tutorial following from engineering ability;
- weak interview depth.

## Better wedge

```text
Agent reliability / evaluation for tool-using agents.
```

### Opportunity score

| Dimension | Score | Reason |
| --- | ---: | --- |
| Demand | 9/10 | reliability becomes more important as agents move into workflows |
| Scarcity | 8/10 | fewer candidates show concrete eval work than generic agent demos |
| Proofability | 9/10 | results can be benchmarked and reproduced |
| Accessibility | 8/10 | can start from application engineering, not deep distributed systems |
| Interview depth | 9/10 | task design, metrics, ablation and failure analysis invite real discussion |

### Wedge thesis

> I do not need to claim I am already an infrastructure engineer. I can become an application engineer who has unusually strong evidence in **Agent Eval + Reliability**.

### Kill criteria

The skill should also specify what would make this thesis wrong:

1. a meaningful sample of target companies shows no reliability / eval demand;
2. the candidate cannot produce a meaningful benchmark beyond trivial retries;
3. the work is indistinguishable from copying an existing tutorial;
4. another wedge produces materially stronger evidence for the same time cost.

### Cheapest next test

> Build a small benchmark first. Do not spend a month building a platform.

`next_skill: /build`

---

# 3. `/build`: create a 72-hour Proof-of-Work mission

## Mission

**Agent Harness Reliability Benchmark**

Build a reproducible benchmark that tests a tool-using agent across 50 tasks and compares a baseline with several harness interventions.

## Scope

### Baseline

- single model version pinned in config;
- fixed task set;
- fixed tool definitions;
- no retry policy beyond hard failure;
- simple context accumulation.

### Interventions

- bounded retry policy;
- tool-error recovery;
- context trimming / compression rule;
- memory retrieval rule;
- explicit failure taxonomy.

### Minimum artifacts

```text
agent-reliability-benchmark/
├── README.md
├── tasks/
│   └── benchmark.jsonl
├── src/
│   ├── baseline.py
│   ├── harness.py
│   └── evaluator.py
├── results/
│   ├── baseline.csv
│   ├── harness.csv
│   └── failures.csv
├── docs/
│   └── architecture.md
└── demo/
    └── sample-run.md
```

## 72-hour plan

### Day 1 — make the baseline honest

- define 50 tasks;
- define success criteria before seeing results;
- run baseline;
- document at least five failure categories;
- commit results.

**Exit criterion:** baseline is reproducible.

### Day 2 — intervene

- implement retry policy;
- implement tool failure recovery;
- implement context policy;
- run same task set;
- save all raw outcomes.

**Exit criterion:** improvement or regression can be measured, not merely felt.

### Day 3 — make it interviewable

- run an ablation where possible;
- write failure analysis;
- draw architecture;
- document what did **not** improve;
- package README and demo.

**Exit criterion:** another engineer can understand the experiment without a live explanation.

## Example result

For the fictional case:

```text
Baseline completion: 61%
Harness completion: 78%
```

These numbers only become resume-usable after `/proof` audits how they were produced.

---

# 4. `/proof`: convert activity into defensible evidence

The project existing on GitHub is not enough. `/proof` creates the Claim–Evidence Ledger.

## Evidence Card A

```yaml
claim: Built an agent reliability benchmark across 50 tool-using tasks
evidence:
  - repository URL
  - benchmark task file
  - evaluator implementation
  - commit history
result: 50-task reproducible benchmark exists
ownership:
  personal:
    - benchmark design
    - evaluator
    - harness implementation
  team: []
confidence: VERIFIED
safe_wording: Built a 50-task benchmark for evaluating reliability of a tool-using agent.
interview_risks:
  - Why 50 tasks?
  - How were tasks selected?
  - Was the metric defined before running the experiment?
```

## Evidence Card B

```yaml
claim: Improved completion rate from 61% to 78%
evidence:
  - baseline.csv
  - harness.csv
  - evaluator code
  - pinned model config
result: +17 percentage points on the defined benchmark
confidence: SUPPORTED
safe_wording: Increased completion from 61% to 78% on a fixed 50-task internal benchmark after adding recovery and context policies.
strong_wording_requires:
  - repeated trials
  - confidence interval or variance discussion
  - clear model/version controls
interview_risks:
  - Did one component drive most of the gain?
  - Could the improvement be model variance?
  - Did any task categories regress?
```

## Important behavior

Notice that `/proof` does **not** automatically upgrade the second claim to `VERIFIED`. The raw output exists, but causal language needs stronger controls.

`next_skill: /position`

---

# 5. `/position`: translate evidence into job-market language

## Before

> Built an AI Agent project using tools, memory and an LLM API.

## Safe positioning

> AI / Agent Application Engineer with hands-on experience building evaluation and reliability tooling for tool-using agents.

## Stretch positioning

> Agent Systems Engineer focused on evaluation, harness reliability and context strategy.

This stretch version is usable only if the candidate clearly explains that the experience comes from a self-directed benchmark rather than production ownership at a company.

## Resume bullets

### Conservative

> Built a 50-task reliability benchmark for a tool-using agent, defining success criteria, failure taxonomy and reproducible evaluation outputs across baseline and harness variants.

### Evidence-backed result bullet

> Increased completion from 61% to 78% on a fixed internal benchmark after adding bounded retries, tool-error recovery and context policies; documented ablations, regressions and failure cases.

## Founder / engineer outreach

> I'm exploring agent reliability rather than building another generic agent demo. I recently built a small 50-task harness benchmark and compared retry, recovery and context policies. I'm looking for teams where eval/reliability is becoming a real production bottleneck, and I'd be happy to share the benchmark or reproduce a smaller version around your workflow.

## Evidence gaps before the next positioning level

- production observability;
- external users or real workflow data;
- collaboration in an existing eval / agent codebase;
- latency / cost tradeoff evidence.

This immediately creates new actions for `/contributor` or another `/build` mission.

---

# 6. `/interview`: pressure-test the strongest claims

The interview skill should attack the claim, not compliment the resume.

## Five-layer drill

### Q1

Why did you choose 50 tasks?

### Q2

How do you know those 50 tasks represent the behavior you care about?

### Q3

You say completion improved from 61% to 78%. How many repeated runs did you perform, and what was the variance?

### Q4

Which intervention contributed most? What happens if you remove retry while keeping context policy?

### Q5

Suppose the model provider silently improves tool calling next month. How would you redesign the benchmark so the harness contribution is still measurable?

## Defense report

```yaml
technical_depth: 8/10
ownership: 9/10
evidence_quality: 8/10
causal_rigor: 6/10
system_thinking: 8/10
highest_risk_claim: "61% → 78% improvement"
next_drill:
  - repeated trials
  - ablation table
  - task sampling bias
```

The correct outcome of `/interview` may be: **weaken the resume wording until more evidence exists.**

---

# 7. `/offer`: use the market as feedback

Suppose the candidate targets 20 companies.

| Stage | Count |
| --- | ---: |
| Targeted | 20 |
| Personalized outreach | 12 |
| Applications | 10 |
| Recruiter / engineer replies | 5 |
| Technical interviews | 3 |
| Offers | 1 |

The important part is not the fictional offer. The important part is how feedback changes the upstream hypothesis.

### Example feedback

- Company A: interested in eval work, asks for production monitoring experience;
- Company B: likes benchmark but role is mostly frontend integration;
- Company C: asks deep questions about cost and latency;
- Company D: no response;
- Company E: says reliability work is owned by platform team.

## Feedback loop

This should update Career Alpha:

```text
/offer feedback
      ↓
/proof: add missing cost / latency evidence
      ↓
/position: narrow role language
      ↓
/wedge: test whether observability is a stronger wedge
      ↓
/build: create the next smallest proof
```

Career Alpha is therefore not a one-shot resume generator. It is a **career hypothesis loop**.

---

# 8. What the candidate has after one cycle

Before Career Alpha:

```text
I know Python and have built a few agent demos.
```

After one properly executed cycle:

```text
I have a reproducible agent reliability benchmark,
raw results,
a failure taxonomy,
an architecture explanation,
a set of bounded resume claims,
and evidence about how the market reacts to that positioning.
```

The main value is not prettier wording. The candidate has changed the underlying state of the resume.

---

# 9. Load this case in the Workbench

Open [`assets/career-alpha-workbench.html`](../assets/career-alpha-workbench.html) locally and click **载入示例**. The built-in demo mirrors the core state of this case:

- trend radar;
- Agent Reliability wedge;
- Proof of Work;
- Claim–Evidence Ledger;
- positioning;
- interview risk;
- application pipeline.

The Workbench is intentionally local-first. It does not upload candidate data to the repository or a remote service.
