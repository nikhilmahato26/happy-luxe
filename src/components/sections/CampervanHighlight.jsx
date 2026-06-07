import { motion } from 'framer-motion';
import { campervanImages, campervanVideo } from '../../data/siteContent';
import { fadeUp, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

export default function CampervanHighlight() {
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

        {/* Bento media grid */}
        <div className="mt-14 space-y-4">
          {/* Row 1: video (large) + 2 images stacked */}
          <div className="grid gap-4 lg:grid-cols-5">
            {/* Video */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative overflow-hidden rounded-3xl shadow-lift lg:col-span-3"
            >
              <video
                src={campervanVideo}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
              <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-gold-soft backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-gold-soft animate-pulse" />
                Live Experience
              </span>
            </motion.div>

            {/* Images 1 & 2 stacked */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-1"
            >
              {campervanImages.slice(0, 2).map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: remaining 4 images */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {campervanImages.slice(2).map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
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
            <div key={item.label} className="rounded-3xl glass-dark p-5 text-center">
              <p className="font-display text-lg font-semibold text-gold-soft">{item.label}</p>
              <p className="mt-1 text-xs text-white/60">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
