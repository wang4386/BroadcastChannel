import tailwindcss from '@tailwindcss/vite'
import astroIcon from 'astro-icon'
import { defineConfig } from 'astro/config'

// Static build for Cloudflare Pages
export default defineConfig({
  output: 'static',
  integrations: [
    astroIcon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
