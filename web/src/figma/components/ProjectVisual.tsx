import { BookOpenCheck, Presentation, Box, CookingPot, Gamepad2, LibraryBig } from 'lucide-react';
import { themeFor, themeGradient } from '../../utils/projectThemes';

const ICONS: Record<string, any> = { BookOpenCheck, Presentation, Box, CookingPot, Gamepad2, LibraryBig };

// Visuel d'un projet sans image : dégradé de sa couleur, illustration, petite icône en haut à gauche.
// Remplit son parent (qui doit être en position relative et arrondi).
export default function ProjectVisual({ slug, theme, size = 'lg' }: { slug?: string; theme?: string; size?: 'lg' | 'sm' | 'bare' }) {
  const t = themeFor(slug, theme);
  const Icon = ICONS[t.icon];
  const sm = size === 'sm';
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ background: themeGradient(t.colors), borderRadius: 'inherit' }}>
      {size !== 'bare' && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 m-auto max-w-none object-contain" style={{ width: sm ? '78%' : '72%', height: sm ? '78%' : '72%' }} src={t.illustration} />}
      {Icon && size !== 'bare' && (
        <span className="absolute flex items-center justify-center rounded-[6px] bg-white/80 text-[#090f0c]" style={{ left: sm ? 6 : 16, top: sm ? 6 : 16, width: sm ? 22 : 36, height: sm ? 22 : 36 }}>
          <Icon size={sm ? 13 : 20} strokeWidth={1.75} />
        </span>
      )}
    </div>
  );
}
