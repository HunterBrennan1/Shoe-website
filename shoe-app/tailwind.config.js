/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hero-color': "#dcdedd",
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/imgs/heroimg.jpg')",
      }
    },
  },
  plugins: [],
}

