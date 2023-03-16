/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent' : 'transparent',
      'primary900': '#0A1F34',
      'primary700': '#233548',
      'primary600': '#3B4C5D',
      'primary500': '#546271',
      'primary400': '#858F9A',
      'primary200': '#B6BCC2',

      'secondary900': '#2E1156',
      'secondary700': '#432967',
      'secondary600': '#584178',
      'secondary500': '#6D5889',
      'secondary400': '#9788AB',
      'secondary200': '#C0B8CC',

      'alternative900': '#F85A32', 
      'alternative700': '#F96B47',
      'alternative600': '#F97B5B',
      'alternative500': '#FA8C70',
      'alternative400': '#FB9C84',
      'alternative200': '#FCBDAD',

    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    }

  },
  plugins: [],
}
