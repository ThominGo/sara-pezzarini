import { t, img } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';

// Page Parcours (Figma 414:6939). Classes copiées de Figma.
const FV = { fontVariationSettings: '"opsz" 14, "wdth" 100' };
const black70 = 'text-[color:var(--black-70\\%,rgba(9,15,12,0.7))]';

const timeline = () => [
  { title: t("pageParcours", "experiences_1_titre", "Stage"), text: t("pageParcours", "experiences_1_texte", "Bilans, suivis, stratégies sur mesure pour soutenir l’autonomie dans les activités du quotidien.") },
  { title: t("pageParcours", "experiences_2_titre", "Service de psychiatrie du GHNE"), text: t("pageParcours", "experiences_2_texte", "Ateliers, programme de prévention, outils adaptés : des projets construits au plus près des besoins.") },
  { title: t("pageParcours", "experiences_3_titre", "Les amis de l’atelier"), text: t("pageParcours", "experiences_3_texte", "Formations, conseils, co-construction pour faire évoluer ensemble les pratiques et les environnements.") },
  { title: t("pageParcours", "experiences_4_titre", "Libérale"), text: t("pageParcours", "experiences_4_texte", "Formations, conseils, co-construction pour faire évoluer ensemble les pratiques et les environnements.") },
];

const slides = () => [
  { year: t("pageParcours", "carrousel_1_annee", "2019"), title: t("pageParcours", "carrousel_1_titre", "Stages"), sub: t("pageParcours", "carrousel_1_texte", "SAMSAH TC 40") },
  { year: t("pageParcours", "carrousel_2_annee", "2020"), title: t("pageParcours", "carrousel_2_titre", "EHPAD"), sub: t("pageParcours", "carrousel_2_texte", "Jeanne Mauléon") },
  { year: t("pageParcours", "carrousel_3_annee", "2020 ▸ 2023"), title: t("pageParcours", "carrousel_3_titre", "Psychiatrie GHNE"), sub: t("pageParcours", "carrousel_3_texte", "Service de psychiatrie du GHNE") },
  { year: t("pageParcours", "carrousel_4_annee", "2023 ▸ 2026"), title: t("pageParcours", "carrousel_4_titre", "SAMSAH spécialisé TSA"), sub: t("pageParcours", "carrousel_4_texte", "SAMSAH spécialisé TSA") },
];

function Item({ t, row = false }: { t: { title: string; text: string }; row?: boolean }) {
  return (
    <div className={row ? 'content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative' : 'content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full'}>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img("pageParcours", "contenu_image_1", "/assets/placeholder.svg")} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full">
        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" style={FV}>{t.title}</p>
        <p className={`font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] ${black70} text-pretty w-full`}>{t.text}</p>
      </div>
    </div>
  );
}

const Year = ({ y, top }: { y: string; top: number }) => (
  <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[-24px] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right w-[226px]" style={{ ...FV, top }}>{y}</p>
);
const Sep = () => <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" />;

export default function Parcours() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Parcours">
      {/* hero */}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-[1512px]" data-name="hero">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-parcours.png" />
                  <div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: 'linear-gradient(129.8873323028124deg, rgb(224, 106, 134) 0%, rgb(194, 68, 122) 83.333%)' }} />
                  <div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-[41px]">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[794px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap">{t("pageParcours", "hero_1", "Mon parcours")}</p>
                </div>
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-balance w-[min-content]" style={FV}>{t("pageParcours", "hero_2", "Explication de ton parcours")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]">{t("pageParcours", "hero_3", "Ergothérapeute, je place l’inclusion au cœur de ma pratique, au-delà du soin. J’accompagne les personnes et les organisations, notamment autour du TSA et du handicap psychique.")}</p>
                  <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-name="Actions principales">
                    <a href="/mon-approche" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap">{t("pageParcours", "hero_4", "Comment ça se passe ?")}</p>
                    </a>
                    <a href="/contact" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap">{t("pageParcours", "hero_5", "Une question ?")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] flex h-[331px] items-center justify-center right-[40px] w-[248px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[331px] relative rounded-[8px] w-[248px]" data-name="image 13">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img("pageParcours", "hero_image_1", "/assets/placeholder.svg")} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vertical-card : expériences */}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" style={FV}>Trois façons de travailler ensemble</p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <Item t={timeline()[0]} row />
              <Year y={t("pageParcours", "annee_1", "2019")} top={0} />
              <Year y={t("pageParcours", "annee_2", "2020")} top={637} />
              <Year y={t("pageParcours", "annee_3", "2023")} top={1274} />
            </div>
            <Sep />
            <Item t={timeline()[1]} />
            <Sep />
            <Item t={timeline()[2]} />
            <Item t={timeline()[3]} />
          </div>
          <div className="absolute bottom-0 h-[2864px] left-[-123px] pointer-events-none top-[-400px]">
            <div className="content-stretch flex items-center justify-center pb-[112px] pointer-events-auto pt-[400px] sticky top-0 w-[561px]">
              <div className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] min-w-px relative text-[40px] text-[color:var(--black,#090f0c)]" style={FV}>
                <p className="leading-none mb-0 text-balance">{t("pageParcours", "vertical_card_1", "Expériences")}</p>
                <p className="leading-none text-balance">{t("pageParcours", "vertical_card_2", "professionnelles")}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[calc(33.33%+240px)] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-[2007px] w-[226px]" style={FV}>{t("pageParcours", "vertical_card_3", "Maintenant")}</p>
      </div>

      {/* text : formation et mémoire */}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" style={FV}>{t("pageParcours", "text_1", "Blabla Formation + cmémoire")}</p>
          <div className="content-stretch flex flex-col items-end justify-center pr-[122px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <p className={`[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] ${black70} text-pretty w-[461px]`}>{t("pageParcours", "text_2", "Mushrooms chicken personal onions thin platter spinach Chicago parmesan. Lasagna pineapple pie hand pesto deep. Thin sautéed Hawaiian meat sauce white tomatoes style. Mayo bbq pesto Aussie pie green meatball.")}</p>
              <div className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap">{t("pageParcours", "text_3", "Télécharger mon mémoire")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-name="slider">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1190px]">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[440px]" style={FV}>{t("pageParcours", "slider_1", "Ils ont travaillé avec moi")}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center opacity-40 overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap">{t("pageParcours", "slider_2", "Précédent")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap">{t("pageParcours", "slider_3", "Suivant")}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            {slides().map((s) => (
              <div key={s.year} className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-name="image 13">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img("pageParcours", "slider_image_1", "/assets/placeholder.svg")} />
                    </div>
                    <div className="bg-[var(--white,white)] col-1 content-stretch flex items-center justify-center ml-[8px] mt-[8px] p-[8px] relative rounded-[4px] row-1">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap">{s.year}</p>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full">
                    <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" style={FV}>{s.title}</p>
                    <p className={`font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] ${black70} text-pretty w-[min-content]`}>{s.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}
