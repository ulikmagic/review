/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '15px',
        center: true,
        screens: {
          lg: '1264px'
        },
      },
      zIndex: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        999: 999
      },
      width: {
        menu: '250px'
      },
      boxShadow: {
        variant: '0px 16px 32px 0px #3610A666',
        orange: '0px 4px 32px 0px #FFA16B99',
        white: '0px 16px 32px 0px #3610A666',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
        rubik: ['Rubik', 'Arial', 'sans-serif']
      },
      colors: {
        orange: "#FF9051",
        'orange-white': "#ffa26e",
        main: "#9F7FFF",
        "white-orange": "#FFB184",
        "dark-blue": "#280A82",
        grey: "#DCDFE3",
        green: "#09CACA",
        purple: "#AA8DFF",
        pink: "#FFA9D2",
        yellow: "#FFE55A",
        opacity: 'rgba(0, 0, 0, 0.54)',
      }
    },
  },
  plugins: [],
}

