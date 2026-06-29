"use strict";

const state = {
  manifest: [],
  filtered: [],
  activeFilter: "all",
  activePath: "",
  loadedCharacters: new Map(),
};

const els = {
  totalCount: document.querySelector("#totalCount"),
  visibleCount: document.querySelector("#visibleCount"),
  searchInput: document.querySelector("#searchInput"),
  characterList: document.querySelector("#characterList"),
  emptyState: document.querySelector("#emptyState"),
  sheetView: document.querySelector("#sheetView"),
  sheetTitle: document.querySelector("#sheetTitle"),
  sheetSubtitle: document.querySelector("#sheetSubtitle"),
  sheetGrid: document.querySelector("#sheetGrid"),
  sourceLink: document.querySelector("#sourceLink"),
  itemTemplate: document.querySelector("#listItemTemplate"),
};

const abilityGroups = [
  ["academics", "animal_ken", "athletics", "awareness", "brawl", "computer", "crafts", "dodge", "drive", "empathy", "firearms"],
  ["intimidation", "investigation", "leadership", "linguistics", "lore", "medicine", "melee", "occult", "science", "security", "stealth"],
  ["streetwise", "subterfuge", "survival", "performance"],
];

const backgroundRows = [
  "generation",
  "allies",
  "alternate_identity",
  "contacts",
  "mentor",
  "fame",
  "herd",
  "haven",
  "influence_elite",
  "influence_underworld",
  "resources",
  "retainers",
  "ritae",
  "other",
];

const currentPoolRows = [
  "current_willpower",
  "current_humanity",
  "current_beast_traits",
  "current_derangement_traits",
  "current_blood_points_per_turn",
];

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindControls();

  try {
    const response = await fetch("characters/manifest.json");
    if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
    const manifest = await response.json();
    state.manifest = Array.isArray(manifest.processed) ? manifest.processed : [];
    state.manifest.sort(compareEntries);
    els.totalCount.textContent = String(state.manifest.length);
    applyFilters();
    openFromHash();
  } catch (error) {
    els.characterList.innerHTML = `<div class="character-item">Unable to load manifest. Run this from a local web server.</div>`;
    console.error(error);
  }
}

function bindControls() {
  els.searchInput.addEventListener("input", applyFilters);

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeFilter = button.dataset.filter || "all";
      applyFilters();
    });
  });

  window.addEventListener("hashchange", openFromHash);
}

function applyFilters() {
  const query = normalizeText(els.searchInput.value);
  state.filtered = state.manifest.filter((entry) => matchesFilter(entry, state.activeFilter) && matchesQuery(entry, query));
  els.visibleCount.textContent = String(state.filtered.length);
  renderList();
}

function renderList() {
  const fragment = document.createDocumentFragment();

  state.filtered.forEach((entry) => {
    const node = els.itemTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.path = entry.path;
    node.classList.toggle("active", entry.path === state.activePath);
    node.querySelector(".character-name").textContent = displayName(entry);
    node.querySelector(".character-meta").textContent = [entry.clan, publicPlayer(entry.playerName)].filter(Boolean).join(" / ") || "No clan listed";
    node.querySelector(".character-path").textContent = folderLabel(entry);
    node.addEventListener("click", () => selectCharacter(entry.path, true));
    fragment.appendChild(node);
  });

  els.characterList.replaceChildren(fragment);
}

function matchesFilter(entry, filter) {
  const path = normalizePath(entry.path);

  if (filter === "pc") return path.includes("/pc/");
  if (filter === "npc") return path.includes("/npc") || normalizeText(entry.playerName) === "npc";
  if (filter === "archive") return /retired|old|limbo|not-active|mia|recyclable/.test(path);
  if (filter === "special") return path.includes("special-characters");

  return true;
}

function matchesQuery(entry, query) {
  if (!query) return true;

  const haystack = [
    entry.characterName,
    entry.sourceTitle,
    entry.clan,
    publicPlayer(entry.playerName),
    folderLabel(entry),
    entry.path,
  ]
    .map(normalizeText)
    .join(" ");

  return haystack.includes(query);
}

async function openFromHash() {
  const hashPath = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!hashPath) return;
  await selectCharacter(hashPath, false);
}

