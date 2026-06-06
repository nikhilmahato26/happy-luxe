import { motion } from 'framer-motion';
import { specialities } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import SpecialityCard from '../ui/SpecialityCard';

export default function Specialities() {
  return (
    <section id="specialities" className="section bg-navy/[0.02]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Specialised In"
          title="Crafted for"
          highlight="Every Occasion"
          subtitle="Whatever the journey, we tailor a premium experience around it."
        />
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {specialities.map((item) => (
            <SpecialityCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
