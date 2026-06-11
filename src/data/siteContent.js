/**
 * siteContent.js — single source of truth for Happy Luxe Travels.
 * Edit all copy, contact details, services, fleet, packages, etc. here.
 *
 * IMAGES: Unsplash demo photos are used so the site renders complete out of
 * the box. Replace with your own licensed photography for production
 * (drop into src/assets/images and import, or use your CDN URLs).
 */

// ── Business / brand -------------------------------------------------------
export const business = {
  name: 'Happy Luxe Travels',
  shortName: 'HLT',
  tagline: 'Luxury Journeys • Exceptional Experiences',
  heroSubtitle: 'Your Happy Journey Starts Here!',
  phones: [
    { display: '+91 87965 37779', tel: '+918796537779' },
    { display: '+91 87965 27779', tel: '+918796527779' },
  ],
  whatsapp: '918796537779', // wa.me format, no '+'
  email: 'happyluxetravels@gmail.com',
  website: 'www.happyluxetravels.com',
  instagram: '@happyluxetravels',
  instagramUrl: 'https://www.instagram.com/happyluxetravels?igsh=NWx6Zzd4Y2VucWRs',
  googleReviewUrl: 'https://share.google/66zhseaX8w7XURPUv',
  hours: 'Available 24 / 7',
};

// ── Navigation -------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero -------------------------------------------------------------------
export const hero = {
  eyebrow: 'Premium Luxury Transportation',
  title: 'Happy Luxe Travels',
  subtitle: 'Luxury Journeys • Exceptional Experiences',
  description:
    'Premium Transportation, Luxury Tours and Exclusive Travel Experiences.',
  background:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop',
  trustBadges: [
    'Premium Luxury Fleet',
    'Professional Drivers',
    'Sanitized Vehicles',
    'Airport Transfers',
  ],
  stats: [
    { value: 100, suffix: '%', label: 'Customer-focused service' },
    { value: 50, suffix: '+', label: 'Luxury fleet vehicles' },
    { value: 50, suffix: '+', label: 'Premium vehicles' },
    { value: 4.9, suffix: '★', label: 'Guest rating', decimals: 1 },
  ],
};

// ── Services ---------------------------------------------------------------
export const services = [
  {
    id: 'urbania',
    icon: 'BusFront',
    title: 'Urbania Luxury Vans',
    description:
      'Force Urbania luxury vans with reclining seats, ambient lighting and premium comfort.',
    tags: ['9 Seater', '12 Seater', '16 Seater'],
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826332/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.23.25_ciq2es.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_1_kpz8ek.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_1_rbpaca.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_emz1op.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_1_p7bnrn.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_eilcyv.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.35_ju7zlf.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166695/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.05_1_jchowj.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.38_v7rhbb.jpg'
    ]
  },
  {
    id: 'tempo',
    icon: 'Bus',
    title: 'Tempo Traveller Maharaja',
    description:
      'The Maharaja edition — a premium luxury traveller for plush group journeys.',
    tags: ['Premium Luxury Traveller'],
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_1_cdynzw.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_2_d3nhau.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_hhkhc9.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_kkmh5i.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_1_ahgih7.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_mhfaqd.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_2_nruk6g.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_1_qianhc.jpg'
    ]
  },
  {
    id: 'suv',
    icon: 'Car',
    title: 'Premium SUVs',
    description:
      'Toyota Innova, Mahindra XUV700 and luxury EVs for refined private travel.',
    tags: ['Toyota Innova', 'Mahindra XUV700', 'Luxury EVs'],
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.30.35_vmqivz.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.30.36_glolhs.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.45_rgvlgy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.46_1_d06nyq.jpg'
    ]
  },
  {
    id: 'buses',
    icon: 'BusFront',
    title: 'Luxury Buses & Coaches',
    description:
      'Spacious, immaculate coaches for large groups, events and corporate offsites.',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.57_cyletr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.58_gs3tge.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168206/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_mkfvds.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_2_khuutm.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.12_1_oh8gvz.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_1_qlkhws.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.12_em62ps.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168204/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.13_hmpfp8.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168203/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.13_1_ecv0cb.jpg'
    ]
  },
  {
    id: 'outstation',
    icon: 'Route',
    title: 'Outstation Trips',
    description:
      'Comfortable long-distance journeys with experienced chauffeurs and transparent fares.',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop'
    ]
  },
  {
    id: 'airport',
    icon: 'Plane',
    title: 'Airport Transfers',
    description:
      'Punctual airport pickup & drop with flight tracking and a seamless meet-and-greet.',
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1600&auto=format&fit=crop'
    ]
  },
];

