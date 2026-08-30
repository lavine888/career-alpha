# Career Alpha Case — AI Product Manager

> Fictional but realistic example. The purpose is to demonstrate the workflow, not to claim real hiring outcomes.

## Starting point

**Profile**
- business / information systems background;
- one AI hackathon and several product prototypes;
- strong user research and storytelling;
- weak evidence of owning production metrics or technical delivery;
- target: AI Product Manager / AI Product Ops.

The weak version of the job-search strategy is:

> “I used ChatGPT, built a chatbot demo and understand AI products.”

That is easy to imitate and hard to defend.

---

## 1. `/radar` — Find the market shift

Candidate signals:

| Direction | Demand | Scarcity | Proofability | Status |
| --- | ---: | ---: | ---: | --- |
| Generic AI PM | 8 | 3 | 4 | CONSENSUS |
| AI workflow redesign | 8 | 7 | 8 | GROWING |
| Human-in-the-loop eval ops | 7 | 8 | 9 | EARLY / GROWING |
| Prompt library management | 4 | 3 | 6 | SATURATED |

**Observation**

Companies increasingly need PMs who can turn model capability into a measurable workflow, not just write PRDs around a chatbot.

**Top hypothesis**

> AI Product PM with strong workflow-evaluation capability may be a better wedge than “generic AI PM.”

---

## 2. `/wedge` — Pick a narrow entry point

### Candidate A — Chatbot feature PM

- demand: high;
- supply: high;
- proofability: low unless real product data exists;
- differentiation: weak.

### Candidate B — AI workflow PM

- demand: high;
- supply: medium;
- proofability: high;
- can demonstrate user journey, failure taxonomy, human fallback and outcome metrics.

### Candidate C — AI eval / operations PM

- demand: emerging;
- supply: low;
- proofability: high;
- best fit for someone who can combine product thinking with structured evaluation.

**Selected wedge**

> AI Workflow + Evaluation PM.

---

## 3. `/build` — 5-day proof-of-work mission

### Mission

Redesign a real knowledge-work workflow using an LLM while measuring whether the new workflow actually improves completion quality.

Example:

> Research brief generation for a small investment / consulting team.

### Baseline

Human-only workflow:
- average completion time;
- number of sources checked;
- factual-error rate;
- revision count.

### Intervention

Create an AI-assisted flow:
1. structured research prompt;
2. source collection;
3. claim extraction;
4. evidence check;
5. human approval;
6. final brief.

### Evaluation

Run 15–30 briefs through both flows.

Capture:
- time-to-first-draft;
- factual errors;
- unsupported claims;
- human revision effort;
- cases where AI should abstain.

### Deliverables

- workflow diagram;
- product spec;
- eval rubric;
- raw result table;
- failure taxonomy;
- demo;
- README explaining trade-offs.

---

## 4. `/proof` — Build the ledger

### Claim 1

**Claim:** Designed an AI-assisted research workflow with explicit evidence verification and human approval.

**Evidence:** workflow diagram, repo, product spec, demo.

**Confidence:** VERIFIED.

### Claim 2

**Claim:** Reduced average first-draft time by 40%.

**Evidence:** only safe if the experiment records timestamps for both baseline and intervention.

**Confidence:** VERIFIED if measured; otherwise SUPPORTED / remove the number.

### Claim 3

**Claim:** Built a production AI research system.

**Evidence:** no production deployment.

**Verdict:** DOWNGRADE.

Safe wording:

> Built and evaluated a prototype AI-assisted research workflow with source verification and human fallback.

---

## 5. `/position` — Translate evidence

### Safe Position

> AI product builder focused on workflow redesign, evaluation and human-in-the-loop product systems.

### Strong Position

> AI Product candidate who can define user workflows, evaluation criteria and operational guardrails for LLM-powered products.

### Future Position

> AI Product Manager owning production adoption and business metrics.

**Missing evidence for Future Position**
- real users;
- production rollout;
- retention / usage / revenue metrics;
- cross-functional delivery ownership.

### Resume bullet

> Designed and evaluated an LLM-assisted research workflow with source verification, failure taxonomy and human approval; benchmarked baseline vs. AI-assisted completion quality across a fixed task set.

---

## 6. `/interview` — Pressure test

High-risk questions:

1. Why was this a product problem rather than a prompt-engineering problem?
2. What user behavior changed after the workflow redesign?
3. How did you measure quality?
4. Which failure mode mattered most?
5. What did the human reviewer still need to do?
6. Why would a company pay for this workflow?
7. What would you instrument in production?

If the candidate can only describe the interface and not the metric design, the positioning should be downgraded.

---

## 7. `/offer` — Market feedback

Track separately:

- generic AI PM applications;
- workflow / automation PM roles;
- AI operations / eval-adjacent roles.

If workflow-focused outreach gets materially better engineering / founder responses, KEEP the wedge. If PM interviews consistently demand shipped-user metrics, the next mission should add real external users rather than another prototype.

---

## What this case demonstrates

Career Alpha does not ask:

> “How do I make a chatbot project sound like product management?”

It asks:

> “What product evidence would make an AI PM claim more defensible?”

The answer is often **workflow + evaluation + user behavior + operational trade-offs**, not more adjectives.