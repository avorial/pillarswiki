from __future__ import annotations

import json
from pathlib import Path


ROOT = Path("characters")
MANIFEST = ROOT / "manifest.json"


def main() -> None:
    entries = []
    for path in sorted(ROOT.rglob("*.json")):
        if path == MANIFEST:
            continue
        data = json.loads(path.read_text(encoding="utf-8"))
        character = data.get("character", {})
        raw_sheets = data.get("rawSheets", {})
        tabs = list(raw_sheets) if isinstance(raw_sheets, dict) else []
        entries.append(
            {
                "path": path.as_posix(),
                "folderPath": data.get("folderPath", []),
                "sourceTitle": data.get("source", {}).get("title"),
                "characterName": character.get("characterName"),
                "playerName": character.get("playerName"),
                "clan": character.get("clan"),
                "tabs": tabs,
            }
        )

    manifest = {
        "source": "Google Drive Characters folder",
        "status": "in_progress",
        "processedCount": len(entries),
        "processed": entries,
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
