/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main': '#CB5354',
      'white': "white",
    },
    extend: {
      fontFamily: {
        'fredoka': ['"Fredoka"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}