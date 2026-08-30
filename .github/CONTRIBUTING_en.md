# Contributing to Career Alpha

[中文](CONTRIBUTING.md)

Career Alpha welcomes real-world cases, skill references, routing cases, evidence frameworks, Workbench improvements, and engineering tooling.

We prefer contributions that make the workflow **more executable, more verifiable, and harder to overclaim** rather than simply making the repository larger.

## High-value contributions

### 1. De-identified real cases

A strong case shows the full loop:

```text
background
→ original career hypothesis
→ radar signals
→ selected wedge
→ proof of work / contribution
→ evidence captured
→ interview / market feedback
→ what was confirmed, refined, or disproved
```

Do not invent offers, metrics, rankings, or outcomes to make the case look successful.

Remove sensitive information: names, emails, phone numbers, recruiter contacts, private links, compensation, NDA material, and unpublished company data.

### 2. Skill-local references

Each skill may include:

```text
skills/<skill>/references/
```

Good content includes source hierarchies, output templates, scoring rubrics, good/bad examples, failure modes, and decision protocols.

Frameworks used by multiple skills belong in the root `references/` directory.

### 3. Routing cases

Update routing tests when trigger boundaries change:

```text
tests/skill-routing-cases.yaml
tests/routing-boundary-cases.yaml
```

### 4. Workbench improvements

`assets/career-alpha-workbench.html` is local-first. Improvements to import/export, accessibility, mobile layout, pipeline views, evidence editing, and schema compatibility are welcome.

Do not add remote analytics or automatic upload of job-search data by default.

## New skill threshold

A new skill should solve a distinct job-to-be-done not already covered by the current eight skills. It should define triggers, inputs, a decision process, integrity boundaries, an output contract, adjacent-skill handoffs, routing cases, and ideally an operational example.

If the change is only a new evidence type or output pattern for an existing skill, prefer a reference instead.

## Skill directory contract

```text
skills/<name>/
├── SKILL.md
├── agents/openai.yaml
└── references/
```

`SKILL.md` should define inputs, workflow, evidence/integrity rules, default output, and handoff behavior.

## Evidence standard

Career Alpha uses four confidence states:

- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

Do not silently promote:

- planned → done;
- PR open → merged;
- prototype → production;
- team result → personal ownership;
- track placement → overall ranking.

If evidence is weak, downgrade the wording, mark the gap, add a verification action, or remove the claim.

## Privacy

Treat `.career-alpha/` as local-only. Do not commit private recruiter contacts, email bodies, compensation, contracts, NDA material, or unpublished company data.

External fork / push / PR / messaging actions should be visible to the user before execution.

## Validation

Run:

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_package.py
```

or:

```bash
npm run validate
```

## Pull requests

Please describe:

- **Problem** — where the workflow currently fails;
- **Why existing skills are insufficient**;
- **What changed**;
- **Evidence / validation** — cases, tests, screenshots, or examples;
- **Boundary** — what remains unsolved;
- **Privacy impact** — whether new behavior stores personal data.

Small, evidence-dense improvements are welcome. A routing boundary case or better claim-audit example may be more valuable than a large rewrite.
