import { motion } from 'framer-motion';
import { Star, Share2 } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { business } from '../../data/siteContent';
import { whatsappLink, GENERAL_ENQUIRY } from '../../utils/whatsapp';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';

export default function SocialProof() {
  return (
    <section className="section relative overflow-hidden">
      <span className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/8 blur-3xl" />

      <div className="container-x relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-7 bg-gold/60" />
            Share the Love
            <span className="h-px w-7 bg-gold/60" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl lg:text-[3rem]">
            Loved the Journey?{' '}
            <span className="text-gold-gradient italic">Tell the World</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/65">
            Your kind words fuel our passion. A quick review or recommendation
            means the world to our team.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2"
        >
          {/* Google Review Card */}
          <motion.a
            variants={fadeUp}
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center overflow-hidden rounded-4xl bg-white p-8 text-center shadow-glass ring-1 ring-navy/8 transition-all duration-300 hover:shadow-glass-lg hover:-translate-y-1"
          >
            <span className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#FBBC04]/10 blur-2xl" />

            <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-navy/10">
              <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            <div className="mb-3 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>

            <h3 className="font-display text-2xl font-semibold text-navy">
              Leave a 5★ Review on Google
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Takes less than a minute — share your Happy Luxe Travels experience with everyone.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all group-hover:shadow-glass-lg">
              Write a Review
              <Star className="h-4 w-4 fill-gold-soft text-gold-soft" />
            </span>
          </motion.a>

          {/* Recommend Card */}
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col items-center overflow-hidden rounded-4xl bg-navy-deep p-8 text-center shadow-lift"
          >
            <span className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />
            <span className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />

            <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-sheen text-navy shadow-gold">
              <Share2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-semibold text-white">
              Recommend Us to Friends & Family
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Know someone planning a trip? Send them our way — we'll make sure they travel happy.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink('Hey! I had an amazing experience with Happy Luxe Travels. Check them out for your next trip! 🚌✨')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)] transition hover:brightness-110"
              >
                <FaWhatsapp className="h-4 w-4" /> Share on WhatsApp
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:ring-white/40"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <FaInstagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
