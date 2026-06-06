import { motion } from 'framer-motion';
import { services } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="section relative">
      <span className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Our Services"
          title="Luxury Travel,"
          highlight="Every Way"
          subtitle="From Urbania luxury vans to premium SUVs and airport transfers — the right vehicle for every journey."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
