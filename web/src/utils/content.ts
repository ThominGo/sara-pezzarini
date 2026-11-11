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

// Anciens textes provisoires (lorem, « Blabla », prix XX €…) peut-être encore enregistrés dans Sanity :
// on les remplace par les nouveaux textes de repli tant que Sara n'a pas écrit les siens.
const STALE = new Set<string>([
    "Ajuster les stratégies au fil des usages",
    "Ateliers, programme de prévention, outils adaptés : des projets construits au plus près des besoins.",
    "Avec elle, son entourage et les équipes, je co-construis des pistes adaptées aux besoins du quotidien, pour une inclusion concrète, au-delà du soin.",
    "Bilans, suivis, stratégies sur mesure pour soutenir l’autonomie dans les activités du quotidien.",
    "Blabla Formation + cmémoire",
    "Définir ensemble les objectifs, choisir les stratégies et les outils, puis les mettre à l’essai dans les situations du quotidien.",
    "En respectant ses choix et son rythme.",
    "Ergothérapeute en libéral, j'accompagne les personnes et les organisations vers une inclusion concrète, au-delà du soin.",
    "Explication de ton parcours",
    "Formations, conseils, co-construction pour faire évoluer ensemble les pratiques et les environnements.",
    "Les amis de l’atelier",
    "Libérale",
    "Maintenant",
    "Mes différents",
    "Mushrooms chicken personal onions thin platter spinach Chicago parmesan. Lasagna pineapple pie hand pesto deep. Thin sautéed Hawaiian meat sauce white tomatoes style. Mayo bbq pesto Aussie pie green meatball.",
    "Pour construire des pistes adaptées au terrain.",
    "Pour identifier les besoins et les obstacles.",
    "Stage",
    "Une situation, Une question ?",
    "XX €",
    "lorem ipsum",
    "projets",
    "À partir de XX € la demi-journée.",
    "À partir de XX € la session.",
    "Équipes éducatives, bibliothèques, musées et lieux culturels : je vous propose de penser l’accès aux apprentissages, aux loisirs et à la culture à partir des besoins des publics et des réalités de vos espaces."
  ]);

export function t(page: string, key: string, fallback: string): string {
  const v = content[page]?.[key];
  return typeof v === 'string' && v.trim() && !STALE.has(v.trim()) ? v : fallback;
}

export function img(page: string, key: string, fallback: string): string {
  const v = content[page]?.[key];
  return v?.asset ? urlFor(v).width(2000).auto('format').url() : fallback;
}
