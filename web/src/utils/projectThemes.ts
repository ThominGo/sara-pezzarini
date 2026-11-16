// Visuel par défaut d'un projet sans image de couverture : dégradé de couleur (sans illustration).
// Une couleur par projet, la même partout (vignette, haut de page, « autres projets »).
export type ThemeKey = 'repertoire' | 'sensibilisation' | 'plan3d' | 'cuisine' | 'quete' | 'ressources';

// Cinq couleurs par projet : ombre, deux tons moyens, clair, lumière. Le dégradé les enchaîne en douceur.
export type Colors = [string, string, string, string, string];
export type Theme = { key: ThemeKey; label: string; colors: Colors };

export const THEMES: Record<ThemeKey, Theme> = {
  repertoire: { key: 'repertoire', label: 'Framboise', colors: ['#4A1342', '#B5245F', '#FF5A5F', '#FF9A6B', '#FFD2B0'] },
  sensibilisation: { key: 'sensibilisation', label: 'Ambre', colors: ['#7A2410', '#D9501E', '#F27A24', '#FFAA45', '#FFE0A0'] },
  plan3d: { key: 'plan3d', label: 'Prune', colors: ['#25104F', '#6A2C91', '#C03F9E', '#FF6F91', '#FFB3A7'] },
  cuisine: { key: 'cuisine', label: 'Terracotta', colors: ['#521810', '#B5381F', '#EF6A3D', '#FFA46B', '#FFD9B8'] },
  quete: { key: 'quete', label: 'Rose pêche', colors: ['#6B1745', '#D9467F', '#FF7E8B', '#FFB08A', '#FFE0C2'] },
  ressources: { key: 'ressources', label: 'Vieux rose', colors: ['#4F1D31', '#9A3452', '#D0647E', '#F0958F', '#FFD9CB'] },
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
