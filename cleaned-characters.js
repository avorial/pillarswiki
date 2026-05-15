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
  },
  {
    id: "mehmed-bey",
    name: "Mehmed Bey",
    clan: "Assamite",
    role: "Vizier scholar-spy, Primogen, and Seneschal of Los Angeles",
    image: "pictures/Mehmed_Bey.png?v=20260515mehmed",
    imageNote: "Portrait of Mehmed Bey",
    traits: {
      sire: "Publicly, Rufus Hill; this is part of his former cover identity",
      nature: "Leader",
      demeanor: "Counselor",
      generation: "9th",
      embrace: "1931, Savannah, Georgia, according to the cover story",
      apparentAge: "Early 40s",
    },
    attributes: {
      physical: 6,
      social: 5,
      mental: 8,
    },
    abilities: {
      talents: "Academics 1, Animal Ken, Athletics 1, Awareness 1, Brawl 1, Empathy 2, Intimidation 1, Leadership 1, Streetwise 1",
      skills: "Computer 1, Dodge 1, Drive 1, Firearms 3, Investigation 2, Melee 1, Security 1, Stealth 2, Subterfuge 4, Survival 1",
      knowledges: "Clan Knowledge 1, Demonology 3, Linguistics 3, Lore 3, Occult 1, Science 1",
    },
    powers: {
      disciplines: "Auspex 5, Celerity 1, Fortitude 1, Obfuscate 2, Potence 1, Presence 2, Quietus 2",
      backgrounds: "Alternate Identity 3, Generation 2, Haven 1, Herd 1, Resources 2",
      meritsFlaws: "Versatile, Dark Fate",
      virtues: "Conscience 2, Self-Control 3, Courage 5",
      humanity: 4,
      willpower: 6,
      status: "Acknowledged in the Camarilla; Primogen of the Assamites; Seneschal of the Los Angeles court",
    },
    history: [
      "Mehmed Bey is, to the Camarilla of Los Angeles, a reassuring figure. He is courteous without being weak, learned without being tedious, and cautious without seeming afraid. As Primogen of the Assamites and Seneschal of the court, he has become one of the most visible signs that the Children of Haqim are no longer merely tolerated outsiders in the city, but participants in its governance. Princes value him because he understands procedure. Harpies value him because he rarely speaks carelessly. Neonates value him because he is one of the few elders who will explain a custom before punishing ignorance of it.",
      "None of that is precisely false. It is merely incomplete.",
      "Mehmed Bey entered Los Angeles under the name George Conklin, presenting himself as a scarred refugee of the American South: a Great War veteran, disfigured by gas and flame, who drifted into the criminal underworld after mortal society cast him aside. According to the story, he was Embraced by Rufus Hill, a Caitiff adopted into the Nosferatu, and later driven west by Sabbat pressure along the eastern seaboard. It is a good story. It explains his secrecy, his physical reserve, his cautious interest in Camarilla politics, and even the odd gaps in his biography. The finest lies are not elaborate. They are useful.",
      "In truth, Mehmed Bey is an Assamite Vizier and an agent placed in Los Angeles with very specific instructions. He was directed to establish himself in court, avoid suspicious contact with his handlers for a time, report monthly once settled, and keep watch for demonic or cult activity. He was ordered to conceal the depth of his education in Camarilla law and custom, suppress open knowledge of his demonological studies, and maintain the fiction that his visible talents were those of a Caitiff or adopted Nosferatu. His cover was designed for quiet observation. Los Angeles, as usual, had other ideas.",
      "The city rewarded competence faster than anyone intended. Mehmed listened carefully, advised selectively, and proved unusually adept at translating Assamite concerns into Camarilla language. When the local clan needed a public face, he became that face. When the court needed a steady administrator, he stepped into the role. By the time he was formally recognized as Assamite Primogen and entrusted with the duties of Seneschal, his assignment had transformed. He was no longer merely watching Los Angeles. He had become one of the Kindred responsible for keeping it standing.",
      "This creates a tension Mehmed does not discuss. He is loyal to the schismatic Assamites and to the larger struggle against fanaticism within the clan, but his nightly work is increasingly bound to a Camarilla city with its own demands, grudges, and compromises. He has learned that power is easier to observe from the edge than from the center. As Seneschal, every omission becomes a decision. Every favor granted produces a debt. Every secret kept reshapes the court around it. Mehmed entered Los Angeles as a scholar-spy. He remains one, but now he is also an institution, and institutions are dangerous things to become.",
      "His special interest in demonic influence has not faded. If anything, access to court business has given him a broader view of how often Kindred dismiss the occult until it has already nested inside their politics. Mehmed asks gentle questions when rumors of cults arise. He remembers who answers too quickly. He tracks strange patterns in boons, disappearances, fringe sects, and thaumaturgic trespasses. Most of the court assumes this is simply the Seneschal being thorough. They are not wrong. They simply do not know what he was sent to find.",
      "To younger Assamites, Mehmed represents something hopeful: a Vizier who gained status in the Camarilla without shedding dignity, a man of letters and law who can stand beside princes without crawling. To others, he is harder to read. Amira Khan admired his reputation for reason before ever meeting him, and not without cause. Mehmed speaks sincerely of peace, dialogue, and restraint. Yet sincerity does not make him harmless. He studies weakness professionally. He notices theological fervor, political desperation, and secret guilt with equal care. He is quite capable of kindness. He is also quite capable of deciding that kindness has become strategically expensive."
    ],
    imageDescription: "Mehmed presents himself with studied dignity. He favors tailored suits, restrained old-world details, and the sort of immaculate grooming that suggests self-command rather than vanity. His expression is often grave but not cold. He appears to be listening even when he has already reached a conclusion. There is something in his stillness that causes others to lower their voices around him without quite knowing why.",
    roleplayingHints: "You rarely need to dominate a conversation because most people reveal more when given room. Ask precise questions. Offer measured praise. Correct breaches of etiquette as though helping the offender, even when quietly marking them for later judgment. You care about the court and about your clan, but you came to Los Angeles with secrets that cannot simply be wished away because the city has embraced you. Never forget that your greatest public strength, trustworthiness, is built atop concealment.",
    haven: "Mehmed maintains a modest but carefully chosen haven suitable for research, secure meetings, and the storage of sensitive papers. It is less a fortress than a controlled environment, the sort of place where every visitor and every object has been considered.",
    influence: "Mehmed's formal authority as Seneschal places him near the center of court business. Petitioners, Primogen, envoys, and supplicants all eventually pass through his reach. His deeper influence comes from memory, procedure, and the ability to make a ruling sound like simple common sense. Among Assamites, his position as Primogen gives him both prestige and the burden of representing a clan whose internal fractures are anything but settled."
  },
  {
    id: "gunseli-basar",
    name: "Gunseli Basar",
    clan: "Assamite",
    role: "Schismatic sorcerer, Tremere-curious occultist, Web of Knives target",
    image: "pictures/Gunseli_Basar.png?v=20260515gunseli",
    imageNote: "Portrait of Gunseli Basar",
    traits: {
      sire: "Ismet Atli",
      nature: "Survivor",
      demeanor: "Traditionalist",
      generation: "9th",
      embrace: "1899, Istanbul",
      apparentAge: "Late 20s to early 30s",
    },
    attributes: {
      physical: 4,
      social: 5,
      mental: 11,
    },
    abilities: {
      talents: "Academics 2, Awareness 2, Empathy 1, Leadership 1, Subterfuge 1, Survival 2",
      skills: "Investigation 1, Stealth 1",
      knowledges: "Linguistics 3, Lore 4, Occult 4",
    },
    powers: {
      disciplines: "Obfuscate 2, Quietus 5, Dur-an-Ki: Lure of Flames 3, Dur-an-Ki: Path of Curses 5, Sadhana: Path of Mercury 1",
      backgrounds: "Allies 3, Contacts 2, Elite Influence 1, Generation 2, Herd 1, Resources 1, Retainers 1, Underworld Influence 1",
      meritsFlaws: "Assamite Sorcerer Bloodline, Natural Linguist, Marijava or Kairouan Brotherhood Contact, Hunted by the Web of Knives, Bound to the Earth, Eerie Presence",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 6,
    },
    history: [
      "Gunseli Basar was born in Istanbul during the last generations of the Ottoman Empire, the daughter of a prosperous silk trader and a mother who understood her child far better than the world did. Gunseli was offered the education proper to a daughter, which meant almost none of what she wanted. She slipped into her brothers' lessons whenever she could. When their tutor complained, her mother quietly paid him to teach Gunseli separately. While her brothers were prepared for trade, inheritance, and public life, she learned in secret, devouring every scrap of history, theology, language, and philosophy placed before her.",
      "When Gunseli reached sixteen, her mother chose the only escape she could see. Rather than allow her daughter to be married off into a life of obedient respectability, she arranged for Gunseli to be \"sold\" into the household of a noted scholar, Orhan Pamuk, with the understanding that he would continue her education. It was a mother's desperate gamble. It was also a trap. Pamuk was a hedge magician who had been watching Gunseli for years. He intended to use her as a bargaining chip in his effort to gain entry into the near-mythical Tremere, that secretive house of blood sorcerers whispered of by those who knew just enough to be frightened.",
      "Pamuk was not the only one watching. Ismet Atli, Assamite sorcerer and enemy of Tremere influence, had tracked the man's schemes. One night he came for Pamuk in blood and fire. Gunseli woke to her master's blood across her bare feet and Atli offering a choice that was not truly a choice: join him, or share Pamuk's fate. Gunseli joined. She spent decades as Atli's ghoul, learning Dur-an-Ki, the occult traditions of the Banu Haqim, and the hard lesson that nearly every man who speaks of destiny is trying to write someone else's. She studied, endured, and waited. In time, she earned the Embrace.",
      "The Embrace did not make her loyal. It made her free enough to leave. Gunseli turned away from Atli, from the Father Clan, and from every structure that had ever expected gratitude in return for possession. She found shelter among the Brotherhood of the Unbound, Assamite dissidents who prized independence over obedience and refused to be tools of elders, blood cults, or sectarian dogma. Those nights were the nearest thing she had known to peace. Then Ur-Shulgi awakened. The old curse was broken, and in its place came a demand for absolute devotion to Haqim. To Gunseli, it was merely slavery dressed in sacred language. The antitribu were bound servants. The loyalists were fanatics. Only the schismatics offered a path she could accept: equal standing within the Camarilla, negotiated by al-Ashrad and defended by those willing to live without kneeling. Gunseli took that banner as her own. Ur-Shulgi's servants marked her for death.",
      "Los Angeles was meant to be a refuge. Instead, it has become a crossroads. Gunseli arrived carrying old hatreds, rare occult knowledge, ties to Marijava revenants, and a righteous contempt for anyone who mistakes submission for faith. She has taken her place among the schismatic Assamites of the city, guarded her privacy, and watched the Web of Knives tighten its interest around defectors like herself. She has also made an increasingly dangerous discovery: the Tremere are not what she was taught to believe.",
      "Gunseli was raised in magical traditions rooted in belief, inherited formulae, divine names, sacred correspondences, and the authority of ancient practice. The Tremere disturb her because their sorcery works without needing any of that to be true. Their magic is disciplined, repeatable, procedural, and often brutally effective. They do not pray for fire. They make fire. At first Gunseli dismissed this as spiritually empty theft. Then she began to study it more carefully. Then she began to wonder what else she had mistaken for certainty because her teachers demanded certainty from her. Each successful Tremere working chips at her faith more deeply than an argument ever could.",
      "Her growing closeness to Clan Tremere is not merely intellectual. Gunseli has found among some of them a respect she rarely received from her own clan: respect for what she knows, for what she can become, and for the audacity of wanting more than the role assigned to her. She has begun researching obscure and dangerous rites, hidden precedents, and arcane transformations that might allow her to sever her blood from the Banu Haqim entirely and enter House Tremere not as a supplicant, but as a chosen initiate. It is the most treasonous desire of her long unlife. Were Mehmed Bey, Deena HaLevi, Cody West, or any of her Assamite kin to discover the depth of this ambition, they would not debate her. They would kill her.",
      "This secret has altered Gunseli more than she admits. She remains proud, composed, and devout in the outward forms expected of a Muslim Assamite sorcerer, but belief no longer sits cleanly within her. She still knows the language of faith. She still observes its rhythms. Yet she now fears that some part of her continues only from habit, or defiance, or nostalgia for the girl in Istanbul who believed knowledge would one day reveal a just order behind the world. Gunseli has broken from fathers, masters, clans, and prophets of obedience. She may be preparing to break from God as well, and that frightens her more than the Web of Knives."
    ],
    imageDescription: "Gunseli favors layered robes, severe gowns, and carefully chosen jewelry that suggests Ottoman inheritance without becoming costume. Her posture is impeccable. She has the stillness of a scholar and the alertness of a fugitive. Even when polite, she gives the impression that she is measuring a room for its exits, its lies, and its weak points. Beneath her clothing she keeps a concealed holster containing two stakes and a knife.",
    roleplayingHints: "You have spent your existence escaping ownership. Never let anyone casually command you, speak for you, or assume your obedience. You are learned, composed, and often formal, but there is heat beneath the formality. You despise fanaticism in others because you recognize how easily conviction becomes a chain. Around Tremere, allow yourself a dangerous curiosity you try to disguise as scholarly interest. Their magic unsettles you. Their confidence tempts you. You are beginning to suspect that truth may belong less to faith than to mastery, and you do not yet know what that realization will cost.",
    haven: "Gunseli keeps her arrangements private and carefully compartmentalized. She has access to secure Assamite and allied spaces, and keeps important ritual materials, homeland soil, and occult writings distributed rather than gathered in one place. She has no intention of being destroyed because someone found the wrong bookshelf.",
    influence: "Gunseli's mortal footholds are modest but useful: black-market channels, antiquities access through elite circles, and the support of Marijava revenants, most notably Basheer. Her more dangerous influence is still forming. Tremere in Los Angeles have begun to see her not merely as an Assamite ally, but as a sorcerer whose dissatisfaction might one night be turned into recruitment."
  },
  {
    id: "alexander-baird",
    name: "Alexander Baird",
    clan: "Brujah",
    role: "Jacobite elder, Camarilla Sheriff, and loyalist war-leader",
    image: "pictures/Alexander_Baird.png?v=20260515baird",
    imageNote: "Portrait of Alexander Baird",
    traits: {
      sire: "Lord George Murray",
      nature: "Architect",
      demeanor: "Traditionalist",
      generation: "8th",
      embrace: "1746, Isle of Skye",
      apparentAge: "Late 30s to mid-40s",
    },
    attributes: {
      physical: 9,
      social: 8,
      mental: 5,
    },
    abilities: {
      talents: "Academics 2, Athletics 2, Brawl 5, Empathy 1, Intimidation 2, Leadership 4, Streetwise 1",
      skills: "Dodge 3, Linguistics 3, Melee 3, Stealth 1, Subterfuge 2",
      knowledges: "Lore 2, Occult 1",
    },
    powers: {
      disciplines: "Celerity 3, Fortitude 1, Potence 4, Presence 5",
      backgrounds: "Generation 3, Haven 2, Herd 1, Resources 1",
      meritsFlaws: "Brotherhood, Scourge of Alecto, Antiquities, Machiavellian Prodigy, Archaic, Prey Exclusion: Catholics",
      virtues: "Conscience 2, Self-Control 3, Courage 5",
      humanity: 4,
      willpower: 6,
      status: "Acknowledged in the Camarilla; Confirmed, Established, and Privileged as an elder; Enforcer and Privileged as Sheriff.",
    },
    history: [
      "Alexander Baird does not believe in democracy, consensus, or the modern habit of mistaking compromise for wisdom. He believes in lords, oaths, and the sacred obligation of strong men to stand beside the ruler they have chosen until death claims one of them. This would be an eccentricity in a younger vampire. In Baird, it is simply the residue of the world that made him. He was born a Scottish Roman Catholic and a Jacobite, raised on loyalty to the House of Stuart and the conviction that rightful kingship had been stolen by cowards, merchants, and Protestants. He was already a man of ferocious devotion when the rising of 1745 collapsed and Bonnie Prince Charlie fled the field. For Alexander, the defeat was not merely political. It was a spiritual wound.",
      "He was Embraced in 1746 on the Isle of Skye by Lord George Murray, who saw in him what every failing cause needs: another soldier who would not run. Baird entered undeath as a retainer to a broken dream, and that shape has defined him ever since. His loyalty is never casual. When Alexander chooses a prince, he gives himself wholly. He advises, organizes, protects, threatens, and kills as needed. He does not serve because he is weak. He serves because, in his mind, service to legitimate authority is one of the few things that separates civilization from the mob.",
      "The tragedy is that Baird's princes keep falling. Charles Stuart fled. Prince Brewster of Plymouth died in a praxis challenge while Baird served as sheriff. His sire, Lord Murray, drifted weakly into torpor. Prince Vincenzo Caporelli of Belluno died after Baird had served as his Primogen. Most recently, Prince Kyle Unletherb of Amarillo was destroyed while Alexander again wore the badge of sheriff. The last two fell to the Sabbat, a fact that has hardened Baird's hatred of the Sword of Caine into something nearly devotional. He does not merely oppose the Sabbat. He regards them as regicides, oath-breakers, and butchers of order.",
      "Baird came to Los Angeles at the urging of his friend and ally Markus O'Linn, finding himself once again between courts, between rulers, and in need of a cause. The city offended nearly all of his instincts. Its Camarilla presence was new, its loyalties uncertain, its Brujah fractious, and its enemies still close enough to smell. Yet precisely because Los Angeles was unfinished, Baird saw possibility in it. A proper court might yet be forged there. A proper prince might yet be strengthened. A proper company of Brujah might yet be made into something finer than rebels muttering over old grievances. He had no interest in mere clan rabble-rousing. He wanted a war-band, a loyalist bloc, a disciplined force that could stand between the court and collapse.",
      "His appointment as Sheriff suited him almost too well. Baird is not a subtle hound nosing through alleys for clues. He is a magistrate with a sword, a court officer who views enforcement as a moral act. He has the charisma to make obedience feel like honor and the temper to punish those who disagree too loudly. He is old-fashioned in every sense: ornate in speech, cutting in manners, and unapologetically aristocratic in his assumptions. Yet he is not a fool. He understands influence. In Los Angeles, he cultivated ties within the LAPD and among corrupt officers willing to make delicate problems disappear. His work with police contacts is never crude bribery when courtly manipulation will do; Baird prefers to let others feel they have entered a mutually profitable friendship, then remember the debt when he requires discretion.",
      "For all his talk of honor, Alexander Baird is capable of astonishing political cruelty. He may speak like a man from a ballad, but he is no romantic innocent. He understands leverage. He remembers secrets. He cultivates people who may later be bent into useful shapes. His private correspondence after leaving the immediate Los Angeles court makes this plain: Baird saw the destruction of Perkins and Pictor as a long-term necessity, and he was perfectly willing to exploit confidences entrusted to him if doing so helped bring that outcome about. That is the hidden edge of his chivalry. Alexander believes in loyalty with his whole dead heart, but he does not extend that loyalty universally. Those outside the circle of his chosen lord and companions may be handled as pieces on the board.",
      "Baird's Catholicism, too, has endured in warped but stubborn form. He cannot feed from Catholics, whether from reverence, shame, or some undead superstition he himself would insist is principle. He dislikes modern machinery, avoiding technology newer than a century unless forced to rely on others. Both habits make him seem quaint. Neither should be mistaken for softness. Alexander Baird is a Brujah elder who has survived the death of kings, princes, sires, and cities without surrendering the need to believe that one more worthy lord may still deserve his sword. Los Angeles is simply the latest place where he has chosen to test that hope."
    ],
    imageDescription: "Alexander is tall, broad, and imposing, dressed with a severity that seems old even when the garments are new. He favors formal coats, waistcoats, polished boots, and details that recall another century without slipping into theatrical costume. His speech is touched by Scottish inflection and crowded with archaic turns of phrase. When angered, he does not become less formal. He becomes more so, as though rage must first be dressed for court before being allowed into the room.",
    roleplayingHints: "You are a man of oaths in a society of opportunists. Speak as though loyalty is not a preference but a measure of civilization. Disdain mob politics, idle rebellion, and the modern Kindred tendency to turn every command into a negotiation. You are warm to those who show courage, discipline, and proper respect, especially Brujah who might be forged into something better than rabble. You are merciless toward oath-breakers, Sabbat sympathizers, and those who endanger the court through vanity. You do not see yourself as cruel. You see yourself as necessary.",
    haven: "Alexander maintains a secure haven suited to an old soldier and court officer: private, defensible, and furnished with more old-world taste than modern comfort. Antiquities, old Catholic objects, Jacobite remnants, and weapons from earlier centuries are more likely to occupy his attention than any convenience of contemporary technology.",
    influence: "Baird's most developed mortal leverage lies in law enforcement. He has cultivated influence within the LAPD and among corrupt police contacts, using favors, expertise in antiquities, and careful social manipulation to build a discreet network of flexible-minded officers. These contacts are not merely useful for hiding bodies. They are tools for shaping investigations, applying pressure, and ensuring that the court's enemies encounter mortal inconvenience before they ever face Kindred justice."
  },
  {
    id: "oscar-dent",
    name: "Oscar Dent",
    clan: "Brujah",
    role: "Blood-bound Archon, blunt instrument, and Theo Bell's restrained monster",
    image: "pictures/Oscar_Dent.png?v=20260515oscar",
    imageNote: "Portrait of Oscar Dent",
    traits: {
      sire: "Unknown",
      nature: "Capitalist",
      demeanor: "Bully",
      generation: "9th",
      embrace: "Unknown",
      apparentAge: "Early 30s",
    },
    attributes: {
      physical: 10,
      social: 7,
      mental: 5,
    },
    abilities: {
      talents: "Athletics 1, Awareness 2, Brawl 3, Leadership 2",
      skills: "Computer 1, Dodge 3, Firearms 4, Linguistics 1, Melee 1",
      knowledges: "Lore 3",
    },
    powers: {
      disciplines: "Celerity 1, Potence 1, Presence 2, Thanatosis 1",
      backgrounds: "Generation 2, Haven 1, Herd 1, Mentor 3",
      meritsFlaws: "Burning Wrath, Self-Confident, Clan Weakness: Tremere, Uncontrollable",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 6,
      status: "Acknowledged in the Camarilla; Commander and Noble as an Archon; Archon in service to Justicar Theo Bell.",
      bloodBond: "Oscar is fully blood bound to Theo Bell. The bond is the central stabilizing force in his unlife and may be the only thing preventing his collapse into wassail.",
    },
    history: [
      "Oscar Dent was born into a world where softness got you robbed, obedience got you cheated, and dignity had to be defended with your hands. He grew up poor, learned to fight young, and found that violence came easily to him. Not senseless violence, not at first. Oscar fought because boys circled him, because grown men shoved him, because employers shorted him, because the streets were full of little kings demanding tribute. He developed the habits of a cornered animal: watch shoulders, not mouths; strike before someone gathers courage; never let humiliation pass unanswered.",
      "His Embrace was illegal and stupid, the sort of casual violation elders condemn only after it becomes inconvenient. Oscar's sire saw strength, anger, and hunger and mistook them for potential. Perhaps he meant to build a loyal enforcer. Perhaps he simply wanted a pet monster. The experiment did not last. Archons descended on the domain, judged the Embrace unlawful, and executed Oscar's sire. Oscar expected the same sentence. Instead, the Camarilla looked at the furious young Brujah before them and saw something useful enough to preserve.",
      "He was taken into service rather than destroyed, disciplined rather than discarded, and eventually placed under the authority of Theo Bell. For Oscar, Bell became everything his sire had not been: a commander, a model, a purpose imposed with enough force to hold. Oscar did not become calm. He became pointed. His rage acquired direction. His impulses acquired a chain. That chain is literal. Oscar is fully blood bound to Theo Bell, and the bond is the only thing known to stand between him and wassail. Without it, there is little reason to believe the Beast would not finish consuming what remains of the man.",
      "As an Archon, Oscar carries Bell's authority like a weapon. He is not the refined investigator who reconstructs conspiracies from the pattern of boons at Elysium. He is what arrives after subtler warnings have been ignored. Oscar is sent where someone needs to understand that the Camarilla has noticed them. He asks blunt questions, tolerates little posturing, and has a practiced instinct for when fear is hardening into defiance. His authority makes people listen even when his ideas are poor. He knows this. He enjoys it more than he should.",
      "Los Angeles is the sort of city Oscar distrusts on sight. Too many new titles, too many refugees reinventing themselves, too many Kindred eager to mistake disorder for freedom. The court is still taking shape, and Oscar sees that as both opportunity and risk. Under Bell's eye, the city might be made disciplined. Without pressure, it might rot into one more indulgent nest of local tyrants, secret cults, and smug neonates who believe distance from the Inner Circle means distance from consequence. Oscar does not intend to let that happen while he is present.",
      "There is something especially unsettling about him because he is not foolish in the usual way. Oscar has little patience for elaborate politics, but he understands hierarchy perfectly. He understands fear, grievance, resentment, and the moment a person decides whether to submit or escalate. He can be oddly charismatic when he wants to be, not polished, but forceful, the sort of man whose certainty fills a room before anyone has assessed whether it deserves to. He has learned just enough restraint to function as an Archon. No more than that. The Camarilla uses him because a restrained monster is useful. Oscar serves because Theo Bell tells him that usefulness is honor."
    ],
    imageDescription: "Oscar is broad, hard, and physically direct. Even at rest he looks as though some part of him is leaning forward into the next confrontation. His clothes are practical and usually dark, chosen to survive travel, sudden violence, and the abuse of long nights rather than to impress court. His eyes move quickly. He reads posture first and words second. When he smiles, it generally means he has decided someone is either amusing or doomed.",
    roleplayingHints: "You are not here to be liked. You are here because Theo Bell expects results. Speak plainly. Let silence after a question become pressure. You dislike gamesmanship, but you are not above using fear when it saves time. Respect strength, especially strength that answers to discipline. Despise whining, cowardice, and ornate excuses. The Beast is never far away, and somewhere beneath the bond you know that. Treat Theo Bell's commands not only as orders, but as the structure keeping you from becoming nothing but appetite.",
    haven: "Oscar maintains a sparse, temporary haven suited to an Archon on assignment. It is secure, easy to abandon, and arranged for function rather than comfort. He does not build nests. He establishes staging grounds.",
    influence: "Oscar possesses little conventional mortal influence. His reach comes from the title of Archon, the authority of Theo Bell, and the reputation of a man who treats disobedience as a practical problem rather than a philosophical one. In a fragile court, that can matter more than money or contacts."
  },
  {
    id: "madeleine-pelletier",
    name: "Madeleine Pelletier",
    clan: "Brujah",
    role: "Suffragist crusader, Brujah Primogen, and organizer of women's power",
    image: "pictures/Madeleine_Pelletier.png?v=20260515madeleine",
    imageNote: "Portrait of Madeleine Pelletier",
    traits: {
      sire: "Bronislawa, Crone of Zamosc",
      nature: "Fanatic",
      demeanor: "Crusader",
      generation: "Ancilla",
      embrace: "1928, Poland",
      apparentAge: "Early 40s",
    },
    attributes: {
      physical: 3,
      social: 7,
      mental: 5,
    },
    abilities: {
      talents: "Brawl 1, Empathy 3, Investigation 2, Streetwise 2, Subterfuge 1",
      skills: "Computer 2, Dodge 1, Firearms 1, Linguistics 3, Melee 1, Security 1",
      knowledges: "Lore 2, Science 2",
    },
    powers: {
      disciplines: "Celerity 1, Potence 1, Presence 4",
      backgrounds: "Contacts 3, Elite Influence 1, Generation 2, Haven 1, Resources 1",
      meritsFlaws: "Burning Wrath, Scourge of Alecto, Intolerance: Men in power above her, Derangement: Compulsion to stand her ground",
      virtues: "Conscience 2, Self-Control 4, Courage 4",
      humanity: 5,
      willpower: 5,
      status: "Primogen of Clan Brujah during her time in Los Angeles.",
    },
    history: [
      "Madeleine Pelletier was born in Rotterdam in the late 1870s, the indulged daughter of a wealthy merchant who believed education would make her more impressive, not more independent. Her father expected to marry her above her station and use the match to elevate the family. Madeleine had other ambitions. She found her way into salons where radicals debated suffrage, labor, and the rights of women, and she fastened onto the cause with the fervor of someone who had finally found language for a grievance she had carried since childhood. A woman, she came to believe, could not wait for men to grow generous. She had to take whatever power she could and make herself impossible to dismiss.",
      "She spent the next decades in motion. Madeleine spoke, organized, argued, and traveled through Europe as the cause of women's suffrage gained ground. She took part in League of Nations efforts to spread the franchise and became a practiced public advocate, equally comfortable in a drawing room, a committee meeting, or a rally. She was not naive. She knew many men supported reform only so long as it cost them nothing. Still, she believed progress was real. Dutch women gained the vote. Old arguments cracked. It was possible, she thought, to make the world less cruel through pressure, courage, and organized will.",
      "Then, in Poland in 1928, that faith was mutilated. Madeleine was pulled from a train and held for days, raped repeatedly in the back of a village tavern. Several men participated. Others knew exactly what was happening and chose not to interfere. That distinction has never mattered to her. When she regained consciousness, a wizened old woman was leaning over her: Bronislawa, Crone of Zamosc. The vampire offered a choice. She could kill Madeleine and end the pain, or she could make her strong enough to prevent such things from happening to other women. Madeleine chose strength. She has never looked back.",
      "The Embrace did not create Madeleine's hatred of male domination. It burned away her remaining willingness to excuse it. She knows there are decent men. She has met them, worked with them, even respected some. But in her experience, they are rarely the men who hold power, and when they do hold it, power eventually teaches them the same lessons it teaches every tyrant. Men in authority begin by explaining. They end by arranging the world to suit themselves. Madeleine regards this as a law of nature no less reliable than gravity. Her mission, therefore, is not to beg powerful men to behave better. It is to ensure that women are strong enough to restrain them.",
      "Los Angeles drew her because it looked, for one brief moment, open. The Camarilla court was young. Its structures had not yet hardened. More than a third of the Kindred gathering there were women, in part because Madeleine had worked quietly to spread word that the city might offer opportunity. Even more enticing was the possibility that Clan Tremere, of all clans, might support a genuinely important female-led Chantry. Madeleine saw the chance to shape not merely a few appointments, but the political character of an entire domain. A court made by women, or at least checked by them, could become something new. She came west determined to help make that happen.",
      "She did not arrive without targets. Zhao \"John\" Leji, a Ventrue pimp and brothel owner, represents everything she despises: a man who monetizes women's degradation and calls it commerce. Paulina Catalanotti, another Brujah, troubles Madeleine for the opposite reason. In Madeleine's eyes, Paulina is an elder who has internalized her own subordination, a woman with power who still sits obediently at men's knees. She wants Paulina awakened, or at least shamed into remembering herself. She is more hopeful about Angela Malone, a young Brujah she encouraged toward Los Angeles because she saw fire in her, and about Dr. Valerie Penza, whose work on the psychological effects of the Embrace might help strengthen women who have been damaged by death as much as by life.",
      "Madeleine's politics are not soft. She seeks boons from powerful men not because she craves their approval, but because obligations are leashes, and she intends to gather as many as she can. She wants a women's shelter established in Los Angeles, large and visible enough to matter. She wants women elevated beyond her own clan, proof that this is not merely Brujah factionalism but a new order. She is charismatic, brave, and capable of stirring genuine loyalty. She is also rigid, intolerant, and quick to reduce men in power to a type rather than consider them individually. Madeleine Pelletier is right about many things. She is dangerous because she believes that makes her right about nearly everything."
    ],
    imageDescription: "Madeleine carries herself like a woman accustomed to public rooms and hostile audiences. She favors severe, handsome clothing that suggests intellect and discipline rather than fashion, often with details from an earlier age that she wears without apology. Her face is expressive when she speaks and formidable when she listens. She has the particular stillness of someone who has decided long ago that retreat is morally suspect.",
    roleplayingHints: "You do not hate every man. You have simply learned that male power rots almost everything it touches. Distinguish between men who lack power, men who use it responsibly for the moment, and men who should already be afraid of you. Speak with conviction. Challenge complacency. When women are dismissed, intervene. When men in authority grow patronizing, remember every detail. You are persuasive because you genuinely believe a better order is possible. You are frightening because you are prepared to force it into being.",
    haven: "A guarded, practical haven secured shortly after her arrival in Los Angeles. It is not luxurious. It is defensible, private, and suitable for meetings with allies who do not wish to be overheard.",
    influence: "Madeleine's influence rests on activist networks, political contacts, and her talent for finding women who are angry enough to become useful. She seeks to translate Kindred ideology into mortal infrastructure through projects such as women's shelters, advocacy circles, and discreet patronage. Her favored political tools are obligation and appointment: minor boons from men who think they have merely been gracious, and positions of power granted to women who can change the shape of the court from within."
  }
];

