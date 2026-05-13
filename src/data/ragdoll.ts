export interface RagdollFact {
  title: string;
  body: string;
  icon: 'paw' | 'heart' | 'sparkle' | 'eye' | 'home' | 'leaf';
}

export const ragdollIntro = [
  'De Ragdoll is een vrij jong kattenras, ontstaan in de jaren \'60 in Amerika, waar fokker Ann Baker het ras voor het eerst beschreef.',
  'Het zijn grote, halflangharige katten met opvallend diepblauwe ogen en een zachte, zijdeachtige vacht. Hun naam, \'lappenpop\', danken ze aan hun ontspannen houding wanneer je ze oppakt.',
];

export const ragdollFacts: RagdollFact[] = [
  {
    title: 'Aanhankelijk karakter',
    body:
      'Ragdolls staan bekend om hun lieve, aanhankelijke aard. Ze volgen je graag door het huis en zijn vaak omschreven als "hondjes in een kleinverpakking".',
    icon: 'heart',
  },
  {
    title: 'Diepblauwe ogen',
    body:
      'Het ras is meteen herkenbaar aan de heldere, diepblauwe ogen, een kenmerk dat altijd bij een raszuivere Ragdoll hoort.',
    icon: 'eye',
  },
  {
    title: 'Halflange vacht',
    body:
      'De vacht is halflang en heeft nauwelijks ondervacht. Dat maakt verzorging eenvoudig, regelmatig kammen is meestal niet nodig en kan haaruitval zelfs versterken.',
    icon: 'sparkle',
  },
  {
    title: 'Sociaal en kindvriendelijk',
    body:
      'Ragdolls zijn sociaal, spraakzaam en uitgesproken kindvriendelijk. Ze passen goed in een huishouden waar veel rondom hen gebeurt.',
    icon: 'home',
  },
  {
    title: 'Levensverwachting',
    body:
      'Een gezonde Ragdoll kan tussen de 12 en 15 jaar oud worden. Het ras is wel gevoelig voor hart- en nieraandoeningen, bij ons worden ouderdieren daarom getest.',
    icon: 'leaf',
  },
  {
    title: 'Een rustige aanwezigheid',
    body:
      'Hoewel ze speels zijn, is een Ragdoll geen klimrek. Ze zoeken rust, gezelligheid en een schoot, wat ze ideaal maakt als gezinsmaat.',
    icon: 'paw',
  },
];
