// Visuel par défaut d'un projet sans image de couverture : dégradé de couleur, illustration.
// Une couleur par projet, la même partout (vignette, haut de page, « autres projets »).
export type ThemeKey = 'repertoire' | 'sensibilisation' | 'plan3d' | 'cuisine' | 'quete' | 'ressources';

// Cinq couleurs par projet : ombre, deux tons moyens, clair, lumière. Le dégradé les enchaîne en douceur.
export type Colors = [string, string, string, string, string];
export type Theme = { key: ThemeKey; label: string; colors: Colors; motif: string; illustration: string };

export const THEMES: Record<ThemeKey, Theme> = {
  repertoire: { key: 'repertoire', label: 'Framboise', colors: ['#4A1342', '#B5245F', '#FF5A5F', '#FF9A6B', '#FFD2B0'], motif: 'fiches', illustration: '/illustrations/projet-repertoire.svg' },
  sensibilisation: { key: 'sensibilisation', label: 'Ambre', colors: ['#7A2410', '#D9501E', '#F27A24', '#FFAA45', '#FFE0A0'], motif: 'ecran', illustration: '/illustrations/projet-sensibilisation.svg' },
  plan3d: { key: 'plan3d', label: 'Prune', colors: ['#25104F', '#6A2C91', '#C03F9E', '#FF6F91', '#FFB3A7'], motif: 'piece', illustration: '/illustrations/projet-plan3d.svg' },
  cuisine: { key: 'cuisine', label: 'Terracotta', colors: ['#521810', '#B5381F', '#EF6A3D', '#FFA46B', '#FFD9B8'], motif: 'marmite', illustration: '/illustrations/projet-cuisine.svg' },
  quete: { key: 'quete', label: 'Rose pêche', colors: ['#6B1745', '#D9467F', '#FF7E8B', '#FFB08A', '#FFE0C2'], motif: 'marches', illustration: '/illustrations/projet-quete.svg' },
  ressources: { key: 'ressources', label: 'Vieux rose', colors: ['#4F1D31', '#9A3452', '#D0647E', '#F0958F', '#FFD9CB'], motif: 'fenetre', illustration: '/illustrations/projet-ressources.svg' },
};

const BY_SLUG: Record<string, ThemeKey> = {
  'repertoire-outils-autonomie-tsa': 'repertoire',
  'sensibilisation-tsa-milieu-professionnel': 'sensibilisation',
  'plan-3d-chambre-personne-autiste': 'plan3d',
  'ateliers-cuisine-psychiatrie': 'cuisine',
  'quete-de-l-autonomie-jeu-jeunes-adultes': 'quete',
  'site-ressources-numeriques-samsah': 'ressources',
};

const KEYS = Object.keys(THEMES) as ThemeKey[];

// Choix explicite dans le Studio, sinon thème connu par l'adresse, sinon un thème stable déduit de l'adresse.
export function themeFor(slug?: string, explicit?: string): Theme {
  if (explicit && explicit in THEMES) return THEMES[explicit as ThemeKey];
  if (slug && BY_SLUG[slug]) return THEMES[BY_SLUG[slug]];
  let h = 0;
  for (const ch of slug ?? '') h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return THEMES[KEYS[h % KEYS.length]];
}

// Dégradé doux : un fondu diagonal en quatre tons, plus une lumière diffuse dans un coin.
// La position change d'une étape à l'autre : même couleur pour tout le projet, mais pas deux visuels identiques.
const ANGLES = [155, 205, 115, 245];
const GLOWS = ['82% 14%', '14% 12%', '86% 88%', '10% 86%'];
const easeGlow = (c: string, peak: number) =>
  [0, 0.12, 0.25, 0.38, 0.5, 0.62, 0.75, 0.88, 1]
    .map((t) => `${c}${Math.round(peak * (1 - t * t * (3 - 2 * t)) * 255).toString(16).padStart(2, '0')} ${Math.round(t * 100)}%`)
    .join(', ');
export const themeGradient = ([a, b, c, d, e]: Colors, variant = 0) => {
  const v = variant % ANGLES.length;
  return `radial-gradient(circle farthest-corner at ${GLOWS[v]}, ${easeGlow(e, 0.5)}), linear-gradient(${ANGLES[v]}deg, ${a} 0%, ${b} 30%, ${c} 68%, ${d} 100%)`;
};

// Ces projets affichent toujours leur visuel en dégradé, même si une photo est enregistrée dans le Studio.
// Pour montrer une vraie photo plus tard, retirer l'adresse du projet de cette liste.
const ALWAYS_VISUAL = new Set(['repertoire-outils-autonomie-tsa']);
export const forceVisual = (slug?: string) => !!slug && ALWAYS_VISUAL.has(slug);

// Illustration d'une étape ou d'un bloc, choisie d'après son titre. Chaque règle propose une illustration principale puis des
// secondaires. Sur une même page, une illustration n'est jamais utilisée deux fois (celle du haut de page comprise).
const RULES: [RegExp, string[]][] = [
  [/relev|difficult|observ/, ['loupe']], [/univers|choisir|carte|monde/, ['carte']], [/quete|creer|cree/, ['parchemin']],
  [/concev|repertoire|fiche/, ['fiches', 'ebauche', 'pile']], [/test|public|essai/, ['groupe']], [/equipe|collegue/, ['groupe', 'bulles']],
  [/diaporama|construire/, ['diapos']], [/present|seance/, ['ecran', 'bulles']], [/insertion|travail|entreprise|metier/, ['mallette']],
  [/jeu|jouer|exerc/, ['jeu']], [/evalu|bilan|analys/, ['checklist']], [/valid|accord|ensemble/, ['poignee']],
  [/ressent|comprendre|experience/, ['oeil']], [/capacit|avant|force|autonom/, ['marches']], [/reprodui|plan\b|mesur/, ['plan', 'piece']],
  [/deplac/, ['deplacer']], [/vraie|changer|dormir|nuit/, ['lit', 'maison']], [/visite|domicile|maison|chez/, ['maison']],
  [/atelier|cuisine|groupe/, ['marmite', 'groupe']], [/individuel|accompagn|duo/, ['duo']], [/chambre/, ['piece', 'lit']],
  [/recens|existant|liste/, ['pile']], [/rapide|acces|simple/, ['eclair']], [/ebauche|maquette|prototype|realiser/, ['ebauche', 'fenetre']],
  [/echange|dialogue|parler|discut/, ['bulles']],
];
const ALL_MOTIFS = ['loupe', 'fiches', 'groupe', 'ecran', 'mallette', 'jeu', 'checklist', 'poignee', 'oeil', 'marches', 'piece', 'plan', 'deplacer', 'lit', 'maison', 'marmite', 'duo', 'carte', 'parchemin', 'pile', 'eclair', 'ebauche', 'bulles', 'diapos', 'fenetre'];

export function assignMotifs(titles: (string | undefined)[], used: string[] = []): string[] {
  const taken = new Set(used);
  return titles.map((title, i) => {
    const t = (title ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const hits = RULES.filter(([re]) => re.test(t)).map(([, m]) => m);
    const candidates = [...hits.map((m) => m[0]), ...hits.flatMap((m) => m.slice(1)), ...ALL_MOTIFS.slice(i % ALL_MOTIFS.length), ...ALL_MOTIFS];
    const pick = candidates.find((m) => !taken.has(m)) ?? candidates[0];
    taken.add(pick);
    return pick;
  });
}
