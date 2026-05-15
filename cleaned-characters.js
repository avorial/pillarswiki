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
  },
  {
    id: "deena-halevi",
    name: "Deena HaLevi",
    clan: "Assamite",
    role: "Technomantic information broker, Vizier exile, Camarilla court officer",
    image: "pictures/Deena_HaLevi.jpg?v=20260515deena",
    imageNote: "Portrait of Deena HaLevi",
    traits: {
      sire: "Felix Schwartz",
      nature: "Judge",
      demeanor: "Professional",
      generation: "11th",
      embrace: "2003, Tel Aviv, Israel",
      apparentAge: "Late 20s to early 30s",
    },
    attributes: {
      physical: 5,
      social: 5,
      mental: 11,
    },
    abilities: {
      talents: "Awareness 1, Brawl 2",
      skills: "Computer 5, Firearms 2, Investigation 3, Melee 1, Security 4, Stealth 3, Subterfuge 1",
      knowledges: "Enigmas 1, Linguistics 4, Lore 4, Occult 2, Research 1",
    },
    powers: {
      disciplines: "Auspex 2, Celerity 1, Obfuscate 4, Quietus 1, Technomancy 3, Levinbolt 1",
      backgrounds: "Allies 2, Alternate Identity 2, Contacts 3, Generation 1, Haven 2, Herd 1, Resources 3, Retainers 1, Underworld Influence 2",
      meritsFlaws: "Loremaster, Natural Linguist, Sectarian Ally, Blood Magic Training, Bound to the Earth, Curiosity, Deep Sleeper",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 6,
    },
    history: [
      "Deena HaLevi was born in Tel Aviv to a middle-class Israeli family that understood Jewishness as identity, history, and peoplehood more than ritual observance. Like many of her generation, she entered the Israel Defense Forces as a matter of course and found herself drawn toward communications, surveillance, and the quiet war of signal, code, and interception. She had a talent for technology and a colder talent for deciding what information mattered. When her service ended, a private security organization approached her with the promise that she could continue protecting her homeland with greater freedom and better tools. She accepted.",
      "The organization was no ordinary contractor. It was a Banu Haqim selection ground, a place where promising mortals were evaluated for Embrace. Deena's technical sophistication stood out in a clan often proud of older methods and older certainties. She was brought into the Children of Haqim and became part of a small circle of Jewish Assamites known as the Lions of Zion, a faction that saw no contradiction between clan loyalty and loyalty to Israel. That conviction became increasingly dangerous after the rise of Ur-Shulgi. Deena sided with the Viziers who rejected the renewed fanaticism of Alamut. She had no intention of kneeling to a messianic ancient who despised the modern world, modern loyalties, and likely modern Jews as well. She left.",
      "North America was supposed to be exile. Deena made it infrastructure. Settling first among Assamites in San Diego, she acquired control over a major Fry's electronics operation and turned it into a nerve center for her work. She built security systems for Kindred, hardened havens, scrubbed records, and spun surveillance webs that few clients fully understood. Some of what she sold was protection. Some of it was access. Tara of San Diego, increasingly suspicious of rivals and enemies, found Deena's services especially attractive. Deena did not need to endorse Tara's tightening grip on the city to profit from it.",
      "By the time Deena entered Los Angeles politics, she had become something rare: an Assamite who could speak comfortably with Tremere, court officers, hackers, activists, and princes without seeming to belong wholly to any of them. She rose quickly. Chancellor. Primogen. Honored by Justicar Bey. She developed contacts among technical workers, clandestine online circles, and cybercriminal networks. She even took up Thaumaturgic study through Tremere association, bending blood magic toward technomantic ends as naturally as another elder might study heraldry.",
      "What surprised her most about Los Angeles was not the laxity of the Camarilla, but the carelessness of its information systems. The Nosferatu should have been everywhere, locking down channels, brokering secrets, and charging dearly for access. Instead, whole corridors of digital intelligence lay strangely open. Deena eventually learned why. The sewer clan in Los Angeles was distracted, fearful, and looking inward. Something ancient and terrible was believed to be hunting them beneath the city, a Nictuku. That fear left gaps. Deena noticed them. Then she began filling them.",
      "Deena has not become soft, merely polished. Her obsession is knowledge, not wisdom. She believes information is the only real protection against dependence, and dependence is merely conquest conducted politely. She is helpful, articulate, and often generous with counsel, but never forgets that every database has an owner, every secret has leverage, and every social gathering is a network waiting to be mapped. The Camarilla suits her because it admits openly that power matters. The difficulty, for everyone around her, is that Deena usually knows more than she says and asks fewer questions than she answers."
    ],
    imageDescription: "Deena dresses like someone who expects to be underestimated by people who mistake practicality for indifference. Clean lines, expensive but unobtrusive jackets, dark slacks, and the occasional scarf or piece of jewelry that carries more cultural weight than decorative excess. Her phone is always on her. Her attention is almost always elsewhere, though never absent.",
    roleplayingHints: "You are polite, exact, and difficult to rattle. You do not interrupt often because you prefer to let people finish incriminating themselves. When others boast, note what they are trying to hide. When they ask for help, consider what dependency that creates. You are not cruel, but you are deeply skeptical of innocence, especially in court. Knowledge is safety. Ignorance is a choice.",
    haven: "Secure quarters within the Shangri La Tremere Hotel in Santa Monica, configured with library space, guards, and additional security.",
    influence: "Deena maintains leverage through technical professionals, hacktivist networks, Soviet-bloc cybercriminal contacts, Tremere associations, and a spreading reputation as one of the Kindred most capable of making information disappear, or reappear at precisely the right time. The Nosferatu's retreat from parts of the city's information economy has created openings she is more than willing to exploit."
  },
  {
    id: "amira-khan",
    name: "Amira Khan",
    clan: "Assamite",
    role: "Hindu sorcerer, diplomat, and schismatic seeker of belonging",
    image: "pictures/Amira_Khan.png?v=20260515amira",
    imageNote: "Portrait of Amira Khan",
    traits: {
      sire: "Randolph Winters",
      nature: "Royalty",
      demeanor: "Diplomat",
      generation: "12th",
      embrace: "1916, likely in or near Peshawar",
      apparentAge: "Mid-20s",
    },
    attributes: {
      physical: 3,
      social: 7,
      mental: 7,
    },
    abilities: {
      talents: "Academics 2, Awareness 2, Empathy 1, Leadership 2, Subterfuge 1",
      skills: "Computer 1, Firearms 1, Research 1",
      knowledges: "Linguistics 4, Lore 3, Occult 4",
    },
    powers: {
      disciplines: "Obfuscate 3, Quietus 1, Sadhana: Path of Mercury 3, Sadhana: Lure of Flames 2",
      backgrounds: "Allies 2, Alternate Identity 1, Generation 1, Haven 2, Herd 2, Resources 4, Elite Influence 1",
      meritsFlaws: "Rare Clan, Natural Linguist, Oracular Ability, Lesser Generation",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 6,
    },
    history: [
      "Amira Khan was born in 1890 to an upper-middle-class Hindu family in Peshawar, at the edge of an empire that promised order while quietly devouring the lives of those who served it. Her family valued education, and Amira possessed the intelligence to make that investment look wise. At twenty, she was sent to Oxford, originally to study law. She soon abandoned it for linguistics, a field better suited to her ear for people and her fascination with the invisible structures that shape power. While there, she began a relationship with Theodore \"Teddy\" Lewis, a fellow student whose ambitions would change the course of her life.",
      "When the Great War began, Teddy entered British intelligence and recruited Amira into work along the Afghan frontier. She returned to Peshawar and spent the next several years moving through the Khyber region, gathering information on German influence, anti-colonial agitation, and the shifting loyalties of men the Empire considered assets one month and threats the next. She was good at it, far better than Teddy had expected. Amira understood language, but more importantly, she understood what people meant when they refused to say something plainly.",
      "In 1916, insurgents kidnapped her. For a month, she was confined, questioned, and left to wonder whether Teddy had sent her into danger he understood better than he had admitted. Then, one evening, her captors simply vanished. In their place stood Randolph Winters, a soft-spoken Englishman who claimed to have come for her. Amira assumed he was an intelligence operative acting on Teddy's behalf. He was not. Randolph offered her a bargain: travel with him, serve as his companion and instrument, and he would spare her family and Teddy. Refuse, and he would ruin or kill them all. Amira accepted. Randolph Embraced her and spent decades teaching her that the world belonged to those who recognized every bargain as coercion before anyone else did.",
      "Among the Assamites, Amira discovered a second captivity, subtler than Randolph's but no less constant. She was a Hindu woman inside a clan increasingly shaped by hard men with hard doctrines: Muslim traditionalists who regarded her as an outsider to the clan's old sacred inheritance, Jewish schismatics whose own embattled identity left little patience for hers, and sorcerers who weighed every difference as a possible weakness. Amira learned early to seek approval before it could be withheld. She became gracious, well-read, useful, and impeccably mannered. She made herself difficult to fault. Yet the need never quite left her. Even after decades of achievement, some part of her still listens for the pause before praise, the courtesy that conceals judgment, the moment when a room decides whether she belongs.",
      "They wandered through Asia for years before settling in Birmingham in 1948, taking advantage of Britain's opened citizenship to former imperial subjects. Later came the United States, first Hartford, then Monterey. There, Amira encountered figures who would matter again in Los Angeles: Laura Alvardo, polished and political beneath a veil of warmth, and Anthony Bachman, the Nosferatu architect whose havens were works of genuine craft. Through it all, Randolph remained sire, tutor, protector, and cage. He saved her life once. He also took ownership of it. Even after decades of companionship, Amira never forgot that their relationship began with a threat.",
      "The rise of Ur-Shulgi turned old unease into open danger. Assamite warriors began hunting those sorcerers and dissidents unwilling to submit to the restored fanaticism of Alamut. Amira and Randolph fled repeatedly, moving from place to place until pursuit finally pressed too close. Randolph insisted that they separate, creating two trails instead of one. He believed she would be safer among the schismatic Assamites of Los Angeles. Amira obeyed, though by then obedience had become a habit she increasingly hated in herself. She came west alone, carrying wealth, occult learning, polished manners, and the quiet exhaustion of someone who has spent most of her existence living inside other people's plans.",
      "Los Angeles offers Amira something she has rarely possessed: the possibility of choosing her own household. She has secured a haven in Glendora, built around occult work and a careful library, and has already taken a position of standing among the city's Assamites. Her bearing is regal without being theatrical, a quality that has helped her move easily through Kindred society. She is gracious, educated, and capable of genuine warmth, but there is caution beneath it. Amira has been used by empires, by lovers, by sires, and by clans. She longs for fellowship, yet mistrusts every structure that asks her to belong.",
      "Of the Assamites in Los Angeles, she is particularly interested in Mehmed Bey, whose reputation for conversation and reason reached her long before she arrived. She hopes he represents something better than the obedience demanded by Ur-Shulgi or the possessiveness of Randolph Winters. More privately, she dreams of a coterie that feels like family rather than strategy. She would never say that too readily. Kindred who confess longing invite others to weaponize it. But beneath Amira's composure is a woman who has outlived everyone she once loved and is not yet willing to accept solitude as wisdom."
    ],
    imageDescription: "Amira carries herself with the practiced stillness of someone raised to be observed and later taught never to reveal too much in return. Her clothes are elegant, often richly textured without becoming ostentatious, and she has a preference for jewelry and fabrics that suggest history rather than fashion. Her gaze is steady and attentive. When she smiles, it feels sincere. When it vanishes, the room seems colder for it.",
    roleplayingHints: "You are courteous, intelligent, and careful never to appear hurried. Let others mistake gentleness for softness if they wish. You have spent a century listening to people explain why your choices are not really yours, and just as long trying to prove you deserved whatever place they grudgingly allowed you. The habit remains. You seek approval almost reflexively, especially from those who represent clan tradition or spiritual authority, then resent yourself for needing it. You want belonging. You fear possession.",
    haven: "A private occult retreat and library at 466 E. Linfield St., Glendora, arranged as both residence and working sanctum.",
    influence: "Amira's personal influence is still developing in Los Angeles, but her resources, refinement, and occult expertise make her difficult to dismiss. She has the means to patronize, to host, and to acquire rare materials without attracting immediate suspicion. Her most significant social leverage may ultimately come not from money, but from her ability to make others feel understood, especially those who are uncertain whether they belong."
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
