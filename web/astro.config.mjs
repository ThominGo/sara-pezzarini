import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || 'h4rgggeo',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-11-09',
      useCdn: false, // site statique : lecture au build
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
