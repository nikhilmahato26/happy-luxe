import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';

/**
 * SectionTitle — eyebrow + display heading + optional subtitle.
 */
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-gold-soft' : 'text-gold-deep'
          }`}
        >
          <span className="h-px w-7 bg-gold/60" />
          {eyebrow}
          <span className="h-px w-7 bg-gold/60" />
        </span>
      )}

      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[3rem] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-navy/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
