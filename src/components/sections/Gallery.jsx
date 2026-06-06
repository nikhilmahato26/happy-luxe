import { motion } from 'framer-motion';
import { staggerContainer, scaleIn, viewport } from '../../utils/animations';
import { gallery } from '../../data/siteContent';
import SectionTitle from '../ui/SectionTitle';

/**
 * Gallery — luxury image gallery with hover zoom + label reveal.
 * Bento-style: first and last tiles span wider on large screens.
 */
const SPANS = ['lg:col-span-2', '', '', '', '', 'lg:col-span-2'];

export default function Gallery() {
  return (
    <section id="gallery" className="section relative overflow-hidden">
      <span className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Gallery"
          title="Moments in"
          highlight="Motion"
          subtitle="A glimpse of the journeys, transfers and experiences we craft every day."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid auto-rows-[16rem] grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {gallery.map((item, i) => (
            <motion.figure
              key={item.label}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-3xl shadow-glass ${SPANS[i] || ''}`}
            >
              <img
                src={item.image}
                alt={`${item.label} — Happy Luxe Travels`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5">
                <span className="inline-block translate-y-2 font-display text-xl font-semibold text-white opacity-90 drop-shadow transition-all duration-300 group-hover:translate-y-0">
                  {item.label}
                </span>
                <span className="mt-1 block h-0.5 w-0 bg-gold-sheen transition-all duration-500 group-hover:w-12" />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
