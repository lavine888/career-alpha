#!/usr/bin/env python3
"""Static checks for Career Alpha skill packaging."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKILLS = ["radar", "wedge", "contributor", "build", "proof", "position", "interview", "offer"]
PLUGIN_FILES = [
    ROOT / ".codex-plugin" / "plugin.json",
    ROOT / ".claude-plugin" / "plugin.json",
    ROOT / ".opencode-plugin" / "plugin.json",
]


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        raise ValueError("missing YAML-style frontmatter")
    end = text.find("\n---\n", 4)
    if end == -1:
        raise ValueError("unterminated frontmatter")
    block = text[4:end]
    result: dict[str, str] = {}
    for line in block.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        result[key.strip()] = value.strip()
    return result


def validate_skill(name: str) -> list[str]:
    errors: list[str] = []
    path = ROOT / "skills" / name / "SKILL.md"
    if not path.exists():
        return [f"missing {path.relative_to(ROOT)}"]

    text = path.read_text(encoding="utf-8")
    try:
        meta = parse_frontmatter(text)
    except ValueError as exc:
        return [f"{path.relative_to(ROOT)}: {exc}"]

    if meta.get("name") != name:
        errors.append(f"{path.relative_to(ROOT)}: frontmatter name must be '{name}'")
    if not meta.get("description"):
        errors.append(f"{path.relative_to(ROOT)}: missing description")
    elif len(meta["description"]) > 500:
        errors.append(f"{path.relative_to(ROOT)}: description too long")

    for ref in re.findall(r"references/[A-Za-z0-9_.\-/]+\.md", text):
        if not (ROOT / ref).exists():
            errors.append(f"{path.relative_to(ROOT)}: missing referenced file {ref}")
    return errors


def main() -> int:
    errors: list[str] = []
    for skill in SKILLS:
        errors.extend(validate_skill(skill))

    for plugin in PLUGIN_FILES:
        if not plugin.exists():
            errors.append(f"missing {plugin.relative_to(ROOT)}")
            continue
        try:
            data = json.loads(plugin.read_text(encoding="utf-8-sig"))
        except Exception as exc:
            errors.append(f"{plugin.relative_to(ROOT)}: invalid JSON: {exc}")
            continue
        if data.get("name") != "career-alpha":
            errors.append(f"{plugin.relative_to(ROOT)}: name must be career-alpha")

    routing = ROOT / "tests" / "skill-routing-cases.yaml"
    if not routing.exists():
        errors.append("missing tests/skill-routing-cases.yaml")

    if errors:
        print("Career Alpha validation failed:\n")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Career Alpha validation passed: {len(SKILLS)} skills, {len(PLUGIN_FILES)} plugin manifests.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
