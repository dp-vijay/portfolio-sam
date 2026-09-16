// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://dp-vijay.github.io/portfolio-sam
// `site` + `base` must both be correct or every asset and link 404s.
// If you later move to a user site (dp-vijay.github.io) or a custom domain,
// set site to that origin and change base back to '/'.
export default defineConfig({
  site: 'https://dp-vijay.github.io',
  base: '/portfolio-sam',
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
