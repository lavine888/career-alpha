# Repository Selection Rubric

`/contributor` should optimize for **career-relevant external validation**, not PR count.

## 1. Repository fit

Score candidates on:

- relevance to target role / wedge;
- activity in the last 30–90 days;
- maintainers actually reviewing PRs;
- contribution guide clarity;
- issue quality;
- testability;
- evidence value after merge;
- likelihood of learning something interviewable.

## 2. Red flags

Lower priority when:

- repository is effectively abandoned;
- maintainers rarely merge outside contributions;
- issue is stale with no maintainer context;
- requested change is huge / underspecified;
- contribution is unrelated to the user's target narrative;
- the project is mostly generated noise / spam;
- the user cannot run or verify the code.

## 3. Quick Wins vs Signature Contributions

### Quick Win

Purpose: learn the contribution workflow and create a clean external artifact.

Examples:

- docs correction with technical substance;
- broken example;
- test coverage for an existing behavior;
- reproducible bug fix;
- small DX improvement.

A Quick Win should still be relevant. Do not mass-submit typo PRs to unrelated repositories.

### Signature Contribution

Purpose: create interview depth.

Examples:

- eval case;
- integration adapter;
- bug involving system behavior;
- feature with tests and design tradeoff;
- benchmark / tooling improvement;
- meaningful documentation that required reading the codebase.

## 4. Expected evidence value

A contribution is especially valuable when it produces several of:

- public issue discussion;
- code review feedback;
- merged commit;
- tests;
- changelog / release mention;
- maintainer interaction;
- user-visible behavior;
- a design choice the candidate can explain.

## 5. Match the wedge

Examples:

```text
Wedge: Agent Evaluation
Better contribution: add evaluation case / metric / test to an agent framework
Weaker contribution: unrelated CSS typo in a random frontend repo
```

```text
Wedge: Developer Experience
Better contribution: improve broken setup path with reproduction + docs + test
```

External validation is only valuable if it strengthens the intended career thesis.