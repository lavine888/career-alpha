# Radar Output Template

Use this template when `/radar` needs a full answer.

## A. Assumptions

```text
Target market:
Target role family:
Time budget:
Candidate strengths:
Candidate constraints:
Freshness window:
```

Mark assumptions that were inferred rather than provided.

## B. Trend table

| Direction | Demand Momentum | Talent Scarcity | Proofability | Learning Cost | Timing Window | Durability | Personal Fit | Confidence | Verdict |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |

Verdict values:

- `EARLY` — direct demand exists, supply still thin;
- `GROWING` — direction is becoming visible but differentiation remains possible;
- `CONSENSUS` — useful skill, but no longer a strong standalone Alpha;
- `SATURATED` — supply / tutorialization has compressed differentiation;
- `TOO_EARLY` — interesting technical signal but insufficient demand evidence;
- `HYPE` — attention exceeds verified demand.

## C. Top Alpha Candidate Card

```yaml
trend:
verdict:
confidence:
why_now:
  -
why_not_consensus_yet:
  -
real_demand_evidence:
  - source:
    date:
    observation:
talent_supply_evidence:
  -
proof_path:
  72h:
  30d:
who_might_value_it:
  -
what_could_kill_the_thesis:
  -
personal_fit:
  leverage:
  missing_prerequisites:
next_skill: /wedge
```

## D. Avoid / Do-not-overweight list

Always include 1–3 directions that appear attractive but have poor marginal value for this user.

For each:

```text
Direction:
Why it looks attractive:
Why Career Alpha score is lower:
When it would still make sense:
```

## E. Research gaps

List unresolved questions separately from conclusions.

Example:

```text
OPEN QUESTION — Are Agent Eval responsibilities becoming dedicated roles, or remaining embedded inside general Agent Engineer roles?
```

This prevents hypotheses from silently becoming facts in downstream skills.

## F. Handoff packet to `/wedge`

Pass only the minimum context required:

```yaml
goal:
verified_facts:
  -
fresh_signals:
  - source:
    date:
    confidence:
hypotheses:
  -
candidate_constraints:
  -
top_trends:
  -
recommended_next_skill: /wedge
privacy_boundary:
```
