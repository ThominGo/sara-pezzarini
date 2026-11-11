import { ds } from '../utils/preview';
import { t, img, srcset } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';
import { Card, defaultCards, type ProjectCard } from './projets';


function Slider({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative w-[1512px]"} data-node-id="148:4931" data-name="slider">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1190px]" data-node-id="146:4446">
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="146:4447">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[440px]" data-node-id="146:4448" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "slider_1")}>{t("pageAccueil", "slider_1", "Mon parcours")}</p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="146:4449">
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center opacity-40 overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="146:4450" data-name="Cta">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I146:4450;133:3473" data-sanity={ds("pageAccueil", "slider_2")}>{t("pageAccueil", "slider_2", "Précédent")}</p>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="146:4451" data-name="Cta">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I146:4451;133:3433" data-sanity={ds("pageAccueil", "slider_3")}>{t("pageAccueil", "slider_3", "Suivant")}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="146:4452">
          <div className="flex flex-row items-center self-stretch" data-node-id="146:4453">
            <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="146:4454">
                <div className="col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="146:4455" data-name="image 13">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageAccueil", "slider_image_1")} src={img("pageAccueil", "slider_image_1", "/images/9bf7649c41.webp")} />
                </div>
                <div className="bg-[var(--white,white)] col-1 content-stretch flex items-center justify-center ml-[8px] mt-[8px] p-[8px] relative rounded-[4px] row-1" data-node-id="146:4456">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4457" data-sanity={ds("pageAccueil", "slider_4")}>{t("pageAccueil", "slider_4", "2019")}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4458">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4459" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "slider_5")}>{t("pageAccueil", "slider_5", "Stages")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="146:4460" data-sanity={ds("pageAccueil", "slider_6")}>{t("pageAccueil", "slider_6", "SAMSAH TC 40")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch" data-node-id="146:4461">
            <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="146:4462">
                <div className="col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="146:4463" data-name="image 13">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageAccueil", "slider_image_2")} src={img("pageAccueil", "slider_image_2", "/images/2dcedd3025.webp")} />
                </div>
                <div className="bg-[var(--white,white)] col-1 content-stretch flex items-center justify-center ml-[8px] mt-[8px] p-[8px] relative rounded-[4px] row-1" data-node-id="146:4464">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4465" data-sanity={ds("pageAccueil", "slider_7")}>{t("pageAccueil", "slider_7", "2020")}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4466">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4467" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "slider_8")}>{t("pageAccueil", "slider_8", "EHPAD")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="146:4468" data-sanity={ds("pageAccueil", "slider_9")}>{t("pageAccueil", "slider_9", "Jeanne Mauléon")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch" data-node-id="146:4469">
            <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="146:4470">
                <div className="col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="146:4471" data-name="image 13">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageAccueil", "slider_image_3")} src={img("pageAccueil", "slider_image_3", "/images/f858df2fd5.webp")} />
                </div>
                <div className="bg-[var(--white,white)] col-1 content-stretch flex items-center justify-center ml-[8px] mt-[8px] p-[8px] relative rounded-[4px] row-1" data-node-id="146:4472">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4473" data-sanity={ds("pageAccueil", "slider_10")}>{t("pageAccueil", "slider_10", "2020 ▸ 2023")}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4474">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4475" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "slider_11")}>{t("pageAccueil", "slider_11", "Psychiatrie GHNE")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="146:4476" data-sanity={ds("pageAccueil", "slider_12")}>{t("pageAccueil", "slider_12", "Service de psychiatrie du GHNE")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch" data-node-id="146:4477">
            <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="146:4478">
                <div className="col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="146:4479" data-name="image 13">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageAccueil", "slider_image_4")} src={img("pageAccueil", "slider_image_4", "/images/0bed7bf1e7.webp")} />
                </div>
                <div className="bg-[var(--white,white)] col-1 content-stretch flex items-center justify-center ml-[8px] mt-[8px] p-[8px] relative rounded-[4px] row-1" data-node-id="146:4480">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4481" data-sanity={ds("pageAccueil", "slider_13")}>{t("pageAccueil", "slider_13", "2023 ▸ 2026")}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4482">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="146:4483" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "slider_14")}>{t("pageAccueil", "slider_14", "SAMSAH spécialisé TSA")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="146:4484" data-sanity={ds("pageAccueil", "slider_15")}>{t("pageAccueil", "slider_15", "SAMSAH spécialisé TSA")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CtaProps = {
  href?: string;
  className?: string;
  label?: string;
  state?: "default";
  variants?: "primary" | "secondary" | "tertiary";
};

function Cta({ className, href, label = "button label", state = "default", variants = "primary" }: CtaProps) {
  const isSecondary = variants === "secondary";
  const isTertiary = variants === "tertiary";
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} data-name="Cta" className={className || `content-stretch flex h-[40px] items-center justify-center overflow-clip relative rounded-[4px] ${isTertiary ? "gap-[8px]" : isSecondary ? "bg-[var(--white,white)] border border-[#c2c2c2] border-solid px-[24px]" : "bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid px-[24px]"}`} id={isTertiary ? "node-148_4793" : isSecondary ? "node-133_3436" : "node-133_3437"}>
      {["secondary", "tertiary"].includes(variants) && (
        <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap" data-node-id="133:3433">
          {label}
        </p>
      )}
      {variants === "primary" && (
        <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="133:3431">
          {label}
        </p>
      )}
      {isTertiary && (
        <div className="h-[10px] relative shrink-0 w-[11px]" data-node-id="148:4908">
          <div className="absolute inset-[-4.95%_-9%_-4.95%_0]">
            <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src="/assets/arrow.svg" />
          </div>
        </div>
      )}
    </Tag>
  );
}

