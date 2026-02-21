import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "eh4q3bcq",
      dataset: "production",
      // Mengaktifkan Studio di dalam Astro
      studioRoute: "/admin", 
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});