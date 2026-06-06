# Happy Luxe Travels (HLT) ✨

A premium, ultra-modern **luxury travel & transportation** single-page website for
**Happy Luxe Travels** — *Luxury Journeys • Exceptional Experiences.*

Refined editorial aesthetic: midnight-blue `#16213E` with royal gold `#D4AF37` /
soft gold `#E6C35C` on a warm light canvas, Cormorant Garamond × Sora typography,
glassmorphism, luxury borders and smooth Framer Motion animations.

---

## 🧱 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (utility classes only)
- **React Router DOM** — routing shell (single page, extendable)
- **Framer Motion** — reveals, parallax, hover glass, counters, page transitions
- **Swiper JS** — auto-playing testimonials slider
- **React Hook Form** — validated booking form
- **React Icons** + **Lucide React** — iconography

---

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:5173
npm run build    # production build
npm run preview  # preview the build
```

> Requires Node.js 18+.

---

## 📁 Project Structure

```
src/
├── assets/            # images, icons, logos (drop your own here)
├── components/
│   ├── ui/            # Button, GlassCard, SectionTitle, ServiceCard,
│   │                  # FleetCard, SpecialityCard, WhyChooseCard,
│   │                  # TestimonialCard, Logo
│   ├── layout/        # Navbar, MobileMenu, Footer, FloatingActions
│   └── sections/      # Hero, Services, Specialities, Fleet, WhyChooseUs,
│                      # Packages (incl. booking timeline), Gallery,
│                      # Testimonials, CTA, Contact, FAQ
├── hooks/             # useCountUp, useScrolled
├── utils/             # whatsapp.js, animations.js, iconMap.js
├── data/              # siteContent.js  ← EDIT EVERYTHING HERE
├── pages/             # Home.jsx
├── App.jsx
└── main.jsx
```

---

## ✏️ Editing Content

**All copy, contact details, services, fleet, packages, testimonials and FAQs
live in one file:**

```
src/data/siteContent.js
```

Change phone numbers, services, fleet, etc. there — every component reads from it.

---

## 🖼️ Replacing Images

Ships with free **Unsplash** photos so it looks complete immediately.
For production, replace them with your own licensed photography:

1. Drop files into `src/assets/images/`.
2. `import` them in `siteContent.js` and reference the variable, **or** swap the
   URLs for your own CDN links.

---

## 🪧 Adding the Real Logo

The logo is an inline **HLT** monogram + wordmark in
`src/components/ui/Logo.jsx` (placeholder from the brand palette). To use real art:

1. Add your file to `src/assets/logos/` (e.g. `logo.svg`).
2. `import logoUrl from '../../assets/logos/logo.svg'`.
3. Replace the monogram `<span>` with `<img src={logoUrl} alt="Happy Luxe Travels" />`.

The `light` prop renders a white variant for dark backgrounds (used in the footer).

---

## 📞 Booking Logic

- **WhatsApp** is the primary booking channel — number lives in
  `siteContent.js → business.whatsapp` (wa.me format, no `+`).
- The **booking form** (`Contact.jsx`) has no backend — on submit it composes a
  formatted WhatsApp message and opens chat. Swap the `onSubmit` handler to wire a
  real backend (email, Sheets, CRM).

---

## 🔍 SEO

`index.html` includes title, meta description, keywords, Open Graph, Twitter cards,
and `TravelAgency` JSON-LD (both phone numbers + Instagram) targeting:
*Luxury Travel Service · Premium Cab Service · Airport Transfer Service · Corporate
Travel · Tempo Traveller Booking · Urbania Rental · Luxury Bus Rental · Group Travel.*

---

## 🎨 Brand Tokens (tailwind.config.js)

| Token            | Value                       |
| ---------------- | --------------------------- |
| `navy`           | `#16213E` (luxury dark blue) |
| `gold`           | `#D4AF37` (royal gold)       |
| `gold.soft`      | `#E6C35C` (soft gold)        |
| `canvas`         | `#F7F6F2` (light luxury bg)  |
| Display font     | Cormorant Garamond           |
| Body font        | Sora                         |

---

© Happy Luxe Travels (HLT). *Your Happy Journey Starts Here!*
