/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Righteous', 'cursive'], 
        subheading: ['Poppins', 'sans'],   
        normal: ['Poppins', 'sans'],
      },
      fontSize: {
        'heading': '40px',
        'subheading': '35px',
        'normal': '30px',
      },
      colors: {
        green: '#606C38',
        oliveGreen: '#283618',
        soft: '#FEFAE0',
        orange: '#DDA15E',
        darkOrange: '#BC6C25',
        lightblue: '#CAF3F0',
        blue: '#1A82EE',
      },
    },
  },
  plugins: [],
}