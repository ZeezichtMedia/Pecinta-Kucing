import type { ImageMetadata } from 'astro';
import zazaNestje2026 from '../assets/cats/zaza-nestje-2026.jpg';
import zazaNestje20261 from '../assets/cats/zaza-nestje-2026-1.jpg';
import zazaNestje20262 from '../assets/cats/zaza-nestje-2026-2.jpg';
import zazaNestje20263 from '../assets/cats/zaza-nestje-2026-3.jpg';
import zazaNestje20264 from '../assets/cats/zaza-nestje-2026-4.jpg';
import zazaNestje20265 from '../assets/cats/zaza-nestje-2026-5.jpg';

export interface LitterPhoto {
  src: ImageMetadata;
  alt: string;
}

export interface Litter {
  slug: string;
  title: string;
  mother: string;
  born: string;
  intro: string;
  // De eerste foto is de grote openingsfoto. Nieuwe foto's van hetzelfde nestje
  // komen er gewoon achteraan en verschijnen dan in het fotoraster eronder.
  photos: LitterPhoto[];
}

// Nestjes op de kittens-pagina, nieuwste bovenaan.
export const litters: Litter[] = [
  {
    slug: 'zaza-2026',
    title: 'Zaza heeft haar eerste nestje',
    mother: 'Zaza',
    born: '2026-09-18',
    intro:
      'Op dit moment heeft Zaza haar eerste nestje. De kittens zijn flink gegroeid en ontdekken inmiddels het hele huis. Hieronder zie je hoe ze er nu uitzien.',
    photos: [
      {
        src: zazaNestje2026,
        alt: 'Zaza met haar pasgeboren kittens tegen zich aan op een roze deken',
      },
      {
        src: zazaNestje20262,
        alt: 'Kitten uit het nestje van Zaza met donker maskertje, staand op een roze deken',
      },
      {
        src: zazaNestje20261,
        alt: 'Twee kittens uit het nestje van Zaza tegen elkaar aan op een kussen',
      },
      {
        src: zazaNestje20264,
        alt: 'Kitten uit het nestje van Zaza met donker maskertje in een zachte mand',
      },
      {
        src: zazaNestje20263,
        alt: 'Licht kitten uit het nestje van Zaza met witte pootjes, staand op een roze deken',
      },
      {
        src: zazaNestje20265,
        alt: 'Wit kitten uit het nestje van Zaza met blauwe ogen, rechtop zittend',
      },
    ],
  },
];
