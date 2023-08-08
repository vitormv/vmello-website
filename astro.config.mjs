/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  vite: {
    plugins: [yaml()],
  },
});
