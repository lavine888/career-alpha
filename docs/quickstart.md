# Career Alpha — 5 Minute Quickstart

This quickstart is for someone who wants to understand Career Alpha before reading every skill.

## 1. Start with one target

Write one role, not an identity cloud.

Good:

```text
Target: Agent Engineer
Region: Shenzhen / Hong Kong / Remote
Time: 10 hours / week
Current proof: 3 agent demos, no production deployment
```

Weak:

```text
Target: AI / Product / Quant / Founder / Anything interesting
```

Career Alpha can compare options later, but the first loop needs one concrete target.

---

## 2. Run `/radar`

Ask:

```text
/radar
For my background and target role, scan the market for 5–10 directions where demand is forming faster than experienced talent supply. Separate strong demand evidence from hype, show negative evidence, and identify the top three timing windows.
```

Do not choose the trend with the highest social-media attention. Choose the one with the best combination of:

- real demand;
- scarcity;
- proofability;
- timing;
- personal fit.

---

## 3. Run `/wedge`

Take the best trend and ask for a narrow entry point:

```text
/wedge
Turn Agent Reliability / Evaluation into three concrete entry wedges. Compare demand, scarcity, proof speed, transferability and crowding. Give me the cheapest 72-hour test and explicit kill criteria.
```

A wedge should be smaller than an industry and usually smaller than a job title.

---

## 4. Run `/build` or `/contributor`

If the missing evidence can be built independently:

```text
/build
Design a 72-hour proof-of-work mission for this wedge. Start from the career claim I should be able to make afterward. Require a baseline, evaluation, failure cases, reproducible artifacts and a strict Definition of Done.
```

If external collaboration is more valuable:

```text
/contributor
Find active open-source projects where I can make a relevant, verifiable contribution. Show candidate repos, proposed changes and validation method before any write action.
```

---

## 5. Run `/proof`

When the work exists, stop describing it from memory.

```text
/proof
Audit this repo / project / PR into atomic claims. For every strong statement, record evidence, ownership, confidence, causal risk, interview risk and missing proof. Downgrade anything unsupported.
```

The goal is a Claim–Evidence Ledger, not better adjectives.

---

## 6. Run `/position`

```text
/position
Using the evidence ledger and this target JD, create Safe, Strong and Future positioning. Generate resume bullets and a short outreach message, then list the top evidence gaps blocking the Future position.
```

If Future Position requires evidence you do not yet have, route back to `/build` or `/contributor`.

---

## 7. Run `/interview`

```text
/interview
Rank my claims by interview risk. Start a live drill on the highest-risk one. Ask one question at a time and continue for at least five layers before giving the verdict.
```

Do not optimize for sounding confident. Optimize for being able to explain:

- exact implementation;
- measurement;
- trade-offs;
- failures;
- ownership;
- what AI tools / teammates did.

---

## 8. Close the loop with `/offer`

```text
/offer
Track my applications and classify feedback. Separate positioning problems, evidence problems, interview problems and market-hypothesis problems. End with KEEP / REFINE / PIVOT and the next three actions.
```

Real recruiting feedback becomes new `/radar` and `/wedge` data.

---

## Use the Workbench

Open:

```text
assets/career-alpha-workbench.html
```

or initialize the local workspace:

```bash
npm run init
```

To see complete examples, import one of:

```text
examples/workbench/agent-engineer.json
examples/workbench/ai-product-manager.json
examples/workbench/quant-researcher.json
examples/workbench/robotics-engineer.json
```

---

## The shortest version

```text
Find a signal.
Choose a wedge.
Build the missing fact.
Prove it.
Translate it.
Defend it.
Let the market correct you.
Repeat.
```
