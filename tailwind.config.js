/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.24) 0px 5px 10px',
      }
    },
  },
  plugins: [],
}