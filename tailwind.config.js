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
        // Approved button fill (bright teal rounded-rectangle CTAs).
        cta: '#00B2C0',
        // Warm tan-chocolate brown: approved body/subheading/nav colour.
        // Warm, tan-influenced, readable on white (per master spec section 9).
        bark: '#8B5E34',
        // Pale teal footer background, derived from the logo teal.
        // Bark text on this passes WCAG AA (4.77:1); teal text does not, so
        // footer copy stays bark.
        paleteal: '#DCF1EF',
      },
      fontFamily: {
        // Approved major-heading font: Corinthia Bold, bright logo teal.
        // Reserved for the principal page heading (and specifically approved
        // major headings) ONLY. Never for subheadings or buttons.
        display: ['Corinthia', '"Segoe UI"', 'cursive'],
        // Approved general typography: Aptos for body, nav, subheadings,
        // buttons, forms, footer and all informational text.
        // Aptos is a Microsoft 365 font and is NOT on Google Fonts, so it is
        // declared as a system stack: visitors with Microsoft 365 get Aptos
        // (or Aptos Display); everyone else falls back to Segoe UI, its
        // metric-compatible sibling, then system sans. A true Aptos webfont
        // would require a licensed font file supplied by The Doghouse QLD.
        sans: ['Aptos', '"Aptos Display"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
