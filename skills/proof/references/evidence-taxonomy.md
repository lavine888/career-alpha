# Evidence Taxonomy

Not all evidence has the same strength. `/proof` should classify evidence before assigning confidence.

## 1. Direct public evidence

Examples:

- public repository;
- merged PR;
- public benchmark artifact;
- deployed public demo;
- competition result page;
- published paper / talk / release note.

Strength: high for proving existence and status. It may still be weak for proving private ownership details.

## 2. Direct private evidence

Examples:

- internal document;
- private commit / repository;
- meeting note;
- email;
- screenshot;
- internal dashboard;
- invoice / contract / performance report.

Strength: can support the user's claim inside the workflow, but should not be exposed publicly without permission and redaction.

## 3. Reproducible technical evidence

Examples:

- test command;
- benchmark script;
- raw CSV;
- logs;
- pinned configuration;
- model / dependency version;
- failure reproduction steps.

Especially useful for numerical and performance claims.

## 4. External review evidence

Examples:

- maintainer code review;
- customer feedback;
- mentor / manager feedback;
- judge result;
- user acceptance;
- issue discussion.

This can validate collaboration and usefulness, but does not automatically prove every implementation detail.

## 5. Self-reported evidence

Examples:

- user's recollection;
- undocumented ownership statement;
- approximate result;
- remembered timeline.

Useful as a lead. Keep confidence at `SELF-REPORTED` until supported.

## 6. Planned evidence

Examples:

- a benchmark that will be run next week;
- a PR not yet created;
- expected performance improvement;
- planned deployment.

Status: `PLANNED`. Never convert to past tense.

---

# Evidence strength matrix

| Claim type | Strong evidence |
| --- | --- |
| "Built X" | repo / commit / file / demo + ownership explanation |
| "Improved X%" | baseline + raw result + evaluation setup + version controls |
| "Led / owned" | decision records + scope + responsibility + team boundary |
| "Used by N users" | analytics / customer records / platform data |
| "Won X" | official result page / organizer record |
| "Merged contribution" | merged PR / commit in upstream repository |
| "Production deployment" | actual deployment / logs / customer use, not local demo |

---

# Evidence conflicts

If two materials disagree:

1. do not average them;
2. preserve both;
3. identify which source is closer to the event;
4. mark the claim disputed / unresolved;
5. avoid strong wording until reconciled.

Evidence integrity matters more than producing a complete resume bullet.