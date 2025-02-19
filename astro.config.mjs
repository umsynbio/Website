// @ts-check
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';
import { env } from 'process';

// https://astro.build/config
export default defineConfig({
  base: "Website/",
  vite: {
    plugins: [tailwindcss()],
  },
});
