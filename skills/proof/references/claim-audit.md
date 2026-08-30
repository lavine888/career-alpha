# Claim Audit Protocol

Use this protocol for every strong resume or interview claim.

## 1. Parse the claim

Example:

> Led development of an agent platform that improved task completion by 28%.

Break into separate claims:

1. an agent platform existed;
2. the candidate led development;
3. task completion was measured;
4. improvement was 28%;
5. the improvement is attributable to the described work.

Each part may have a different confidence level.

## 2. Audit numerical claims

Ask:

- What exactly is the metric?
- What is the baseline?
- What is the denominator / sample size?
- When was it measured?
- Who ran the measurement?
- Is the raw data available?
- Were versions / inputs controlled?
- Is it percentage points or percent change?
- Is the number exact or approximate?

If the number cannot be reconstructed, downgrade wording.

## 3. Audit ownership

Separate:

- decision ownership;
- implementation ownership;
- coordination ownership;
- result ownership;
- team contribution;
- AI / tool assistance.

### Strong ownership verbs require evidence

`led`, `owned`, `designed`, `architected`, `drove`, `founded`, `managed`

A user may still have meaningful ownership when AI generated code, provided the user can explain:

- problem definition;
- architecture choice;
- validation;
- debugging;
- tradeoffs;
- acceptance criteria.

## 4. Audit status language

Convert status precisely:

| Reality | Safe wording |
| --- | --- |
| planned | planning / designing |
| prototype works locally | built a prototype |
| deployed internally | deployed internally |
| public demo | launched a public demo |
| PR open | submitted a PR |
| PR merged | contributed a merged PR |
| finalist | finalist |
| track #2 | placed second in track X |

Do not collapse these distinctions.

## 5. Audit causal language

Claims such as `improved`, `reduced`, `increased`, `caused` imply comparison or causality.

If only correlation exists, use safer language:

- `observed`;
- `measured`;
- `associated with`;
- `on an internal benchmark`;
- `after introducing` rather than `because of`.

## 6. Audit scale words

Words that often overstate:

- production-grade;
- enterprise;
- large-scale;
- real-time;
- high concurrency;
- massive;
- end-to-end;
- autonomous.

Require concrete scale evidence or remove them.

## 7. Output for each claim

```yaml
original_claim:
atomic_claims:
  - text:
    confidence:
    evidence:
ownership_boundary:
status_boundary:
number_audit:
causal_risk:
safe_wording:
strong_wording:
strong_wording_requires:
interview_risks:
missing_evidence:
```

## 8. Downgrade, don't patch with imagination

If a claim fails audit, choose one:

- weaken wording;
- remove the number;
- separate team result from personal action;
- mark as planned;
- request missing evidence;
- send to `/build` or `/contributor` to create the missing proof.

Never solve an evidence gap by inventing a plausible detail.