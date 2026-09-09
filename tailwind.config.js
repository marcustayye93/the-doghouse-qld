/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand teal sampled from the official logo (#17A296).
        // (Supplied CMYK 90/0/45/10 is the print spec; this is its on-screen match.)
        brand: '#17A296',
        branddark: '#0E7C71',
        deep: '#0A3733',
        ink: '#143C38',
        pine: '#3E6B66',
        cream: '#FDFCF8',
        mist: '#E9F5F3',
        honey: '#E9A23B',
        gold: '#A98A5B',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
