import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation';

// Où chaque fiche apparaît sur le site (liens rapides entre l'éditeur et l'aperçu)
const page = (title: string, href: string) => defineLocations({ locations: [{ title, href }] });

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    pageAccueil: page('Accueil', '/'),
    pageApproche: page('Mon approche', '/mon-approche'),
    pagePourQui: page('Pour qui', '/pour-qui'),
    pageTarifs: page('Tarifs', '/tarifs'),
    pageParcours: page('Parcours', '/parcours'),
    pageContact: page('Contact', '/contact'),
    pageProjets: page('Projets', '/projets'),
    commun: defineLocations({
      locations: [
        { title: 'Accueil', href: '/' },
        { title: 'Contact', href: '/contact' },
      ],
    }),
    settings: page('Contact', '/contact'),
    project: defineLocations({
      select: { title: 'title', slug: 'slug.current' },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || 'Projet', href: `/projets/${doc?.slug}` },
          { title: 'Tous les projets', href: '/projets' },
        ],
      }),
    }),
  },
};
