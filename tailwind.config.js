/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Noto Serif TC', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: { 50: '#f5f3ff', 100: '#ede9fe', 500: '#8b5cf6', 600: '#7c3aed', 900: '#4c1d95' },
      },
      keyframes: {
        'float-slow': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '50%': { transform: 'translate(30px, -40px) scale(1.1)' } },
        'float-reverse': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '50%': { transform: 'translate(-40px, 30px) scale(1.08)' } },
        'pulse-glow': { '0%, 100%': { opacity: 0.4 }, '50%': { opacity: 0.8 } },
        pop: { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.25)' }, '100%': { transform: 'scale(1)' } },
      },
      animation: {
        'float-slow': 'float-slow 18s ease-in-out infinite',
        'float-reverse': 'float-reverse 22s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        pop: 'pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
};
