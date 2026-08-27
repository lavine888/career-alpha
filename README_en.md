# Career Alpha

> **Find your career alpha before it becomes consensus.**

Career Alpha is an open-source, AI-native career operating system for finding asymmetric opportunities and turning them into verifiable proof.

Most career tools start with the resume you already have. Career Alpha starts earlier:

> **What should you build in the next two weeks so that you become more valuable six months from now?**

## The idea

Instead of competing only in crowded, standardized tracks, Career Alpha helps you:

1. detect demand before it becomes full consensus;
2. find a specific supply-demand wedge;
3. build a 2–7 day proof of work or a real open-source contribution;
4. turn scattered artifacts into a Claim–Evidence Ledger;
5. translate verified evidence into positioning, resume bullets and outreach;
6. pressure-test every strong claim through interview follow-ups;
7. feed real recruiting results back into the system.

This is not a system for fabricating a stronger profile. It is a system for **creating stronger evidence first**.

## Skills

| Skill | Purpose | Main output |
| --- | --- | --- |
| `/radar` | Scan emerging technical and industry trends | Trend Radar, timing window, risks |
| `/wedge` | Find demand growing faster than talent supply | Opportunity Score, entry wedge |
| `/contributor` | Build external proof through real open-source work | Contribution plan, PR evidence |
| `/build` | Design a 2–7 day proof-of-work project | Mission brief, milestones, definition of done |
| `/proof` | Turn projects and work into auditable evidence | Evidence Cards, Claim–Evidence Ledger |
| `/position` | Translate real evidence into job-market language | Positioning, resume bullets, HR/founder outreach |
| `/interview` | Pressure-test resume claims through continuous follow-up | Defense Report, knowledge gaps |
| `/offer` | Manage applications, interviews, offers and market feedback | Pipeline, funnel, next actions |

## Core loop

```text
/radar
  ↓
/wedge
  ↓
┌───────────────┐
│               │
▼               ▼
/contributor   /build
│               │
└───────┬───────┘
        ↓
      /proof
        ↓
    /position
        ↓
┌───────┴────────┐
▼                ▼
/interview      /offer
```

## Evidence first

All core skills can share a Claim–Evidence Ledger:

```text
Claim:
Built an agent harness benchmark.

Evidence:
- GitHub repository
- architecture diagram
- benchmark.csv
- demo video

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

Career Alpha does not automatically invent missing metrics, titles, ownership, rankings or production claims.

## Philosophy

### Asymmetric opportunity

Do not only ask what is popular. Ask where people are already paying for a problem while experienced talent is still scarce.

### Proof before polish

A repository, merged PR, benchmark, deployment, reproducible experiment or user result is more valuable than another adjective on a resume.

### No fabricated alpha

Aggressive positioning is allowed only when it remains evidence-backed and interview-defensible.

### Build what the market will value next

Positioning is not the final step. If a target role requires evidence you do not yet have, Career Alpha routes you back to `/build` or `/contributor`.

## Installation

### Codex

Send the repository to Codex and ask it to install the eight skills:

```text
Install Career Alpha from this repository and enable radar, wedge, contributor, build, proof, position, interview and offer:
https://github.com/lavine888/career-alpha
```

### Claude Code / OpenCode

Plugin manifests are included for the supported skill package layouts. All clients share the same `skills/` and `references/` directories.

## Validation

Run:

```bash
python3 scripts/validate_skills.py
```

The validator checks the eight skill files, frontmatter names/descriptions, local reference links, plugin JSON files and routing-case presence.

## Acknowledgements

Career Alpha borrows useful product patterns from the open-source **ASu-skills** project, especially its multi-entry skill suite, evidence-first career workflow, interview follow-up and application-loop thinking. Career Alpha extends that workflow upstream into trend discovery, asymmetric opportunity selection and deliberate proof-of-work creation.

## License

MIT
