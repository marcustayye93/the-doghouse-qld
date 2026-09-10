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
        // Charmaine Canva estimates (visual only; confirm exact values with her):
        cta: '#00B2C0', // bright teal pill-button fill
        cocoa: '#5C3A1E', // dark chocolate brown (nav text, rules)
        bark: '#8B5E34', // warm brown body copy
      },
      fontFamily: {
        // NOTE: Parisienne is a stand-in for the exact script font in Charmaine's
        // Canva design (the view-only link exposes no font metadata). Replace with
        // her confirmed font name when she supplies it.
        display: ['Parisienne', '"Snell Roundhand"', 'cursive'],
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