function Component4Cards({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-start px-[40px] py-[80px] relative w-[1512px]"} data-node-id="148:4781" data-name="4-cards">
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="146:4295">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-node-id="146:4296">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[567px]" data-node-id="146:4297">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="146:4298" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "cartes_1")}>{t("pageAccueil", "cartes_1", "Avec qui je travaille")}</p>
            <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="146:4299">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="146:4300">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[458px]" data-node-id="146:4301" data-sanity={ds("pageAccueil", "cartes_2")}>{t("pageAccueil", "cartes_2", "Personnes, familles, établissements, entreprises ou lieux culturels : j’interviens là où le quotidien pose question, sur place, à domicile ou en visio.")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-end justify-end relative self-stretch shrink-0" data-node-id="146:4302">
          <div className="gap-x-[8px] gap-y-[8px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid relative shrink-0" data-node-id="146:4303">
            <a href="/pour-qui#structures" className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="146:4304" data-name="Bouton">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-between min-h-px p-[16px] relative w-full" data-node-id="146:4305">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="146:4306">
                  <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="146:4307">
                    <div className="relative shrink-0 size-[40px]" data-node-id="146:4308" data-name="Frame">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "cartes_image_1")} src={img("pageAccueil", "cartes_image_1", "/assets/icons/house-heart.svg")} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4311">
                    <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="146:4312" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "cartes_3")}>{t("pageAccueil", "cartes_3", "Structures médico-sociales")}</p>
                    <div className="font-['Lexend:Regular'] leading-[0] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[min-content]" data-node-id="146:4313">
                      <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageAccueil", "cartes_4")}>{t("pageAccueil", "cartes_4", "Soutenir l’autonomie.")}</p>
                      <p className="leading-[1.3] text-pretty" data-sanity={ds("pageAccueil", "cartes_5")}>{t("pageAccueil", "cartes_5", "Construire avec les équipes.")}</p>
                    </div>
                  </div>
                </div>
                <Cta className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" label="En savoir plus" variants="tertiary" />
              </div>
            </a>
            <a href="/pour-qui#entreprises" className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="146:4317" data-name="Bouton">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-between min-h-px p-[16px] relative w-full" data-node-id="146:4318">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="146:4319">
                  <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="146:4320">
                    <div className="relative shrink-0 size-[40px]" data-node-id="146:4321" data-name="Frame">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "cartes_image_2")} src={img("pageAccueil", "cartes_image_2", "/assets/icons/building-2.svg")} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4327">
                    <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="146:4328" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "cartes_6")}>{t("pageAccueil", "cartes_6", "Entreprises et collectivités")}</p>
                    <div className="font-['Lexend:Regular'] leading-[0] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[min-content]" data-node-id="146:4329">
                      <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageAccueil", "cartes_7")}>{t("pageAccueil", "cartes_7", "Adapter les environnements.")}</p>
                      <p className="leading-[1.3] text-pretty" data-sanity={ds("pageAccueil", "cartes_8")}>{t("pageAccueil", "cartes_8", "Avec les RH, élus et CCAS.")}</p>
                    </div>
                  </div>
                </div>
                <Cta className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" label="En savoir plus" variants="tertiary" />
              </div>
            </a>
            <a href="/pour-qui#ecoles" className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="146:4333" data-name="Bouton">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-between min-h-px p-[16px] relative w-full" data-node-id="146:4334">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="146:4335">
                  <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="146:4336">
                    <div className="relative shrink-0 size-[40px]" data-node-id="146:4337" data-name="Frame">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "cartes_image_3")} src={img("pageAccueil", "cartes_image_3", "/assets/icons/school.svg")} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4345">
                    <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="146:4346" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "cartes_9")}>{t("pageAccueil", "cartes_9", "Écoles et lieux culturels")}</p>
                    <div className="font-['Lexend:Regular'] leading-[0] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[min-content]" data-node-id="146:4347">
                      <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageAccueil", "cartes_10")}>{t("pageAccueil", "cartes_10", "Faciliter la participation.")}</p>
                      <p className="leading-[1.3] text-pretty" data-sanity={ds("pageAccueil", "cartes_11")}>{t("pageAccueil", "cartes_11", "Adapter l’accueil et les activités.")}</p>
                    </div>
                  </div>
                </div>
                <Cta className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" label="En savoir plus" variants="tertiary" />
              </div>
            </a>
            <a href="/pour-qui#personnes" className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="146:4351" data-name="Bouton">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-between min-h-px p-[16px] relative w-full" data-node-id="146:4352">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="146:4353">
                  <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="146:4354">
                    <div className="relative shrink-0 size-[40px]" data-node-id="146:4355" data-name="Frame">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "cartes_image_4")} src={img("pageAccueil", "cartes_image_4", "/assets/icons/user-round-group.svg")} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="146:4362">
                    <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="146:4363" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "cartes_12")}>{t("pageAccueil", "cartes_12", "Personnes et familles")}</p>
                    <div className="font-['Lexend:Regular'] leading-[0] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[min-content]" data-node-id="146:4364">
                      <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageAccueil", "cartes_13")}>{t("pageAccueil", "cartes_13", "Adultes et adolescents.")}</p>
                      <p className="leading-[1.3] text-pretty" data-sanity={ds("pageAccueil", "cartes_14")}>{t("pageAccueil", "cartes_14", "TSA et handicap psychique.")}</p>
                    </div>
                  </div>
                </div>
                <Cta className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" label="En savoir plus" variants="tertiary" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative w-[1512px]"} data-node-id="148:4601" data-name="text">
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]" data-node-id="146:4290">
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" data-node-id="146:4291" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "text_1")}>{t("pageAccueil", "text_1", "Comprendre ce qui fait obstacle au quotidien, et construire avec vous des solutions qui tiennent dans la durée.")}</p>
        <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full" data-node-id="146:4292">
          <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="146:4293" data-sanity={ds("pageAccueil", "text_2")}>{t("pageAccueil", "text_2", "Ergothérapeute diplômée d’État, j’ai travaillé en psychiatrie, en EHPAD puis en SAMSAH spécialisé TSA. Bilans, mises en situation, entretiens : je prends le temps de comprendre le fonctionnement de chaque personne. Nous construisons ensuite, avec elle, son entourage et les équipes, des stratégies, des outils et des aménagements adaptés.")}</p>
        </div>
      </div>
    </div>
  );
}

