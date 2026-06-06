import { motion } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink, telLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';

/**
 * FloatingActions — sticky WhatsApp / Call / Book Now buttons.
 */
export default function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <a
        href="#contact"
        className="hidden items-center gap-2 rounded-full bg-navy-deep px-5 py-3 text-sm font-semibold text-white shadow-lift transition-all hover:shadow-glass-lg sm:flex"
      >
        <CalendarCheck className="h-5 w-5 text-gold-soft" />
        Book Now
      </a>

      <a
        href={telLink()}
        aria-label="Call Happy Luxe Travels"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-sheen text-navy shadow-gold transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-gold/50" />
        <Phone className="relative h-6 w-6" />
      </a>

      <a
        href={whatsappLink(GENERAL_ENQUIRY)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Happy Luxe Travels"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/50" />
        <FaWhatsapp className="relative h-7 w-7" />
      </a>
    </motion.div>
  );
}
