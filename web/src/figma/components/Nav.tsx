// Navigation : classes copiées de Figma (nav, Property 1=Variant2). Seuls les liens sont ajoutés.
const link =
  "lien [word-break:break-word] block cursor-pointer font-['Lexend:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] whitespace-nowrap";

const items = [
  { label: 'Mon approche', href: '/mon-approche' },
  { label: 'Pour qui', href: '/pour-qui' },
  { label: 'Projets', href: '/projets' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Mon parcours', href: '/parcours' },
];

export default function Nav() {
  return (
    <div className="fixed content-stretch flex items-center justify-between left-0 overflow-clip pb-[8px] pt-[16px] px-[40px] rounded-[4px] top-0 w-[1510px] z-50" data-name="nav">
      <div className="bg-[var(--grey,#f2f2f2)] border border-[rgba(0,0,0,0.2)] border-solid content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[1432px]">
        <a href="/" className={link}>
          <p className="leading-[1.3] text-pretty">Sara Pezzarini</p>
        </a>
        <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0" data-name="Liens de navigation">
          {items.map((i) => (
            <a key={i.href} href={i.href} className={link}>
              <p className="leading-[1.3] text-pretty">{i.label}</p>
            </a>
          ))}
          <a href="/contact" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch cursor-pointer flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-left text-pretty whitespace-nowrap">
              Me contacter
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
