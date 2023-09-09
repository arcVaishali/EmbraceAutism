/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        poppins: ['Poppins', 'sans'],
      },
      fontSize: {
        '40': '40px',
        '35': '35px',
        '30': '30px',
      },
      colors: {
        green: '#606C38',
        'olive-green': '#283618',
        soft: '#FEFAE0',
        orange: '#DDA15E',
        'dark-orange': '#BC6C25',
        'light-blue': '#CAF3F0',
        blue: '#1A82EE',
      }
    },
  },
  plugins: [],
}