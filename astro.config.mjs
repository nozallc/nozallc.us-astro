// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  adapter: cloudflare({
    // Cloudflare Pages Functions for advanced routing
    mode: 'advanced',
  }),
  output: 'static',
  // Image optimization settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
    remotePatterns: [],
  },
  // Build optimization
  build: {
    inlineStylesheets: 'never',
    assets: '_astro',
    cssCodeSplit: false,
  },
  // Development settings\n  vite: {\n    build: {\n      minify: 'terser',\n      cssMinify: true,\n      sourcemap: false,\n    },\n  },
  // Enable prefetching for better performance
  prefetch: {
    prefetchAll: true,
  },
});
