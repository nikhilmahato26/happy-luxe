import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks } from '../../data/siteContent';
import { whatsappLink, telLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import { useScrolled } from '../../hooks/useScrolled';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';

/**
 * Navbar — fixed; turns to glass on scroll. Desktop links + CTAs + hamburger.
 */
export default function Navbar() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-glass py-2.5' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <a href="#home" aria-label="Happy Luxe Travels home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-navy/75 transition-colors hover:text-gold-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={telLink()}
              className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-navy ring-1 ring-navy/20 transition-all hover:ring-gold/60"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer animate-shimmer flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-navy shadow-gold transition-all hover:shadow-glass-lg"
            >
              <FaWhatsapp className="h-4 w-4" /> Book Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-strong text-navy shadow-glass lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
