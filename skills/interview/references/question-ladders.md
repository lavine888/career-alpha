# Interview Question Ladders

The goal is not to generate a huge question bank. The goal is to expose where a claim stops being understood.

## 1. Ownership ladder

1. What exactly did you personally do?
2. Which decisions were yours?
3. What did teammates / AI tools do?
4. What would not have happened without your contribution?
5. If I asked a teammate, how would they describe your role?

Use for `led`, `owned`, `drove`, founder-like or project-lead claims.

---

## 2. Architecture ladder

1. Draw the system at a high level.
2. Why is each component there?
3. What alternative architecture did you consider?
4. Where is the bottleneck / single point of failure?
5. What changes at 10× scale or stricter reliability requirements?

Red flag: candidate can list technologies but cannot explain boundaries or data flow.

---

## 3. Metric ladder

1. What exactly is the metric?
2. What was the baseline?
3. What is the sample size / denominator?
4. How did you control for other variables?
5. What result would make you conclude the intervention failed?

Use for all numerical improvement claims.

---

## 4. Benchmark ladder

1. Why did you choose this task set?
2. How representative is it?
3. Were success criteria fixed before the run?
4. Did you repeat runs / measure variance?
5. What bias or contamination could invalidate the result?

---

## 5. Failure ladder

1. What failed first?
2. How did you reproduce it?
3. Why did your first fix not work?
4. What tradeoff did the final fix introduce?
5. What failure still remains?

A candidate who cannot discuss failure usually did not own the system deeply.

---

## 6. Product / user ladder

1. Who is the user?
2. What problem did they have before your solution?
3. How did you know the problem mattered?
4. What behavior changed after the solution?
5. What evidence would make you stop building it?

---

## 7. Open-source ladder

1. Why this repository / issue?
2. How did you understand the codebase?
3. What did the maintainer review change?
4. What tests proved the fix?
5. What did you learn about the project's design constraints?

---

## 8. AI-assisted coding ladder

1. What did the coding agent generate?
2. What did you specify yourself?
3. How did you validate the generated code?
4. What bugs / wrong assumptions did the agent introduce?
5. If the tool disappeared, which parts could you re-derive and explain?

The correct standard is not "no AI". The standard is **human ownership of judgment and verification**.

---

## 9. Behavioral ladder

1. What was the real constraint?
2. What did you choose to do?
3. What alternative did you reject?
4. What was the result?
5. What did you change afterward?

Avoid generic STAR stories with no decision tension.

---

## 10. Stop rule

A ladder stops when one of these happens:

- the candidate demonstrates clear understanding;
- a factual / evidence gap appears;
- the claim is stronger than the candidate's ownership;
- the answer becomes speculation.

Then record the gap and decide whether to:

- learn;
- add evidence;
- downgrade wording;
- remove the claim.