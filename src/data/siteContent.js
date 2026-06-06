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
  instagram: '@HappyLuxeTravels',
  instagramUrl: 'https://instagram.com/HappyLuxeTravels',
  hours: 'Available 24 / 7',
};

// ── Navigation -------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
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
    { value: 15, suffix: '+', label: 'Years of luxury travel' },
    { value: 30000, suffix: '+', label: 'Journeys completed' },
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
  },
  {
    id: 'tempo',
    icon: 'Bus',
    title: 'Tempo Traveller Maharaja',
    description:
      'The Maharaja edition — a premium luxury traveller for plush group journeys.',
    tags: ['Premium Luxury Traveller'],
  },
  {
    id: 'suv',
    icon: 'Car',
    title: 'Premium SUVs',
    description:
      'Toyota Innova, Mahindra XUV700 and luxury EVs for refined private travel.',
    tags: ['Toyota Innova', 'Mahindra XUV700', 'Luxury EVs'],
  },
  {
    id: 'buses',
    icon: 'BusFront',
    title: 'Luxury Buses & Coaches',
    description:
      'Spacious, immaculate coaches for large groups, events and corporate offsites.',
  },
  {
    id: 'outstation',
    icon: 'Route',
    title: 'Outstation Trips',
    description:
      'Comfortable long-distance journeys with experienced chauffeurs and transparent fares.',
  },
  {
    id: 'airport',
    icon: 'Plane',
    title: 'Airport Transfers',
    description:
      'Punctual airport pickup & drop with flight tracking and a seamless meet-and-greet.',
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
    id: 'urbania',
    name: 'Force Urbania',
    category: 'Luxury Van · 9–16 Seater',
    image:
      'https://i0.wp.com/khivraj.com/wp-content/uploads/2025/05/Urbania-SWB.png?fit=438%2C226&ssl=1',
    features: ['Reclining seats', 'Ambient lighting', 'Captain comfort'],
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller Maharaja',
    category: 'Premium Luxury Traveller',
    image:
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777546989/client/force-4020wb-tempo-traveller-bus-19-seater-2224664623-1gw19a0n_po8fpa.avif ',
    features: ['Plush interiors', 'Group comfort', 'Long-trip ready'],
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'Premium SUV · 7 Seater',
    image:
      'https://cdn.carhp.in/toyota/toyota_innova_hycross_super_white.jpg?format=webp&width=800&q=75',
    features: ['Smooth ride', 'Spacious cabin', 'Family favourite'],
  },
  {
    id: 'xuv700',
    name: 'Mahindra XUV700',
    category: 'Premium SUV',
    image:
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-right-front-three-quarter-547.png?isig=0&q=80',
    features: ['Bold design', 'Advanced safety', 'Premium tech'],
  },
  {
    id: 'ev',
    name: 'Luxury EV',
    category: 'Electric · Sustainable Luxury',
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop',
    features: ['Zero emissions', 'Silent cabin', 'Future-ready'],
  },
  {
    id: 'bus',
    name: 'Luxury Coach',
    category: 'Bus · Large Group',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop',
    features: ['High capacity', 'Onboard comfort', 'Event-ready'],
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
