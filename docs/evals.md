# Career Alpha Harness & Evals

Career Alpha is not only a collection of prompts. Its skills share state, evidence and privacy boundaries, so the package needs regression tests for **how claims move between skills**.

## What is tested today

### 1. Static skill package validation

Checks:
- eight expected skill directories;
- valid frontmatter;
- per-skill `agents/openai.yaml`;
- shared and skill-local references;
- four client manifests.

### 2. Strict package contract

Checks:
- plugin versions and paths;
- routing fixtures;
- Claim–Evidence Ledger schema;
- local-only evidence template;
- plugin icon / asset references.

### 3. Node product validation

Checks:
- CLI and package scripts;
- Workbench assets;
- four importable role bundles;
- Claude marketplace packaging;
- TraeWork packaging;
- local workspace privacy defaults.

### 4. Documentation link validation

Checks local links across README files, docs, case library, Quickstart, Roadmap and Changelog.

### 5. Handoff Integrity Eval

`tests/handoff-contract-cases.json` defines valid and invalid state transitions between skills.

Run:

```bash
npm run eval:handoff
```

Current cases cover:

| Transition | Expected behavior |
| --- | --- |
| VERIFIED → VERIFIED during `/position` | allowed |
| SUPPORTED → VERIFIED without new direct evidence | blocked |
| SUPPORTED → VERIFIED inside `/proof` with new direct evidence | allowed |
| PLANNED → COMPLETED during wording rewrite | blocked |
| ownership expands during `/position` | blocked |
| ownership expands inside `/proof` with new direct evidence | allowed |
| local-only evidence → public export | blocked |
| local-only recruiting state remains local in `/offer` | allowed |

## Why this matters

A multi-skill career workflow has a subtle failure mode: each individual response can sound reasonable while the overall system gradually inflates the story.

Example:

```text
/build
"Plan a benchmark"
        ↓
/position
"Built a benchmark"
        ↓
/interview
"Led the reliability benchmark"
        ↓
resume
"Owned production reliability"
```

Every sentence may look locally plausible, but the chain has drifted from **planned work** to **production ownership** without evidence.

Career Alpha treats that drift as a Harness bug.

## Deterministic vs semantic evals

The current handoff eval is intentionally deterministic. It can test explicit state transitions such as confidence, status, ownership lists and privacy flags.

It does **not** yet understand semantic paraphrases such as:

```text
"helped evaluate the system"
→
"drove reliability strategy"
```

Those need model-based or human-reviewed semantic evals.

## Planned v0.3 eval work

- semantic ownership inflation cases;
- numerical-claim provenance cases;
- demo vs production boundary cases;
- team-result vs individual-result cases;
- stale market-signal / source-date cases;
- routing confusion cases between `/proof`, `/position` and `/interview`;
- end-to-end case replay against the eight-skill loop.

The goal is not to maximize an abstract benchmark score. The goal is to make one property reliable:

> **A Career Alpha workflow should become more useful without becoming less truthful.**
