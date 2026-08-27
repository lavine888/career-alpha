# Contributing to Career Alpha

Career Alpha welcomes new skills, routing cases, evidence frameworks and real career-use cases.

## Before opening a PR

1. Keep changes evidence-first. Do not add workflows that encourage fabricated metrics, titles, employers, rankings or ownership.
2. New skills should solve a distinct job in the Career Alpha loop rather than duplicate an existing entry.
3. Every `skills/<name>/SKILL.md` must include frontmatter with matching `name` and a concrete `description`.
4. Shared frameworks belong in `references/` when more than one skill can benefit from them.
5. Add or update `tests/skill-routing-cases.yaml` when routing behavior changes.
6. Run:

```bash
python3 scripts/validate_skills.py
```

## Skill design checklist

A good skill should define:
- when it should trigger;
- what inputs it needs;
- its decision process;
- integrity / evidence boundaries;
- a default output structure;
- handoff rules to adjacent skills.

## Evidence standard

Career Alpha distinguishes:
- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

When a contribution introduces strong career claims, preserve this distinction and avoid silently promoting weak evidence into verified facts.

## Pull requests

Keep PRs focused and explain:
- the user problem;
- why the existing skills do not already solve it;
- what routing behavior changes;
- what new references or tests were added.

Small improvements are welcome. A useful new example, failure case or routing test can be more valuable than a large rewrite.