// ── Specialised in ---------------------------------------------------------
export const specialities = [
  { icon: 'UsersRound', title: 'Group Travel', text: 'Effortless transport and planning for groups of any size.' },
  { icon: 'Briefcase', title: 'Corporate Travel', text: 'Executive-grade reliability for business teams and clients.' },
  { icon: 'Landmark', title: 'Religious Tours', text: 'Comfortable, well-planned pilgrimage journeys.' },
  { icon: 'Map', title: 'Travel Packages', text: 'Curated multi-day itineraries, handled end to end.' },
  { icon: 'Heart', title: 'Luxury Couple Getaways', text: 'Intimate, premium escapes for two.' },
  { icon: 'Leaf', title: 'Premium EV Rides', text: 'Whisper-quiet, sustainable luxury electric travel.' },
];

// ── Fleet ------------------------------------------------------------------
export const fleet = [
  {
    id: 'urbania-12-maharaja',
    name: 'Luxury Urbania 12 Seater',
    category: 'Maharaja Seats · Luxury Van',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg'
    ],
    features: ['Maharaja reclining seats', 'Ambient lighting', 'Premium AC', 'Captain comfort'],
  },
  {
    id: 'urbania-16',
    name: 'Urbania 16 Seater',
    category: 'Luxury Van · 16 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.33_1_dbdnok.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_1_kpz8ek.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_1_rbpaca.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_emz1op.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_1_p7bnrn.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_eilcyv.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.35_ju7zlf.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166695/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.05_1_jchowj.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.38_v7rhbb.jpg'
    ],
    features: ['16 luxury seats', 'Ample luggage space', 'Premium interior', 'Group comfort'],
  },
  {
    id: 'tempo-premium-16',
    name: 'Tempo Traveler Premium 16 Seater',
    category: 'Premium Tempo · 16 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_1_cdynzw.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_2_d3nhau.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_hhkhc9.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_kkmh5i.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_1_ahgih7.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_mhfaqd.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_2_nruk6g.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_1_qianhc.jpg'
    ],
    features: ['Plush premium seats', 'LCD entertainment', 'Long-trip ready', 'Extra legroom'],
  },
  {
    id: 'tempo-16',
    name: 'Tempo Traveler 16 Seater',
    category: 'Tempo Traveler · 16 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_1_cdynzw.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_2_d3nhau.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_hhkhc9.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_kkmh5i.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_1_ahgih7.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_mhfaqd.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_2_nruk6g.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_1_qianhc.jpg'
    ],
    features: ['16 comfortable seats', 'Group travel', 'Spacious cabin', 'Reliable AC'],
  },
  {
    id: 'urbania-ultra-12',
    name: 'Ultra Luxury 12 Seater Urbania',
    category: 'Ultra Luxury Van · 12 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826332/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.23.25_ciq2es.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826333/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.23.26_o9gnp6.jpg',
    ],
    features: ['Ultra-premium cabin', 'Reclining luxury seats', 'Personal reading lights', 'Charging ports'],
  },
  {
    id: 'urbania-12',
    name: 'Urbania 12 Seater',
    category: 'Luxury Van · 12 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826910/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.24.36_zyg0su.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826910/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.24.36_1_a2djsz.jpg',
    ],
    features: ['12 luxury seats', 'Ambient lighting', 'Comfort AC', 'Ideal for groups'],
  },
  {
    id: 'tempo-premium-12',
    name: 'Tempo Traveler Premium 12 Seater',
    category: 'Premium Tempo · 12 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_1_cdynzw.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_2_d3nhau.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_hhkhc9.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_kkmh5i.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_1_ahgih7.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_mhfaqd.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_2_nruk6g.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_1_qianhc.jpg'
    ],
    features: ['Premium push-back seats', 'Music system', 'Curtains & blinds', 'Long-distance comfort'],
  },
  {
    id: 'urbania-modified-16',
    name: 'Urbania Modified 16 Seater Premium',
    category: 'Modified Luxury Van · 16 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_1_kpz8ek.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_1_rbpaca.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_emz1op.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_1_p7bnrn.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.36_eilcyv.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.35_ju7zlf.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166695/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.05_1_jchowj.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.38_v7rhbb.jpg'
    ],
    features: ['Custom premium interiors', '16 recliner seats', 'Mood lighting', 'Entertainment system'],
  },
  {
    id: 'urbania-modified',
    name: 'Premium Modified Urbania',
    category: 'Modified Luxury Van',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827310/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.29.50_zcwv24.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827310/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.29.50_1_yltc8n.jpg',
    ],
    features: ['Bespoke luxury fit-out', 'Premium upholstery', 'VIP seating', 'Stylish décor'],
  },
  {
    id: 'xuv700',
    name: 'XUV700 Top Model Luxury 7 Seater',
    category: 'Premium SUV · 7 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.30.35_vmqivz.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.30.36_glolhs.jpg',
    ],
    features: ['Panoramic sunroof', 'ADAS safety suite', 'Premium sound system', '7 luxury seats'],
  },
  {
    id: 'coaches',
    name: 'Premium Coaches / Buses',
    category: '45 / 49 / 53 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.57_cyletr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.58_gs3tge.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168206/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_mkfvds.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_2_khuutm.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.12_1_oh8gvz.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_1_qlkhws.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.12_em62ps.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168204/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.13_hmpfp8.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168203/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.13_1_ecv0cb.jpg'
    ],
    features: ['45 / 49 / 53 seater options', 'Reclining seats', 'Onboard entertainment', 'Large luggage bays'],
  },
  {
    id: 'innova-crysta',
    name: 'Premium Innova Crysta 7 Seater',
    category: 'Premium SUV · 7 Seater',
    images: [
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.45_rgvlgy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.46_1_d06nyq.jpg',
    ],
    features: ['Smooth ride quality', 'Spacious 7-seat cabin', 'Climate control', 'Family favourite'],
  },
];

