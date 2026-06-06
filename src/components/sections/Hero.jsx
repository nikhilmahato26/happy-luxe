import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { hero } from '../../data/siteContent';
import { whatsappLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import { useCountUp } from '../../hooks/useCountUp';
import Button from '../ui/Button';

function Stat({ stat }) {
  const [value, ref] = useCountUp(stat.value, { decimals: stat.decimals || 0 });
  const display = stat.value >= 1000 ? value.toLocaleString('en-IN') : value;
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
        {display}
        <span className="text-gold-soft">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-wider text-white/65">
        {stat.label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic background with slow zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={hero.background}
          alt="Luxury road trip at golden hour"
          className="h-full w-full object-cover"
        />
        {/* dark overlay + golden glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/65 to-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
      </motion.div>

      {/* Floating golden glow orbs */}
      <span className="pointer-events-none absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-gold/20 blur-3xl animate-gold-drift" />
      <span className="pointer-events-none absolute right-[12%] top-[30%] h-52 w-52 rounded-full bg-gold-soft/15 blur-3xl animate-float-slow" />

      <div className="container-x relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-[5.5rem]"
          >
            Happy <span className="text-gold-gradient italic">Luxe</span> Travels
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 font-display text-xl italic tracking-wide text-gold-soft sm:text-2xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="#fleet" variant="gold" size="lg" icon={ArrowRight} iconRight>
              Book Your Ride
            </Button>
            <Button href="#packages" variant="glass" size="lg" icon={MapPin}>
              Plan Your Journey
            </Button>
            <Button href={whatsappLink(GENERAL_ENQUIRY)} variant="whatsapp" size="lg" icon={FaWhatsapp}>
              WhatsApp Now
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-sheen text-navy">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl glass-dark sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5">
              <Stat stat={stat} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-gold-soft" />
        </motion.div>
      </motion.div>
    </section>
  );
}
