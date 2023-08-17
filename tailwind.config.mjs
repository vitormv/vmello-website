import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    fontFamily: {
      sans: ['Biotif', 'system-ui'],
      serif: ['Bogart', 'Georgia'],
      display: ['Bogart', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#232320',
      snow: '#FEFAF6',
      acqua: '#AADCDA',
      gray: '#656270',
      primary: {
        DEFAULT: '#FFC4FF',
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  plugins: [],
};
