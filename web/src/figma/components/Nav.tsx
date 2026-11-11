// Navigation : classes copiées de Figma (nav, device=desktop / device=mobile). Seuls les liens sont ajoutés.
// Mobile (< 768 px) : bouton « Menu » de la maquette ; le panneau des liens qu'il ouvre n'a pas de maquette (improvisé) :
// liens numérotés, page en cours repérée, carte contact sur un dégradé du site, ouverture en rideau.
import { site } from '../../utils/site';
const link =
  "lien [word-break:break-word] block cursor-pointer font-['Lexend:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] whitespace-nowrap";

const items = [
  { label: 'Mon approche', href: '/mon-approche' },
  { label: 'Pour qui', href: '/pour-qui' },
  { label: 'Projets', href: '/projets' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Mon parcours', href: '/parcours' },
];

const cta =
  'bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch cursor-pointer flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0';
const ctaText =
  "[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-left text-pretty whitespace-nowrap";

export default function Nav() {
  return (
    <div className="fixed content-stretch flex flex-col items-center justify-between left-0 overflow-clip pb-[8px] pt-[16px] px-[40px] rounded-[4px] top-0 w-[1510px] z-50 max-md:p-[16px] max-md:w-[390px] max-md:overflow-visible" data-name="nav">
      <div className="bg-[var(--grey,#f2f2f2)] border border-[rgba(0,0,0,0.2)] border-solid content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[1432px] max-md:w-[358px] max-md:p-[4px] max-md:pl-[8px]">
        <a href="/" className={`${link} max-md:text-[16px]`}>
          <p className="leading-[1.3] text-pretty">Sara Pezzarini</p>
        </a>
        <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0 max-md:hidden" data-name="Liens de navigation">
          {items.map((i) => (
            <a key={i.href} href={i.href} className={link}>
              <p className="leading-[1.3] text-pretty">{i.label}</p>
            </a>
          ))}
          <a href="/contact" className={cta} data-name="Cta">
            <p className={ctaText}>Me contacter</p>
          </a>
        </div>
        {/* Mobile : bouton Menu (device=mobile, 522:9191) */}
        <button type="button" className={`${cta} gap-[8px] md:hidden max-md:px-[16px]`} data-name="Cta" data-menu-toggle aria-expanded="false" aria-controls="menu-mobile">
          <span className={`${ctaText} max-md:text-[16px] menu-label`} data-menu-label>
            <span>Menu</span>
            <span aria-hidden>Fermer</span>
          </span>
          <span className="menu-icon content-stretch flex flex-col gap-[4px] h-[40px] items-center justify-center relative shrink-0 w-[16px]" aria-hidden>
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
          </span>
        </button>
      </div>
      {/* Mobile : panneau des liens (sans maquette) */}
      <div id="menu-mobile" className="menu-panel md:hidden bg-[var(--grey,#f2f2f2)] border border-[rgba(0,0,0,0.2)] border-solid flex flex-col mt-[8px] p-[8px] relative rounded-[8px] shrink-0 w-[358px]" data-menu-panel aria-hidden="true">
        <nav className="flex flex-col px-[8px]">
          {items.map((i, n) => (
            <a key={i.href} href={i.href} className="menu-link" style={{ '--i': n } as any}>
              <span className="menu-num">{String(n + 1).padStart(2, '0')}</span>
              <span className="menu-lbl" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>{i.label}</span>
              <img alt="" className="menu-arrow" src="/assets/arrow.svg" />
            </a>
          ))}
        </nav>
        <div className="menu-card" style={{ '--i': items.length } as any}>
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px] overflow-hidden">
            <img alt="" className="absolute inset-0 max-w-none size-full object-cover" src="/gradients/shape-push.png" />
            <div className="absolute inset-0 mix-blend-color" style={{ backgroundImage: 'linear-gradient(132deg, rgb(110, 31, 79) 0%, rgb(217, 63, 107) 83.333%)' }} />
            <div className="absolute bg-[rgba(255,92,138,0.45)] inset-0 mix-blend-soft-light" />
          </div>
          <p className="menu-card-title" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Un projet, une question ?</p>
          <div className="menu-card-row">
            <a href="/contact" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Cta">
              <p className="font-['Lexend:Regular'] leading-[1.3] text-[16px] text-[#090f0c] whitespace-nowrap">Me contacter</p>
            </a>
            <div className="menu-card-links">
              <a href={`mailto:site.settings.email || "sara.pezzarini@gmail.com"}`}>E-mail</a>
              <a href={`tel:${(site.settings.phone || '06 10 05 71 09').replace(/\s/g, '')}`}>{site.settings.phone || '06 10 05 71 09'}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
