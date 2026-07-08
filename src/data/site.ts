export const site = {
  name: 'Cattery Pecinta Kucing',
  fullName: 'Ragdoll Cattery Pecinta Kucing',
  tagline: 'Liefdevolle Ragdoll-cattery uit Arnhem',
  description:
    'Ragdoll Cattery Pecinta Kucing, een kleine, persoonlijke cattery in Arnhem. Onze kittens groeien op in huis, met liefde, rust en aandacht.',
  owner: 'Rachèl de Bekker',
  legalName: 'InTenCA',
  phone: '+31 6 51241683',
  phoneDisplay: '06 - 51 24 16 83',
  whatsapp: '0651241683',
  whatsappUrl: 'https://wa.me/31651241683',
  email: 'info@ragdollgelderland.nl',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  kvk: '90393090',
  bookingUrl: '/contact',
  hours: 'Bezoek uitsluitend op afspraak',
};

// Keurmerken en aansluitingen. Vertrouwenssignalen voor kopers: aangesloten bij
// de rasvereniging en officieel gecertificeerd als vakbekwaam houder.
export const credentials = {
  membership: {
    name: 'Mundikat',
    label: 'Aangesloten bij Mundikat',
    description:
      'Onze cattery is geregistreerd bij Mundikat, de Nederlandse rasvereniging voor stamboomkatten. Elk kitten gaat mee met een officiële, door Mundikat erkende stamboom.',
    url: 'https://www.mundikat.nl',
  },
  certification: {
    name: 'Vakbekwaam houder honden en katten',
    label: 'Vakbekwaam gecertificeerd',
    description:
      'Rachèl behaalde het certificaat Vakbekwaamheid voor het houden van honden en katten, de wettelijke basis voor verantwoord, diervriendelijk en gezond fokken.',
  },
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'De Cattery', href: '/de-cattery' },
  { label: 'Onze Ragdolls', href: '/onze-poezen' },
  { label: 'Kittens', href: '/kittens' },
  { label: 'De Ragdoll', href: '/de-ragdoll' },
  { label: 'Nieuws', href: '/nieuws' },
  { label: 'Ons Beleid', href: '/ons-beleid' },
  { label: 'Contact', href: '/contact' },
];
