/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      animation: {
        growth: 'growth .5s ease-in-out',
      },
      keyframes: {
        growth: {
          from: { 'font-size': 0 },
          to: { 'font-size': '6rem' }
        },
      },
    },
  }
}