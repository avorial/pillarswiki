"use strict";

const state = {
  data: null,
  events: [],
  activeEra: "all",
  activeEventId: "",
  activeReference: "factions",
  filters: {
    query: "",
    sphere: "all",
    faction: "all",
    location: "all",
    source: "all",
    fromYear: "",
    toYear: "",
  },
};

const els = {
  title: document.querySelector("#chronicleTitle"),
  subtitle: document.querySelector("#chronicleSubtitle"),
  searchInput: document.querySelector("#searchInput"),
  fromYearInput: document.querySelector("#fromYearInput"),
  toYearInput: document.querySelector("#toYearInput"),
  sphereFilter: document.querySelector("#sphereFilter"),
  factionFilter: document.querySelector("#factionFilter"),
  locationFilter: document.querySelector("#locationFilter"),
  sourceFilter: document.querySelector("#sourceFilter"),
  eraList: document.querySelector("#eraList"),
  timelineList: document.querySelector("#timelineList"),
  visibleCount: document.querySelector("#visibleCount"),
  totalCount: document.querySelector("#totalCount"),
  detailCard: document.querySelector("#detailCard"),
  resetButton: document.querySelector("#resetButton"),
  pdfStatus: document.querySelector("#pdfStatus"),
  referenceGrid: document.querySelector("#referenceGrid"),
  eraButtonTemplate: document.querySelector("#eraButtonTemplate"),
  eventTemplate: document.querySelector("#eventTemplate"),
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindControls();

  try {
    await loadData();
    hydratePage();
  } catch (error) {
    els.timelineList.innerHTML = `<p class="empty-message">Unable to load chronicle data. Check that chronicle-data.js is next to this page.</p>`;
    console.error(error);
  }
}

async function loadData() {
  if (window.PILLARS_CHRONICLE_DATA) {
    state.data = window.PILLARS_CHRONICLE_DATA;
    return;
  }

  const response = await fetch("chronicle-data.json");
  if (!response.ok) throw new Error(`Chronicle data request failed: ${response.status}`);
  state.data = await response.json();
}

function hydratePage() {
  state.events = [...(state.data.events || [])].sort((a, b) => Number(a.sortYear) - Number(b.sortYear));
  els.title.textContent = state.data.title || "Pillars of Salt Chronicle";
  els.subtitle.textContent = state.data.subtitle || "";
  els.totalCount.textContent = String(state.events.length);
  els.pdfStatus.textContent = pdfStatusText(state.data.pdfPipeline);
  populateFilters();
  renderEras();
  renderTimeline();
  renderReference();
  openFromHash();
}

function bindControls() {
  els.searchInput.addEventListener("input", () => {
    state.filters.query = normalize(els.searchInput.value);
    renderTimeline();
  });

  [els.sphereFilter, els.factionFilter, els.locationFilter, els.sourceFilter].forEach((select) => {
    select.addEventListener("change", () => {
      state.filters[select.dataset.filter] = select.value;
      renderTimeline();
    });
  });

  [els.fromYearInput, els.toYearInput].forEach((input) => {
    input.addEventListener("input", () => {
      state.filters.fromYear = els.fromYearInput.value;
      state.filters.toYear = els.toYearInput.value;
      renderTimeline();
    });
  });

  els.resetButton.addEventListener("click", resetFilters);

  document.querySelectorAll(".reference-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".reference-tab").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeReference = button.dataset.reference || "factions";
      renderReference();
    });
  });

  window.addEventListener("hashchange", openFromHash);
}

function populateFilters() {
  populateSelect(els.sphereFilter, "sphere", uniqueValues(state.events.flatMap((event) => event.spheres || [])));
  populateSelect(els.factionFilter, "faction", uniqueValues(state.events.flatMap((event) => event.factions || [])));
  populateSelect(els.locationFilter, "location", uniqueValues(state.events.flatMap((event) => event.locations || [])));

  const sourceLabels = (state.data.sources || []).map((source) => ({ value: source.id, label: source.label }));
  populateSelect(els.sourceFilter, "source", sourceLabels);
}

function populateSelect(select, filterName, values) {
  select.dataset.filter = filterName;
  const options = [{ value: "all", label: "All" }, ...values.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  })];

  select.replaceChildren(...options.map((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    return option;
  }));
}

