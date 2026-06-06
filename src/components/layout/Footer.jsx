import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { business, footer } from '../../data/siteContent';
import { whatsappLink, telLink, mailLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import { fadeUp, viewport } from '../../utils/animations';
import Logo from '../ui/Logo';

/**
 * Footer — navy footer with brand, links, services and contact.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/80">
      <span className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="gold-rule h-px w-full opacity-60" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {footer.about}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <h4 className="font-display text-xl font-semibold text-white">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/65 transition-colors hover:text-gold-soft">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Popular services */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <h4 className="font-display text-xl font-semibold text-white">Popular Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {footer.popularServices.map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/65 transition-colors hover:text-gold-soft">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <h4 className="font-display text-xl font-semibold text-white">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm">
            {business.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-start gap-3 hover:text-gold-soft">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={mailLink()} className="flex items-start gap-3 break-all hover:text-gold-soft">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${business.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold-soft"
              >
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                {business.website}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              {business.hours}
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <p>© {year} {business.name} ({business.shortName}). All rights reserved.</p>
          <p>{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
