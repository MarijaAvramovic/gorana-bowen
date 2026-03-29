/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#8A9A5B',
        earth: '#5C4033',
        calm: '#F5F0E8',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}