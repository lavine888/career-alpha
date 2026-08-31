#!/usr/bin/env python3
"""Strict dependency-free validation for the Career Alpha package contract."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_VERSION = "0.3.0"
EXPECTED_SKILLS = ("radar", "wedge", "contributor", "build", "proof", "position", "interview", "offer")
MANIFESTS = {
    "Codex": ROOT / ".codex-plugin" / "plugin.json",
    "Claude Code": ROOT / ".claude-plugin" / "plugin.json",
    "OpenCode": ROOT / ".opencode-plugin" / "plugin.json",
    "TraeWork": ROOT / ".trae-plugin" / "plugin.json",
}
errors: list[str] = []

def fail(path: Path, message: str) -> None:
    try: label = path.relative_to(ROOT)
    except ValueError: label = path
    errors.append(f"{label}: {message}")

def read_json(path: Path):
    try: value = json.loads(path.read_text(encoding="utf-8-sig"))
    except FileNotFoundError:
        fail(path, "missing file"); return None
    except (UnicodeError, json.JSONDecodeError) as exc:
        fail(path, f"invalid JSON/UTF-8: {exc}"); return None
    if not isinstance(value, dict):
        fail(path, "top-level JSON value must be an object"); return None
    return value

def check_skills() -> None:
    skills_dir = ROOT / "skills"
    actual = {p.name for p in skills_dir.iterdir() if p.is_dir()} if skills_dir.exists() else set()
    if actual != set(EXPECTED_SKILLS): fail(skills_dir, f"skill directories must be exactly {EXPECTED_SKILLS}; got {sorted(actual)}")
    for name in EXPECTED_SKILLS:
        skill = skills_dir / name / "SKILL.md"
        agent = skills_dir / name / "agents" / "openai.yaml"
        for path in (skill, agent):
            if not path.exists(): fail(path, "missing file")
        if skill.exists():
            text = skill.read_text(encoding="utf-8-sig")
            if not text.startswith("---\n"): fail(skill, "frontmatter must start with ---")
            match = re.search(r"^name:\s*[\"']?([^\"'\n]+)", text, re.M)
            if not match or match.group(1).strip() != name: fail(skill, f"frontmatter name must be {name}")

def check_manifests() -> None:
    for label, path in MANIFESTS.items():
        data = read_json(path)
        if not data: continue
        if data.get("name") != "career-alpha": fail(path, "name must be career-alpha")
        if data.get("version") != EXPECTED_VERSION: fail(path, f"version must be {EXPECTED_VERSION}")
        if label in {"Codex", "TraeWork"}:
            skills = data.get("skills")
            if not isinstance(skills, str) or not (ROOT / skills).resolve().exists(): fail(path, "skills must point to an existing directory")
            interface = data.get("interface")
            if not isinstance(interface, dict): fail(path, "missing interface object")
            else:
                for key in ("displayName", "shortDescription", "longDescription", "defaultPrompt"):
                    if not interface.get(key): fail(path, f"interface.{key} must be non-empty")
                for key in ("composerIcon", "logo"):
                    icon = interface.get(key)
                    if icon and not (ROOT / icon).resolve().exists(): fail(path, f"interface.{key} points to missing asset: {icon}")
        if label == "OpenCode":
            entries = data.get("skills", {}).get("entries", []) if isinstance(data.get("skills"), dict) else []
            names = {entry.get("name") for entry in entries if isinstance(entry, dict)}
            if names != set(EXPECTED_SKILLS): fail(path, "skills.entries must contain exactly the eight expected skills")

def check_marketplace() -> None:
    path = ROOT / ".claude-plugin" / "marketplace.json"
    data = read_json(path)
    if not data: return
    plugins = data.get("plugins")
    if data.get("name") != "career-alpha" or not isinstance(plugins, list) or len(plugins) != 1:
        fail(path, "must expose exactly one career-alpha plugin"); return
    plugin = plugins[0]
    if plugin.get("name") != "career-alpha" or plugin.get("source") != "./" or plugin.get("version") != EXPECTED_VERSION:
        fail(path, f"plugin must be career-alpha @ {EXPECTED_VERSION} from ./")

def check_ledger() -> None:
    schema_path = ROOT / "references" / "claim-evidence-ledger.schema.json"
    template_path = ROOT / "assets" / "career-claim-ledger-template.json"
    schema = read_json(schema_path); template = read_json(template_path)
    if schema and not {"schema_version", "privacy", "profile", "claims"}.issubset(set(schema.get("required", []))): fail(schema_path, "required ledger fields are incomplete")
    if template:
        if template.get("schema_version") != "1.0": fail(template_path, "schema_version must be 1.0")
        if template.get("privacy") != "local-only": fail(template_path, "privacy must default to local-only")

def check_routing() -> None:
    for relative in ("tests/skill-routing-cases.yaml", "tests/routing-boundary-cases.yaml"):
        path = ROOT / relative
        if not path.exists(): fail(path, "missing routing fixture"); continue
        text = path.read_text(encoding="utf-8-sig")
        if "cases:" not in text: fail(path, "missing cases key")
        for token in re.findall(r"expected_skill:\s*([A-Za-z0-9_-]+)", text):
            if token not in EXPECTED_SKILLS: fail(path, f"unknown expected skill {token}")

def check_required_assets() -> None:
    required = (
        "assets/career-alpha-logo.svg","assets/career-alpha-logo-small.svg","assets/career-alpha-mascot.svg","assets/career-alpha-hero.svg","assets/workbench-preview.svg","assets/career-alpha-workbench.html","assets/workbench-state.schema.json",
        "docs/installation.md","docs/quickstart.md","docs/real-cases/README.md",
        "scripts/eval_handoffs.mjs","scripts/eval_integrity.mjs","scripts/serve-workbench.mjs",
        "tests/handoff-contract-cases.json","tests/integrity-eval-cases.json","tests/e2e/workbench.spec.mjs","playwright.config.mjs"
    )
    for relative in required:
        path = ROOT / relative
        if not path.exists(): fail(path, "missing required v0.3 asset")

check_skills(); check_manifests(); check_marketplace(); check_ledger(); check_routing(); check_required_assets()
if errors:
    print("Career Alpha strict validation failed:\n", file=sys.stderr)
    for error in errors: print(f"- {error}", file=sys.stderr)
    raise SystemExit(1)
print("Career Alpha strict validation passed: v0.3 manifests, eight skills, routing, ledger, Workbench schema, integrity evals, and browser-test assets.")
