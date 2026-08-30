# Career Alpha Installation

Career Alpha ships one shared `skills/` directory and client-specific packaging for Codex, Claude Code, OpenCode and TraeWork.

> Client packaging changes over time. The repository keeps the skills portable even when a client-specific installer or command changes.

---

## Codex

The simplest path is to give Codex the repository and ask it to install the eight skills:

```text
Please install Career Alpha from this GitHub repository and enable these skills:
radar, wedge, contributor, build, proof, position, interview, offer.

https://github.com/lavine888/career-alpha
```

After installation, start a fresh conversation so skill discovery is reloaded.

Example explicit calls:

```text
$radar Scan AI infrastructure and agent engineering for emerging career opportunities.
$wedge Turn Agent Reliability into a concrete entry wedge for my background.
$build Design a 72-hour proof-of-work mission for that wedge.
$proof Audit the resulting project into evidence-backed claims.
$position Translate those claims into Safe / Strong / Future positioning.
$interview Pressure-test the strongest claim with layered follow-up.
$offer Track recruiting feedback and decide KEEP / REFINE / PIVOT.
```

The Codex package manifest lives at `.codex-plugin/plugin.json`.

---

## Claude Code

Career Alpha includes both:

```text
.claude-plugin/plugin.json
.claude-plugin/marketplace.json
```

In Claude Code, add the repository as a marketplace:

```text
/plugin marketplace add lavine888/career-alpha
```

Then install the plugin:

```text
/plugin install career-alpha@career-alpha
```

Terminal equivalents can be used where supported by the installed Claude Code version:

```bash
claude plugin marketplace add lavine888/career-alpha
claude plugin install career-alpha@career-alpha
```

If Claude Code asks to reload plugins, run the reload command or restart the client. Then verify that the eight skills are discoverable.

Update / uninstall commands may vary by Claude Code release; use the current plugin management commands exposed by the client.

---

## OpenCode

Career Alpha ships `.opencode-plugin/plugin.json` with the eight skill entries and a shared path to `skills/`.

Use the repository as a local plugin package or copy it into the plugin location expected by your OpenCode installation. Keep these paths together:

```text
.opencode-plugin/
skills/
references/
assets/
```

After adding the package, restart / reload OpenCode so it rescans skills.

Because OpenCode packaging can vary by version, prefer the current plugin-loading mechanism shown by your installed client rather than hard-coding an old command.

---

## TraeWork

Career Alpha ships `.trae-plugin/plugin.json`.

A local installation can keep the repository as one plugin package under the TraeWork plugin directory, for example:

```text
~/.trae-cn/plugins/<publisher>/career-alpha/0.2.0/
```

The directory should retain:

```text
.trae-plugin/plugin.json
skills/
references/
assets/
```

Restart TraeWork after copying the package. The eight Career Alpha skills should then be exposed under the Career Alpha plugin namespace.

`<publisher>` is your local namespace. Use the plugin directory convention required by your installed TraeWork version if it differs.

---

## Local Career Workspace

The plugin code can be public while your actual job-search data stays local.

From the repository root:

```bash
npm run init
```

This creates:

```text
.career-alpha/
├── profile.json
├── radar.json
├── wedges.json
├── ledger.json
├── proofs.json
└── applications.json
```

`.career-alpha/` is ignored by git by default.

To inspect demo assets:

```bash
npm run demo
```

To generate a reviewable Markdown snapshot from your local workspace:

```bash
npm run snapshot
```

This writes:

```text
.career-alpha/snapshot.md
```

Review the file before sharing. The export is local-only but it is **not** an automatic privacy filter. See [Career Alpha Snapshot](career-snapshot.md).

To validate the package:

```bash
npm run validate
```

---

## Workbench

No plugin client is required to use the Workbench.

Open:

```text
assets/career-alpha-workbench.html
```

in a browser.

You can import example bundles from:

```text
examples/workbench/
```

All Workbench data stays in browser `localStorage` unless you explicitly export it.

---

## Troubleshooting

### Skill is installed but not visible

- start a new conversation;
- reload / restart the client;
- verify that `skills/<name>/SKILL.md` exists;
- verify the client manifest still points to the shared `skills/` directory.

### Plugin loads but a local reference is missing

Run:

```bash
npm run validate
```

The validators check shared references, skill-local references, plugin manifests, routing files, evidence contracts, Workbench assets and example bundles.

### I only want one skill

The repository is designed as a suite, but each `skills/<name>/` directory is self-contained enough to inspect or adapt independently. Shared evidence and handoff contracts live under `references/`.
