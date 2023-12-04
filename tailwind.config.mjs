import colors from 'tailwindcss/colors';
import themer from 'tailwindcss-themer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {},
  plugins: [
    themer({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
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
      },
      themes: [
        {
          name: 'resume',
          selectors: ['[data-theme="resume"]'],
          extend: {
            colors: {
              black: '#293241',
              link: '#0044cc',
              primary: {
                DEFAULT: '#c35940',
              },
            },
            fontFamily: {
              sans: ['Lato', 'sans-serif'],
              serif: ['Lora', 'serif'],
              display: ['Raleway', 'Lato', 'sans-serif'],
            },
            fontSize: {
              sm: '0.75rem',
              base: '9pt',
              xl: '12pt',
              '2xl': '18pt',
              '3xl': '30pt',
            },
            lineHeight: {
              normal: '1.4',
            },
          },
        },
      ],
    }),
  ],
};
