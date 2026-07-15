from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT = Path("characters")
MANIFEST = ROOT / "manifest.json"

ARTIFACT_TABS = {
    "Coding",
    "DisiplineBM Coding",
    "Disipline Coding",
    "Merit Table",
    "Disiplines Mechanic",
    "Morality & Derangments",
    "Sheet Information",
}


def character_files() -> list[Path]:
    return sorted(path for path in ROOT.rglob("*.json") if path != MANIFEST)


def remove_tabs_from_character(path: Path, dry_run: bool) -> tuple[int, int]:
    data = json.loads(path.read_text(encoding="utf-8"))
    raw_sheets = data.get("rawSheets")
    if not isinstance(raw_sheets, dict):
        return 0, 0

    removed_bytes = 0
    removed_count = 0
    for tab in ARTIFACT_TABS:
        if tab in raw_sheets:
            removed_bytes += len(json.dumps(raw_sheets[tab], ensure_ascii=False).encode("utf-8"))
            removed_count += 1
            if not dry_run:
                del raw_sheets[tab]

    if removed_count and not dry_run:
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    return removed_count, removed_bytes


def update_manifest(dry_run: bool) -> int:
    if not MANIFEST.exists():
        return 0

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    touched = 0
    for entry in manifest.get("processed", []):
        tabs = entry.get("tabs")
        if not isinstance(tabs, list):
            continue
        kept = [tab for tab in tabs if tab not in ARTIFACT_TABS]
        if len(kept) != len(tabs):
            touched += 1
            if not dry_run:
                entry["tabs"] = kept

    if touched and not dry_run:
        MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    return touched


def main() -> None:
    parser = argparse.ArgumentParser(description="Remove Google Sheets helper tabs from character JSON exports.")
    parser.add_argument("--dry-run", action="store_true", help="Report what would be removed without writing files.")
    args = parser.parse_args()

    touched_files = 0
    removed_tabs = 0
    removed_bytes = 0
    for path in character_files():
        tab_count, byte_count = remove_tabs_from_character(path, args.dry_run)
        if tab_count:
            touched_files += 1
            removed_tabs += tab_count
            removed_bytes += byte_count

    manifest_entries = update_manifest(args.dry_run)

    print(json.dumps(
        {
            "dryRun": args.dry_run,
            "filesTouched": touched_files,
            "tabsRemoved": removed_tabs,
            "manifestEntriesTouched": manifest_entries,
            "approxRemovedMB": round(removed_bytes / 1024 / 1024, 2),
        },
        indent=2,
    ))


if __name__ == "__main__":
    main()
