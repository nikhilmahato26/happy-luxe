import { motion } from 'framer-motion';
import { packages, bookingProcess } from '../../data/siteContent';
import { staggerContainer, fadeUp, viewport } from '../../utils/animations';
import { getIcon, iconMap } from '../../utils/iconMap';
import SectionTitle from '../ui/SectionTitle';
import SpecialityCard from '../ui/SpecialityCard';

/**
 * Packages — popular travel packages grid + the 4-step booking timeline.
 */
export default function Packages() {
  return (
    <section id="packages" className="section bg-navy/[0.02]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Popular Packages"
          title="Journeys Our Guests"
          highlight="Love Most"
          subtitle="Hand-picked packages for business, family, faith and everything in between."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {packages.map((item) => (
            <SpecialityCard key={item.title} item={item} />
          ))}
        </motion.div>

        {/* Booking process timeline */}
        <div className="mt-24">
          <SectionTitle
            eyebrow="How It Works"
            title="Booking in"
            highlight="Four Steps"
          />

          <motion.div
            variants={staggerContainer(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative mt-14 grid gap-10 md:grid-cols-4"
          >
            <span className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
            {bookingProcess.map((item) => {
              const Icon = getIcon(item.icon, iconMap.Circle);
              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-navy-deep text-gold-soft shadow-soft">
                    <Icon className="h-8 w-8" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen font-display text-xs font-bold text-navy shadow">
                      {item.step}
                    </span>
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-navy/65">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