async function selectCharacter(path, updateHash) {
  const entry = state.manifest.find((item) => item.path === path);
  if (!entry) return;

  state.activePath = path;
  renderList();

  if (updateHash) {
    history.replaceState(null, "", `#${encodeURIComponent(path)}`);
  }

  els.emptyState.classList.add("hidden");
  els.sheetView.classList.remove("hidden");
  els.sheetTitle.textContent = displayName(entry);
  els.sheetSubtitle.textContent = [entry.clan, folderLabel(entry)].filter(Boolean).join(" / ");
  els.sourceLink.href = path;
  els.sheetGrid.innerHTML = `<div class="footer-note">Loading ${escapeHtml(displayName(entry))}...</div>`;

  try {
    const data = await loadCharacter(path);
    renderSheet(entry, data);
  } catch (error) {
    els.sheetGrid.innerHTML = `<div class="footer-note">Unable to load this character JSON.</div>`;
    console.error(error);
  }
}

async function loadCharacter(path) {
  if (state.loadedCharacters.has(path)) return state.loadedCharacters.get(path);

  const response = await fetch(path);
  if (!response.ok) throw new Error(`Character request failed: ${response.status}`);
  const data = await response.json();
  state.loadedCharacters.set(path, data);
  return data;
}

function renderSheet(entry, data) {
  const character = data.character || {};
  const normalized = {
    name: value(character.characterName) || value(entry.characterName) || value(entry.sourceTitle),
    chronicle: value(character.chronicle),
    player: publicPlayer(character.playerName || entry.playerName),
    coordinator: value(character.clanCoordinator),
    archetype: value(character.archetype),
    title: value(character.title),
    startDate: value(character.characterStartDate),
    generation: value(character.generationLabel),
    clan: value(character.clan || entry.clan),
  };

  els.sheetTitle.textContent = normalized.name || "Character Sheet";
  els.sheetSubtitle.textContent = [normalized.clan, folderLabel(entry)].filter(Boolean).join(" / ");

  const columns = [
    column([
      section("identity", identityTable(normalized)),
      section("Attributes", attributesTable(data.attributes), "plain"),
      section("Status", statusTable(data.status), "plain"),
      section("Abilities", abilitiesTable(data.abilities), "plain"),
      section("Common Trait Pools", commonPoolsTable(data), "plain"),
    ]),
    column([
      section("Current Pools", currentPoolsTable(data.currentPools), "plain"),
      section("Starting Character Concept", textBox(character.startingCharacterConcept || data.startingCharacterConcept, "concept-box"), "plain"),
      section("What Am I Good At?", textBox(character.whatAmIGoodAt || data.whatAmIGoodAt, "good-box"), "plain"),
      section("Boons / Bonds / Vinculum", simpleTable(data.boonsBondsVinculum || data.bloodBonds || [], ["Name", "Level and Date"], 10), "plain"),
    ]),
    column([
      section("Backgrounds", backgroundsTable(data.backgrounds), "plain"),
      section("Merits & Flaws", listTable(data.meritsAndFlaws, 10, meritClass), "plain"),
      section("Ability Specializations", listTable(data.abilitySpecializations, 10), "plain"),
    ]),
    column([
      section("Background Notes", textBox(backgroundNotes(data), "notes-box"), "plain"),
      section("Disciplines", disciplineTable(data.disciplines), "plain"),
      section("Rituals, Ritae, & Other", listTable(data.ritualsRitaeOther, 12), "plain"),
    ]),
  ];

  els.sheetGrid.replaceChildren(...columns, footerNote());
}

function column(children) {
  const node = document.createElement("div");
  node.className = "sheet-column";
  node.replaceChildren(...children);
  return node;
}

function section(title, content, titleClass = "") {
  const node = document.createElement("section");
  node.className = "section";

  if (title !== "identity") {
    const heading = document.createElement("div");
    heading.className = `section-title ${titleClass}`.trim();
    heading.textContent = title;
    node.appendChild(heading);
  }

  node.appendChild(content);
  return node;
}

