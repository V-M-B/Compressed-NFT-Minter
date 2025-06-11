/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'helius-orange': '#FF8C00', // You can adjust this hex color to match your desired orange
      },
    },
  },
  plugins: [],
}
