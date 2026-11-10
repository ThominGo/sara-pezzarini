import { ds } from '../utils/preview';
import { t, img } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';

// Page Projets (Figma 414:6898). Classes copiées de Figma.
// Les vignettes sont des emplacements : image + calque Différence + calque Color, comme dans la maquette.
export type ProjectCard = { title: string; href: string; image?: string; difference?: string; color: string; flip?: boolean };

const Arrow = () => (
  <div className="h-[10px] relative shrink-0 w-[11px]">
    <div className="absolute inset-[-4.95%_-9%_-4.95%_0]">
      <img alt="" className="block max-w-none size-full" src="/assets/arrow.svg" />
    </div>
  </div>
);

export const defaultCards: ProjectCard[] = [
  { title: 'Découvrir mes projets', image: '/images/a935537276.webp', href: '/projets', color: '#958a7e', flip: true },
  { title: 'Jeu pour gamifier le quotidien', image: '/images/61c0fecc5b.webp', href: '/projets/exemple', color: '#788d9a' },
  { title: "Site d'aide à l'autonomie pour personnes autistes", image: '/images/1553e744ae.webp', href: '/projets/exemple', difference: '#454545', color: '#181336' },
  { title: "Site d'aide à l'autonomie pour personnes autistes", image: '/images/368c5e286a.webp', href: '/projets/exemple', difference: '#0c0c0c', color: '#957e7e' },
  { title: "Site d'aide à l'autonomie pour personnes autistes", image: '/images/76cd837fbd.webp', href: '/projets/exemple', difference: '#444', color: '#957e8b' },
  { title: "Site d'aide à l'autonomie pour personnes autistes", image: '/images/1fbf0de407.webp', href: '/projets/exemple', difference: '#474747', color: '#8e7e95' },
];

export function Card({ c, first, className = 'justify-self-stretch h-[480px]' }: { c: ProjectCard; first: boolean; className?: string }) {
  return (
    <a href={c.href} className={`${className} bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[8px] relative rounded-[8px] shrink-0`} data-name="Bouton">
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full">
        <div className={`${c.flip ? '-scale-y-100 ' : ''}flex-none rotate-180 size-full`}>
          <div className="relative rounded-[8px] size-full" data-name="image 13">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={c.image ?? '/assets/placeholder.svg'} />
              {c.difference && <div className="absolute inset-0 mix-blend-difference rounded-[8px]" style={{ backgroundColor: c.difference }} />}
              <div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundColor: c.color }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`content-stretch flex ${first ? '' : 'h-[60px] '}items-start justify-between p-[8px] relative shrink-0 w-full`}>
        <p className={`[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance ${first ? 'w-[120px]' : c.title.length > 32 ? 'w-[240px]' : 'w-[172px]'}`} style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          {c.title}
        </p>
        <Arrow />
      </div>
    </a>
  );
}

export default function Projets({ cards = defaultCards }: { cards?: ProjectCard[] }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Projets">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip pb-[120px] pt-[220px] relative shrink-0 w-[1512px]" data-name="text">
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1190px]">
          <div className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[40px] text-black w-[673px] whitespace-pre-wrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            <p className="leading-none mb-0 text-balance" data-sanity={ds("pageProjets", "text_1")}>{t("pageProjets", "text_1", "Mes différents")}</p>
            <p className="leading-none text-balance" data-sanity={ds("pageProjets", "text_2")}>{t("pageProjets", "text_2", "projets")}</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px pr-[122px] relative">
            <div className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[461px]">
              <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageProjets", "text_3")}>{t("pageProjets", "text_3", "Des outils et des accompagnements pensés")}</p>
              <p className="leading-[1.3] text-pretty" data-sanity={ds("pageProjets", "text_4")}>{t("pageProjets", "text_4", "avec et pour les personnes.")}</p>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[1190px]">
          {cards.map((c, i) => <Card key={i} c={c} first={i === 0} />)}
        </div>
      </div>
      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}
