/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif']
      },
      colors: {
        'hero-color': "#dcdedd",
        'teal-main': "#1a3639",
        'yellow-main': "#e7d869",
        'black-main': "#212529",
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/imgs/heroimg.jpg')",
      }
    },
  },
  plugins: [],
}

