import type { ImageMetadata } from 'astro';
import zazaNestje2026 from '../assets/cats/zaza-nestje-2026.jpg';

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
      'Op dit moment heeft Zaza haar eerste nestje. De kittens liggen nu nog lekker dicht bij hun moeder. Zodra ze gaan lopen en spelen, komen hier nieuwe foto\'s bij.',
    photos: [
      {
        src: zazaNestje2026,
        alt: 'Zaza met haar pasgeboren kittens tegen zich aan op een roze deken',
      },
    ],
  },
];
