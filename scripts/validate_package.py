#!/usr/bin/env python3
"""Strict, dependency-free checks for the Career Alpha package contract."""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
SKILLS_DIR = ROOT / "skills"
EXPECTED_SKILLS = (
    "radar",
    "wedge",
    "contributor",
    "build",
    "proof",
    "position",
    "interview",
    "offer",
)
EXPECTED_VERSION = "0.2.0"
MANIFESTS = {
    "Codex": ROOT / ".codex-plugin" / "plugin.json",
    "Claude Code": ROOT / ".claude-plugin" / "plugin.json",
    "OpenCode": ROOT / ".opencode-plugin" / "plugin.json",
}
ROUTING_FILES = (
    ROOT / "tests" / "skill-routing-cases.yaml",
    ROOT / "tests" / "routing-boundary-cases.yaml",
)
LEDGER_SCHEMA = ROOT / "references" / "claim-evidence-ledger.schema.json"
LEDGER_TEMPLATE = ROOT / "assets" / "career-claim-ledger-template.json"

MARKDOWN_LINK = re.compile(r"\]\(([^)\n]+)\)")
REFERENCE_LINK = re.compile(r"references/[A-Za-z0-9_.\-/]+\.md")
CASE_START = re.compile(r"^\s{2}-\s+(input|prompt):\s*(.+)$")
EXPECTED_SKILL = re.compile(r"^\s{4}(expected_skill|expected):\s*(.+)$")
EXPECTED_FLOW = re.compile(r"^\s{4}(expected_flow|flow):\s*(.*)$")
FLOW_ITEM = re.compile(r"^\s{6}-\s+([A-Za-z0-9_-]+)\s*$")


@dataclass
class Report:
    errors: list[str] = field(default_factory=list)

    def error(self, path: Path, message: str) -> None:
        try:
            label = str(path.relative_to(ROOT))
        except ValueError:
            label = str(path)
        self.errors.append(f"{label}: {message}")


def read_text(path: Path, report: Report) -> str | None:
    try:
        return path.read_text(encoding="utf-8-sig")
    except FileNotFoundError:
        report.error(path, "missing file")
    except UnicodeError as exc:
        report.error(path, f"invalid UTF-8: {exc}")
    return None


def read_json(path: Path, report: Report) -> dict[str, Any] | None:
    text = read_text(path, report)
    if text is None:
        return None
    try:
        value = json.loads(text)
    except json.JSONDecodeError as exc:
        report.error(path, f"invalid JSON: {exc}")
        return None
    if not isinstance(value, dict):
        report.error(path, "top-level JSON value must be an object")
        return None
    return value


def scalar(raw: str) -> str:
    value = raw.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
        if value[0] == '"':
            try:
                parsed = json.loads(value)
                return parsed if isinstance(parsed, str) else value[1:-1]
            except json.JSONDecodeError:
                pass
        return value[1:-1]
    return value


