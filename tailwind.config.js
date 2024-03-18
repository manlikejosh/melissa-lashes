/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '374px',
      },
      fontFamily: {
        'cookie': ['Cookie', 'cursive'],
        'mont': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'almostBlack': '#1D1D1D',
        'silver': '#B0B0B0',
        'salt': '#F6F6F6',
        'magenta': '#C585B3',
        'dkMagenta': '#BC69AA',
      },
    },
  },
  plugins: [],
}

