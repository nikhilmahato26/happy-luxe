/**
 * Logo.jsx — Happy Luxe Travels brand mark (HLT monogram + wordmark).
 * Inline SVG placeholder built from the brand palette.
 *
 * TO SWAP IN THE REAL LOGO:
 *   1. Drop your file into src/assets/logos/ (e.g. logo.svg)
 *   2. import logoUrl from '../../assets/logos/logo.svg'
 *   3. Replace the monogram <span> with <img src={logoUrl} ... />
 * The `light` prop renders a white version for dark backgrounds.
 */
export default function Logo({ light = false, className = '' }) {
  const wordColor = light ? '#FFFFFF' : '#16213E';
  const subColor = light ? 'rgba(230,195,92,0.85)' : '#B5922A';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Monogram */}
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-deep shadow-soft">
        <span className="font-display text-[1.15rem] font-bold leading-none tracking-tight text-gold-soft">
          HLT
        </span>
        <span className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-inset ring-gold/40" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.4rem] font-semibold leading-none tracking-tight"
          style={{ color: wordColor }}
        >
          Happy <span className="text-gold-gradient">Luxe</span> Travels
        </span>
        <span
          className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em]"
          style={{ color: subColor }}
        >
          Luxury Journeys
        </span>
      </span>
    </span>
  );
}
