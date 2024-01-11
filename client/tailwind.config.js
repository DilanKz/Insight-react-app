/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Jost', 'sans']
      },
      colors: {
        primary: '#526D82',
        secondary: '#27374D',
        tertiary: '#9DB2BF',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

