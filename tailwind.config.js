/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'custom': '415px',
        'custom2': '885px'
      },
    },
    colors:{
      brand_yellow:'#F5C15C'
    },
    fontFamily:{
      spartan:'League Spartan',
    }
  },
  plugins: [],
}

