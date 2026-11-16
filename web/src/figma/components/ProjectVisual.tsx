import { themeFor, themeGradient } from '../../utils/projectThemes';

// Visuel d'un projet sans image : dégradé de sa couleur et illustration vectorielle (SVG).
// `motif` : une illustration précise (étapes, blocs) ; sinon celle du projet.
// `size` : 'sm' pour les miniatures, 'bare' pour le dégradé seul.
// Remplit son parent (en position relative et arrondi).
export default function ProjectVisual({ slug, theme, motif, variant = 0, size = 'lg' }: { slug?: string; theme?: string; motif?: string; variant?: number; size?: 'lg' | 'sm' | 'bare' }) {
  const t = themeFor(slug, theme);
  const sm = size === 'sm';
  const src = motif ? `/illustrations/motif-${motif}.svg` : t.illustration;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ background: themeGradient(t.colors, variant), borderRadius: 'inherit' }}>
      {size !== 'bare' && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 m-auto max-w-none object-contain" style={{ width: sm ? '78%' : '72%', height: sm ? '78%' : '72%' }} src={src} />}
    </div>
  );
}
