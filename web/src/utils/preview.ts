import { createDataAttribute } from '@sanity/visual-editing/create-data-attribute';

// true uniquement sur la version « aperçu » utilisée par l'onglet Presentation du Studio
export const PREVIEW = import.meta.env.PUBLIC_SANITY_PREVIEW === 'true';
export const STUDIO_URL = 'https://sara-pezzarini.sanity.studio';

// Attribut data-sanity : rend un élément cliquable dans Presentation (ouvre le champ correspondant)
export function ds(id: string | undefined, path: string, type: string = id ?? ''): string | undefined {
  if (!PREVIEW || !id) return undefined;
  return createDataAttribute({ baseUrl: STUDIO_URL, id, type, path }).toString();
}
