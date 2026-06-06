import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { navLinks, business } from '../../data/siteContent';
import { whatsappLink, telLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import Logo from '../ui/Logo';

/**
 * MobileMenu — full-height slide-in nav for small screens.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-navy-950/50 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[84%] max-w-sm flex-col bg-cream shadow-lift lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="gold-rule mx-6 h-px" />

            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="rounded-2xl px-4 py-3.5 font-display text-xl font-medium text-navy transition-colors hover:bg-navy-50 hover:text-gold-deep"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto space-y-3 px-6 pb-8">
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white shadow-soft"
              >
                <FaWhatsapp className="h-5 w-5" /> WhatsApp Now
              </a>
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-full bg-navy-deep py-3.5 font-semibold text-white shadow-soft"
              >
                <Phone className="h-5 w-5" /> {business.phones[0].display}
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full gold-border py-3 text-sm font-semibold text-gold-deep"
              >
                <FaInstagram className="h-4 w-4" /> {business.instagram}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
