import { sanityClient } from 'sanity:client';
import { urlFor, getSettings } from './sanity';
import { site } from './site';

// Contenus des pages (une fiche Sanity par page). Repli sur les textes de la maquette.
export const content: Record<string, Record<string, any>> = {};

export const PAGE_TYPES = ['pageAccueil', 'pageApproche', 'pagePourQui', 'pageTarifs', 'pageParcours', 'pageContact', 'pageProjets', 'commun'];

let loaded: Promise<void> | null = null;
export function loadContent() {
  loaded ??= (async () => {
    site.settings = (await getSettings()) ?? {};
    try {
      const docs = await sanityClient.fetch<any[]>(`*[_type in $types && !(_id in path("drafts.**"))]`, { types: PAGE_TYPES });
      for (const d of docs ?? []) content[d._type] = d;
    } catch (e) {
      console.warn('[sanity] pages non lues, contenu de la maquette utilisé :', (e as Error).message);
    }
  })();
  return loaded;
}

export function t(page: string, key: string, fallback: string): string {
  const v = content[page]?.[key];
  return typeof v === 'string' && v.trim() ? v : fallback;
}

export function img(page: string, key: string, fallback: string): string {
  const v = content[page]?.[key];
  return v?.asset ? urlFor(v).width(2000).auto('format').url() : fallback;
}