// ── Why choose us ----------------------------------------------------------
export const whyChooseUs = [
  { icon: 'HeartHandshake', title: 'Customer First Approach', text: 'Your comfort and satisfaction guide every decision we make.' },
  { icon: 'Crown', title: 'Premium Luxury Fleet', text: 'A meticulously maintained fleet of premium vehicles.' },
  { icon: 'BadgeCheck', title: 'Professional Drivers', text: 'Courteous, trained and verified chauffeurs.' },
  { icon: 'Sparkles', title: 'Clean & Sanitized Vehicles', text: 'Every vehicle deep-cleaned before your journey.' },
  { icon: 'ReceiptText', title: 'Transparent Pricing', text: 'Clear, all-inclusive fares with zero hidden charges.' },
  { icon: 'ShieldCheck', title: 'Reliable Service', text: 'On-time, every time — dependability you can trust.' },
];

// ── Popular packages -------------------------------------------------------
export const packages = [
  { icon: 'Briefcase', title: 'Corporate Trips', text: 'Executive transport for teams, clients and events.' },
  { icon: 'Users', title: 'Family Trips', text: 'Safe, spacious and comfortable family journeys.' },
  { icon: 'Landmark', title: 'Pilgrimage Tours', text: 'Well-planned spiritual journeys across India.' },
  { icon: 'Heart', title: 'Luxury Couple Packages', text: 'Romantic, private getaways in premium comfort.' },
  { icon: 'Plane', title: 'Airport Pickup & Drop', text: 'Punctual transfers with flight tracking.' },
  { icon: 'Mountain', title: 'Weekend Getaways', text: 'Quick luxury escapes to refresh and unwind.' },
  { icon: 'Sparkles', title: 'Custom Travel Plans', text: 'Bespoke itineraries tailored entirely to you.' },
];

// ── Booking process --------------------------------------------------------
export const bookingProcess = [
  { step: '01', icon: 'CarFront', title: 'Choose Vehicle', text: 'Pick the luxury vehicle that fits your journey.' },
  { step: '02', icon: 'PhoneCall', title: 'Contact Us', text: 'Reach us on call or WhatsApp for instant availability.' },
  { step: '03', icon: 'CalendarCheck', title: 'Confirm Booking', text: 'Lock in your date, route and fare with ease.' },
  { step: '04', icon: 'PartyPopper', title: 'Enjoy Your Journey', text: 'Relax and travel in luxurious comfort.' },
];

