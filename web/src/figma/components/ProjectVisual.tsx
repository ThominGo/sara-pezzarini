import { BookOpenCheck, Presentation, Box, CookingPot, Gamepad2, LibraryBig } from 'lucide-react';
import { themeFor, themeGradient } from '../../utils/projectThemes';

const ICONS: Record<string, any> = { BookOpenCheck, Presentation, Box, CookingPot, Gamepad2, LibraryBig };

// Visuel d'un projet sans image : dégradé de sa couleur et illustration vectorielle (SVG).
// `motif` : une illustration précise (étapes, blocs) ; sinon celle du projet.
// `icon` : petite icône Lucide en haut à gauche (vignettes seulement). `size` : 'sm' pour les miniatures, 'bare' sans illustration.
// Remplit son parent (en position relative et arrondi).
export default function ProjectVisual({ slug, theme, motif, variant = 0, icon = false, size = 'lg' }: { slug?: string; theme?: string; motif?: string; variant?: number; icon?: boolean; size?: 'lg' | 'sm' | 'bare' }) {
  const t = themeFor(slug, theme);
  const Icon = icon ? ICONS[t.icon] : null;
  const sm = size === 'sm';
  const src = motif ? `/illustrations/motif-${motif}.svg` : t.illustration;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ background: themeGradient(t.colors, variant), borderRadius: 'inherit' }}>
      {size !== 'bare' && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 m-auto max-w-none object-contain" style={{ width: sm ? '78%' : '72%', height: sm ? '78%' : '72%' }} src={src} />}
      {Icon && size !== 'bare' && (
        <span className="absolute flex items-center justify-center rounded-[6px] bg-white/80 text-[#090f0c]" style={{ left: sm ? 6 : 16, top: sm ? 6 : 16, width: sm ? 22 : 36, height: sm ? 22 : 36 }}>
          <Icon size={sm ? 13 : 20} strokeWidth={1.75} />
        </span>
      )}
    </div>
  );
}
