<div align="center">

<img src="assets/career-alpha-logo.svg" width="128" alt="Career Alpha logo" />

# Career Alpha

### AI-native Career OS

**Find your career alpha before it becomes consensus.**

[中文](README.md) · [Workbench](assets/career-alpha-workbench.html) · [Case Library](docs/cases/README.md)

![License](https://img.shields.io/badge/license-MIT-2f81f7)
![Codex](https://img.shields.io/badge/Codex-skill-111827)
![Claude Code](https://img.shields.io/badge/Claude_Code-plugin-d97757)
![OpenCode](https://img.shields.io/badge/OpenCode-plugin-2563eb)
![TraeWork](https://img.shields.io/badge/TraeWork-plugin-7c3aed)
![Evidence First](https://img.shields.io/badge/method-evidence--first-16a34a)

</div>

<img src="assets/career-alpha-hero.svg" width="100%" alt="Career Alpha workflow" />

---

Most career tools start with:

> **What have you already done, and how can we make it sound better?**

Career Alpha starts one step earlier:

> **What should you build in the next two weeks so that you are more valuable six months from now?**

It connects **trend discovery → asymmetric wedge → deliberate proof of work → external evidence → claim audit → positioning → interview defense → market feedback**.

The goal is not to manufacture a better story first. It is to manufacture **better facts worth telling**.

---

## ⚡ Try the Workbench

Open [`assets/career-alpha-workbench.html`](assets/career-alpha-workbench.html) locally in a browser. No server is required.

<img src="assets/workbench-preview.svg" width="100%" alt="Career Alpha Workbench preview" />

The Workbench tracks Trend Radar, Opportunity Wedge, Proof of Work, Claim–Evidence Ledger, positioning, interview defense and the application pipeline.

Data stays in browser `localStorage` by default and can be imported/exported as JSON. Ready-made bundles live in [`examples/workbench/`](examples/workbench/README.md).

---

## Case Library

| Case | Career wedge | Key proof |
| --- | --- | --- |
| [Agent Engineer](docs/agent-engineer-end-to-end.md) | Agent Reliability / Evaluation | fixed-task benchmark, failure taxonomy, ablation |
| [AI Product Manager](docs/cases/ai-product-manager.md) | Workflow + Evaluation PM | workflow, eval rubric, human fallback, outcome metrics |
| [Quant Researcher](docs/cases/quant-researcher.md) | Robustness-first research | cost model, sensitivity, failure regimes, reproducibility |
| [Robotics / Physical AI](docs/cases/robotics-engineer.md) | Eval + Failure Recovery | fixed scenarios, recovery benchmark, simulation boundary |

The reusable question is:

> **What fact is missing before I can honestly make the next stronger career claim?**

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
external proof   proof of work
│                │
└────────┬───────┘
         ↓
       /proof
build the Claim–Evidence Ledger
         ↓
     /position
Safe / Strong / Future Position
         ↓
┌────────┴────────┐
▼                 ▼
/interview       /offer
pressure-test     market feedback
                   │
                   └────→ back to /radar /wedge /build
```

This is a **Career Hypothesis Loop**, not a one-way resume workflow.

---

## Eight Skills

| Skill | Question | Main output |
| --- | --- | --- |
| **`/radar`** | Which directions are forming before consensus? | source hierarchy, Trend Radar, negative evidence, timing window |
| **`/wedge`** | What is the smallest asymmetric entry point? | wedge comparison, Evidence ROI, 72h test, kill criteria |
| **`/build`** | What can I build in 2–7 days that changes my evidence? | mission brief, baseline, evaluation, DoD, coding-agent prompt |
| **`/contributor`** | How can I gain real external collaboration evidence? | repo rubric, proposed diff, PR evidence, review boundary |
| **`/proof`** | How strong is each resume claim? | atomic claim audit, Evidence Card, confidence, safe wording |
| **`/position`** | How should evidence map to target roles? | Safe / Strong / Future positioning, resume bullets, outreach |
| **`/interview`** | Which claim will collapse under follow-up? | risk map, five-layer drill, defense verdict |
| **`/offer`** | Does the market validate the current hypothesis? | pipeline, funnel, feedback loop, KEEP / REFINE / PIVOT |

Every skill has its own operational `references/` toolkit rather than being only a prompt file.

---

## Signal → Wedge → Proof

### `/radar`

```text
Tier A — hiring, paid products, first-party demand, production pain
Tier B — GitHub adoption, engineering blogs, benchmarks, builder pain
Tier C — org / funding / new team formation
Tier D — media, social discussion, search popularity
```

Popularity without Tier A/B support is not automatically career alpha.

### `/wedge`

Career Alpha searches for Skill, Problem, Distribution, Evidence, Organization and Contribution wedges.

```text
Evidence ROI = credibility gained / (time + learning cost + coordination cost)
```

### `/build`

A project starts from the claim it should prove:

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

A generic ChatGPT clone is not the default answer.

---

## Evidence Layer

Every strong claim is decomposed into:

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

Allowed confidence levels:

- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

A project can be VERIFIED while a specific performance claim inside it is only SUPPORTED.

Structured assets:

- [career-claim-ledger-template.json](assets/career-claim-ledger-template.json)
- [claim-evidence-ledger.schema.json](references/claim-evidence-ledger.schema.json)

---

## Safe / Strong / Future Positioning

`/position` separates:

- **Safe Position** — directly supported now;
- **Strong Position** — ambitious but defensible with explicit boundaries;
- **Future Position** — the next identity, plus the missing evidence required to earn it.

Future Position is never silently rewritten as current fact.

---

## Interview Defense

```text
What exactly did you do?
Why this approach?
What alternative did you reject?
How did you measure it?
What failed?
What did teammates / AI tools do?
What would you change now?
```

Possible verdicts:

```text
DEFENSIBLE
DEFENSIBLE_WITH_BOUNDARY
KNOWLEDGE_GAP
EVIDENCE_GAP
OWNERSHIP_GAP
DOWNGRADE
REMOVE
```

---

## Market Feedback Closes the Loop

```text
trend wrong      → /radar
wedge wrong      → /wedge
proof weak       → /build /contributor /proof
position unclear → /position
interview weak   → /interview
```

Each review cycle ends with `KEEP / REFINE / PIVOT`.

---

## Local Workspace / CLI

```bash
npm run init
```

creates:

```text
.career-alpha/
├── profile.json
├── radar.json
├── wedges.json
├── ledger.json
└── applications.json
```

`.career-alpha/` is ignored by git by default.

```bash
npm run init
npm run demo
npm run validate
```

---

## Installation

### Codex

```text
Install Career Alpha from this repository and enable radar, wedge, contributor, build, proof, position, interview and offer:
https://github.com/lavine888/career-alpha
```

### Claude Code / OpenCode / TraeWork

The repository ships four client manifests:

```text
.codex-plugin/
.claude-plugin/
.opencode-plugin/
.trae-plugin/
```

All clients share the same `skills/`, `references/` and evidence contracts.

---

## Validation

```bash
npm run validate
```

Validation covers frontmatter, four plugin manifests, local/shared references, routing, ledger contracts, CLI, branding assets, Workbench markers and example bundles.

---

## Principles

1. **Asymmetric opportunity** — search for temporary demand/supply gaps, not just popularity.
2. **Proof before polish** — create evidence before optimizing language.
3. **No fabricated alpha** — never invent titles, metrics, rankings, production claims or ownership.
4. **Fresh signals, explicit uncertainty** — market claims should carry sources, dates and uncertainty.
5. **Interview-defensible by default** — strong claims should survive layered follow-up.
6. **Market feedback closes the loop** — recruiting outcomes are new data, not just final results.

---

## Acknowledgements

Career Alpha borrows useful product patterns from [ASu-skills](https://github.com/Hisn00w/ASu-skills), including its multi-entry skill suite, evidence-first workflow, interview follow-up and recruiting loop. Career Alpha extends that model upstream into **trend discovery, asymmetric opportunity selection and deliberate Proof-of-Work creation**.

## License

MIT
