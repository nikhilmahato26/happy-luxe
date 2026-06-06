import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/siteContent';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Testimonials — luxury review cards in an auto-playing Swiper slider.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-navy/[0.02] relative overflow-hidden">
      <span className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Guest Stories"
          title="Loved by"
          highlight="Discerning Travellers"
          subtitle="Real experiences from the families, executives and explorers who travel with HLT."
        />
      </div>

      <div className="container-x relative mt-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        #testimonials .swiper-pagination-bullet {
          background: #16213e;
          opacity: 0.25;
        }
        #testimonials .swiper-pagination-bullet-active {
          background: #d4af37;
          opacity: 1;
          width: 22px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
