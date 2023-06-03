/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,purs}", "./docs/**/*.{html,js}", "./assets/**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}