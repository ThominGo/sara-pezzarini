import { urlFor, getSettings, safeFetch, PAGES_QUERY } from './sanity';
import { site } from './site';
import { PREVIEW } from './preview';

// Contenus des pages (une fiche Sanity par page). Repli sur les textes de la maquette.
export const content: Record<string, Record<string, any>> = {};

export const PAGE_TYPES = ['pageAccueil', 'pageApproche', 'pagePourQui', 'pageTarifs', 'pageParcours', 'pageContact', 'pageProjets', 'commun', 'pageMentions', 'pageConfidentialite', 'page404'];

let loaded: Promise<void> | null = null;
async function load() {
  site.settings = (await getSettings()) ?? {};
  const docs = (await safeFetch<any[]>(PAGES_QUERY, { types: PAGE_TYPES })) ?? [];
  for (const k of Object.keys(content)) delete content[k];
  for (const d of docs) content[d._type] = d;
}
// Site statique : lecture une seule fois au build. Aperçu : relecture à chaque requête (brouillons à jour).
export function loadContent() {
  if (PREVIEW) return load();
  loaded ??= load();
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
