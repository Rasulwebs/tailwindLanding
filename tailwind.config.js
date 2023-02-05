module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1140px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      center: true,
    },

    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '13': '52px',
      '14': '56px',
      '15': '60px',
      '16': '64px',
      '17': '68px',
      '18': '72px',
      '19': '76px',
      '20': '80px',
      '21': '84px',
      '22': '88px',
      '23': '92px',
      '24': '96px',
      '25': '100px',
      '110': '110px',
      '120': '120px',
      '130': '130px',
      '140': '140px',
      '150': '150px',
      '160': '160px',
      '170': '170px',
      '180': '180px',
      '190': '190px',
      '200': '200px',
      '260': '260px',
    },

    extend: {

      colors: {
        "white": "#ffffff",
        "black": "#222",
        "gray": "#F3FDFF",
        "yellow": "#FDD446",
        "theme-color": "#5864FF",
        "border-color": "#ddd",
        "body-color": "#5B657E",
        "heading-color": "#162447",
      },

      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
