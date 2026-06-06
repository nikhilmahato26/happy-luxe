import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';
import { getIcon } from '../../utils/iconMap';

/**
 * SpecialityCard — compact premium feature card with a centred icon.
 * Also reused for Popular Packages (same shape: icon/title/text).
 */
export default function SpecialityCard({ item }) {
  const Icon = getIcon(item.icon);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass-strong relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl p-7 text-center"
    >
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-sheen text-navy shadow-gold transition-transform duration-300 group-hover:rotate-6">
        <Icon className="h-8 w-8" strokeWidth={1.6} />
      </span>
      <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
      <p className="text-sm leading-relaxed text-navy/65">{item.text}</p>
    </motion.div>
  );
}
