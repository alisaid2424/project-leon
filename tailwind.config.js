/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container :{
      center: true,
      padding: "1rem",
    },
    extend: {
      colors :{
        'primary': '#10cab7',
        'secondary': '#2c4755',
        'backsection': '#f6f6f6',
        'title': '#ebeced',
        'subtitle': '#797979',
      },
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

