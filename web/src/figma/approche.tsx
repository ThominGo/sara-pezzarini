import { ds } from '../utils/preview';
import { t, img } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';


type CtaProps = {
  className?: string;
  label?: string;
  state?: "default";
  variants?: "primary";
};

function Cta({ className, label = "button label", state = "default", variants = "primary" }: CtaProps) {
  return (
    <div className={className || "bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px]"} data-node-id="133:3437">
      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="133:3431">
        {label}
      </p>
    </div>
  );
}

export default function MonApproche() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="414:6685" data-name="Mon approche">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-[1512px]" data-node-id="414:6686" data-name="hero">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full" data-node-id="I414:6686;146:4271">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-node-id="I414:6686;146:4272">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-approche.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(129.8873323028124deg, rgb(229, 103, 42) 0%, rgb(235, 162, 58) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-[41px]" data-node-id="I414:6686;146:4273">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[794px]" data-node-id="I414:6686;146:4274">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I414:6686;146:4275">
                <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-node-id="I414:6686;146:4277">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:6686;146:4278" data-sanity={ds("pageApproche", "hero_1")}>{t("pageApproche", "hero_1", "Mon approche")}</p>
                </div>
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-balance w-[min-content]" data-node-id="I414:6686;146:4279" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "hero_2")}>{t("pageApproche", "hero_2", "J’envisage l’accompagnement dans sa globalité")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6686;146:4280">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6686;146:4281">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6686;146:4282" data-sanity={ds("pageApproche", "hero_3")}>{t("pageApproche", "hero_3", "Avec elle, son entourage et les équipes, je co-construis des pistes adaptées aux besoins du quotidien, pour une inclusion concrète, au-delà du soin.")}</p>
                  <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="I414:6686;146:4283" data-name="Actions principales">
                    <div className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6686;148:4594" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-node-id="I414:6686;148:4594;133:3431" data-sanity={ds("pageApproche", "hero_4")}>{t("pageApproche", "hero_4", "Comment ça se passe ?")}</p>
                    </div>
                    <div className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:6686;148:4597" data-name="Cta">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:6686;148:4597;133:3433" data-sanity={ds("pageApproche", "hero_5")}>{t("pageApproche", "hero_5", "Une question ?")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] flex h-[331px] items-center justify-center right-[40px] w-[248px]" data-node-id="I414:6686;146:4288">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[331px] relative rounded-[8px] w-[248px]" data-name="image 13">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" data-sanity={ds("pageApproche", "hero_image_1")} src={img("pageApproche", "hero_image_1", "/assets/placeholder.svg")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-start px-[40px] py-[80px] relative shrink-0 w-[1512px]" data-node-id="414:6687" data-name="4-cards">
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4295">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-node-id="I414:6687;146:4296">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-[567px]" data-node-id="I414:6687;146:4297">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="I414:6687;146:4298" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "cartes_1")}>{t("pageApproche", "cartes_1", "Ce qui guide ma pratique")}</p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6687;146:4299">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I414:6687;146:4300">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[458px]" data-node-id="I414:6687;146:4301" data-sanity={ds("pageApproche", "cartes_2")}>{t("pageApproche", "cartes_2", "lorem ipsum")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-end justify-end relative shrink-0" data-node-id="I414:6687;146:4302">
            <div className="gap-x-[8px] gap-y-[8px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid relative shrink-0" data-node-id="I414:6687;146:4303">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="I414:6687;146:4304" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="I414:6687;146:4305">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4306">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="I414:6687;146:4307">
                      <div className="relative shrink-0 size-[40px]" data-node-id="I414:6687;146:4308" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "cartes_image_1")} src={img("pageApproche", "cartes_image_1", "/assets/icon-placeholder.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4311">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="I414:6687;146:4312" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "cartes_3")}>{t("pageApproche", "cartes_3", "La personne au centre")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:6687;146:4313" data-sanity={ds("pageApproche", "cartes_4")}>{t("pageApproche", "cartes_4", "Partir de ses priorités, de ses ressources et de son fonctionnement, en respectant ses choix et son rythme.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="I414:6687;146:4317" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="I414:6687;146:4318">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4319">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="I414:6687;146:4320">
                      <div className="relative shrink-0 size-[40px]" data-node-id="I414:6687;146:4321" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "cartes_image_2")} src={img("pageApproche", "cartes_image_2", "/assets/icon-placeholder.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4327">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="I414:6687;146:4328" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "cartes_5")}>{t("pageApproche", "cartes_5", "Comprendre avant d’agir")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:6687;146:4329" data-sanity={ds("pageApproche", "cartes_6")}>{t("pageApproche", "cartes_6", "Prendre le temps d’écouter et d’observer les activités et les environnements pour identifier les besoins et les obstacles.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="I414:6687;146:4333" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="I414:6687;146:4334">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4335">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="I414:6687;146:4336">
                      <div className="relative shrink-0 size-[40px]" data-node-id="I414:6687;146:4337" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "cartes_image_3")} src={img("pageApproche", "cartes_image_3", "/assets/icon-placeholder.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4345">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="I414:6687;146:4346" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "cartes_7")}>{t("pageApproche", "cartes_7", "Co-construire avec l’entourage")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:6687;146:4347" data-sanity={ds("pageApproche", "cartes_8")}>{t("pageApproche", "cartes_8", "Croiser les regards de la personne, de ses proches et des équipes pour construire des pistes partagées et adaptées au terrain.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 size-[348px]" data-node-id="I414:6687;146:4351" data-name="Bouton">
                <div className="content-stretch flex flex-col h-[348px] items-end justify-between p-[16px] relative shrink-0 w-full" data-node-id="I414:6687;146:4352">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4353">
                    <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[4px] shrink-0 size-[80px]" data-node-id="I414:6687;146:4354">
                      <div className="relative shrink-0 size-[40px]" data-node-id="I414:6687;146:4355" data-name="Frame">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "cartes_image_4")} src={img("pageApproche", "cartes_image_4", "/assets/icon-placeholder.svg")} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:6687;146:4362">
                      <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-[240px]" data-node-id="I414:6687;146:4363" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "cartes_9")}>{t("pageApproche", "cartes_9", "Agir sur la durée")}</p>
                      <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:6687;146:4364" data-sanity={ds("pageApproche", "cartes_10")}>{t("pageApproche", "cartes_10", "Faire le point ensemble et ajuster les stratégies au fil des usages, des besoins et des évolutions de la situation.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-[837px] items-start p-[8px] relative shrink-0 w-[1512px]" data-node-id="414:6688" data-name="points">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px px-[32px] py-[40px] relative rounded-[8px] w-full" data-node-id="I414:6688;146:4414">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]"><img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-points.png" /><div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(132.33615182619312deg, rgb(184, 64, 31) 0%, rgb(232, 145, 58) 83.333%)" }} /><div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" /></div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[703px]" data-node-id="I414:6688;146:4415">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="I414:6688;146:4416">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--white,white)] text-balance w-[465px]" data-node-id="I414:6688;146:4417" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "points_1")}>{t("pageApproche", "points_1", "Mes outils")}</p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6688;146:4418">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6688;146:4419">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-pretty w-[458px]" data-node-id="I414:6688;146:4420" data-sanity={ds("pageApproche", "points_2")}>{t("pageApproche", "points_2", "Des outils choisis selon la situation, les besoins et les modes de communication de la personne.")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="I414:6688;146:4424">
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6688;146:4425" data-name="Bouton">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6688;146:4427">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6688;146:4428" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "points_3")}>{t("pageApproche", "points_3", "CAA")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6688;146:4429" data-sanity={ds("pageApproche", "points_4")}>{t("pageApproche", "points_4", "En respectant ses choix et son rythme.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6688;146:4430" data-name="Bouton">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6688;146:4432">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6688;146:4433" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "points_5")}>{t("pageApproche", "points_5", "Entretien motivationnel")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6688;146:4434" data-sanity={ds("pageApproche", "points_6")}>{t("pageApproche", "points_6", "Pour construire des pistes adaptées au terrain.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6688;146:4435" data-name="Bouton">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6688;146:4437">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6688;146:4438" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "points_7")}>{t("pageApproche", "points_7", "MCRO")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6688;146:4439" data-sanity={ds("pageApproche", "points_8")}>{t("pageApproche", "points_8", "Pour identifier les besoins et les obstacles.")}</p>
              </div>
            </div>
            <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-[321px]" data-node-id="I414:6688;146:4440" data-name="Bouton">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-normal items-start leading-[1.2] min-w-px p-[8px] relative text-balance" data-node-id="I414:6688;146:4442">
                <p className="font-['Bricolage_Grotesque:Regular'] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6688;146:4443" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "points_9")}>{t("pageApproche", "points_9", "ELADEB")}</p>
                <p className="font-['Lexend:Regular'] relative shrink-0 text-[14px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-full" data-node-id="I414:6688;146:4444" data-sanity={ds("pageApproche", "points_10")}>{t("pageApproche", "points_10", "Ajuster les stratégies au fil des usages")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:6689" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]" data-node-id="414:6690">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" data-node-id="414:6691" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            Trois façons de travailler ensemble
          </p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative" data-node-id="414:6692">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6693">
              <div className="relative shrink-0 size-[459px]" data-node-id="414:6694">
                <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "vertical_card_image_1")} src={img("pageApproche", "vertical_card_image_1", "/assets/icon-placeholder.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6697">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6698" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "vertical_card_1")}>{t("pageApproche", "vertical_card_1", "1. Se rencontrer et comprendre vos besoins")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6699" data-sanity={ds("pageApproche", "vertical_card_2")}>{t("pageApproche", "vertical_card_2", "Échanger sur votre situation, vos attentes et vos priorités pour définir ensemble le cadre de l’accompagnement.")}</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:6700" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6701">
              <div className="relative shrink-0 size-[459px]" data-node-id="414:6702">
                <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "vertical_card_image_2")} src={img("pageApproche", "vertical_card_image_2", "/assets/icon-placeholder.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6704">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6705" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "vertical_card_3")}>{t("pageApproche", "vertical_card_3", "2. Découvrir le terrain et les équipes")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6706" data-sanity={ds("pageApproche", "vertical_card_4")}>{t("pageApproche", "vertical_card_4", "Observer les activités et les environnements, et échanger avec les personnes concernées pour comprendre les réalités du quotidien.")}</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:6707" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6708">
              <div className="relative shrink-0 size-[459px]" data-node-id="414:6709">
                <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "vertical_card_image_3")} src={img("pageApproche", "vertical_card_image_3", "/assets/icon-placeholder.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6716">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6717" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "vertical_card_5")}>{t("pageApproche", "vertical_card_5", "3. Construire et mettre en place l’accompagnement")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6718" data-sanity={ds("pageApproche", "vertical_card_6")}>{t("pageApproche", "vertical_card_6", "Définir ensemble les objectifs, choisir les stratégies et les outils, puis les mettre à l’essai dans les situations du quotidien.")}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6719">
              <div className="relative shrink-0 size-[459px]" data-node-id="414:6720" data-name="5">
                <img alt="" className="absolute block inset-0 max-w-none size-full" data-sanity={ds("pageApproche", "vertical_card_image_4")} src={img("pageApproche", "vertical_card_image_4", "/assets/icon-placeholder.svg")} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6724">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6725" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "vertical_card_7")}>{t("pageApproche", "vertical_card_7", "4. Ajuster et faire le point régulièrement")}</p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6726" data-sanity={ds("pageApproche", "vertical_card_8")}>{t("pageApproche", "vertical_card_8", "Définir ensemble les objectifs, choisir les stratégies et les outils, puis les mettre à l’essai dans les situations du quotidien.")}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-[2968px] left-[-123px] pointer-events-none top-[-400px]" data-node-id="414:6727">
            <div className="content-stretch flex items-center justify-center pb-[112px] pointer-events-auto pt-[400px] sticky top-0 w-[561px]">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[color:var(--black,#090f0c)] text-balance" data-node-id="414:6728" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "vertical_card_9")}>{t("pageApproche", "vertical_card_9", "Comment se passe une collaboration")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6729" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6730">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6731">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6732">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6733">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6734" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "image_text_1")}>{t("pageApproche", "image_text_1", "Pour les personnes")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6735">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6736">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6737" data-sanity={ds("pageApproche", "image_text_2")}>{t("pageApproche", "image_text_2", "Adultes, adolescents et proches, notamment concernés par un TSA ou un handicap psychique : je pars de vos priorités et de vos habitudes pour explorer, avec vous, ce qui facilite ou freine les activités qui comptent dans votre vie.")}</p>
                  <Cta className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-center justify-center p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6739" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip p-[40px] relative w-full" data-node-id="414:6740" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pageApproche", "image_text_image_1")} src={img("pageApproche", "image_text_image_1", "/assets/placeholder.svg")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6741">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6742" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-node-id="414:6743" data-sanity={ds("pageApproche", "image_text_3")}>{t("pageApproche", "image_text_3", "Bilans et compréhension des besoins")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6744" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_4")}>{t("pageApproche", "image_text_4", "Suivis et stratégies sur mesure")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6746" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_5")}>{t("pageApproche", "image_text_5", "Outils pour l’autonomie au quotidien")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6748" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_6")}>{t("pageApproche", "image_text_6", "Accompagnement avec l’entourage")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6750" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:6751" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative w-full" data-node-id="414:6752" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-sanity={ds("pageApproche", "image_text_image_2")} src={img("pageApproche", "image_text_image_2", "/assets/placeholder.svg")} />
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-node-id="414:6753">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6754" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_7")}>{t("pageApproche", "image_text_7", "Ateliers et programmes de prévention")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6756" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_8")}>{t("pageApproche", "image_text_8", "Sensibilisation et formation des équipes")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6758" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_9")}>{t("pageApproche", "image_text_9", "Conseils pour adapter les environnements")}</p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[4px] shrink-0 w-[321px]" data-node-id="414:6760" data-name="Bouton">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal h-full leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance text-center w-[289px]" data-sanity={ds("pageApproche", "image_text_10")}>{t("pageApproche", "image_text_10", "Co-construction de projets et d’outils inclusifs")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:6762">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6763">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:6764">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:6765">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:6766" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageApproche", "image_text_11")}>{t("pageApproche", "image_text_11", "Pour les organisations")}</p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:6767">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6768">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:6769" data-sanity={ds("pageApproche", "image_text_12")}>{t("pageApproche", "image_text_12", "Équipes éducatives, bibliothèques, musées et lieux culturels : je vous propose de penser l’accès aux apprentissages, aux loisirs et à la culture à partir des besoins des publics et des réalités de vos espaces.")}</p>
                  <Cta className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" label="Réserver un appel" />
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