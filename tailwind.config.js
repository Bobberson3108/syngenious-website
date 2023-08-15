/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'logoDarkMode': 'url(/logoDark.svg)',
        'logoLightMode': 'url(/logoLight.svg)',
        'globe': 'url(/globe.png)',
        'globeLight': 'url(/globeLight.png)',
        'diamond': 'url(/diamond.png)',
        'diamondLight': 'url(/diamondLight.png)',
        'star': 'url(/star.png)',
        'starLight': 'url(/starLight.png)',
        'scrollArrow': 'url(/scrollArrow.png)',
        'scrollArrowLight': 'url(/scrollArrowLight.png)',
        'bigStarLight': 'url(/bigStarLight.png)',
        'bigStar': 'url(/bigStar.png)',
        'footerLogoLightMode': 'url(/footerLogoLightMode.png)'
      }
    },
    colors: {
      'light': '#D9DCC9',
      'footerlight': '#d3d7c1',
      'dark': '#01131D',
      'footerDark': '#011019',
      'cursor': '#D8C9AC',
      'footerDarkLine': '#03314a'
    },
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      mono: ['Space Mono', 'monospace']
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    fontSize: {
      'header': '7.8756rem'
    },
    screens: {
      'regularDesk': '1500px',
      'firstDeskBreakpoint': '1450px',
      'secondDeskBreakpoint': '1100px',
      'deskBreak': '500px'
    }
  },
  plugins: []
};