let activeDossierClan = "all";

document.addEventListener("DOMContentLoaded", () => {
  renderDossierTabs();
  renderCleanedCharacters();
});

function renderDossierTabs() {
  const tabs = document.querySelector("#dossierClanTabs");
  if (!tabs) return;

  const clans = [...new Set(cleanedCharacters.map((character) => character.clan))].sort((left, right) => left.localeCompare(right));
  const filters = [
    { id: "all", label: "All", count: cleanedCharacters.length },
    ...clans.map((clan) => ({
      id: clan,
      label: clan,
      count: cleanedCharacters.filter((character) => character.clan === clan).length,
    })),
  ];

  tabs.replaceChildren(...filters.map((filter) => dossierTab(filter)));
}

function dossierTab(filter) {
  const button = document.createElement("button");
  button.className = `dossier-tab${filter.id === activeDossierClan ? " active" : ""}`;
  button.type = "button";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", filter.id === activeDossierClan ? "true" : "false");
  button.dataset.clan = filter.id;
  button.innerHTML = `${escapeClean(filter.label)} <small>${filter.count}</small>`;
  button.addEventListener("click", () => {
    activeDossierClan = filter.id;
    renderDossierTabs();
    renderCleanedCharacters();
  });
  return button;
}

function renderCleanedCharacters() {
  const grid = document.querySelector("#cleanedCharactersGrid");
  if (!grid) return;

  const visibleCharacters = activeDossierClan === "all"
    ? cleanedCharacters
    : cleanedCharacters.filter((character) => character.clan === activeDossierClan);
  const fragment = document.createDocumentFragment();
  visibleCharacters.forEach((character) => fragment.appendChild(characterDossier(character)));
  grid.replaceChildren(fragment);
  updateDossierCount(visibleCharacters.length);
}

function updateDossierCount(count) {
  const label = document.querySelector("#dossierCount");
  if (!label) return;

  const noun = count === 1 ? "dossier" : "dossiers";
  const filter = activeDossierClan === "all" ? "all clans" : activeDossierClan;
  label.textContent = `${count} ${noun} shown / ${filter}`;
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