function identityTable(character) {
  const rows = [
    [character.chronicle || "Chronicle", "Player", character.coordinator],
    [character.name, character.player, character.coordinator],
    ["Character Name", "Player Name", "Clan Coordinator"],
    [character.archetype, character.title, character.startDate],
    ["Archetype", "Title", "Start Date"],
    [character.generation, character.clan, ""],
    ["Generation", "Clan", "Total XP Unspent"],
  ];

  return table(rows, "identity-table", (cell, rowIndex) => {
    if (rowIndex === 0) {
      cell.className = "section-title plain";
    } else if ([2, 4, 6].includes(rowIndex)) {
      cell.className = "italic label";
    }
  });
}

function attributesTable(attributes = {}) {
  const physical = numberValue(attributes.physical);
  const social = numberValue(attributes.social);
  const mental = numberValue(attributes.mental);
  const initiative = physical + mental || "";
  const rows = [
    ["Physical", value(attributes.physical), ""],
    ["Social", value(attributes.social), ""],
    ["Mental", value(attributes.mental), ""],
  ];
  const node = document.createElement("div");
  const header = table([["ATTRIBUTES", "INITIATIVE", initiative]], "cell-table", (cell) => {
    cell.className = "section-title plain";
  });
  const body = table(rows, "cell-table", (cell, rowIndex, colIndex) => {
    if (colIndex === 1) cell.className = "center";
  });
  node.replaceChildren(header, body);
  return node;
}

function currentPoolsTable(pools = {}) {
  const rows = currentPoolRows.map((key) => [titleize(key), value(pools[key])]);
  return table(rows, "cell-table", (cell, rowIndex, colIndex) => {
    if (colIndex === 1) cell.className = "center";
  });
}

function statusTable(status) {
  const rows = normalizeList(status).map((item) => [item, ""]);
  return simpleTable(rows, ["", "Awarded By"], 7);
}

function backgroundsTable(backgrounds = {}) {
  const rows = backgroundRows.map((key) => [titleize(key), value(backgrounds[key])]);
  return table(rows, "cell-table", (cell, rowIndex, colIndex) => {
    if (colIndex === 0) cell.className = "label";
    if (colIndex === 1) cell.className = "center";
  });
}

function abilitiesTable(abilities = {}) {
  const maxRows = Math.max(...abilityGroups.map((group) => group.length));
  const rows = [];

  for (let index = 0; index < maxRows; index += 1) {
    const row = [];
    abilityGroups.forEach((group) => {
      const key = group[index] || "";
      row.push(key ? titleize(key) : "");
      row.push(key ? value(abilities[key]) : "");
    });
    rows.push(row);
  }

  return table(rows, "cell-table", (cell, rowIndex, colIndex) => {
    const abilityName = cell.textContent.toLowerCase();
    if ([0, 2, 4].includes(colIndex) && ["brawl", "dodge", "firearms", "melee"].includes(abilityName)) {
      cell.className = "red";
    }
    if ([1, 3, 5].includes(colIndex)) cell.className = "center";
  });
}

function commonPoolsTable(data) {
  const abilities = data.abilities || {};
  const attributes = data.attributes || {};
  const physical = numberValue(attributes.physical);
  const mental = numberValue(attributes.mental);
  const rows = [
    ["Brawl", poolTotal(physical, abilities.brawl), "Dodge", poolTotal(physical, abilities.dodge)],
    ["Melee", poolTotal(physical, abilities.melee), "Firearms", poolTotal(physical, abilities.firearms)],
    ["Investigation", poolTotal(mental, abilities.investigation), "Occult", poolTotal(mental, abilities.occult)],
  ];
  return table(rows, "cell-table", (cell, rowIndex, colIndex) => {
    if ([1, 3].includes(colIndex)) cell.className = "center";
  });
}

function disciplineTable(disciplines) {
  const rows = normalizeList(disciplines).map((item) => {
    if (typeof item === "object" && item !== null) {
      return [value(item.name), value(item.value)];
    }
    return [String(item), ""];
  });

  return table(padRows(rows, 11, 2), "cell-table", (cell, rowIndex, colIndex) => {
    const raw = rows[rowIndex];
    if (raw && rowIndex < 3) cell.className = "green";
    if (colIndex === 1) cell.className = `${cell.className} center`.trim();
  });
}

