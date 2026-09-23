import type { ImageMetadata } from 'astro';
import nestjeGeboren from '../assets/cats/nestje-geboren.jpg';

export interface NewsItem {
  date: string;
  title: string;
  body: string;
  tag?: string;
  image?: { src: ImageMetadata; alt: string };
}

// Tijdelijke nieuws-updates. Wordt later vervangen door een echte content
// collection of CMS, afhankelijk van wat Rachèl wil onderhouden.
export const news: NewsItem[] = [
  {
    date: '2026-04-20',
    title: 'Gezondheidsverklaringen Coco en Zaza',
    body:
      'Coco en Zaza hebben allebei hun gezondheidsverklaring. Zo kan ik straks verantwoord met ze fokken.',
    tag: 'Gezondheid',
  },
  {
    date: '2026-03-30',
    title: 'Registratie bij Mundikat',
    body:
      'Cattery Pecinta Kucing is geregistreerd bij Mundikat, en daarmee staat ook de naam officieel vast. Vanaf nu is de cattery echt een feit.',
    tag: 'Mijlpaal',
  },
  {
    date: '2025-06-05',
    title: 'Coco en Zaza zijn thuis!',
    body:
      'Na een lange wachttijd was het op 5 juni eindelijk zover: onze twee Ragdolls Coco en Zaza zijn bij ons komen wonen. Ze hebben hun draai inmiddels helemaal gevonden.',
    tag: 'Onze poezen',
  },
  {
    date: '2025-04-01',
    title: 'Allergietest bij fokker Ilse, geslaagd',
    body:
      'Voordat we de stap zetten, hebben we met het gezin mijn zoon laten testen op een allergische reactie. Dankzij de medewerking van fokker Ilse, en haar huis vol Ragdolls, kregen we groen licht.',
    tag: 'Verhaal',
  },
  {
    date: '2025-02-28',
    title: 'Het nestje is geboren',
    body:
      'Op 28 februari werden Coco en Zaza geboren. Vanaf dat moment telden we de dagen tot we ze op konden halen.',
    tag: 'Mijlpaal',
    image: {
      src: nestjeGeboren,
      alt: 'Het pasgeboren nestje Ragdoll-kittens met gekleurde bandjes, samen op een roze deken',
    },
  },
];
