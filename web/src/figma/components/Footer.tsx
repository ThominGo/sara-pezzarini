import { ds } from '../../utils/preview';
import { t, img } from '../../utils/content';
import { site } from '../../utils/site';

// Un <p> de la maquette devient un lien quand une adresse existe (mêmes classes)
const social = (name: string) => site.settings.socials?.find((x: any) => x?.label?.toLowerCase().includes(name))?.url;
function L({ href, className, children, ...rest }: any) {
  if (!href) return <p className={className} {...rest}>{children}</p>;
  const ext = /^https?:/.test(href);
  return <a href={href} className={`${className} lien`} {...(ext ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{children}</a>;
}
export default function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip px-[160px] py-[60px] relative w-[1512px]"} data-node-id="148:4932" data-name="footer">
      <div className="[word-break:break-word] font-['Lexend:Regular'] font-normal gap-x-[104px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 text-[16px] text-balance w-full" data-node-id="146:4506">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-self-stretch leading-[1.1] relative self-start shrink-0 whitespace-nowrap" data-node-id="146:4507">
          <p className="relative shrink-0 text-[color:var(--black,#090f0c)]" data-node-id="146:4508" data-sanity={ds("commun", "footer_1")}>{t("commun", "footer_1", "Les pages")}</p>
          <L href="/mon-approche" className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4509" data-sanity={ds("commun", "footer_2")}>{t("commun", "footer_2", "Mon approche")}</L>
          <L href="/pour-qui" className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4510" data-sanity={ds("commun", "footer_3")}>{t("commun", "footer_3", "Pour qui")}</L>
          <L href="/projets" className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4511" data-sanity={ds("commun", "footer_4")}>{t("commun", "footer_4", "Projets")}</L>
          <L href="/parcours" className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4512" data-sanity={ds("commun", "footer_5")}>{t("commun", "footer_5", "Parcours")}</L>
          <L href="/contact" className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4513" data-sanity={ds("commun", "footer_6")}>{t("commun", "footer_6", "Me contacter")}</L>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative self-start shrink-0 whitespace-nowrap" data-node-id="146:4514">
          <p className="leading-[1.3] relative shrink-0 text-[rgba(0,0,0,0)]" data-node-id="146:4515">
            Les pages
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4516" data-sanity={ds("commun", "footer_7")}>{t("commun", "footer_7", "Mentions Légales")}</p>
          <p className="leading-[1.1] relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4517" data-sanity={ds("commun", "footer_8")}>{t("commun", "footer_8", "Confidentialité")}</p>
          <p className="leading-[1.1] relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4518" data-sanity={ds("commun", "footer_9")}>{t("commun", "footer_9", "Plan du site")}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-self-stretch leading-[1.1] relative self-start shrink-0 whitespace-nowrap" data-node-id="146:4520">
          <p className="relative shrink-0 text-[color:var(--black,#090f0c)]" data-node-id="146:4521" data-sanity={ds("commun", "footer_10")}>{t("commun", "footer_10", "Me retrouver")}</p>
          <L href={`mailto:${site.settings.email || "sara.pezzarini@gmail.com"}`} className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4522" data-sanity={ds("commun", "footer_11")}>{t("commun", "footer_11", "E-mail")}</L>
          <L href={social("instagram")} className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4523" data-sanity={ds("commun", "footer_12")}>{t("commun", "footer_12", "Instagram")}</L>
          <L href={social("linkedin")} className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4524" data-sanity={ds("commun", "footer_13")}>{t("commun", "footer_13", "Linkedin")}</L>
          <L href={social("facebook")} className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4525" data-sanity={ds("commun", "footer_14")}>{t("commun", "footer_14", "Facebook")}</L>
          <L href={site.settings.doctolib} className="relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))]" data-node-id="146:4526" data-sanity={ds("commun", "footer_15")}>{t("commun", "footer_15", "Doctolib")}</L>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-self-stretch leading-[1.1] relative self-start shrink-0" data-node-id="146:4527">
          <p className="relative shrink-0 text-[color:var(--black,#090f0c)] whitespace-nowrap" data-node-id="146:4528" data-sanity={ds("commun", "footer_16")}>{t("commun", "footer_16", "Secteur")}</p>
          <p className="min-w-full relative shrink-0 text-[color:var(--black-70\%,rgba(9,15,12,0.7))] w-[min-content]" data-node-id="146:4529" data-sanity={ds("commun", "footer_17")}>{t("commun", "footer_17", "Autour de Mézy-sur-Seine, Yvelines, Val-d’Oise, Eure")}</p>
        </div>
      </div>
      <div className="gap-x-[104px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-node-id="146:4530">
        <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="146:4531">
          <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance whitespace-nowrap" data-node-id="146:4532" data-sanity={ds("commun", "footer_18")}>{t("commun", "footer_18", "©2026 - Sara Pezzarini - Tous droits réservés")}</p>
        </div>
        <div className="col-4 h-[23px] relative row-1 shrink-0 w-[291.5px]" data-node-id="146:4533">
          <a href="https://thomas-marilleau.com" target="_blank" rel="noopener" className="[word-break:break-word] absolute font-['Lexend:Regular'] font-normal leading-[1.1] left-0 right-0 text-[16px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-balance top-0 credit" data-node-id="146:4534"><span data-sanity={ds("commun", "footer_19")}>{t("commun", "footer_19", "Crédit")}</span><span aria-hidden>Thomas Marilleau</span></a>
        </div>
      </div>
    </div>
  );
}
