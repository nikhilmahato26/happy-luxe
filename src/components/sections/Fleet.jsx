import { motion } from 'framer-motion';
import { fleet } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import FleetCard from '../ui/FleetCard';

export default function Fleet() {
  return (
    <section id="fleet" className="section relative">
      <span className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Our Fleet"
          title="A Fleet Worthy of"
          highlight="Your Journey"
          subtitle="Immaculately maintained luxury vehicles, ready to make every mile memorable."
        />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
