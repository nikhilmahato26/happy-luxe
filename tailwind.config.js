/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Happy Luxe Travels brand palette ───────────────────────
        navy: {
          DEFAULT: '#16213E', // luxury dark blue
          50: '#F2F4F8',
          800: '#101A30',
          900: '#0B1326',
          950: '#070D1B',
        },
        gold: {
          DEFAULT: '#D4AF37', // royal gold
          soft: '#E6C35C', // soft gold
          deep: '#B5922A',
        },
        canvas: '#F7F6F2', // warm light luxury background
        cream: '#FBFAF6',
        ink: '#0B1326',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -14px rgba(22, 33, 62, 0.25)',
        glass: '0 8px 32px rgba(22, 33, 62, 0.14)',
        'glass-lg': '0 28px 70px -22px rgba(22, 33, 62, 0.4)',
        gold: '0 10px 34px -10px rgba(212, 175, 55, 0.5)',
        lift: '0 32px 80px -28px rgba(7, 13, 27, 0.45)',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(135deg, #E6C35C 0%, #D4AF37 48%, #B5922A 100%)',
        'navy-deep':
          'linear-gradient(140deg, #1E2C52 0%, #16213E 55%, #0B1326 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'gold-drift': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-20px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        shimmer: 'shimmer 3.2s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gold-drift': 'gold-drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
