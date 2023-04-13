/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: {
        100: '#C9C4FF',
        200: '#ABA4FF',
        300: '#9887FF',
        400: '#856AFF',
        500: '#6345FF',
        600: '#482AFF',
        700: '#2E0FFF',
        800: '#1607C2', // Original primary color
        900: '#0C0935',
      },
      secondary: {
        100: '#F9FDE4',
        200: '#F4FCC9',
        300: '#EFFB8F',
        400: '#E9F83D', // Original secondary color
        500: '#D0D71C',
        600: '#A8A514',
        700: '#80730C',
        800: '#584104',
        900: '#2F1E00',
      },
      white: '#f2f2fc',
      black: '#000000',
      complementary: {
        100: '#E6DFFF',
        200: '#CDBEFF',
        300: '#B59FFF',
        400: '#9D80FF',
        500: '#8540FF',
        600: '#6C00E9',
        700: '#5300B2',
        800: '#39007B',
        900: '#1F0044',
      },
      grey: {
        100: '#F0F0FF',
        200: '#E0E0EA',
        300: '#BDBDBD',
        400: '#9E9E9E',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        900: '#111111',
      },
    },
    fontFamily: {
      'syne': ['Syne', 'sans-serif'],
      'quattrocento': ['Quattrocento Sans', 'sans-serif']
    }
  },
  darkMode: 'class',
  plugins: [],
}
