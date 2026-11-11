// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only: the site is plain files on a CDN, with no server,
// database or customer data. Set SITE_URL in the build environment.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.example.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
