import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { resolve } from './presentation';
import { schemaTypes } from './schemas';

const singletons = ['settings', 'pageAccueil', 'pageApproche', 'pagePourQui', 'pageTarifs', 'pageParcours', 'pageContact', 'pageProjets', 'commun'];

export default defineConfig({
  name: 'default',
  title: 'Sara Pezzarini',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'h4rgggeo',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    // Onglet « Presentation » : le site en aperçu, cliquer sur un élément ouvre son champ
    presentationTool({
      title: 'Modifier le site',
      resolve,
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://sara-pezzarini-preview.thomas-marilleau.workers.dev',
      },
    }),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem().title('Pages').child(
              S.list().title('Pages').items([
                S.listItem().title("Accueil").id('pageAccueil').child(S.document().schemaType('pageAccueil').documentId('pageAccueil')),
                S.listItem().title("Mon approche").id('pageApproche').child(S.document().schemaType('pageApproche').documentId('pageApproche')),
                S.listItem().title("Pour qui").id('pagePourQui').child(S.document().schemaType('pagePourQui').documentId('pagePourQui')),
                S.listItem().title("Tarifs et financement").id('pageTarifs').child(S.document().schemaType('pageTarifs').documentId('pageTarifs')),
                S.listItem().title("Parcours").id('pageParcours').child(S.document().schemaType('pageParcours').documentId('pageParcours')),
                S.listItem().title("Contact").id('pageContact').child(S.document().schemaType('pageContact').documentId('pageContact')),
                S.listItem().title("Projets (haut de page)").id('pageProjets').child(S.document().schemaType('pageProjets').documentId('pageProjets')),
                S.listItem().title("Éléments communs (bloc contact, pied de page)").id('commun').child(S.document().schemaType('commun').documentId('commun')),
              ]),
            ),
            S.documentTypeListItem('project').title('Projets'),
            S.divider(),
            S.listItem().title('Réglages du site').id('settings').child(S.document().schemaType('settings').documentId('settings')),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
  // Pages et réglages : fiches uniques, préremplies avec les textes de la maquette (pas de bouton « créer »)
  document: {
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global' ? prev.filter((t) => !singletons.includes(t.templateId)) : prev,
    actions: (prev, { schemaType }) =>
      singletons.includes(schemaType) ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete') : prev,
  },
});
