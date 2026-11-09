import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'h4rgggeo',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: { autoUpdates: true },
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx,js,jsx,astro}',
    schema: 'schema.json',
    generates: '../web/sanity.types.ts',
    overloadClientMethods: true,
  },
});
