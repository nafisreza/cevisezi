/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        black: 'black',
        white: 'white',
        purple: ' #3b0764',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
        },
        '.text-stroke-purple': {
          '-webkit-text-stroke-color': ' #3b0764',
        },
      };
      addUtilities(newUtilities);
    }
  ],
}