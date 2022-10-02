const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    fontFamily: {
      'sans': ['Biotif', 'system-ui'],
      'serif': ['Bogart', 'Georgia',],
      'display': ['Bogart', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#232320',
      snow: '#FEFAF6',
      gray: '#656270',
      primary: {
        DEFAULT: '#FFC4FF',
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
