import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, viewport } from '../../utils/animations';
import { getIcon } from '../../utils/iconMap';
import { whatsappLink, vehicleEnquiry } from '../../utils/whatsapp';

/**
 * ServiceCard — luxury glass service card with icon, tags and Book CTA.
 */
export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass relative flex flex-col overflow-hidden rounded-3xl p-7"
    >
      <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep text-gold-soft shadow-soft transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </span>

      <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
        {service.description}
      </p>

      {service.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy ring-1 ring-gold/25"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={whatsappLink(vehicleEnquiry(service.title))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-deep"
      >
        Book Now
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen text-navy transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </a>
    </motion.div>
  );
}
