from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT = Path("characters")
MANIFEST = ROOT / "manifest.json"

CLAN_LABELS = {
    "assamite": "Assamite",
    "brujah": "Brujah",
    "caitiff-thin-blood": "Caitiff & Thin-Blood",
    "caitiff": "Caitiff",
    "thin-blood": "Thin-Blood",
    "gangrel": "Gangrel",
    "giovanni": "Giovanni",
    "lasombra": "Lasombra",
    "malkavian": "Malkavian",
    "nosferatu": "Nosferatu",
    "setite": "Setite",
    "toreador": "Toreador",
    "tremere": "Tremere",
    "tzimisce": "Tzimisce",
    "ventrue": "Ventrue",
}


def infer_clan(path_text: str, folder_path: list[str]) -> str:
    candidates = [*folder_path, path_text]
    normalized_candidates = [candidate.lower().replace("_", "-").replace(" ", "-") for candidate in candidates]

    # Prefer the explicit folder hierarchy first; fall back to filename/path.
    for normalized in normalized_candidates:
        if "caitiff" in normalized and "thin-blood" in normalized:
            return "Caitiff & Thin-Blood"
        for token, label in CLAN_LABELS.items():
            if token in normalized:
                return label
    return ""


def main() -> None:
    parser = argparse.ArgumentParser(description="Fill blank character clan fields from folder/path names.")
    parser.add_argument("--dry-run", action="store_true", help="Report changes without writing files.")
    args = parser.parse_args()

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    changes = []
    for entry in manifest.get("processed", []):
        if str(entry.get("clan") or "").strip():
            continue
        inferred = infer_clan(entry.get("path", ""), entry.get("folderPath") or [])
        if not inferred:
            continue

        path = Path(entry["path"])
        data = json.loads(path.read_text(encoding="utf-8"))
        character = data.setdefault("character", {})
        if str(character.get("clan") or "").strip():
            continue

        changes.append({"path": entry["path"], "characterName": entry.get("characterName"), "clan": inferred})
        if not args.dry_run:
            character["clan"] = inferred
            entry["clan"] = inferred
            path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    if changes and not args.dry_run:
        MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(json.dumps({"dryRun": args.dry_run, "updated": len(changes), "changes": changes}, indent=2))


if __name__ == "__main__":
    main()
