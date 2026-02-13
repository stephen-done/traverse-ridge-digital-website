// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://traverseridgedigital.com',
  base: '/',
  output: 'static',
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@babel/runtime/helpers/extends': '@babel/runtime/helpers/esm/extends',
      },
    },
    optimizeDeps: {
      include: ['@babel/runtime/helpers/extends'],
    },
    ssr: {
      noExternal: [
        '@adobe/react-spectrum',
        /^@react-spectrum\//,
        /^@spectrum-icons\//,
        /^@babel\/runtime/,
      ],
    },
  },
});
