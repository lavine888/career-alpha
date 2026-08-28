# Career Alpha

> **Find your career alpha before it becomes consensus.**

[中文版 README](README.md)

Career Alpha is an open-source, AI-native career operating system. It starts with trend discovery, turns a market signal into an actionable wedge, creates evidence through a real project or contribution, and converts that evidence into positioning, interview defense and recruiting feedback.

It does more than polish the resume you already have. It keeps asking:

> **What should you build in the next two weeks so that you become more valuable six months from now?**

## 30-second overview

Input:

- your background, target role and location;
- weekly time available;
- existing projects, open-source work and recruiting feedback.

Output:

- an opportunity hypothesis with sources and a timing window;
- an entry mission that can be tested in 2–7 days;
- verifiable project, PR, benchmark or deployment evidence;
- resume, interview and pipeline actions that can survive follow-up questions.

## Core loop

```text
/radar
  ↓ discover emerging demand
/wedge
  ↓ choose a supply-demand entry point
┌───────────────┐
│               │
▼               ▼
/contributor   /build
real OSS proof  proof-of-work project
│               │
└───────┬───────┘
        ↓
/proof
build the Claim–Evidence Ledger
        ↓
/position
translate evidence into role language
        ↓
┌───────┴────────┐
▼                ▼
/interview      /offer
defend claims   manage the pipeline
```

This is not a mandatory linear process. Start at the skill that matches your current bottleneck, then move upstream when a missing assumption or missing piece of evidence is discovered.

## Skills

| Skill | Use it when | Main output |
| --- | --- | --- |
| /radar | You need to scan technical, industry or hiring signals | Trend Radar, timing window, counter-signals |
| /wedge | You need a specific entry point | Opportunity Score, entry mission, kill criteria |
| /contributor | You need real external collaboration evidence | Contribution plan, PR evidence |
| /build | You need a 2–7 day proof-of-work project | Mission brief, milestones, definition of done |
| /proof | You need to audit projects, PRs, competitions or work | Evidence Cards, Claim–Evidence Ledger |
| /position | You need to translate evidence into job-market language | Positioning, resume bullets, outreach |
| /interview | You need to pressure-test resume claims | Risk Map, Live Drill, Defense Report |
| /offer | You need to manage recruiting progress and feedback | Pipeline, funnel, next actions |

## How to use

### Choose an entry point

| Your question | Start with |
| --- | --- |
| Which directions are worth preparing for? | /radar |
| What sub-role should I enter through? | /wedge |
| How do I build external proof? | /contributor |
| What can I build in three days? | /build |
| Can this claim be supported by evidence? | /proof |
| How should I rewrite my resume? | /position |
| What will an interviewer ask next? | /interview |
| How should I organize applications and rejections? | /offer |

### Common routes

```text
No relevant experience:
/position → /wedge → /build or /contributor → /proof

Existing projects, weak articulation:
/proof → /position → /interview

Confusing recruiting feedback:
/offer → /position / wedge / radar
```

### Example

```text
/position
Target: Agent Engineer
Background: an AI education project, a hackathon, and several Agent demos.
```

Career Alpha should not turn this into an unsupported claim such as “led a production-grade Agent platform.” It should separate:

- Safe position: directly supported by current evidence;
- Strong position: more ambitious but still defensible;
- Future position: requires specific additional project or collaboration evidence.

## Evidence layer

Every strong claim should be decomposed into a Claim–Evidence Ledger entry:

```text
Claim:
Built an agent harness benchmark.

Evidence:
- GitHub repository
- architecture diagram
- benchmark.csv
- demo

Result:
61% → 78%

Ownership:
Designed the benchmark, retry policy and context strategy.
UI was built by a teammate.

Confidence:
VERIFIED

Interview risks:
- Why these tasks?
- How did you isolate model-version effects?
- Were there regressions?
```

Career Alpha does not invent metrics, titles, ownership, rankings or production claims without sources. Unmerged PRs, unfinished projects and planned results keep their original status.

### Cross-skill handoff

Use the [Cross-skill Handoff Contract](references/handoff-contract.md) when combining skills. Pass a minimum Context Packet containing:

- Goal
- Verified facts
- Hypotheses / freshness-sensitive signals
- Planned work
- Evidence references
- Open questions
- Recommended next skill
- Privacy boundary

A downstream skill may improve wording, but it must not silently increase confidence, expand ownership or turn planned work into completed work.

### Structured ledger

Copy [career-claim-ledger-template.json](assets/career-claim-ledger-template.json) when you need a structured local ledger. Field constraints are defined in [claim-evidence-ledger.schema.json](references/claim-evidence-ledger.schema.json).

The template defaults to local-only storage. Keep recruiting emails, contacts, compensation, private links and unreleased projects out of the public repository.

## Design principles

### Asymmetric opportunity

Do not only ask what is popular. Ask where real demand exists while experienced talent is still scarce.

### Proof before polish

A project, merged PR, benchmark, deployment, reproducible experiment or user result is more valuable than another adjective on a resume.

### No fabricated alpha

Never invent companies, titles, technologies, user counts, revenue, performance gains, rankings or ownership.

### Fresh signals, explicit uncertainty

Trends, job descriptions, companies and market conditions change. Record sources, dates, sample size and uncertainty for current claims.

### Interview-defensible by default

Any strong resume claim should survive at least five layers of follow-up.

## Installation

### Codex

Send the repository to Codex and ask it to install the eight skills:

```text
Install Career Alpha from this repository and enable radar, wedge, contributor, build, proof, position, interview and offer:
https://github.com/lavine888/career-alpha
```

### Claude Code / OpenCode

The repository includes plugin manifests and per-skill entry metadata. The clients share the same skills, references and assets directories.

## Repository structure

```text
career-alpha/
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
├── .opencode-plugin/plugin.json
├── skills/
│   └── <skill>/
│       ├── SKILL.md
│       └── agents/openai.yaml
├── references/
│   ├── career-alpha-playbook.md
│   ├── trend-scoring-framework.md
│   ├── opportunity-scoring.md
│   ├── proof-of-work-standard.md
│   ├── claim-evidence-ledger.md
│   ├── claim-evidence-ledger.schema.json
│   ├── handoff-contract.md
│   ├── resume-language-guide.md
│   └── interview-defense-framework.md
├── assets/
│   └── career-claim-ledger-template.json
├── tests/
│   ├── skill-routing-cases.yaml
│   └── routing-boundary-cases.yaml
└── scripts/
    ├── validate_skills.py
    └── validate_package.py
```

## Validation

From the repository root, run:

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_package.py
```

The basic validator checks the skills, frontmatter, plugin JSON, references and routing file. The strict validator also checks entry metadata, the handoff contract, the ledger schema, the template and routing field structure.

## Contribution boundary

- Use real, verifiable facts or label work explicitly as planned.
- Use fresh sources for current trends and hiring signals, preserving source and date.
- Before any external write such as a fork, branch, patch, PR or message, show the action, verification method and risk.
- Keep public examples minimal; sensitive recruiting material stays local by default.

## Acknowledgements

Career Alpha borrows useful product patterns from the open-source [ASu-skills](https://github.com/Hisn00w/ASu-skills) project, including its multi-entry skill suite, evidence-first workflow, interview follow-up and application loop. Career Alpha extends that model with trend discovery, asymmetric opportunity selection and deliberate proof-of-work creation.

## License

MIT
