// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Where the site is published. The real site is the root of lilianaponajewellery.pt (the default).
  // A preview copy can be built for another address with two environment variables, e.g. the
  // GitHub Pages workflow: SITE_URL=https://arcticlula.github.io SITE_BASE=/deploy-playground/lilianapona
  // A copy with a sub-path asks search engines not to list it (see src/layouts/Base.astro).
  site: process.env.SITE_URL || 'https://lilianaponajewellery.pt',
  base: process.env.SITE_BASE || '/',

  // Same URL shape WordPress used (/sobre/, /produto/green-rock-ring/), so existing links keep working.
  trailingSlash: 'always',
  build: { format: 'directory' },

  compressHTML: true,
});
