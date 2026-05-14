from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT = Path("characters")
MANIFEST = ROOT / "manifest.json"


def normalized_name(value: str | None) -> str:
    return " ".join((value or "").strip().lower().split())


def display_name(entry: dict) -> str:
    return entry.get("characterName") or entry.get("sourceTitle") or entry.get("path") or "Untitled"


def load_manifest() -> dict:
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def duplicate_plan(manifest: dict) -> list[dict]:
    groups: dict[str, list[dict]] = {}
    for entry in manifest.get("processed", []):
        key = normalized_name(entry.get("characterName") or entry.get("sourceTitle"))
        if not key:
            continue
        groups.setdefault(key, []).append(entry)

    plan = []
    for entries in groups.values():
        if len(entries) < 2:
            continue
        existing = [entry for entry in entries if Path(entry["path"]).exists()]
        if len(existing) < 2:
            continue

        sized = sorted(
            (
                {
                    "entry": entry,
                    "path": entry["path"],
                    "bytes": Path(entry["path"]).stat().st_size,
                }
                for entry in existing
            ),
            key=lambda item: (-item["bytes"], item["path"]),
        )
        keep = sized[0]
        delete = sized[1:]
        plan.append(
            {
                "name": display_name(keep["entry"]),
                "keep": {"path": keep["path"], "bytes": keep["bytes"]},
                "delete": [{"path": item["path"], "bytes": item["bytes"]} for item in delete],
                "tieForLargest": len(sized) > 1 and sized[0]["bytes"] == sized[1]["bytes"],
            }
        )

    return sorted(plan, key=lambda item: item["name"].lower())


def apply_plan(plan: list[dict], dry_run: bool) -> int:
    removed = 0
    for group in plan:
        for item in group["delete"]:
            path = Path(item["path"])
            if dry_run:
                removed += 1
                continue
            if path.exists():
                path.unlink()
                removed += 1
    return removed


def write_manifest_without_deleted(manifest: dict, plan: list[dict], dry_run: bool) -> int:
    deleted = {item["path"] for group in plan for item in group["delete"]}
    processed = manifest.get("processed", [])
    kept = [entry for entry in processed if entry.get("path") not in deleted]
    removed = len(processed) - len(kept)

    if not dry_run:
        manifest["processed"] = kept
        manifest["processedCount"] = len(kept)
        MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    return removed


def main() -> None:
    parser = argparse.ArgumentParser(description="Remove smaller duplicate character JSONs by character name.")
    parser.add_argument("--dry-run", action="store_true", help="Report what would be removed without writing files.")
    parser.add_argument("--details", action="store_true", help="Include the full keep/delete plan in output.")
    args = parser.parse_args()

    manifest = load_manifest()
    plan = duplicate_plan(manifest)
    removed_files = apply_plan(plan, args.dry_run)
    removed_manifest_entries = write_manifest_without_deleted(manifest, plan, args.dry_run)

    output = {
        "dryRun": args.dry_run,
        "duplicateGroups": len(plan),
        "removedFiles": removed_files,
        "removedManifestEntries": removed_manifest_entries,
        "tiesForLargest": sum(1 for group in plan if group["tieForLargest"]),
    }
    if args.details:
        output["plan"] = plan

    print(json.dumps(output, indent=2))


if __name__ == "__main__":
    main()
