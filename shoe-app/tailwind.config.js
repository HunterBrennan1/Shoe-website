/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hero-color': "#dcdedd",
        'teal-main': "#1a3639",
        'yellow-main': "#e7d869",
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/imgs/heroimg.jpg')",
      }
    },
  },
  plugins: [],
}

