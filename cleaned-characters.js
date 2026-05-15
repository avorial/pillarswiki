"use strict";

const cleanedCharacters = [
  {
    id: "cody-west",
    name: "Cody West",
    clan: "Assamite",
    role: "Penitent survivor, stolen identity, Camarilla enforcer",
    image: "pictures/Cody_West.png?v=20260515cody2",
    imageNote: "Portrait of Cody West",
    traits: {
      sire: "\"Kursio the Blade,\" though this identity may be stolen",
      nature: "Survivor",
      demeanor: "Penitent",
      generation: "11th",
      embrace: "1932, Indian Sea",
      apparentAge: "Late 30s to early 40s",
    },
    attributes: {
      physical: 11,
      social: 4,
      mental: 8,
    },
    abilities: {
      talents: "Animal Ken 1, Athletics 3, Awareness 1, Brawl 2, Empathy 1, Intimidation, Leadership 4, Streetwise",
      skills: "Computer 2, Crafts 2, Dodge 3, Investigation 1, Melee 3, Security 1, Stealth 2",
      knowledges: "Academics 1, Linguistics 2, Science 1",
    },
    powers: {
      disciplines: "Celerity 5, Fortitude 3, Obfuscate 2, Quietus 2",
      backgrounds: "Allies 1, Alternate Identity 2, Generation 1, Haven 3, Resources 1, Retainers 1",
      meritsFlaws: "Uncommon Clan, Surprise Attack, Versatile, Intolerance of Anarchs, Derangement, Tainted Embrace, Hunted",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 6,
    },
    history: [
      "Cody West has spent nearly a century trying to believe that Allah still sees him. In life, he was a thief, a cutthroat, and eventually a pirate, not because the world wronged him, but because taking what he wanted came naturally. He had been born Muslim, but in those years faith sat lightly on him. He knew the words, knew the obligations, knew enough to recognize sin when he chose it. He simply chose it anyway. When he was pressed into service aboard a pirate vessel, he found the first brotherhood that ever truly suited him. He learned the blade, learned cruelty, and learned that men who hesitate tend to die with their mouths open.",
      "His Embrace was no dignified choosing. One night, while standing watch, Cody sighted a drifting ship and boarded it with the others in search of easy plunder. What waited below deck was a Sabbat nightmare. Vampires erupted from the dark, slaughtering and Embracing the crew in a grotesque ritual. The newly dead were chained to the ship's anchor and left to bleed away what remained of their Humanity. Cody survived. Most did not. For two months the new vampires were hurled against Camarilla prey, ship after ship, until only three of the original mass Embrace remained. Those three were welcomed into the Sabbat through the Vaulderie. Cody fled the moment they made port.",
      "He has been running ever since, but the flight changed him. Cody had been damned before he died; undeath merely denied him the comfort of pretending otherwise. In the decades that followed, he returned to Islam with the intensity of a drowning man clutching driftwood. He prays when he can, keeps the forms that remain possible, studies the Qur'an, seeks out scholars without ever revealing too much of himself, and gives charity through intermediaries. Whether any of it can matter for one of the dead is a question he does not allow others to answer for him. He has heard every argument about vampires and salvation. None have settled him. He continues because surrender would be the final blasphemy.",
      "Knowing the Sabbat would destroy him if they found him, Cody murdered a younger Assamite and stole his identity, presenting himself to the clan under a fabricated lineage and a stolen sire. He proved useful enough to survive the lie. In Dubai, he carved out a role as an enforcer and problem-solver, a man who could be sent when discretion had failed and someone needed to vanish. It was there that his faith deepened further, surrounded by mosques he could never properly enter by day, by the call to prayer drifting over streets where he moved only after sunset, and by men whose ordinary devotion became both comfort and torment. He learned enough custom, enough etiquette, and enough caution to avoid close scrutiny. Then, one night, he recognized one of the men from the ship walking the streets. Cody abandoned everything and boarded a flight to Los Angeles.",
      "The Camarilla city is not home, but Cody has learned not to ask for home. He asks for walls, weapons, and people with reasons not to betray him. In Los Angeles he has established a secure haven in Covina, cultivated a meaningful connection to the local Muslim community through Mr. Mostafa of the Al Nabi Mosque, and retained the services of Art Barzin. To mortal eyes, Cody is a private, serious benefactor, a man of means just sufficient to be helpful and of manners too reserved to be questioned. Among Kindred, he presents himself as a hard, quiet Assamite warrior, suspicious of Anarchs, contemptuous of sloppiness, and disinclined to discuss religion unless he trusts the company. This is not entirely an act. The lie is the name and the bloodline. The brutality is his own. So is the faith.",
      "What Cody fears most is not death, but recognition, because recognition threatens more than his life. It threatens the fragile structure by which he has convinced himself that repentance is still possible. Every new vampire is a possible Sabbat scout. Every stranger who watches too closely may be measuring his face against a memory from another century. His paranoia has softened with time, but never vanished. If one of his old ship-brothers truly reaches Los Angeles, Cody will not go to the Prince, the Sheriff, or his clanmates. He will go to ground, sharpen his knives, perform what prayers he can, and begin deciding whom he needs to kill before the truth reaches court."
    ],
    imageDescription: "Cody is lean, weathered, and economical in his movements, the kind of man who does not fidget because wasted motion offends him. He dresses plainly and functionally, favoring dark work clothes, jackets with room for hidden weapons, and shoes meant for running or fighting. He carries himself with the restraint of a man who has spent years disciplining appetites that do not wish to be disciplined. His face is not especially memorable unless one notices the eyes. They rarely rest.",
    roleplayingHints: "You are not openly hostile, but you are never relaxed. Every room has exits, every stranger has a motive, every vampire has a past they may be hiding because you know that better than most. Speak little. Offer practical solutions. Avoid pious speeches, but do not treat faith as decoration; it is the central argument of your existence. You know what you are. You know what you have done. You are still trying to live, in whatever sense remains, as though judgment matters. When others indulge in sect politics or clan philosophy, let your silence suggest discipline rather than discomfort. You are very good at pretending your caution is professionalism.",
    haven: "A fortified private residence at 1523 E. Grovecenter St., Covina, outfitted for security, weapons work, and research.",
    influence: "Cody has only modest direct influence, but his connection to the Al Nabi Mosque and to Mr. Mostafa is personally significant, not merely useful. He gives, listens, and remains near a community he believes he has forfeited the right to truly join. Among the Damned, his greater power comes from being reliable in the ugly situations polite Kindred prefer not to touch."
  }
];

