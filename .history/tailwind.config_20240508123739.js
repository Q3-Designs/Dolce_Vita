/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '655px',  // Small devices (landscape phones)
        'md': '865px',
        'lg':'885px'  // Medium devices (tablets)
        // You can add more breakpoints as needed
      },
    },
  },
  plugins: [],
}