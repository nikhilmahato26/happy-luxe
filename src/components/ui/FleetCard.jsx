import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { fadeUp, viewport } from '../../utils/animations';
import { whatsappLink, vehicleEnquiry } from '../../utils/whatsapp';

/**
 * FleetCard — large premium vehicle card with image zoom and Book CTA.
 */
export default function FleetCard({ vehicle }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-4xl glass-strong shadow-glass-lg"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} — Happy Luxe Travels luxury fleet`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full glass-dark px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-gold-soft">
          {vehicle.category}
        </span>

        <h3 className="absolute inset-x-5 bottom-4 font-display text-2xl font-semibold text-white drop-shadow">
          {vehicle.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="space-y-2">
          {vehicle.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-navy/70">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-sheen text-navy">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 pt-2">
          <a
            href={whatsappLink(vehicleEnquiry(vehicle.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-deep px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glass-lg"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4 text-gold-soft" />
          </a>
          <a
            href={whatsappLink(vehicleEnquiry(vehicle.name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp about ${vehicle.name}`}
            className="flex items-center justify-center rounded-full bg-[#25D366] px-4 text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:brightness-105"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
