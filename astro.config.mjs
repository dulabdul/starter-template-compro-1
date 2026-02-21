import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro";
// 1. Import dari '@astrojs/vercel' langsung
import vercel from '@astrojs/vercel'; 

export default defineConfig({
  // 2. HAPUS opsi output: 'hybrid' sepenuhnya
  
  // 3. Adapter Vercel tetap di sini
  adapter: vercel(),
  
  integrations: [
    react(),
    sanity({
      projectId: "eh4q3bcq",
      dataset: "production",
      studioRoute: "/admin", 
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});