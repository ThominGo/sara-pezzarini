import { themeFor, themeGradient } from '../../utils/projectThemes';

// Visuel d'un projet sans photo : simple dégradé de la couleur du projet.
// Remplit son parent (en position relative et arrondi). `variant` décale l'angle du dégradé d'une étape à l'autre.
export default function ProjectVisual({ slug, theme, variant = 0 }: { slug?: string; theme?: string; variant?: number; size?: string }) {
  const t = themeFor(slug, theme);
  return <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ background: themeGradient(t.colors, variant), borderRadius: 'inherit' }} />;
}