function listTable(items, minRows, classForItem) {
  const rows = normalizeList(items).map((item) => [typeof item === "object" ? JSON.stringify(item) : String(item)]);
  return table(padRows(rows, minRows, 1), "cell-table", (cell, rowIndex) => {
    const item = rows[rowIndex]?.[0] || "";
    if (classForItem) cell.className = classForItem(item);
  });
}

function simpleTable(items, headings, minRows) {
  const rows = Array.isArray(items) && items.length && Array.isArray(items[0])
    ? items
    : normalizeList(items).map((item) => [String(item), ""]);
  const padded = padRows(rows, minRows, headings.length);
  return table([headings, ...padded], "cell-table", (cell, rowIndex) => {
    if (rowIndex === 0) cell.className = "italic center";
  });
}

function textBox(text, className) {
  const node = document.createElement("div");
  node.className = className;
  node.textContent = value(text);
  return node;
}

function table(rows, className, decorate) {
  const node = document.createElement("table");
  node.className = className || "cell-table";
  const body = document.createElement("tbody");

  rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.forEach((item, colIndex) => {
      const td = document.createElement("td");
      td.textContent = value(item);
      if (decorate) decorate(td, rowIndex, colIndex);
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  node.appendChild(body);
  return node;
}

function footerNote() {
  const node = document.createElement("div");
  node.className = "footer-note";
  node.textContent = "7/5/3 traits, 3/2/1 backgrounds, 2/1/1 disciplines, 4/3/3/2/2/2/1/1/1/1 abilities, 30pts freebie, 7pts merits max, 7pts flaws max - All Merit/Flaw/Freebies must be on XP Spends Sheet";
  return node;
}

function backgroundNotes(data) {
  const raw = data.backgroundNotes || data.background_notes;
  if (raw) return raw;

  const backgrounds = data.backgrounds || {};
  return Object.entries(backgrounds)
    .filter(([key, val]) => key.includes("note") && value(val))
    .map(([, val]) => val)
    .join("\n");
}

function normalizeList(items) {
  if (!items) return [];
  if (Array.isArray(items)) return items.filter((item) => value(item));
  if (typeof items === "object") {
    return Object.entries(items)
      .filter(([, val]) => value(val))
      .map(([key, val]) => `${titleize(key)} ${value(val)}`.trim());
  }
  return value(items) ? [items] : [];
}

function padRows(rows, minRows, width) {
  const padded = rows.map((row) => {
    const next = Array.isArray(row) ? [...row] : [row];
    while (next.length < width) next.push("");
    return next;
  });
  while (padded.length < minRows) padded.push(Array(width).fill(""));
  return padded;
}

function meritClass(item) {
  if (/\+\d/.test(item)) return "red";
  if (/-\d/.test(item)) return "blue";
  return "";
}

function poolTotal(attribute, ability) {
  const total = numberValue(attribute) + numberValue(ability);
  return total || "";
}

function compareEntries(a, b) {
  return displayName(a).localeCompare(displayName(b), undefined, { sensitivity: "base" });
}

function displayName(entry) {
  return value(entry.characterName) || value(entry.sourceTitle) || value(entry.path).split("/").pop() || "Untitled";
}

function folderLabel(entry) {
  if (Array.isArray(entry.folderPath) && entry.folderPath.length) return entry.folderPath.join(" / ");
  const parts = normalizePath(entry.path).split("/");
  parts.pop();
  return parts.join(" / ");
}

function publicPlayer(playerName) {
  const player = value(playerName);
  if (!player || /gmail|account|@/.test(player.toLowerCase())) return "";
  return player;
}

function value(input) {
  if (input === null || input === undefined) return "";
  if (typeof input === "number") return Number.isInteger(input) ? String(input) : String(input);
  if (typeof input === "string") return input.trim();
  return String(input).trim();
}

function numberValue(input) {
  const parsed = Number(input);
  return Number.isFinite(parsed) ? parsed : 0;
}

function titleize(key) {
  return value(key)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bXp\b/g, "XP");
}

function normalizeText(input) {
  return value(input).toLowerCase();
}

function normalizePath(path) {
  return value(path).replace(/\\/g, "/").toLowerCase();
}

function escapeHtml(input) {
  const div = document.createElement("div");
  div.textContent = value(input);
  return div.innerHTML;
}