function renderEras() {
  const fragment = document.createDocumentFragment();
  const allButton = els.eraButtonTemplate.content.firstElementChild.cloneNode(true);
  allButton.dataset.era = "all";
  allButton.classList.toggle("active", state.activeEra === "all");
  allButton.querySelector(".era-title").textContent = "All eras";
  allButton.querySelector(".era-range").textContent = `${state.events.length} timeline entries`;
  allButton.addEventListener("click", () => selectEra("all"));
  fragment.appendChild(allButton);

  (state.data.eras || []).forEach((era) => {
    const node = els.eraButtonTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.era = era.id;
    node.classList.toggle("active", state.activeEra === era.id);
    node.querySelector(".era-title").textContent = era.title;
    node.querySelector(".era-range").textContent = era.range;
    node.addEventListener("click", () => selectEra(era.id));
    fragment.appendChild(node);
  });

  els.eraList.replaceChildren(fragment);
}

function selectEra(eraId) {
  state.activeEra = eraId;
  renderEras();
  renderTimeline();
}

function renderTimeline() {
  if (!state.data) return;

  const events = state.events.filter(matchesFilters);
  els.visibleCount.textContent = String(events.length);

  if (!events.length) {
    els.timelineList.innerHTML = `<p class="empty-message">No events match these filters.</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  const eras = state.data.eras || [];
  const eraIds = state.activeEra === "all" ? eras.map((era) => era.id) : [state.activeEra];

  eraIds.forEach((eraId) => {
    const era = eras.find((item) => item.id === eraId);
    const eraEvents = events.filter((event) => event.era === eraId);
    if (!era || !eraEvents.length) return;

    const group = document.createElement("section");
    group.className = "era-group";
    group.id = `era-${era.id}`;
    group.appendChild(eraHeading(era));

    eraEvents.forEach((event) => {
      group.appendChild(eventCard(event));
    });

    fragment.appendChild(group);
  });

  els.timelineList.replaceChildren(fragment);
}

function eraHeading(era) {
  const node = document.createElement("header");
  node.className = "era-heading";
  node.innerHTML = `<h3>${escapeHtml(era.title)}</h3><p>${escapeHtml(era.summary || "")}</p>`;
  return node;
}

function eventCard(event) {
  const node = els.eventTemplate.content.firstElementChild.cloneNode(true);
  const button = node.querySelector(".event-button");
  node.dataset.eventId = event.id;
  node.classList.toggle("active", event.id === state.activeEventId);
  node.querySelector(".event-date").textContent = event.date;
  node.querySelector(".event-title").textContent = event.title;
  node.querySelector(".event-summary").textContent = event.summary;
  node.querySelector(".event-tags").replaceChildren(
    ...tagNodes([...(event.spheres || []), continuityLabel(event.continuity)], ["sphere", "continuity"])
  );
  button.addEventListener("click", () => selectEvent(event.id, true));
  return node;
}

function selectEvent(eventId, updateHash) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;

  state.activeEventId = event.id;
  if (updateHash) history.replaceState(null, "", `#event=${encodeURIComponent(event.id)}`);
  renderTimeline();
  renderDetail(event);
}

function renderDetail(event) {
  const sources = event.sources || [];
  const sourceLookup = new Map((state.data.sources || []).map((source) => [source.id, source.label]));
  const characters = characterLinks(event);

  els.detailCard.innerHTML = `
    <p class="kicker">${escapeHtml(eraTitle(event.era))}</p>
    <h2>${escapeHtml(event.title)}</h2>
    <p class="detail-date">${escapeHtml(event.date)}</p>
    <p class="detail-summary">${escapeHtml(event.summary)}</p>
    <div class="tag-list">${tagMarkup([...(event.spheres || []), continuityLabel(event.continuity)])}</div>
    <section class="detail-block">
      <h3>Why it matters in Pillars</h3>
      <p class="impact">${escapeHtml(event.impact || "This event is part of the citybook continuity.")}</p>
    </section>
    ${detailList("Factions", event.factions)}
    ${detailList("Locations", event.locations)}
    ${detailList("NPCs", event.npcs)}
    ${characters.length ? detailList("Character links", characters, true) : ""}
    <section class="detail-block">
      <h3>Sources</h3>
      <ul class="detail-list">
        ${sources.map((sourceId) => `<li>${escapeHtml(sourceLookup.get(sourceId) || sourceId)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function detailList(title, items = [], isHtml = false) {
  if (!items.length) return "";
  return `
    <section class="detail-block">
      <h3>${escapeHtml(title)}</h3>
      <ul class="detail-list">
        ${items.map((item) => `<li>${isHtml ? item : escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderReference() {
  if (!state.data) return;
  const key = state.activeReference;
  let items = state.data[key] || [];

  if (key === "sources") {
    items = state.data.sources || [];
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "reference-card";
    const name = item.name || item.title || item.label;
    const meta = [item.sphere, item.type].filter(Boolean).join(" / ");
    card.innerHTML = `
      <p class="kicker">${escapeHtml(meta || key)}</p>
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(item.summary || "Citation source for the citybook manuscript.")}</p>
    `;
    fragment.appendChild(card);
  });

  els.referenceGrid.replaceChildren(fragment);
}

function matchesFilters(event) {
  if (state.activeEra !== "all" && event.era !== state.activeEra) return false;
  if (state.filters.sphere !== "all" && !(event.spheres || []).includes(state.filters.sphere)) return false;
  if (state.filters.faction !== "all" && !(event.factions || []).includes(state.filters.faction)) return false;
  if (state.filters.location !== "all" && !(event.locations || []).includes(state.filters.location)) return false;
  if (state.filters.source !== "all" && !(event.sources || []).includes(state.filters.source)) return false;
  if (!matchesYearRange(event)) return false;
  if (!matchesQuery(event)) return false;
  return true;
}

function matchesYearRange(event) {
  const year = Number(event.sortYear);
  const from = Number(state.filters.fromYear);
  const to = Number(state.filters.toYear);
  if (state.filters.fromYear !== "" && Number.isFinite(from) && year < from) return false;
  if (state.filters.toYear !== "" && Number.isFinite(to) && year > to) return false;
  return true;
}

function matchesQuery(event) {
  const query = state.filters.query;
  if (!query) return true;
  const haystack = [
    event.title,
    event.date,
    event.summary,
    event.impact,
    eraTitle(event.era),
    ...(event.spheres || []),
    ...(event.factions || []),
    ...(event.locations || []),
    ...(event.npcs || []),
    ...(event.sources || []),
  ].map(normalize).join(" ");
  return haystack.includes(query);
}

function resetFilters() {
  state.activeEra = "all";
  state.filters = {
    query: "",
    sphere: "all",
    faction: "all",
    location: "all",
    source: "all",
    fromYear: "",
    toYear: "",
  };
  els.searchInput.value = "";
  els.fromYearInput.value = "";
  els.toYearInput.value = "";
  [els.sphereFilter, els.factionFilter, els.locationFilter, els.sourceFilter].forEach((select) => {
    select.value = "all";
  });
  renderEras();
  renderTimeline();
}

function openFromHash() {
  const match = window.location.hash.match(/event=([^&]+)/);
  if (!match) return;
  selectEvent(decodeURIComponent(match[1]), false);
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
}

function tagNodes(labels, classNames = []) {
  return labels.filter(Boolean).map((label, index) => {
    const span = document.createElement("span");
    span.className = `tag ${classNames[index] || ""}`.trim();
    span.textContent = label;
    return span;
  });
}

function tagMarkup(labels) {
  return labels.filter(Boolean).map((label) => `<span class="tag">${escapeHtml(label)}</span>`).join("");
}

function continuityLabel(value) {
  if (value === "published") return "Published canon";
  if (value === "pillars") return "Pillars local";
  if (value === "reconciled") return "Reconciled continuity";
  return "Draft";
}

function eraTitle(eraId) {
  return (state.data?.eras || []).find((era) => era.id === eraId)?.title || "Chronicle";
}

function pdfStatusText(pipeline) {
  if (!pipeline) return "Planned manuscript export.";
  return `${titleize(pipeline.status || "planned")} / ${pipeline.bookSections?.length || 0} planned book sections`;
}

function characterLinks(event) {
  const known = {
    "Bruno Giovanni": "characters/NPC/Giovanni-NPC/Don-Alfonso-Bruno-Gio-Capo-of-OC.json",
    "Don Dominic De Guzman": "characters/NPC/Sabbat-NPC/Don-Paul-Guzman-Lasombra-NPC.json",
    "Leila Monroe": "characters/NPC/Sabbat-NPC/Leila-Monroe-NPC-Dressed-to-Kill.json",
    "Bishop Mark": "characters/NPC/Sabbat-NPC/Double-Helix-Doors/Bishop-Mark-Blood-Brother-Theo-V.3.5.4.json",
    "Joaquin Murietta": "characters/NPC/Joaquin-Murietta-Toreador-NPC.json",
    "Louis Fortier": "characters/Drive-V.3.5.4-Search/Copy-of-Current-Sheet-V.3.5.4.json"
  };

  return (event.npcs || [])
    .filter((name) => known[name])
    .map((name) => `<a href="characters.html#${encodeURIComponent(known[name])}">${escapeHtml(name)}</a>`);
}

function titleize(value) {
  return String(value || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value || "");
  return div.innerHTML;
}
