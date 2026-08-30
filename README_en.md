<div align="center">

# Career Alpha

### AI-native Career OS

**Find your career alpha before it becomes consensus.**

[中文](README.md) · [Workbench](assets/career-alpha-workbench.html) · [End-to-End Case](docs/agent-engineer-end-to-end.md)

![License](https://img.shields.io/badge/license-MIT-2f81f7)
![Codex](https://img.shields.io/badge/Codex-skill-111827)
![Claude Code](https://img.shields.io/badge/Claude_Code-plugin-d97757)
![OpenCode](https://img.shields.io/badge/OpenCode-plugin-2563eb)
![Evidence First](https://img.shields.io/badge/method-evidence--first-16a34a)

</div>

---

Most career tools start with:

> **What have you already done, and how can we write it better?**

Career Alpha moves one step upstream:

> **What should you do in the next two weeks so that you become more valuable six months from now?**

It closes the loop from **trend discovery → asymmetric wedge → proof creation → external contribution → evidence audit → positioning → interview defense → market feedback**.

The goal is not to polish weak facts. It is to create **better facts worth putting on a resume**.

![Career Alpha journey](assets/career-alpha-visual-02.png)

---

## ⚡ Try the Career Alpha Workbench

The repository includes a self-contained local Workbench:

**[`assets/career-alpha-workbench.html`](assets/career-alpha-workbench.html)**

Download it and open it in a browser. No framework, backend, account, or installation is required.

It tracks:

- **Trend Radar** — scores and EARLY / GROWING / SATURATED states;
- **Opportunity Wedge** — demand, scarcity, proofability, timing, kill criteria;
- **Proof of Work** — project / PR / benchmark status;
- **Claim–Evidence Ledger** — VERIFIED / SUPPORTED / SELF-REPORTED / PLANNED;
- **Positioning** — Safe / Strong / missing evidence;
- **Interview Defense** — highest-risk claim and next drill;
- **Application Pipeline** — Target → Outreach → Interview → Offer.

Data is stored in browser `localStorage` by default. The Workbench supports JSON import/export and does not automatically upload personal data.

Click **Load Demo / 载入示例** to see the Agent Engineer case pre-filled.

---

## 🎯 End-to-End Example

Starting point:

```text
CS master's student
Python + TypeScript
several Agent demos
no big-tech internship
Target: AI Agent Engineer
```

Career Alpha does not simply rewrite those demos to sound senior.

```text
/radar
Generic RAG       → SATURATED
Agent Eval        → EARLY / GROWING
Agent Reliability → EARLY
        ↓
/wedge
Agent Reliability / Evaluation
        ↓
/build
72h Agent Harness Reliability Benchmark
        ↓
/proof
benchmark + raw CSV + failure taxonomy + architecture
        ↓
/position
an evidence-bounded Agent Evaluation / Reliability narrative
        ↓
/interview
task sampling / baseline / ablation / model variance / ownership
        ↓
/offer
use real replies, interviews and rejections to retest the hypothesis
```

Read the full walkthrough: **[Agent Engineer End-to-End Case](docs/agent-engineer-end-to-end.md)**.

---

## Core Loop

```text
/radar
  ↓ discover emerging real demand
/wedge
  ↓ choose the smallest asymmetric entry point
┌────────────────┐
│                │
▼                ▼
/contributor    /build
real OSS proof   Proof of Work
│                │
└────────┬───────┘
         ↓
       /proof
Claim–Evidence Ledger
         ↓
     /position
Safe / Strong / Future Position
         ↓
┌────────┴────────┐
▼                 ▼
/interview       /offer
pressure-test     market feedback
claims              │
                    └──→ back to /radar /wedge /build
```

This is a **career hypothesis loop**, not a one-shot resume generator.

---

## The 8 Skills

| Skill | Core question | Main output |
| --- | --- | --- |
| **`/radar`** | Which directions are forming before full consensus? | Signal hierarchy, Trend Radar, counter-evidence, timing window |
| **`/wedge`** | What small part of the trend should I enter through? | Wedge comparison, Evidence ROI, 72h test, kill criteria |
| **`/build`** | What can I build in 2–7 days that changes my evidence? | Mission Brief, baseline, evaluation, DoD, coding-agent prompt |
| **`/contributor`** | How can I get external validation through real OSS work? | Repository rubric, proposed diff, PR evidence, review boundary |
| **`/proof`** | How strong is each resume claim, really? | Atomic claim audit, Evidence Card, confidence, safe wording |
| **`/position`** | How should these facts translate into job-market language? | Safe / Strong / Future positions, resume bullets, outreach |
| **`/interview`** | Which claim is most likely to collapse under follow-up? | Risk Map, five-layer drill, Defense Report, downgrade decision |
| **`/offer`** | Does the market validate the current career thesis? | Pipeline, funnel, feedback loop, KEEP / REFINE / PIVOT |

Each skill now has its own `references/` toolbox in addition to shared cross-skill references.

---

## Where should I start?

| Your bottleneck | Start with |
| --- | --- |
| I do not know which AI / Agent / Quant / Robotics direction is worth preparing for | `/radar` |
| I know the broad trend but not how to enter it | `/wedge` |
| My resume is empty and I need a real story | `/build` |
| I want a real GitHub PR instead of another private demo | `/contributor` |
| I have many projects but cannot tell which claims are actually supported | `/proof` |
| I need stronger resume / recruiter / founder language | `/position` |
| I already have interviews and fear my project will get exposed as shallow | `/interview` |
| I am already applying and need to learn from market feedback | `/offer` |

### Common routes

```text
No relevant experience:
/radar → /wedge → /build or /contributor → /proof → /position

Existing project, but too demo-like:
/proof → /wedge → /build → /proof → /position

Good experience, weak articulation:
/proof → /position → /interview

Applications are not working:
/offer → /position / wedge / radar
```

---

## `/radar`: a demand radar, not a hype list

`/radar` separates signal quality:

```text
Tier A — hiring, paid products, first-party demand, production pain
Tier B — GitHub adoption, engineering blogs, benchmarks, builder pain
Tier C — organization / capital / new teams
Tier D — media, social attention, search volume
```

Attention without Tier A/B support is explicitly lower-confidence.

Market states:

```text
EARLY
GROWING
CONSENSUS
SATURATED
TOO_EARLY
HYPE
```

Every top thesis must also search for negative evidence.

---

## `/wedge`: choose the smallest asymmetric entry point

Supported wedge patterns include:

- **Skill Wedge** — new capability with thin supply;
- **Problem Wedge** — a new pain that has started receiving budget;
- **Distribution Wedge** — technical ability × market/domain access;
- **Evidence Wedge** — many candidates claim it, few can prove it;
- **Organization Wedge** — a company stage creates an unusual combination need;
- **Contribution Wedge** — enter through a real open-source ecosystem.

The optimization target is not novelty. It is evidence return on time and effort.

---

## `/build`: define the proof before the code

A Career Alpha project must answer:

> **After this project, what new sentence can I honestly say that I could not say before?**

Default sequence:

```text
Career Claim
   ↓
Baseline
   ↓
Intervention
   ↓
Evaluation
   ↓
Failure Cases
   ↓
Artifacts
   ↓
Definition of Done
```

Preferred archetypes include benchmark, reliability, vertical workflow, integration, cost/latency optimization, open-source extension and reproduction.

![Proof of Work](assets/career-alpha-visual-01.png)

---

## `/proof`: the Claim–Evidence Ledger

Every strong statement is decomposed and audited for:

```text
Claim
Evidence
Result
Ownership
Confidence
Status
Causal Risk
Resume-safe Wording
Strong Wording Requirements
Interview Risks
Missing Evidence
```

Allowed confidence states:

- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

A project can be VERIFIED while a causal performance claim inside it remains only SUPPORTED.

![Claim–Evidence Ledger](assets/career-alpha-visual-03.png)

Structured files:

- [career-claim-ledger-template.json](assets/career-claim-ledger-template.json)
- [claim-evidence-ledger.schema.json](references/claim-evidence-ledger.schema.json)

---

## `/position`: Safe / Strong / Future

Career Alpha separates:

- **Safe Position** — directly supported now;
- **Strong Position** — more differentiated but still defensible with explicit boundaries;
- **Future Position** — a next identity that still requires specific evidence.

Future Position is a build target, not a current title.

The same ledger can produce resume bullets, a 30-second intro, recruiter outreach, hiring-manager / founder DMs, a GitHub project intro and interview stories without changing the underlying facts.

---

## `/interview`: pressure-test, do not memorize

High-risk claims are attacked through layered follow-up:

```text
What exactly did you do?
Why this approach?
What alternative did you reject?
How did you measure it?
What failed?
What did teammates / AI tools do?
What would you change now?
```

Claim verdicts include:

```text
DEFENSIBLE
DEFENSIBLE_WITH_BOUNDARY
KNOWLEDGE_GAP
EVIDENCE_GAP
OWNERSHIP_GAP
DOWNGRADE
REMOVE
```

If a claim does not survive questioning, the default fix is to learn, add evidence, or weaken the wording—not to train a better bluff.

---

## `/offer`: let the market update the thesis

The pipeline records not only stages, but also:

- positioning version;
- evidence shown;
- recruiter / engineer / founder feedback;
- repeated objections;
- role patterns;
- company patterns.

Each review cycle ends with:

```text
KEEP / REFINE / PIVOT
```

and routes evidence back upstream.

---

## Local Workspace / CLI

Clone the repository and initialize a private local workspace:

```bash
git clone https://github.com/lavine888/career-alpha.git
cd career-alpha
npm run init
```

This creates a `.career-alpha/` directory containing local-only JSON files for profile, radar, wedges, proofs, ledger and applications. The directory is ignored by Git by default.

Useful commands:

```bash
npm run init       # create .career-alpha/ local workspace
npm run demo       # print Workbench + example paths
npm run validate   # run both validators
```

Keep `.career-alpha/` private: it may contain recruiting, evidence, and personal career data.

---

## Cross-skill Contract

All skills share a minimal Context Packet through the [Cross-skill Handoff Contract](references/handoff-contract.md):

- Goal
- Verified facts
- Hypotheses / fresh signals
- Planned work
- Evidence references
- Open questions
- Recommended next skill
- Privacy boundary

> **A downstream skill may rewrite language, but it must not silently increase confidence, expand ownership, or turn planned work into completed work.**

---

## Installation as Agent Skills

### Codex

```text
Install Career Alpha from this repository and enable radar, wedge, contributor, build, proof, position, interview and offer:
https://github.com/lavine888/career-alpha
```

Open a new conversation after installation so the skills can reload.

### Claude Code / OpenCode

The repository contains:

```text
.codex-plugin/
.claude-plugin/
.opencode-plugin/
```

All clients share the same `skills/`, `references/`, and `assets/`.

---

## Repository Structure

```text
career-alpha/
├── package.json
├── lib/
│   └── index.js
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
├── .opencode-plugin/plugin.json
├── assets/
│   ├── career-alpha-workbench.html
│   ├── career-alpha-visual-01.png
│   ├── career-alpha-visual-02.png
│   ├── career-alpha-visual-03.png
│   └── career-claim-ledger-template.json
├── docs/
│   └── agent-engineer-end-to-end.md
├── skills/
│   └── <skill>/
│       ├── SKILL.md
│       ├── agents/openai.yaml
│       └── references/
├── references/
│   ├── career-alpha-playbook.md
│   ├── trend-scoring-framework.md
│   ├── opportunity-scoring.md
│   ├── claim-evidence-ledger.md
│   ├── claim-evidence-ledger.schema.json
│   └── handoff-contract.md
├── scripts/
│   ├── career-alpha.mjs
│   ├── validate_skills.py
│   └── validate_package.py
└── tests/
    ├── skill-routing-cases.yaml
    └── routing-boundary-cases.yaml
```

---

## Validation

```bash
npm run validate
```

or directly:

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_package.py
```

The validators check the eight skills, frontmatter, per-skill/shared references, plugin manifests, entry metadata, routing cases, handoff contract and ledger contract.

---

## Contributing

See [CONTRIBUTING](.github/CONTRIBUTING_en.md).

Useful issue templates include:

- **Share your Career Alpha** — contribute a de-identified real case;
- **Propose a Skill or Workflow** — propose a distinct job-to-be-done;
- **Bug report** — report Workbench, routing, plugin or validator issues.

We prefer small, evidence-dense improvements over feature accumulation.

---

## Design Principles

1. **Asymmetric opportunity** — look for temporary demand/supply mismatch, not just popularity.
2. **Proof before polish** — build repos, PRs, benchmarks, deployments and user evidence before adjectives.
3. **No fabricated alpha** — never invent titles, metrics, rankings, production status or ownership.
4. **Fresh signals, explicit uncertainty** — preserve sources, dates, samples and uncertainty.
5. **Interview-defensible by default** — strong claims should survive layered follow-up.
6. **Market feedback closes the loop** — recruiting outcomes become data for the next career hypothesis.

## Acknowledgements

Career Alpha borrows useful product patterns from the open-source [ASu-skills](https://github.com/Hisn00w/ASu-skills) project, including the multi-entry skill suite, evidence-first workflow, interview follow-up and recruiting loop. Career Alpha extends that model upstream with trend discovery, asymmetric opportunity selection and deliberate Proof-of-Work creation.

## License

MIT
