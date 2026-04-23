// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import astroNoEmail from 'astro-noemail';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), astroNoEmail()]

  }
});