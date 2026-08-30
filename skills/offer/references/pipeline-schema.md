# Career Pipeline Schema

The pipeline is a decision system, not a list of company names.

## Required fields

For each opportunity record:

```yaml
company:
role:
location:
source:
stage:
first_touch:
last_touch:
next_action:
next_action_date:
contact:
positioning_version:
evidence_shared:
feedback:
confidence:
privacy:
```

## Stage values

Use one normalized state:

- `TARGET`
- `OUTREACH`
- `APPLIED`
- `ASSESSMENT`
- `INTERVIEW`
- `FINAL`
- `WAITING`
- `OFFER`
- `REJECTED`
- `WITHDRAWN`

Do not create many near-duplicate statuses that prevent funnel analysis.

## Next Action rule

Every live opportunity must have one concrete next action or an explicit wait condition.

Bad:

```text
Status: Interviewing
```

Better:

```text
Status: INTERVIEW
Next action: prepare benchmark-ablation story before Tuesday technical round
```

## Signal fields

Useful feedback tags:

- `POSITIVE_ROLE_FIT`
- `WEAK_ROLE_FIT`
- `STRONG_TECHNICAL_PROOF`
- `MISSING_PRODUCTION_SCALE`
- `MISSING_DOMAIN_KNOWLEDGE`
- `OWNERSHIP_QUESTION`
- `COMMUNICATION_ISSUE`
- `COMPENSATION_MISMATCH`
- `LOCATION_MISMATCH`
- `NO_SIGNAL`

Tags should preserve the original feedback text where possible.

## Privacy

Do not commit private recruiter contacts, email bodies, compensation details or confidential company notes to the public repository by default.

Workbench / local files are the preferred storage location for personal pipeline data.