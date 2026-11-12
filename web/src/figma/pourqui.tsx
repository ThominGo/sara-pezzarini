import { ds } from '../utils/preview';
import { t, img, srcset } from '../utils/content';
import { site } from '../utils/site';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';

type CtaProps = {
  href?: string;
  className?: string;
  label?: string;
  state?: "default";
  variants?: "primary" | "secondary";
};

function Cta({ className, href, label = "button label", state = "default", variants = "primary" }: CtaProps) {
  const isSecondary = variants === "secondary";
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} data-name="Cta" className={className || `border border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] ${isSecondary ? "bg-[var(--white,white)] border-[#c2c2c2]" : "bg-[var(--black,#090f0c)] border-[#3a3f3d]"}`} id={isSecondary ? "node-133_3436" : "node-133_3437"}>
      {variants === "primary" && (
        <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="133:3431">
          {label}
        </p>
      )}
      {isSecondary && (
        <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap" data-node-id="133:3433">
          {label}
        </p>
      )}
    </Tag>
  );
}


export default function PourQui() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="414:6774" data-name="Pour qui">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-[1512px]" data-node-id="414:6775" data-name="hero" data-hero>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full" data-node-id="I414:6775;146:4271">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-node-id="I414:6775;146:4272">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img alt="" fetchPriority="high" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-pourqui.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(129.8873323028124deg, rgb(214, 60, 92) 0%, rgb(239, 125, 79) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-[41px]" data-node-id="I414:6775;146:4273">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[794px]" data-node-id="I414:6775;146:4274">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I414:6775;146:4275">
                <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-node-id="I414:6775;146:4277">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:6775;146:4278" data-sanity={ds("pagePourQui", "hero_1")}>{t("pagePourQui", "hero_1", "Pour qui")}</p>
                </div>
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-balance w-[min-content]" data-node-id="I414:6775;146:4279" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pagePourQui", "hero_2")}>{t("pagePourQui", "hero_2", "L’ergothérapie au service de l’inclusion, au-delà du soin")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6775;146:4280">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6775;146:4281">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6775;146:4282" data-sanity={ds("pagePourQui", "hero_3")}>{t("pagePourQui", "hero_3", "J’accompagne les organisations, les personnes et leurs proches pour comprendre les obstacles du quotidien et co-construire des solutions adaptées à leurs activités et à leurs environnements.")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] flex h-[331px] items-center justify-center right-[40px] w-[248px]" data-node-id="I414:6775;146:4288">
            <div className="flex-none">
              <div className="h-[331px] relative rounded-[8px] w-[248px]" data-name="image 13">
                <img alt="Séance d’ergothérapie" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pagePourQui", "hero_image_1")} src={img("pagePourQui", "hero_image_1", "/images/3e60ebbcd7.webp")} srcSet={srcset(img("pagePourQui", "hero_image_1", "/images/3e60ebbcd7.webp"))} sizes="(max-width: 767px) 260px, 330px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="structures" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6776" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6777">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6778">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6779">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6780">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6781" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pagePourQui", "image_text_1")}>{t("pagePourQui", "image_text_1", "Structures médico-sociales")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6782">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6783">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6784" data-sanity={ds("pagePourQui", "image_text_2")}>{t("pagePourQui", "image_text_2", "Directeurs, chefs de service et équipes : je vous propose de réfléchir ensemble aux activités et aux environnements des personnes accompagnées, notamment des adultes et adolescents avec TSA ou handicap psychique.")}</p>
                  <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6786" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative w-full" data-node-id="414:6787" data-name="bg">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pagePourQui", "image_text_image_1")} src={img("pagePourQui", "image_text_image_1", "/images/1cb515894f.webp")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6788">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6789" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6790">
                  <div className="relative shrink-0 size-[30px]" data-node-id="414:6791" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_image_2")} src={img("pagePourQui", "image_text_image_2", "/assets/icons/book-check.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6794">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6795" data-sanity={ds("pagePourQui", "image_text_3")}>{t("pagePourQui", "image_text_3", "Des bilans pour comprendre les besoins au quotidien.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6796" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6797">
                  <div className="relative shrink-0 size-[30px]" data-node-id="414:6798" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_image_3")} src={img("pagePourQui", "image_text_image_3", "/assets/icons/arrow-right-left.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6803">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6804" data-sanity={ds("pagePourQui", "image_text_4")}>{t("pagePourQui", "image_text_4", "Les transitions entre activités sont difficiles à vivre.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6805" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6806">
                  <div className="relative shrink-0 size-[30px]" data-node-id="414:6807" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_image_4")} src={img("pagePourQui", "image_text_image_4", "/assets/icons/book-search.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6812">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6813" data-sanity={ds("pagePourQui", "image_text_5")}>{t("pagePourQui", "image_text_5", "Des sensibilisations et formations pour les équipes.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="entreprises" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6814" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6815" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative w-full" data-node-id="414:6816" data-name="bg">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pagePourQui", "image_text_image_5")} src={img("pagePourQui", "image_text_image_5", "/images/9e02fa80b6.webp")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6817">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6818" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6819">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_1")} src={img("pagePourQui", "image_text_icon_1", "/assets/icons/armchair.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6820">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6821" data-sanity={ds("pagePourQui", "image_text_6")}>{t("pagePourQui", "image_text_6", "Des conseils pour adapter les espaces et les activités.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6822" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6823">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_2")} src={img("pagePourQui", "image_text_icon_2", "/assets/icons/shield-check.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6824">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6825" data-sanity={ds("pagePourQui", "image_text_7")}>{t("pagePourQui", "image_text_7", "Des ateliers et programmes de prévention adaptés.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6826" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6827">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_3")} src={img("pagePourQui", "image_text_icon_3", "/assets/icons/megaphone.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6828">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6829" data-sanity={ds("pagePourQui", "image_text_8")}>{t("pagePourQui", "image_text_8", "Des sensibilisations pour construire des pratiques inclusives.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6830">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6831">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6832">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6833">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6834" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pagePourQui", "image_text_9")}>{t("pagePourQui", "image_text_9", "Entreprises et collectivités")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6835">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6836">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6837" data-sanity={ds("pagePourQui", "image_text_10")}>{t("pagePourQui", "image_text_10", "RH, responsables, élus et équipes de CCAS : l’inclusion se pense aussi au travail et dans les services de proximité. Je vous accompagne pour repérer les obstacles à la participation et envisager des adaptations concrètes.")}</p>
                  <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ecoles" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6839" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6840">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6841">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6842">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6843">
                <div className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] w-[465px] whitespace-pre-wrap" data-node-id="414:6844" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  <p className="leading-none mb-0 text-balance" data-sanity={ds("pagePourQui", "image_text_11")}>{t("pagePourQui", "image_text_11", "Écoles et")}</p>
                  <p className="leading-none text-balance" data-sanity={ds("pagePourQui", "image_text_12")}>{t("pagePourQui", "image_text_12", "lieux culturels")}</p>
                </div>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6845">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6846">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6847" data-sanity={ds("pagePourQui", "image_text_13")}>{t("pagePourQui", "image_text_13", "Équipes éducatives, bibliothèques, musées et lieux culturels : je vous propose de penser l’accès aux apprentissages, aux loisirs et à la culture à partir des besoins des publics et des réalités de vos espaces.")}</p>
                  <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6849" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative w-full" data-node-id="414:6850" data-name="bg">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pagePourQui", "image_text_image_6")} src={img("pagePourQui", "image_text_image_6", "/images/4a0b9d7ee1.webp")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6851">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6852" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6853">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_4")} src={img("pagePourQui", "image_text_icon_4", "/assets/icons/layout-template.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6854">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6855" data-sanity={ds("pagePourQui", "image_text_14")}>{t("pagePourQui", "image_text_14", "Des conseils sur l’organisation des espaces et des activités.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6856" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6857">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_5")} src={img("pagePourQui", "image_text_icon_5", "/assets/icons/signpost.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6858">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6859" data-sanity={ds("pagePourQui", "image_text_15")}>{t("pagePourQui", "image_text_15", "Des supports adaptés pour se repérer et participer.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6860" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6861">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_6")} src={img("pagePourQui", "image_text_icon_6", "/assets/icons/puzzle.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6862">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6863" data-sanity={ds("pagePourQui", "image_text_16")}>{t("pagePourQui", "image_text_16", "Des sensibilisations et des projets co-construits avec l’équipe.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personnes" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6864" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6865" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative w-full" data-node-id="414:6866" data-name="bg">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pagePourQui", "image_text_image_7")} src={img("pagePourQui", "image_text_image_7", "/images/3045a0aeb8.webp")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6867">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6868" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6869">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_7")} src={img("pagePourQui", "image_text_icon_7", "/assets/icons/clipboard-list.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6870">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6871" data-sanity={ds("pagePourQui", "image_text_17")}>{t("pagePourQui", "image_text_17", "Un bilan centré sur vos activités, vos besoins et vos choix.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6872" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6873">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_8")} src={img("pagePourQui", "image_text_icon_8", "/assets/icons/route.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6874">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6875" data-sanity={ds("pagePourQui", "image_text_18")}>{t("pagePourQui", "image_text_18", "Un suivi, des stratégies et des outils sur mesure.")}</p>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="414:6876" data-name="Bouton">
                <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[2px] shrink-0 size-[80px]" data-node-id="414:6877">
                  <div className="relative shrink-0 size-[30px]" data-name="Frame">
                    <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pagePourQui", "image_text_icon_9")} src={img("pagePourQui", "image_text_icon_9", "/assets/icons/house-heart.svg")} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative self-stretch" data-node-id="414:6878">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6879" data-sanity={ds("pagePourQui", "image_text_19")}>{t("pagePourQui", "image_text_19", "Des adaptations du quotidien, construites avec l’entourage.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6880">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6881">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6882">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6883">
                <div className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] w-[465px] whitespace-pre-wrap" data-node-id="414:6884" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  <p className="leading-none mb-0 text-balance" data-sanity={ds("pagePourQui", "image_text_20")}>{t("pagePourQui", "image_text_20", "Personnes")}</p>
                  <p className="leading-none text-balance" data-sanity={ds("pagePourQui", "image_text_21")}>{t("pagePourQui", "image_text_21", "et familles")}</p>
                </div>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6885">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6886">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6887" data-sanity={ds("pagePourQui", "image_text_22")}>{t("pagePourQui", "image_text_22", "Adultes, adolescents et proches, notamment concernés par un TSA ou un handicap psychique : je pars de vos priorités et de vos habitudes pour explorer, avec vous, ce qui facilite ou freine les activités qui comptent dans votre vie.")}</p>
                  <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}