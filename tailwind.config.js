/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: 'Overpass, sans-serif', 
      },
      colors: {
        customdarkblue: 'hsl(216, 12%, 8%)',
        customblue: 'hsl(213, 19%, 18%)',
        customgrey: 'hsl(217, 12%, 63%)',
        customorange: 'hsl(25, 97%, 53%)',
      },
    },
  },
  plugins: [],
}