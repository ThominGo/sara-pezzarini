import { ds } from '../utils/preview';
import { t, img } from '../utils/content';
import { site } from '../utils/site';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';
import Faq from './components/Faq';


type CtaProps = {
  href?: string;
  className?: string;
  label?: string;
  state?: "default";
  variants?: "primary";
};

function Cta({ className, href, label = "button label", state = "default", variants = "primary" }: CtaProps) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} data-name="Cta" className={className || "bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px]"} data-node-id="133:3437">
      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="133:3431">
        {label}
      </p>
    </Tag>
  );
}


export default function TarifsEtFinancement() {
  return (
    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-start relative size-full" data-node-id="414:6355" data-name="Tarifs et financement">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-full" data-node-id="414:6356" data-name="Tarifs" data-hero>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full" data-node-id="I414:6356;146:4271">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-node-id="I414:6356;146:4272">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-tarifs.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(129.8873323028124deg, rgb(232, 145, 58) 0%, rgb(210, 80, 46) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-[41px]" data-node-id="I414:6356;146:4273">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[794px]" data-node-id="I414:6356;146:4274">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I414:6356;146:4275">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-balance w-[min-content]" data-node-id="I414:6356;146:4279" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "tarifs_1")}>{t("pageTarifs", "tarifs_1", "Tarifs et financement")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6356;146:4280">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6356;146:4281">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6356;146:4282" data-sanity={ds("pageTarifs", "tarifs_2")}>{t("pageTarifs", "tarifs_2", "Des tarifs clairs pour les personnes et les familles, des formats sur mesure pour les organisations.")}</p>
                  <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="I414:6356;146:4283" data-name="Actions principales">
                    <a href="#personnes" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6356;148:4594" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="I414:6356;148:4594;133:3431" data-sanity={ds("pageTarifs", "tarifs_3")}>{t("pageTarifs", "tarifs_3", "Je suis une personne")}</p>
                    </a>
                    <a href="#organisations" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6356;148:4597" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:6356;148:4597;133:3433" data-sanity={ds("pageTarifs", "tarifs_4")}>{t("pageTarifs", "tarifs_4", "Je suis une organisation")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] flex h-[331px] items-center justify-center right-[40px] w-[248px]" data-node-id="I414:6356;146:4288">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[331px] relative rounded-[8px] w-[248px]" data-name="image 13">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageTarifs", "tarifs_image_1")} src={img("pageTarifs", "tarifs_image_1", "/images/153b127964.webp")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personnes" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-[1512px]" data-node-id="414:6357" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6358">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6359">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6360">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6361" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_1")}>{t("pageTarifs", "image_text_1", "Pour les personnes et les familles")}</p>
            </div>
            <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6362">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative" data-node-id="414:6363">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6364">
                  <div className="border-[#ccc] border-b border-solid content-stretch flex items-baseline justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6365" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6366">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6367" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_2")}>{t("pageTarifs", "image_text_2", "Bilan d'ergothérapie")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6368" data-sanity={ds("pageTarifs", "image_text_3")}>{t("pageTarifs", "image_text_3", "Entretien, évaluation, compte rendu écrit")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[81px]" data-node-id="414:6369" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_4")}>{t("pageTarifs", "image_text_4", "180 €")}</p>
                  </div>
                  <div className="border-[#ccc] border-b border-solid content-stretch flex items-baseline justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6370" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6371">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6372" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_5")}>{t("pageTarifs", "image_text_5", "Séance d'accompagnement au cabinet")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6373" data-sanity={ds("pageTarifs", "image_text_6")}>{t("pageTarifs", "image_text_6", "1 h au cabinet")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[81px]" data-node-id="414:6374" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_7")}>{t("pageTarifs", "image_text_7", "50 €")}</p>
                  </div>
                  <div className="border-[#ccc] border-b border-solid content-stretch flex items-baseline justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6375" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6376">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6377" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_8")}>{t("pageTarifs", "image_text_8", "Séance à domicile ou sur le lieu de vie")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6378" data-sanity={ds("pageTarifs", "image_text_9")}>{t("pageTarifs", "image_text_9", "1 h dans votre environnement")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[81px]" data-node-id="414:6379" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_10")}>{t("pageTarifs", "image_text_10", "60 €")}</p>
                  </div>
                  <div className="border-[#ccc] border-b border-solid content-stretch flex items-baseline justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6380" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6381">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6382" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_11")}>{t("pageTarifs", "image_text_11", "Séance en visio")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6383" data-sanity={ds("pageTarifs", "image_text_12")}>{t("pageTarifs", "image_text_12", "1 h à distance")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[81px]" data-node-id="414:6384" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_13")}>{t("pageTarifs", "image_text_13", "45 €")}</p>
                  </div>
                  <div className="content-stretch flex items-baseline justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6385" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6386">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6387" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_14")}>{t("pageTarifs", "image_text_14", "Frais de déplacement au-delà de 15 km")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6388" data-sanity={ds("pageTarifs", "image_text_15")}>{t("pageTarifs", "image_text_15", "Tarif par kilomètre au-delà de 15 km")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[81px]" data-node-id="414:6389" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_16")}>{t("pageTarifs", "image_text_16", "0,60 €/km")}</p>
                  </div>
                </div>
                <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6391" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:6392" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageTarifs", "image_text_image_1")} src={img("pageTarifs", "image_text_image_1", "/images/3045a0aeb8.webp")} />
          </div>
        </div>
      </div>
      <div id="organisations" className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-[1512px]" data-node-id="414:6393" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6394" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:6395" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageTarifs", "image_text_image_2")} src={img("pageTarifs", "image_text_image_2", "/images/9e02fa80b6.webp")} />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6396">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6397">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6398">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6399" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_17")}>{t("pageTarifs", "image_text_17", "Pour les organisations")}</p>
            </div>
            <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6400">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative" data-node-id="414:6401">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="414:6402" data-sanity={ds("pageTarifs", "image_text_18")}>{t("pageTarifs", "image_text_18", "Structures médico-sociales, entreprises, collectivités, écoles et lieux culturels : chaque projet est différent, je vous propose un devis adapté.")}</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6403">
                  <div className="border-[#ccc] border-b border-solid content-stretch flex gap-[24px] items-baseline overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6404" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6405">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6406" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_19")}>{t("pageTarifs", "image_text_19", "Vacations")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6407" data-sanity={ds("pageTarifs", "image_text_20")}>{t("pageTarifs", "image_text_20", "Une présence régulière auprès de vos équipes et des personnes accompagnées.")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[120px]" data-node-id="414:6408" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_21")}>{t("pageTarifs", "image_text_21", "À partir de 180 € la demi-journée.")}</p>
                  </div>
                  <div className="border-[#ccc] border-b border-solid content-stretch flex gap-[24px] items-baseline overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6409" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6410">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6411" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_22")}>{t("pageTarifs", "image_text_22", "Projet sur mesure")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6412" data-sanity={ds("pageTarifs", "image_text_23")}>{t("pageTarifs", "image_text_23", "Programme, atelier ou création d'outils, de l'analyse des besoins au bilan.")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[120px]" data-node-id="414:6413" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_24")}>{t("pageTarifs", "image_text_24", "Sur devis.")}</p>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-baseline overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="414:6414" data-name="Bouton">
                    <div className="flex flex-[1_0_0] flex-row items-baseline self-stretch" data-node-id="414:6415">
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal h-full items-start justify-center min-w-px relative">
                        <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6416" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_25")}>{t("pageTarifs", "image_text_25", "Sensibilisation des équipes")}</p>
                        <p className="font-['Lexend:Regular'] leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6417" data-sanity={ds("pageTarifs", "image_text_26")}>{t("pageTarifs", "image_text_26", "Un temps d'échange et de formation sur un thème défini ensemble.")}</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance text-right w-[120px]" data-node-id="414:6418" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "image_text_27")}>{t("pageTarifs", "image_text_27", "À partir de 250 € la session.")}</p>
                  </div>
                </div>
                <Cta href={site.settings.calendly || "/contact"} className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-start px-[40px] py-[80px] relative shrink-0 w-[1512px]" data-node-id="414:6420" data-name="4-cards">
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="414:6421">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-node-id="414:6422">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[567px]" data-node-id="414:6423">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6424" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "cartes_1")}>{t("pageTarifs", "cartes_1", "Financer l'ergothérapie")}</p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6425">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:6426">
                  <div className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[458px] whitespace-pre-wrap" data-node-id="414:6427">
                    <p className="leading-[1.3] mb-0 text-[rgba(9,15,12,0.7)] text-pretty" data-sanity={ds("pageTarifs", "cartes_2")}>{t("pageTarifs", "cartes_2", "L'ergothérapie en libéral n'est pas remboursée par la Sécurité sociale, mais plusieurs aides peuvent couvrir tout ou partie des séances.")}</p>
                    <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageTarifs", "cartes_3")}>{t("pageTarifs", "cartes_3", "​")}</p>
                    <p className="leading-[1.3] text-[rgba(9,15,12,0.7)] text-pretty" data-sanity={ds("pageTarifs", "cartes_4")}>{t("pageTarifs", "cartes_4", "Je vous aide à identifier les financements possibles et à constituer votre dossier.")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-end justify-end relative shrink-0" data-node-id="414:6428">
            <div className="gap-x-[8px] gap-y-[8px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid relative shrink-0" data-node-id="414:6429">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="414:6430" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="414:6431">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="414:6432">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="414:6433">
                      <div className="relative shrink-0 size-[40px]" data-node-id="414:6434" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageTarifs", "cartes_image_1")} src={img("pageTarifs", "cartes_image_1", "/assets/icons/house.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6437">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="414:6438" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "cartes_5")}>{t("pageTarifs", "cartes_5", "MDPH")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="414:6439" data-sanity={ds("pageTarifs", "cartes_6")}>{t("pageTarifs", "cartes_6", "PCH, AEEH")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="414:6441" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="414:6442">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="414:6443">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="414:6444">
                      <div className="relative shrink-0 size-[40px]" data-node-id="414:6445" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageTarifs", "cartes_image_2")} src={img("pageTarifs", "cartes_image_2", "/assets/icons/user-round-group.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6452">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="414:6453" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "cartes_7")}>{t("pageTarifs", "cartes_7", "Mutuelles")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="414:6454" data-sanity={ds("pageTarifs", "cartes_8")}>{t("pageTarifs", "cartes_8", "Selon les garanties de votre contrat.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="414:6456" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="414:6457">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="414:6458">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="414:6459">
                      <div className="relative shrink-0 size-[40px]" data-node-id="414:6460" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageTarifs", "cartes_image_3")} src={img("pageTarifs", "cartes_image_3", "/assets/icons/archive.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6464">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="414:6465" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "cartes_9")}>{t("pageTarifs", "cartes_9", "Caisses de retraite")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="414:6466" data-sanity={ds("pageTarifs", "cartes_10")}>{t("pageTarifs", "cartes_10", "Des aides selon votre situation.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="414:6468" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="414:6469">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="414:6470">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="414:6471">
                      <div className="relative shrink-0 size-[40px]" data-node-id="414:6472" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageTarifs", "cartes_image_4")} src={img("pageTarifs", "cartes_image_4", "/assets/icons/hand-coins.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6478">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="414:6479" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "cartes_11")}>{t("pageTarifs", "cartes_11", "Dispositifs spécifiques")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="414:6480" data-sanity={ds("pageTarifs", "cartes_12")}>{t("pageTarifs", "cartes_12", "PCO TND, aides de l'employeur ou de l'Agefiph.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}