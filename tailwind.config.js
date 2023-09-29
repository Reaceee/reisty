/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xxs": "0.65rem",
      },
      colors: {
        "redd": "#BC172F",
        "dark": "#941427",
      }
    },
  },
  plugins: [],
}