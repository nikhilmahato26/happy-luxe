import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { fadeUp, viewport } from '../../utils/animations';
import { whatsappLink, vehicleEnquiry } from '../../utils/whatsapp';

export default function FleetCard({ vehicle }) {
  const images = vehicle.images?.length ? vehicle.images : vehicle.image ? [vehicle.image] : [];
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.preventDefault();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.preventDefault();
    setCurrent((c) => (c + 1) % images.length);
  };

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
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${vehicle.name} — Happy Luxe Travels`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-110 transition-transform duration-[1300ms] ease-out`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-14 inset-x-0 flex justify-center gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-gold-soft' : 'w-1.5 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

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
