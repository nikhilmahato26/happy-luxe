import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { campervanImages } from '../../data/siteContent';
import { fadeUp, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

export default function CampervanHighlight() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((c) => (c - 1 + campervanImages.length) % campervanImages.length);
  const next = () => setActive((c) => (c + 1) % campervanImages.length);

  return (
    <section id="campervans" className="section relative overflow-hidden bg-navy-deep">
      <span className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-soft/10 blur-3xl" />

      <div className="container-x relative">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <SectionTitle
            eyebrow="We Provide"
            title="Luxury Campervans &"
            highlight="Travel Vans"
            subtitle="Experience the freedom of the open road in our premium campervans and luxury travel vans — fully equipped for unforgettable journeys."
            light
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-center">
          {/* Main featured image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative lg:col-span-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-lift">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={campervanImages[active].image}
                  alt={campervanImages[active].label}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm font-semibold text-gold-soft">
                <MapPin className="h-4 w-4" />
                {campervanImages[active].label}
              </div>

              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {campervanImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-gold-soft' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-row gap-3 lg:col-span-2 lg:flex-col"
          >
            {campervanImages.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative flex-1 overflow-hidden rounded-2xl transition-all duration-300 lg:flex-none ${
                  i === active
                    ? 'ring-2 ring-gold-soft shadow-gold'
                    : 'opacity-60 hover:opacity-90'
                }`}
              >
                <div className="aspect-video lg:aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                {i === active && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-gold-soft/60" />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Feature highlights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: 'Fully Equipped', desc: 'Everything you need on board' },
            { label: 'Scenic Routes', desc: 'Curated road trip itineraries' },
            { label: 'Pro Chauffeur', desc: 'Expert, licensed drivers' },
            { label: '24 / 7 Support', desc: 'Help available round the clock' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl glass-dark p-5 text-center"
            >
              <p className="font-display text-lg font-semibold text-gold-soft">{item.label}</p>
              <p className="mt-1 text-xs text-white/60">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
