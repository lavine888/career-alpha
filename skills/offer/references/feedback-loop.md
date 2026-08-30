# Market Feedback Loop

`/offer` is where Career Alpha meets reality. The purpose is not only to track stages; it is to update upstream hypotheses using real market behavior.

## 1. Feedback types

### Positioning feedback

Examples:

- recruiters understand the target quickly;
- repeated confusion about role identity;
- replies increase after changing the headline;
- founder outreach gets technical engagement.

Route to `/position`.

### Evidence feedback

Examples:

- interviewers repeatedly ask for production scale;
- benchmark gets strong interest;
- lack of external users is a concern;
- open-source contribution becomes a strong discussion point.

Route to `/proof`, `/build` or `/contributor`.

### Wedge feedback

Examples:

- many teams care about observability, few care about the original niche;
- target roles actually absorb the task into another job family;
- a supposedly rare wedge has many competing candidates.

Route to `/wedge`.

### Trend feedback

Examples:

- target market shows little actual demand;
- several unrelated companies independently mention the same new pain;
- a capability moves from “bonus” to baseline requirement.

Route to `/radar`.

### Interview feedback

Examples:

- system design is repeatedly weak;
- ownership stories collapse;
- behavioral answers are too generic;
- metrics cannot be defended.

Route to `/interview` and sometimes `/position`.

---

## 2. Small-sample discipline

Do not conclude:

> This positioning is bad because one company rejected me.

Use cautious language:

```text
Observed signal: 3 of 5 technical interviews asked for production observability evidence.
Confidence: medium; sample is small but repeated.
```

Suggested thresholds are heuristics, not statistical guarantees:

- 1 observation → anecdote;
- 2–3 similar independent observations → pattern worth testing;
- 5+ consistent observations → stronger workflow signal, still consider selection bias.

## 3. Weekly review

Review:

- target → outreach rate;
- outreach → reply rate;
- application → interview rate;
- interview → next-round rate;
- final → offer rate;
- response by positioning version;
- response by company type;
- repeated objections;
- repeated positive signals.

Do not optimize blindly for reply rate if role quality falls.

## 4. Decision rules

### Keep thesis

When:

- relevant teams engage;
- strongest proof repeatedly creates discussion;
- objections are fixable evidence gaps.

### Refine thesis

When:

- interest exists but title / framing is wrong;
- work is valued under a different role family;
- a narrower wedge gets better signal.

### Pivot thesis

When:

- repeated target-market evidence contradicts the original demand assumption;
- opportunity cost becomes too high;
- a different wedge produces stronger signal at lower cost.

## 5. Handoff packet

```yaml
observation_window:
sample_size:
positive_signals:
negative_signals:
repeated_objections:
positioning_versions:
role_patterns:
company_patterns:
confidence:
recommended_upstream_update:
  skill:
  hypothesis_to_retest:
```
