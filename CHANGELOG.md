# Changelog

All notable Career Alpha changes are recorded here.

## 0.3.0 — Product Hardening + Real-world Validation

### Added

- Role-specific `/radar` source packs for AI Engineering / Agent Systems, AI Product, Quant Research and Robotics / Physical AI.
- `npm run snapshot` to export the private `.career-alpha/` workspace into a reviewable Markdown Career Alpha Snapshot.
- Workbench Case Lab with offline Agent Engineer, AI PM, Quant and Robotics states.
- Career Alpha Orb / Buddy brand system with adaptive mascot moods.
- 3-step onboarding that recommends a starting skill from the user's real evidence state.
- Three-axis Career Health for Signal Confidence, Evidence Strength and Market Validation without a fake aggregate score.
- Local 1600×900 Share Card PNG export.
- Versioned Workbench state schema at `assets/workbench-state.schema.json`.
- Automatic migration from legacy `career-alpha-workbench-v1` localStorage into the v2 state key while preserving the old key as a fallback.
- Safe JSON import normalization, schema-version checks and future-schema rejection.
- Deterministic Career Integrity Benchmark covering planned-work promotion, ownership inflation, weak-evidence escalation, backtest-vs-production boundaries, simulation-vs-real-world boundaries and lost uncertainty.
- Real-case collection protocol and anonymized case template.
- Playwright E2E browser tests for onboarding, Case Lab, persistence, legacy migration, Share Card rendering and schema-aware JSON export.
- GitHub Pages workflow that publishes the same Workbench HTML as a zero-install live demo.

### Changed

- `/radar` now changes its signal weighting by target career domain instead of applying one generic checklist everywhere.
- `npm run validate` now runs both handoff integrity and Career Integrity benchmark suites.
- Package, Codex, Claude Code, OpenCode, TraeWork and Claude marketplace versions are synchronized at `0.3.0`.
- Workbench local storage now writes to `career-alpha-workbench-v2` with `schema_version: "1.0"` while remaining backward-compatible with v1 data.
- Package validators now treat the Workbench schema, browser E2E assets and live-demo workflow as required v0.3 contracts.

### Integrity

- Planned work cannot be silently rewritten as completed work.
- Team outcomes cannot silently become sole personal ownership.
- Weak evidence cannot be silently upgraded to VERIFIED.
- Backtests, simulations, prototypes and demos cannot silently become production or real-world claims.
- Uncertainty must survive cross-skill handoffs unless new direct evidence resolves it.
- Private recruiting data remains local-first and is not automatically uploaded.

## 0.2.0 — Productized Foundation

### Added

- Eight career skills: `radar`, `wedge`, `build`, `contributor`, `proof`, `position`, `interview`, `offer`.
- Skill-local operational references and shared evidence contracts.
- Claim–Evidence Ledger schema and local-only template.
- Cross-skill handoff contract.
- Career Alpha Workbench with local browser storage and JSON import/export.
- Product branding: logo, README hero and Workbench preview.
- End-to-end Agent Engineer case.
- AI Product Manager, Quant Researcher and Robotics / Physical AI cases.
- Importable Workbench JSON bundles for all four cases.
- Local `.career-alpha/` workspace and CLI commands.
- Codex, Claude Code, OpenCode and TraeWork plugin manifests.
- Claude Code marketplace manifest.
- Multi-client installation guide and five-minute quickstart.
- Issue templates for real cases, new skills and bugs.
- Pull request template and bilingual contribution guide.
- Static, strict and Node package validators wired into GitHub Actions.

### Changed

- README redesigned from a methodology document into a product entry page.
- Each skill expanded from a short routing prompt into an operational playbook.
- `/position` separates Safe / Strong / Future positioning.
- `/proof` audits atomic claims, numerical claims, ownership, causal risk and status separately.
- `/interview` returns explicit defense verdicts such as `EVIDENCE_GAP`, `OWNERSHIP_GAP`, `DOWNGRADE` and `REMOVE`.
- `/offer` acts as a market-feedback layer and routes signals back upstream.