document.addEventListener("DOMContentLoaded", renderCleanedCharacters);

function renderCleanedCharacters() {
  const grid = document.querySelector("#cleanedCharactersGrid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  cleanedCharacters.forEach((character) => fragment.appendChild(characterDossier(character)));
  grid.replaceChildren(fragment);
}

function characterDossier(character) {
  const article = document.createElement("article");
  article.className = "cleaned-character-card";
  article.id = character.id;
  const portraitClass = character.image ? "cleaned-portrait" : "cleaned-portrait portrait-missing";
  const portraitImage = character.image
    ? `<img src="${escapeClean(character.image)}" alt="Portrait of ${escapeClean(character.name)}" onerror="this.remove(); this.parentElement.classList.add('portrait-missing');">`
    : "";
  article.innerHTML = `
    <aside class="cleaned-character-sidebar">
      <div class="${portraitClass}">
        ${portraitImage}
        <span>${escapeClean(character.imageNote)}</span>
      </div>
      <div class="cleaned-stat-block">
        <h3>${escapeClean(character.name)}</h3>
        <p class="cleaned-subtitle">${escapeClean(character.clan)} / ${escapeClean(character.role)}</p>
        ${kvList(character.traits)}
      </div>
      <div class="cleaned-stat-block">
        <h4>Attributes</h4>
        ${kvList(character.attributes)}
      </div>
      <div class="cleaned-stat-block">
        <h4>Powers</h4>
        ${kvList(character.powers)}
      </div>
    </aside>
    <div class="cleaned-character-main">
      <p class="kicker">${escapeClean(character.clan)}</p>
      <h3>${escapeClean(character.name)}</h3>
      <div class="cleaned-history">${character.history.map((paragraph) => `<p>${escapeClean(paragraph)}</p>`).join("")}</div>
      <section class="cleaned-two-column">
        <div>
          <h4>Abilities</h4>
          ${kvList(character.abilities)}
        </div>
        <div>
          <h4>Image</h4>
          <p>${escapeClean(character.imageDescription)}</p>
        </div>
      </section>
      <section class="cleaned-two-column">
        <div>
          <h4>Roleplaying Hints</h4>
          <p>${escapeClean(character.roleplayingHints)}</p>
        </div>
        <div>
          <h4>Haven</h4>
          <p>${escapeClean(character.haven)}</p>
          <h4>Influence</h4>
          <p>${escapeClean(character.influence)}</p>
        </div>
      </section>
    </div>
  `;
  return article;
}

function kvList(values) {
  return `<dl>${Object.entries(values).map(([key, value]) => `
    <div>
      <dt>${escapeClean(labelize(key))}</dt>
      <dd>${escapeClean(value)}</dd>
    </div>
  `).join("")}</dl>`;
}

function labelize(value) {
  return String(value)
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function escapeClean(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}
