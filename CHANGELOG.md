# Changelog

All notable Career Alpha changes are recorded here.

## Unreleased — v0.3 Real-world Validation

### Added

- Role-specific `/radar` source packs for AI Engineering / Agent Systems, AI Product, Quant Research and Robotics / Physical AI.
- Source-pack routing index for hybrid roles.
- `npm run snapshot` to export the private `.career-alpha/` workspace into a reviewable Markdown Career Alpha Snapshot.
- Snapshot documentation with explicit privacy review rules before sharing.

### Changed

- `/radar` now changes its demand / proof heuristics by target career domain instead of applying one generic signal checklist everywhere.
- Installation docs now include the local snapshot workflow.

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
- `/position` now separates Safe / Strong / Future positioning.
- `/proof` now audits atomic claims, numerical claims, ownership, causal risk and status separately.
- `/interview` now returns explicit defense verdicts such as `EVIDENCE_GAP`, `OWNERSHIP_GAP`, `DOWNGRADE` and `REMOVE`.
- `/offer` now acts as a market-feedback layer and routes signals back upstream.

### Integrity

- Planned work cannot be silently rewritten as completed work.
- Weak evidence cannot be silently upgraded to VERIFIED.
- Simulation / prototype / demo / production boundaries must remain explicit.
- External contributions retain submitted / open / merged state.
- Private recruiting data defaults to local-only storage.
