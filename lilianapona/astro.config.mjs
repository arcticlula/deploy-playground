// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical origin: used for canonical/hreflang links and the sitemap.
  site: 'https://lilianaponajewellery.pt',

  // Same URL shape WordPress used (/sobre/, /produto/green-rock-ring/), so existing links keep working.
  trailingSlash: 'always',
  build: { format: 'directory' },

  compressHTML: true,
});
