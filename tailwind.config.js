/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'red': '#FEB172',
      'blue': {
        'dark': '#242440',
        'light': '#548687',
      },
      'white': '#D9D3C5'
    },
    extend: {},
  },
  plugins: [],
}
