// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '655px',  // Small devices (landscape phones)
        'md': '865px',
        'lg':'900px'  // Medium devices (tablets)
        // You can add more breakpoints as needed
      },
      colors: {
        'main-color': '#FAF5F0', // Define your custom color
        gold: {
          light: '#f9d976',
          DEFAULT: '#f8c251',
          dark: '#e8a546'
        }
      },
      backgroundImage: theme => ({
        'gold-gradient': 'linear-gradient(to bottom, #f9d976, #f8c251, #e8a546)',
      }),
      fontFamily: {
        cursive: ['"Brush Script MT"', 'cursive'], // or any other cursive font you prefer
      },
    },
  },
  plugins: [],
}
