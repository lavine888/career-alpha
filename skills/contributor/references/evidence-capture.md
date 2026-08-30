# Contribution Evidence Capture

Every contribution should produce a small evidence packet.

## Before the change

Record:

- repository URL;
- issue / discussion URL;
- why the contribution matters;
- expected behavior;
- proposed files to change;
- validation plan;
- risks / unknowns.

## After implementation

Record:

- branch / commit;
- files changed;
- tests / validation commands;
- screenshots or logs when relevant;
- what the candidate personally decided;
- what came from maintainer guidance.

## PR lifecycle states

Use exact state language:

- `PLANNED` — no PR exists;
- `IN PROGRESS` — local work exists;
- `PR OPEN` — submitted, not merged;
- `CHANGES REQUESTED` — reviewer asked for revisions;
- `MERGED` — merged into target branch;
- `CLOSED / NOT MERGED` — do not describe as merged contribution.

## Review feedback

Review feedback is evidence of collaboration.

Capture:

- reviewer concern;
- how the candidate responded;
- what changed after review;
- whether the candidate agreed or pushed back, and why.

Do not rewrite reviewer suggestions as if they were the candidate's original design.

## Claim boundaries

### Safe

> Contributed a test case that reproduced X and was merged after maintainer review.

### Unsafe

> Led quality engineering for project X.

A merged typo or docs PR can prove open-source workflow familiarity, but not architecture ownership.

## Handoff to `/proof`

```yaml
repository:
issue:
pr:
status:
commits:
changed_files:
validation:
review_feedback:
ownership:
result:
limitations:
```
