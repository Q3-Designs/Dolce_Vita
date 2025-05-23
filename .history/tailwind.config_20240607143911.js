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
        'main-color': '#F0EAD6', // Define your custom color
      },
    },
  },
  plugins: [],
}
