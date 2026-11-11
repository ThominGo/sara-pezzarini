import { ds } from '../../utils/preview';
import { t } from '../../utils/content';

// FAQ (maquette Tarifs, 414:6482). Utilisée sur Tarifs et sur Contact : mêmes questions, modifiables
// une seule fois dans le Studio (page Tarifs). Les réponses s'ouvrent une à une (voir interactions.ts).
// FAQ : classes reprises de la question ouverte de la maquette (414:6486). Les réponses s'ouvrent et se ferment (voir interactions.ts).
function FaqItem({ q, qf, a, af, open = false }: { q: string; qf: string; a: string; af: string; i?: string; open?: boolean }) {
  return (
    <div className="border-[#ccc] border-b border-solid content-stretch flex flex-col items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Bouton" data-faq data-open={open ? '' : undefined}>
      <button type="button" aria-expanded={open} className="faq-q bg-transparent border-0 content-stretch cursor-pointer flex items-center p-0 relative shrink-0 text-left w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", q)}>{t("pageTarifs", q, qf)}</p>
          </div>
        </div>
        <div className="faq-icon relative shrink-0 size-[24px]" data-name="Frame" aria-hidden>
          <span className="faq-bar" />
          <span className="faq-bar faq-bar-v" />
        </div>
      </button>
      <div className="faq-a">
        <div className="faq-a-in">
          <div className="content-stretch flex items-start pl-[120px] pt-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[458px]" data-sanity={ds("pageTarifs", a)}>{t("pageTarifs", a, af)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ cta = true }: { cta?: boolean }) {
  return (
      <div className="content-stretch flex gap-[40px] items-start overflow-clip pb-[140px] pl-[161px] pr-[40px] pt-[80px] relative shrink-0 w-full" data-node-id="414:6482" data-name="FAQ — accordéon statique ouvert">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[567px]" data-node-id="414:6483" data-name="Titre FAQ">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-node-id="I414:6483;146:4290">
          <div className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-[color:var(--black,#090f0c)] w-full" data-node-id="I414:6483;146:4291" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            <p className="leading-none mb-0 text-[40px] text-balance" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "faq_accord_on_statique_ouvert_1")}>{t("pageTarifs", "faq_accord_on_statique_ouvert_1", "Questions")}</p>
            <p className="leading-none text-[40px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds("pageTarifs", "faq_accord_on_statique_ouvert_2")}>{t("pageTarifs", "faq_accord_on_statique_ouvert_2", "fréquentes")}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative" data-node-id="414:6484">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:6485">
          <FaqItem q="faq_accord_on_statique_ouvert_3" qf="Puis-je être remboursé·e ?" i="faq_accord_on_statique_ouvert_image_1" a="faq_accord_on_statique_ouvert_4" af="L'ergothérapie en libéral n'est pas remboursée par la Sécurité sociale, mais plusieurs aides peuvent couvrir tout ou partie des séances." />
          <FaqItem q="faq_accord_on_statique_ouvert_5" qf="Comment obtenir un devis ?" i="faq_accord_on_statique_ouvert_image_2" a="faq_reponse_2" af="Après un premier échange, je vous envoie un devis détaillé adapté à votre situation et à vos besoins." />
          <FaqItem q="faq_accord_on_statique_ouvert_6" qf="Quels moyens de paiement acceptez-vous ?" i="faq_accord_on_statique_ouvert_image_3" a="faq_reponse_3" af="Vous pouvez régler par virement, chèque ou espèces. Une facture vous est remise après chaque séance." />
        </div>
        {cta && (
          <a href="/contact" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-sanity={ds("pageTarifs", "faq_cta")}>{t("pageTarifs", "faq_cta", "D’autres questions ?")}</p>
          </a>
        )}
      </div>
    </div>
  );
}