def parse_frontmatter(path: Path, text: str, report: Report) -> dict[str, str]:
    if not text.startswith("---\n"):
        report.error(path, "frontmatter must start with ---")
        return {}
    end = text.find("\n---\n", 4)
    if end == -1:
        report.error(path, "frontmatter is not terminated")
        return {}

    result: dict[str, str] = {}
    for line_number, line in enumerate(text[4:end].splitlines(), start=2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if line[:1].isspace() or ":" not in line:
            report.error(path, f"malformed frontmatter at line {line_number}")
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        if key in result:
            report.error(path, f"duplicate frontmatter key: {key}")
        result[key] = scalar(value)
    return result


def parse_openai_yaml(path: Path, text: str, report: Report) -> dict[str, str]:
    """Parse the deliberately small interface YAML subset used by this package."""

    result: dict[str, str] = {}
    in_interface = False
    for line_number, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if line == "interface:":
            in_interface = True
            continue
        if not line[:1].isspace():
            report.error(path, f"unsupported top-level YAML key at line {line_number}")
            in_interface = False
            continue
        if not in_interface or ":" not in line:
            report.error(path, f"malformed interface YAML at line {line_number}")
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        if key in result:
            report.error(path, f"duplicate interface key: {key}")
        result[key] = scalar(value)

    if not in_interface:
        report.error(path, "missing top-level interface section")
    for key in ("display_name", "short_description", "default_prompt"):
        if not result.get(key):
            report.error(path, f"missing interface.{key}")
    return result


def check_markdown_links(path: Path, text: str, report: Report) -> None:
    for target in MARKDOWN_LINK.findall(text):
        target = target.strip()
        if target.startswith("<") and target.endswith(">"):
            target = target[1:-1]
        if target.startswith(("#", "http://", "https://", "mailto:", "tel:", "//")):
            continue
        target = target.split("#", 1)[0].split("?", 1)[0]
        if not target:
            continue
        if re.match(r"^[A-Za-z]:[\\/]", target) or target.startswith("/"):
            report.error(path, f"absolute Markdown link is not allowed: {target}")
            continue
        resolved = (path.parent / target).resolve()
        try:
            resolved.relative_to(ROOT)
        except ValueError:
            report.error(path, f"Markdown link escapes repository: {target}")
            continue
        if not resolved.exists():
            report.error(path, f"missing Markdown link target: {target}")

    for reference in REFERENCE_LINK.findall(text):
        if not (ROOT / reference).exists():
            report.error(path, f"missing referenced file: {reference}")


def check_skills(report: Report) -> None:
    if not SKILLS_DIR.exists():
        report.error(SKILLS_DIR, "missing skills directory")
        return

    actual = {path.name for path in SKILLS_DIR.iterdir() if path.is_dir()}
    for missing in sorted(set(EXPECTED_SKILLS) - actual):
        report.error(SKILLS_DIR / missing, "missing expected skill directory")
    for extra in sorted(actual - set(EXPECTED_SKILLS)):
        report.error(SKILLS_DIR / extra, "unexpected skill directory")

    for name in EXPECTED_SKILLS:
        skill_dir = SKILLS_DIR / name
        skill_path = skill_dir / "SKILL.md"
        text = read_text(skill_path, report)
        if text is not None:
            meta = parse_frontmatter(skill_path, text, report)
            if meta.get("name") != name:
                report.error(skill_path, f"frontmatter name must be {name!r}")
            description = meta.get("description", "")
            if not description:
                report.error(skill_path, "missing frontmatter description")
            elif len(description) > 500:
                report.error(skill_path, "frontmatter description exceeds 500 characters")
            check_markdown_links(skill_path, text, report)

        interface_path = skill_dir / "agents" / "openai.yaml"
        interface_text = read_text(interface_path, report)
        if interface_text is not None:
            interface = parse_openai_yaml(interface_path, interface_text, report)
            if interface.get("display_name") != name:
                report.error(interface_path, f"interface.display_name must be {name!r}")
            if len(interface.get("short_description", "")) > 200:
                report.error(interface_path, "interface.short_description exceeds 200 characters")


def check_manifests(report: Report) -> None:
    for label, path in MANIFESTS.items():
        data = read_json(path, report)
        if data is None:
            continue
        if data.get("name") != "career-alpha":
            report.error(path, "name must be career-alpha")
        if data.get("version") != EXPECTED_VERSION:
            report.error(path, f"version must be {EXPECTED_VERSION}")

        if label == "Codex":
            skills = data.get("skills")
            if not isinstance(skills, str) or not (path.parent.parent / skills).exists():
                report.error(path, "skills must point to an existing directory")
            interface = data.get("interface")
            if not isinstance(interface, dict):
                report.error(path, "missing interface object")
            else:
                for key in ("displayName", "shortDescription", "longDescription", "defaultPrompt"):
                    if not interface.get(key):
                        report.error(path, f"interface.{key} must be non-empty")
                if not isinstance(interface.get("capabilities"), list) or not interface["capabilities"]:
                    report.error(path, "interface.capabilities must be a non-empty list")

        if label == "OpenCode":
            skills = data.get("skills")
            if not isinstance(skills, dict):
                report.error(path, "missing skills object")
                continue
            skill_path = skills.get("path")
            if not isinstance(skill_path, str) or not (path.parent.parent / skill_path).exists():
                report.error(path, "skills.path must point to an existing directory")
            entries = skills.get("entries")
            if not isinstance(entries, list):
                report.error(path, "skills.entries must be a list")
                continue
            names = {entry.get("name") for entry in entries if isinstance(entry, dict)}
            if names != set(EXPECTED_SKILLS):
                report.error(path, "skills.entries must contain exactly the eight expected skill names")
            for entry in entries:
                if not isinstance(entry, dict) or not entry.get("description"):
                    report.error(path, "every OpenCode skill entry needs a description")


def check_ledger_contract(report: Report) -> None:
    schema = read_json(LEDGER_SCHEMA, report)
    if schema is not None:
        required = set(schema.get("required", []))
        expected = {"schema_version", "privacy", "profile", "claims"}
        if not expected.issubset(required):
            report.error(LEDGER_SCHEMA, "top-level required fields are incomplete")
        definitions = schema.get("$defs")
        if not isinstance(definitions, dict) or not {"claim", "evidence", "ownership"}.issubset(definitions):
            report.error(LEDGER_SCHEMA, "claim, evidence and ownership definitions are required")

    template = read_json(LEDGER_TEMPLATE, report)
    if template is None:
        return
    schema_ref = template.get("$schema")
    expected_ref = "../references/claim-evidence-ledger.schema.json"
    if schema_ref != expected_ref:
        report.error(LEDGER_TEMPLATE, f"$schema must be {expected_ref}")
    if template.get("schema_version") != "1.0":
        report.error(LEDGER_TEMPLATE, "schema_version must be 1.0")
    if template.get("privacy") != "local-only":
        report.error(LEDGER_TEMPLATE, "template privacy must default to local-only")
    if not isinstance(template.get("profile"), dict) or not isinstance(template.get("claims"), list):
        report.error(LEDGER_TEMPLATE, "template needs profile object and claims list")


def parse_inline_flow(raw: str) -> list[str]:
    value = raw.strip()
    if not value:
        return []
    if value.startswith("[") and value.endswith("]"):
        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return []
        return [str(item) for item in parsed] if isinstance(parsed, list) else []
    return [scalar(value)]


def validate_routing_file(path: Path, report: Report) -> list[str]:
    text = read_text(path, report)
    if text is None:
        return []
    lines = text.splitlines()
    if not any(line.strip() == "cases:" for line in lines):
        report.error(path, "missing top-level cases key")
        return []

    cases: list[dict[str, Any]] = []
    current: dict[str, Any] | None = None
    in_flow = False

    def flush() -> None:
        nonlocal current
        if current is not None:
            cases.append(current)
        current = None

    for line_number, line in enumerate(lines, start=1):
        match = CASE_START.match(line)
        if match:
            flush()
            current = {"line": line_number, "input": scalar(match.group(2))}
            in_flow = False
            continue
        if current is None:
            continue
        match = EXPECTED_SKILL.match(line)
        if match:
            current["skill"] = scalar(match.group(2))
            in_flow = False
            continue
        match = EXPECTED_FLOW.match(line)
        if match:
            current["flow"] = parse_inline_flow(match.group(2))
            in_flow = True
            continue
        if in_flow:
            match = FLOW_ITEM.match(line)
            if match:
                current.setdefault("flow", []).append(match.group(1))
                continue
        if line.strip() and not line.lstrip().startswith("#"):
            report.error(path, f"unrecognized routing syntax at line {line_number}")
    flush()

    direct_skills: list[str] = []
    for case in cases:
        line_number = case["line"]
        if not case.get("input"):
            report.error(path, f"case at line {line_number} has empty input")
        has_skill = "skill" in case
        has_flow = "flow" in case
        if has_skill == has_flow:
            report.error(path, f"case at line {line_number} must define exactly one expected result")
            continue
        if has_skill:
            skill = case["skill"]
            if skill not in EXPECTED_SKILLS:
                report.error(path, f"case at line {line_number} uses unknown skill {skill!r}")
            else:
                direct_skills.append(skill)
        else:
            flow = case.get("flow", [])
            if not flow:
                report.error(path, f"case at line {line_number} has an empty expected flow")
            for skill in flow:
                if skill not in EXPECTED_SKILLS:
                    report.error(path, f"case at line {line_number} uses unknown flow skill {skill!r}")
    if not cases:
        report.error(path, "routing file has no cases")
    return direct_skills


def check_routing(report: Report) -> None:
    direct_skills: list[str] = []
    for path in ROUTING_FILES:
        direct_skills.extend(validate_routing_file(path, report))
    missing = sorted(set(EXPECTED_SKILLS) - set(direct_skills))
    if missing:
        report.error(ROOT / "tests", f"direct routing cases are missing skills: {', '.join(missing)}")


def main() -> int:
    report = Report()
    check_skills(report)
    check_manifests(report)
    check_ledger_contract(report)
    check_routing(report)

    if report.errors:
        print("Career Alpha strict validation failed:\n")
        for error in report.errors:
            print(f"- {error}")
        return 1

    print(
        "Career Alpha strict validation passed: "
        f"{len(EXPECTED_SKILLS)} skills, {len(MANIFESTS)} manifests, "
        f"{len(ROUTING_FILES)} routing files, ledger contract."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
