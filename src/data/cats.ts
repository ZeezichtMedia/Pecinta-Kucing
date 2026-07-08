import type { ImageMetadata } from 'astro';
import cocoDetail from '../assets/cats/coco.jpg';
import cocoHome from '../assets/cats/coco-home.jpg';
import zazaDetail from '../assets/cats/zaza.jpg';
import zazaHome from '../assets/cats/zaza-home.jpg';

export interface Cat {
  slug: string;
  name: string;
  role: string;
  birth: string;
  color: string;
  short: string;
  body: string[];
  // Detailfoto (onze-poezen) en de compactere kaartfoto (homepage).
  image: { src: ImageMetadata; alt: string };
  homeImage: { src: ImageMetadata; alt: string };
  // Officiële stamboom in de PawPeds-database. Zodra de link bekend is,
  // verschijnt automatisch een "Bekijk stamboom"-knop bij de poes.
  pedigreeUrl?: string;
  traits: string[];
}

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
      'Coco is via DNA getest en jaarlijks wordt ze via echo getest op HCM, PKD en CIN en ook op FIV en FeLV.',
    ],
    image: {
      src: cocoDetail,
      alt: 'Coco, onze seal point Ragdoll, met diepblauwe ogen',
    },
    homeImage: {
      src: cocoHome,
      alt: 'Coco, seal point Ragdoll, rustend op de vensterbank',
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
      'Ze is een zachte, bedachtzame poes die graag dicht bij ons is. Geen drukte, gewoon stil aanwezig en heerlijk om te knuffelen.',
      'Samen vullen ze elkaar perfect aan. Het zijn twee verschillende karakters in dezelfde lieve, aanhankelijke Ragdoll-stijl.',
      'Zaza is een van onze twee fok-poezen. Haar eerste nestje verwachten we in het komende seizoen, meer informatie hierover delen we via de kittens-pagina.',
      'Zaza is via DNA getest en jaarlijks wordt ze via echo getest op HCM, PKD en CIN en ook op FIV en FeLV.',
    ],
    image: {
      src: zazaDetail,
      alt: 'Zaza, onze seal bicolour Ragdoll, met witte vacht en blauwe ogen',
    },
    homeImage: {
      src: zazaHome,
      alt: 'Zaza, seal bicolour Ragdoll, rustend op de vensterbank',
    },
    traits: ['Aanhankelijk', 'Rustig', 'Altijd dichtbij'],
  },
];
