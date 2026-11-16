// Visuel par défaut d'un projet sans image de couverture : dégradé de couleur, illustration et petite icône (Lucide).
// Une couleur par projet, la même partout (vignette, haut de page, « autres projets »).
export type ThemeKey = 'repertoire' | 'sensibilisation' | 'plan3d' | 'cuisine' | 'quete' | 'ressources';

export type Theme = { key: ThemeKey; label: string; colors: [string, string, string]; icon: string; illustration: string };

export const THEMES: Record<ThemeKey, Theme> = {
  repertoire: { key: 'repertoire', label: 'Framboise', colors: ['#F26D8D', '#E8453C', '#A81E4A'], icon: 'BookOpenCheck', illustration: '/illustrations/projet-repertoire.svg' },
  sensibilisation: { key: 'sensibilisation', label: 'Ambre', colors: ['#F7B267', '#EE8A2E', '#C4481F'], icon: 'Presentation', illustration: '/illustrations/projet-sensibilisation.svg' },
  plan3d: { key: 'plan3d', label: 'Prune', colors: ['#E5578A', '#9B3A8C', '#5A2370'], icon: 'Box', illustration: '/illustrations/projet-plan3d.svg' },
  cuisine: { key: 'cuisine', label: 'Terracotta', colors: ['#F28B5B', '#D9482F', '#8F2A22'], icon: 'CookingPot', illustration: '/illustrations/projet-cuisine.svg' },
  quete: { key: 'quete', label: 'Rose pêche', colors: ['#F6A28A', '#E0457A', '#B02E5E'], icon: 'Gamepad2', illustration: '/illustrations/projet-quete.svg' },
  ressources: { key: 'ressources', label: 'Vieux rose', colors: ['#F5A6A0', '#E27189', '#A8404F'], icon: 'LibraryBig', illustration: '/illustrations/projet-ressources.svg' },
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

export const themeGradient = ([a, b, c]: [string, string, string]) =>
  `radial-gradient(120% 90% at 12% 8%, ${a}, transparent 62%), radial-gradient(110% 100% at 92% 96%, ${b}, transparent 58%), ${c}`;
