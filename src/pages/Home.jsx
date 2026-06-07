import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Specialities from '../components/sections/Specialities';
import Fleet from '../components/sections/Fleet';
import CampervanHighlight from '../components/sections/CampervanHighlight';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Packages from '../components/sections/Packages';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import SocialProof from '../components/sections/SocialProof';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

/**
 * Home — single-page composition of all sections in narrative order.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Specialities />
      <Fleet />
      <CampervanHighlight />
      <WhyChooseUs />
      <Packages />
      <Gallery />
      <Testimonials />
      <SocialProof />
      <CTA />
      <Contact />
      <FAQ />
    </>
  );
}
