// Navigation : classes copiées de Figma (nav, device=desktop / device=mobile). Seuls les liens sont ajoutés.
// Mobile (< 768 px) : bouton « Menu » de la maquette ; le panneau des liens qu'il ouvre n'a pas de maquette (improvisé).
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
    <div className="fixed content-stretch flex flex-col items-center justify-between left-0 overflow-clip pb-[8px] pt-[16px] px-[40px] rounded-[4px] top-0 w-[1510px] z-50 max-md:p-[8px] max-md:w-[390px]" data-name="nav">
      <div className="bg-[var(--grey,#f2f2f2)] border border-[rgba(0,0,0,0.2)] border-solid content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[1432px] max-md:w-[374px]">
        <a href="/" className={link}>
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
        <button type="button" className={`${cta} gap-[8px] md:hidden`} data-name="Cta" data-menu-toggle aria-expanded="false" aria-controls="menu-mobile">
          <p className={ctaText} data-menu-label>Menu</p>
          <span className="menu-icon content-stretch flex flex-col gap-[4px] h-[40px] items-center justify-center relative shrink-0 w-[16px]" aria-hidden>
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
            <span className="bg-[var(--grey,#f2f2f2)] block h-px shrink-0 w-full" />
          </span>
        </button>
      </div>
      {/* Mobile : panneau des liens (sans maquette) */}
      <div id="menu-mobile" className="menu-panel bg-[var(--grey,#f2f2f2)] border border-[rgba(0,0,0,0.2)] border-solid flex-col gap-[24px] hidden mt-[8px] p-[16px] relative rounded-[8px] shrink-0 w-[374px]" data-menu-panel>
        <div className="flex flex-col gap-[16px]">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="lien [word-break:break-word] block font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] text-[24px] text-[color:var(--black,#090f0c)]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
              {i.label}
            </a>
          ))}
        </div>
        <a href="/contact" className={`${cta} w-full`} data-name="Cta">
          <p className={ctaText}>Me contacter</p>
        </a>
      </div>
    </div>
  );
}