export default function SaraPezzarini({ cards = defaultCards }: { cards?: ProjectCard[] }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="414:6636" data-name="Sara Pezzarini">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-[1512px]" data-node-id="414:6637" data-name="hero" data-hero>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full" data-node-id="I414:6637;146:4271">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-node-id="I414:6637;146:4272">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img alt="" fetchPriority="high" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-accueil.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(129.8873323028124deg, rgb(232, 96, 60) 0%, rgb(224, 69, 122) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-[41px]" data-node-id="I414:6637;146:4273">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[794px]" data-node-id="I414:6637;146:4274">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I414:6637;146:4275">
                <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-node-id="I414:6637;146:4277">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:6637;146:4278" data-sanity={ds("pageAccueil", "hero_1")}>{t("pageAccueil", "hero_1", "Ergothérapeute")}</p>
                </div>
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-balance w-[min-content]" data-node-id="I414:6637;146:4279" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "hero_2")}>{t("pageAccueil", "hero_2", "Rendre le quotidien possible, pour chacun et partout")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6637;146:4280">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6637;146:4281">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6637;146:4282" data-sanity={ds("pageAccueil", "hero_3")}>{t("pageAccueil", "hero_3", "Ergothérapeute en libéral, j'accompagne les personnes et les organisations vers une inclusion concrète, au-delà du soin.")}</p>
                  <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="I414:6637;146:4283" data-name="Actions principales">
                    <Cta href="/contact" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Travailler ensemble" />
                    <a href="/projets" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6637;148:4597" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:6637;148:4597;133:3433" data-sanity={ds("pageAccueil", "hero_4")}>{t("pageAccueil", "hero_4", "Voir mes projets")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] flex h-[331px] items-center justify-center right-[40px] w-[248px]" data-node-id="I414:6637;146:4288">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[331px] relative rounded-[8px] w-[248px]" data-name="image 13">
                <img alt="Sara Pezzarini à son bureau" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageAccueil", "hero_image_1")} src={img("pageAccueil", "hero_image_1", "/images/22638ffa4c.webp")} srcSet={srcset(img("pageAccueil", "hero_image_1", "/images/22638ffa4c.webp"))} sizes="(max-width: 767px) 260px, 330px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" />
      <Component4Cards className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-start px-[40px] py-[80px] relative shrink-0 w-[1512px]" />
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:6640" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]" data-node-id="414:6641">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" data-node-id="414:6642" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            Trois façons de travailler ensemble
          </p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative" data-node-id="414:6643">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6644">
              <div className="overflow-clip relative rounded-[8px] shrink-0 size-[459px]" data-node-id="414:6645" data-name="11">
                <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "vertical_card_image_1")} src={img("pageAccueil", "vertical_card_image_1", "/illustrations/accueil-1.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6651">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6652" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "vertical_card_1")}>{t("pageAccueil", "vertical_card_1", "1. Accompagnement individuel")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6653" data-sanity={ds("pageAccueil", "vertical_card_2")}>{t("pageAccueil", "vertical_card_2", "Bilans, suivis, stratégies sur mesure pour soutenir l’autonomie dans les activités du quotidien.")}</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:6654" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6655">
              <div className="overflow-clip relative rounded-[8px] shrink-0 size-[459px]" data-node-id="414:6656" data-name="11">
                <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "vertical_card_image_2")} src={img("pageAccueil", "vertical_card_image_2", "/illustrations/accueil-2.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6663">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6664" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "vertical_card_3")}>{t("pageAccueil", "vertical_card_3", "2. Projets et programmes")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6665" data-sanity={ds("pageAccueil", "vertical_card_4")}>{t("pageAccueil", "vertical_card_4", "Ateliers, programme de prévention, outils adaptés : des projets construits au plus près des besoins.")}</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:6666" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6667">
              <div className="overflow-clip relative rounded-[8px] shrink-0 size-[459px]" data-node-id="414:6668" data-name="12">
                <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageAccueil", "vertical_card_image_3")} src={img("pageAccueil", "vertical_card_image_3", "/illustrations/accueil-3.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6674">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6675" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "vertical_card_5")}>{t("pageAccueil", "vertical_card_5", "3. Sensibilisation des équipes")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6676" data-sanity={ds("pageAccueil", "vertical_card_6")}>{t("pageAccueil", "vertical_card_6", "Formations, conseils, co-construction pour faire évoluer ensemble les pratiques et les environnements.")}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-[2247px] left-[-123px] pointer-events-none top-[-400px]" data-node-id="414:6677">
            <div className="content-stretch flex items-center justify-center pb-[112px] pointer-events-auto pt-[400px] sticky top-0 w-[561px]">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[color:var(--black,#090f0c)] text-balance" data-node-id="414:6678" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "vertical_card_7")}>{t("pageAccueil", "vertical_card_7", "Trois façons de travailler ensemble")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:6679" data-name="push-project">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[1190px]" data-node-id="I414:6679;146:4392">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance text-center w-[338px]" data-node-id="I414:6679;146:4393" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "push_project_1")}>{t("pageAccueil", "push_project_1", "Ce que j'ai déjà construit")}</p>
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-node-id="I414:6679;146:4394">
            <div className="content-stretch cursor-pointer flex gap-[8px] h-[480px] items-center relative shrink-0 w-full" data-node-id="I414:6679;146:4395">
              {cards.slice(0, 3).map((c, i) => <Card key={i} c={c} first={i === 0} className="flex-[1_0_0] h-full min-w-px" />)}
            </div>
            <Cta href="/projets" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-[392px]" label="Voir tous mes projets" variants="secondary" />
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-[837px] items-start p-[8px] relative shrink-0 w-[1512px]" data-node-id="414:6680" data-name="points">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px p-[40px] relative rounded-[8px] w-full" data-node-id="I414:6680;146:4414">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img loading="lazy" decoding="async" alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-points.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(132.33615182619312deg, rgb(184, 64, 31) 0%, rgb(232, 145, 58) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[703px]" data-node-id="I414:6680;146:4415">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="I414:6680;146:4416">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--white,white)] text-balance w-[465px]" data-node-id="I414:6680;146:4417" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "points_1")}>{t("pageAccueil", "points_1", "La personne est au centre")}</p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6680;146:4418">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6680;146:4419">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6680;146:4420" data-sanity={ds("pageAccueil", "points_2")}>{t("pageAccueil", "points_2", "Je pars de son fonctionnement pour construire avec elle et son entourage.")}</p>
                  <a href="/mon-approche" className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6680;148:4935" data-name="Cta">
                    <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:6680;148:4935;133:3433" data-sanity={ds("pageAccueil", "points_3")}>{t("pageAccueil", "points_3", "Découvrir mon approche")}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="I414:6680;146:4424">
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6680;146:4425" data-name="Bouton">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="I414:6680;146:4426">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#d9d9d9] relative rounded-[4px] size-[80px]" data-name="image 13" />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6680;146:4427">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6680;146:4428" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "points_4")}>{t("pageAccueil", "points_4", "Co-construction")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6680;146:4429" data-sanity={ds("pageAccueil", "points_5")}>{t("pageAccueil", "points_5", "En respectant ses choix et son rythme.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6680;146:4430" data-name="Bouton">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="I414:6680;146:4431">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#d9d9d9] relative rounded-[4px] size-[80px]" data-name="image 13" />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6680;146:4432">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6680;146:4433" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "points_6")}>{t("pageAccueil", "points_6", "Créativité")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6680;146:4434" data-sanity={ds("pageAccueil", "points_7")}>{t("pageAccueil", "points_7", "Pour construire des pistes adaptées au terrain.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6680;146:4435" data-name="Bouton">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="I414:6680;146:4436">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#d9d9d9] relative rounded-[4px] size-[80px]" data-name="image 13" />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6680;146:4437">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6680;146:4438" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "points_8")}>{t("pageAccueil", "points_8", "Écoute")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6680;146:4439" data-sanity={ds("pageAccueil", "points_9")}>{t("pageAccueil", "points_9", "Pour identifier les besoins et les obstacles.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6680;146:4440" data-name="Bouton">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="I414:6680;146:4441">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#d9d9d9] relative rounded-[4px] size-[80px]" data-name="image 13" />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6680;146:4442">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6680;146:4443" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageAccueil", "points_10")}>{t("pageAccueil", "points_10", "Sur la durée")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6680;146:4444" data-sanity={ds("pageAccueil", "points_11")}>{t("pageAccueil", "points_11", "Ajuster les stratégies au fil des usages")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" />
      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}