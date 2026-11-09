import { defineConfig, envField, sessionDrivers } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const PROJECT_ID = env.PUBLIC_SANITY_PROJECT_ID || 'h4rgggeo';
const DATASET = env.PUBLIC_SANITY_DATASET || 'production';
// Version « aperçu » (Presentation dans le Studio) : rendu à la demande, brouillons lus en direct.
// Le site de production reste 100 % statique.
const PREVIEW = (process.env.PUBLIC_SANITY_PREVIEW ?? env.PUBLIC_SANITY_PREVIEW) === 'true';

export default defineConfig({
  output: PREVIEW ? 'server' : 'static',
  adapter: PREVIEW ? cloudflare({ imageService: 'passthrough', imagesBindingName: false, configPath: 'wrangler.preview.jsonc' }) : undefined,
  // Pas de sessions utilisées : stockage en mémoire, aucun KV à créer chez Cloudflare
  session: { driver: sessionDrivers.lruCache() },
  integrations: [
    sanity({
      projectId: PROJECT_ID,
      dataset: DATASET,
      apiVersion: '2026-11-09',
      useCdn: false,
    }),
    react(),
  ],
  env: {
    schema: {
      SANITY_API_READ_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    define: { 'import.meta.env.PUBLIC_SANITY_PREVIEW': JSON.stringify(PREVIEW ? 'true' : 'false') },
  },
});
