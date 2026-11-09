import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const singletons = ['settings'];

export default defineConfig({
  name: 'default',
  title: 'Sara Pezzarini',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'h4rgggeo',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem().title('Réglages du site').id('settings').child(S.document().schemaType('settings').documentId('settings')),
            S.divider(),
            S.documentTypeListItem('project').title('Projets'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (t) => t.filter(({ schemaType }) => !singletons.includes(schemaType)),
  },
});