// ── Gallery ----------------------------------------------------------------
export const gallery = [
  { label: 'Road Trips', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Airport Transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Corporate Tours', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Luxury Vans', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Couple Tours', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Group Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop' },
];

// ── Testimonials -----------------------------------------------------------
export const testimonials = [
  {
    name: 'Rohan Deshpande',
    role: 'Corporate offsite · Urbania',
    rating: 5,
    quote:
      'The Urbania was spotless and the driver impeccably professional. Our entire team travelled in genuine luxury. HLT has set a new standard for us.',
  },
  {
    name: 'Aishwarya Patil',
    role: 'Family pilgrimage · Tempo Traveller',
    rating: 5,
    quote:
      'Booked the Maharaja Tempo Traveller for a family pilgrimage. Comfortable, punctual and beautifully maintained. Truly an exceptional experience.',
  },
  {
    name: 'Karan Mehta',
    role: 'Airport transfer · Innova',
    rating: 5,
    quote:
      'Flight landed late at night and the chauffeur was waiting. Seamless, courteous and premium from start to finish. Highly recommended.',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Couple getaway · Luxury EV',
    rating: 5,
    quote:
      'The luxury EV ride was silent, smooth and so elegant. Perfect for our weekend escape. Happy Luxe lives up to its name.',
  },
  {
    name: 'Vikram Joshi',
    role: 'Group travel · Luxury Coach',
    rating: 5,
    quote:
      'Organised a 40-member group tour and everything was handled flawlessly. Transparent pricing and zero surprises. Will book again.',
  },
];

// ── FAQ --------------------------------------------------------------------
export const faqs = [
  {
    q: 'Which vehicles can I book with Happy Luxe Travels?',
    a: 'Our luxury fleet includes Force Urbania (9–16 seater), the Tempo Traveller Maharaja, premium SUVs (Toyota Innova, Mahindra XUV700), luxury EVs, and luxury buses & coaches for large groups.',
  },
  {
    q: 'Do you provide airport pickup and drop?',
    a: 'Yes. We offer punctual airport transfers with flight tracking, 24/7 availability and a seamless meet-and-greet so your journey starts stress-free.',
  },
  {
    q: 'How do I book a ride or plan a journey?',
    a: 'Choose your vehicle, then call or WhatsApp us — we confirm availability, route and fare instantly. You can also submit the booking form on this page.',
  },
  {
    q: 'Is pricing transparent?',
    a: 'Absolutely. We offer clear, all-inclusive fares with no hidden charges. You will always know exactly what you are paying for.',
  },
  {
    q: 'Are your vehicles sanitized and your drivers professional?',
    a: 'Every vehicle is deep-cleaned and sanitized before each trip, and all our chauffeurs are trained, verified and courteous professionals.',
  },
  {
    q: 'Do you handle corporate and group travel?',
    a: 'Yes — corporate travel and group tours are among our specialities, with executive-grade reliability, billing support and vehicles for every group size.',
  },
];

// ── Footer -----------------------------------------------------------------
// ── Campervan / Travel Vans ------------------------------------------------
export const campervanVideo =
  'https://res.cloudinary.com/dynbpb9u0/video/upload/v1780827787/happy%20luxe/WhatsApp_Video_2026-06-07_at_11.20.49_sz3bfc.mp4';

export const campervanImages = [
  {
    label: 'Campervan Exterior',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827778/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_1_ufoagb.jpg',
  },
  {
    label: 'Premium Interior',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827778/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_2_qjsvlb.jpg',
  },
  {
    label: 'Luxury Van',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_ckuxah.jpg',
  },
  {
    label: 'Road Journey',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.17_kixa6s.jpg',
  },
  {
    label: 'Travel Comfort',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.16_hk9vof.jpg',
  },
  {
    label: 'Luxury Travel',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.17_1_ieudax.jpg',
  },
];

// ── Footer -----------------------------------------------------------------
export const footer = {
  about:
    'Happy Luxe Travels (HLT) delivers premium transportation, luxury tours and exclusive travel experiences — where every journey begins happy.',
  quickLinks: navLinks,
  popularServices: [
    'Urbania Rental',
    'Tempo Traveller Booking',
    'Airport Transfers',
    'Corporate Travel',
    'Luxury Bus Rental',
  ],
};
