/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo': 'url(/logoDarkMode.png)'
      }
    },
    colors: {
      'light': '#D9DCC9',
      'dark': '#01131D'
    },
    fontFamily: {
      display: ['Syne', 'sans-serif']
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    fontSize: {
      'header': '6.563rem'
    }
  },
  plugins: []
};

