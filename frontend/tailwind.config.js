/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      md:"891",
      spacing: {
        '128':'32rem',
      },
      colors:{
        brightBackground:"#FDF8EE",
        brightGreen:"#539165",
        lightText:"#959595",
        yellowColor:"#FCC822"
      }
    },
  },
  plugins: [],
}

