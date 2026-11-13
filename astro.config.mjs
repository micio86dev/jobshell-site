import { defineConfig } from 'astro/config';

// The public address is set before publication; see README.
export default defineConfig({
  site: 'https://openjob.dev',
  trailingSlash: 'always',
});
