import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';
import { getIcon } from '../../utils/iconMap';

/**
 * WhyChooseCard — glassmorphism card with icon, title and supporting text.
 */
export default function WhyChooseCard({ feature }) {
  const Icon = getIcon(feature.icon);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass relative flex items-start gap-4 rounded-3xl p-6"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-deep text-gold-soft shadow-soft transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" strokeWidth={1.7} />
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold text-navy">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-navy/65">{feature.text}</p>
      </div>
    </motion.div>
  );
}
