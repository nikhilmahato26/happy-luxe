import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { business } from '../../data/siteContent';
import { whatsappLink, telLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import { fadeUp, viewport } from '../../utils/animations';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-5xl bg-navy-deep px-7 py-14 text-center shadow-lift sm:px-12 sm:py-20"
        >
          <span className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
          <span className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-gold-soft/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
              Your Happy Journey Awaits
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to Travel in{' '}
              <span className="text-gold-gradient italic">Pure Luxury?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Premium vehicles, professional drivers and seamless service. Book in
              minutes on WhatsApp or give us a call — we're available 24/7.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink(GENERAL_ENQUIRY)} variant="whatsapp" size="lg" icon={FaWhatsapp}>
                WhatsApp Now
              </Button>
              <Button href={telLink()} variant="gold" size="lg" icon={Phone}>
                {business.phones[0].display}
              </Button>
              <Button href="#contact" variant="glass" size="lg" icon={ArrowRight} iconRight>
                Booking Form
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
