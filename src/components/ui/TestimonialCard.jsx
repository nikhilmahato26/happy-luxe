import { Star, Quote } from 'lucide-react';

/**
 * TestimonialCard — luxury review card (used inside the Swiper slider).
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-strong flex h-full flex-col rounded-4xl p-7 shadow-glass">
      <Quote className="h-9 w-9 text-gold/40" />

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy/75">
        “{testimonial.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-navy/5 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-deep font-display text-lg font-semibold text-gold-soft">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="font-display text-lg font-semibold text-navy">
            {testimonial.name}
          </p>
          <p className="text-xs text-navy/55">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
