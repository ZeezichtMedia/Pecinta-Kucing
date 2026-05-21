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
    role: 'Onze nieuwsgierige avonturier',
    birth: '28 februari 2025',
    color: 'Ragdoll, seal point',
    short: 'Speels, onderzoekend en altijd in voor een spelletje.',
    body: [
      'Coco kwam op 5 juni 2025 bij ons in huis. Vanaf het eerste moment voelde het alsof ze er altijd al was geweest.',
      'Waar Zaza rustig observeert, is Coco de eerste die op je af komt. Ze houdt van spelen, van mensen om zich heen en van een goede plek bij het raam.',
      'Coco is de eerste van onze twee fok-poezen. Haar nestje verwachten we in het komende seizoen, meer informatie hierover delen we via de kittens-pagina.',
      'Coco is via DNA getest en jaarlijks wordt ze via echo getest op HCM, PKD en CIN en ook op FIV en FeLV.',
    ],
    image: {
      src: u('1592194996308-7b43878e84a6'),
      alt: 'Ragdoll-poes met diepblauwe ogen, Coco',
    },
    traits: ['Speels', 'Sociaal', 'Nieuwsgierig'],
  },
  {
    slug: 'zaza',
    name: 'Zaza',
    role: 'Onze zachte dame',
    birth: '28 februari 2025',
    color: 'Ragdoll, seal true bicolour',
    short: 'Rustig, aanhankelijk en altijd op zoek naar aandacht.',
    body: [
      'Zaza is het zusje van Coco, geboren uit hetzelfde nestje en samen met haar bij ons komen wonen.',
      'Ze is een zachte, bedachtzame poes die graag dicht bij ons is. Geen drukte, geen show, gewoon stil aanwezig en heerlijk om te knuffelen.',
      'Samen vullen ze elkaar perfect aan. Het zijn twee verschillende karakters in dezelfde lieve, aanhankelijke Ragdoll-stijl.',
      'Zaza is via DNA getest en jaarlijks wordt ze via echo getest op HCM, PKD en CIN en ook op FIV en FeLV.',
    ],
    image: {
      src: u('1574158622682-e40e69881006'),
      alt: 'Ragdoll-poes met witte vacht en blauwe ogen, Zaza',
    },
    traits: ['Aanhankelijk', 'Rustig', 'Schoot-poes'],
  },
];
