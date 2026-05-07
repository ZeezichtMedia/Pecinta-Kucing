export interface Cat {
  slug: string;
  name: string;
  role: string;
  birth: string;
  color: string;
  short: string;
  body: string[];
  image: { src: string; alt: string };
  traits: string[];
}

// Stockfoto-IDs via Unsplash. Vervangen door eigen foto's zodra beschikbaar.
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const cats: Cat[] = [
  {
    slug: 'coco',
    name: 'Coco',
    role: 'Onze zachte dame',
    birth: '28 februari 2025',
    color: 'Ragdoll — seal point',
    short: 'Rustig, aanhankelijk en altijd op zoek naar een schoot.',
    body: [
      'Coco kwam op 5 juni 2025 bij ons in huis. Vanaf het eerste moment voelde het alsof ze er altijd al was geweest.',
      'Ze is een zachte, bedachtzame poes die graag dicht bij ons is. Geen drukte, geen show — gewoon stil aanwezig en heerlijk om te knuffelen.',
      'Coco is de eerste van onze twee fok-poezen. Haar nestje verwachten we in het komende seizoen — meer informatie hierover delen we via de kittens-pagina.',
    ],
    image: {
      src: u('1592194996308-7b43878e84a6'),
      alt: 'Ragdoll-poes met diepblauwe ogen — Coco',
    },
    traits: ['Aanhankelijk', 'Rustig', 'Schoot-poes'],
  },
  {
    slug: 'zaza',
    name: 'Zaza',
    role: 'Onze nieuwsgierige avonturier',
    birth: '28 februari 2025',
    color: 'Ragdoll — blue point',
    short: 'Speels, sociaal en altijd in voor een knuffel of een spelletje.',
    body: [
      'Zaza is het zusje van Coco — geboren uit hetzelfde nestje en samen met haar bij ons komen wonen.',
      'Waar Coco rustig observeert, is Zaza de eerste die op je af komt. Ze houdt van spelen, van mensen om zich heen en van een goede plek bij het raam.',
      'Samen vullen ze elkaar perfect aan. Het zijn twee verschillende karakters in dezelfde lieve, aanhankelijke Ragdoll-stijl.',
    ],
    image: {
      src: u('1574158622682-e40e69881006'),
      alt: 'Ragdoll-poes met witte vacht en blauwe ogen — Zaza',
    },
    traits: ['Speels', 'Sociaal', 'Nieuwsgierig'],
  },
];
