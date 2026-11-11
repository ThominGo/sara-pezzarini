import { ds } from '../utils/preview';
import { t, img } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { site } from '../utils/site';
import Faq from './components/Faq';

// Page Contact (Figma 414:6512). Classes copiées de Figma.
const FV = { fontVariationSettings: '"opsz" 14, "wdth" 100' };
const black70 = 'text-[color:var(--black-70\\%,rgba(9,15,12,0.7))]';
const label = "[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full";
const box = 'bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center overflow-clip px-[16px] relative rounded-[4px] shrink-0 w-full';
const ph = "[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] opacity-50 relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap";

// Les deux premiers champs ont gap 4 et largeur 459, les suivants gap 8 (comme dans Figma)
// Champs réels : mêmes classes que la maquette, le texte d'exemple devient le placeholder
const input = `${box} champ font-['Lexend:Regular'] font-normal leading-[1.3] text-[#090f0c] text-[18px] outline-none placeholder:text-[rgba(9,15,12,0.5)] focus:border-[#090f0c]`;
const Field = ({ l, p, first, name, type = 'text', required, auto }: { l: string; p: string; first?: boolean; name: string; type?: string; required?: boolean; auto?: string }) => {
  const field = (
    <label className="contents">
      <p className={label} style={FV}>{l}{required && ' *'}</p>
      <input className={input} name={name} type={type} placeholder={p} required={required} autoComplete={auto} />
    </label>
  );
  return first ? (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[459px]" data-field={name}>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">{field}</div>
    </div>
  ) : (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-field={name}>{field}</div>
  );
};

const radio = 'bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center overflow-clip px-[16px] relative rounded-[4px] shrink-0 w-full';
const Radio = ({ value, checked, children }: { value: string; checked?: boolean; children: any }) => (
  <label className={`${radio} champ`}>
    <input type="radio" name="profil" value={value} defaultChecked={checked} className="peer sr-only" />
    <div className="relative shrink-0 size-[16px] peer-checked:hidden"><img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/radio-off.svg" /></div>
    <div className="relative shrink-0 size-[16px] hidden peer-checked:block"><img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/radio-on.svg" /></div>
    {children}
  </label>
);

const MapText = ({ inset, size, color, children, center }: { inset: string; size: string; color: string; children: string; center?: boolean }) => (
  <p className={`map-t [word-break:break-word] absolute font-['Lexend:Regular'] font-normal leading-[1.3] text-pretty whitespace-nowrap ${center ? 'text-center ' : ''}`} style={{ inset, fontSize: size, color, '--fs': size } as any}>{children}</p>
);
const Img = ({ inset, src, pad }: { inset: string; src: string; pad?: string }) => (
  <div className="absolute" style={{ inset }} data-name="Vector">
    {pad ? (
      <div className="absolute" style={{ inset: pad }}><img alt="" className="block max-w-none size-full" src={src} /></div>
    ) : (
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
    )}
  </div>
);
const K70 = 'rgba(9,15,12,0.7)';
const BLUE = 'rgba(0,114,187,0.8)';
const dots: [string, string, string, boolean?][] = [
  ['50.68% 62.19% 48.26% 36.84%', '52.01% 56.79% 45.74% 31.37%', 'Mantes-la-Jolie', true],
  ['58.49% 37.13% 40.44% 61.91%', '57.83% 31.73% 39.92% 63.47%', 'Poissy'],
  ['62.45% 33.47% 36.48% 65.57%', '63.78% 25.04% 33.96% 57.08%', 'Saint-Germain-en-Laye', true],
  ['49.52% 33.24% 49.41% 65.8%', '48.86% 12.92% 48.88% 67.36%', 'Conflans-Sainte-Honorine'],
  ['43.76% 34.54% 55.18% 64.5%', '43.09% 22.19% 54.65% 66.06%', 'Cergy-Pontoise'],
  ['29.55% 56.94% 69.38% 42.09%', '28.89% 43.88% 68.86% 43.66%', 'Magny-en-Vexin'],
  ['44.91% 72.79% 54.02% 26.25%', '42.39% 65.53% 55.36% 19.15%', 'Bonnières-sur-Seine', true],
  ['37.49% 79.88% 61.45% 19.16%', '34.96% 77.7% 62.9% 16.99%', 'Vernon', true],
  ['74.37% 30.72% 24.57% 68.31%', '73.71% 22.87% 24.04% 69.88%', 'Versailles'],
  ['72.06% 44.59% 26.88% 54.44%', '71.4% 39.29% 26.35% 56.01%', 'Plaisir'],
];

export default function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Contact">
      {/* vertical-card : formulaire */}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip pb-[120px] pt-[220px] relative shrink-0 w-[1512px]" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" style={FV}>Trois façons de travailler ensemble</p>
          <form data-contact-form data-key={site.settings.formKey || ""} data-email={site.settings.email || "sara.pezzarini@gmail.com"} className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <Radio value="organisation"><p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap" data-sanity={ds("pageContact", "vertical_card_1")}>{t("pageContact", "vertical_card_1", "Je suis une organisation")}</p></Radio>
                <Radio value="personne" checked><p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap" data-sanity={ds("pageContact", "vertical_card_2")}>{t("pageContact", "vertical_card_2", "Je suis une personne ou un proche")}</p></Radio>
              </div>
              <Field first name="nom" required auto="name" l={t("pageContact", "champ_nom", "Nom")} p={t("pageContact", "champ_nom_exemple", "Votre nom")} />
              <Field first name="organisation" auto="organization" l={t("pageContact", "champ_organisation", "Organisation")} p={t("pageContact", "champ_organisation_exemple", "Votre organisation")} />
              <Field name="fonction" auto="organization-title" l={t("pageContact", "champ_fonction", "Fonction")} p={t("pageContact", "champ_fonction_exemple", "Votre Fonction")} />
              <Field name="email" type="email" required auto="email" l={t("pageContact", "champ_mail", "Mail")} p={t("pageContact", "champ_mail_exemple", "Votre Mail")} />
              <Field name="telephone" type="tel" auto="tel" l={t("pageContact", "champ_telephone", "Téléphone")} p={t("pageContact", "champ_telephone_exemple", "Votre Téléphone")} />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className={label} style={FV} data-sanity={ds("pageContact", "vertical_card_3")}>{t("pageContact", "vertical_card_3", "Votre besoin")}</p>
                <div className="relative shrink-0 w-full">
                  <select name="besoin" aria-label={t("pageContact", "champ_besoin", "Votre besoin")} defaultValue="" className={`${box} font-['Lexend:Regular'] font-normal leading-[1.3] text-[#090f0c] text-[18px] champ appearance-none cursor-pointer outline-none pr-[40px] focus:border-[#090f0c]`} data-sanity={ds("pageContact", "vertical_card_4")}>
                    <option value="" disabled>{t("pageContact", "vertical_card_4", "Sélectionnez votre besoin")}</option>
                    {[
                      t("pageContact", "besoin_option_1", "Accompagnement individuel"),
                      t("pageContact", "besoin_option_2", "Projet ou programme"),
                      t("pageContact", "besoin_option_3", "Sensibilisation des équipes"),
                      t("pageContact", "besoin_option_4", "Autre demande"),
                    ].map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <div className="absolute h-[6px] pointer-events-none right-[16px] top-[17px] w-[12px]" data-name="Flèche de liste">
                    <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]"><img alt="" className="block max-w-none size-full" src="/assets/select.svg" /></div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className={label} style={FV} data-sanity={ds("pageContact", "vertical_card_5")}>{t("pageContact", "vertical_card_5", "Message")} *</p>
                <textarea name="message" required placeholder={t("pageContact", "vertical_card_6", "Votre Message")} data-sanity={ds("pageContact", "vertical_card_6")} className="champ bg-[var(--white,white)] border border-[#c2c2c2] border-solid font-['Lexend:Regular'] font-normal h-[220px] leading-[1.3] outline-none overflow-auto p-[16px] placeholder:text-[rgba(9,15,12,0.5)] relative resize-y rounded-[4px] min-h-[220px] shrink-0 text-[#090f0c] text-[18px] w-full focus:border-[#090f0c]" />
                <p className="mention-medicale [word-break:break-word] bg-[var(--white,white)] border border-[var(--black-70\%,rgba(9,15,12,0.7))] border-solid font-['Lexend:Regular'] font-normal leading-[1.3] p-[16px] relative rounded-[4px] shrink-0 text-[16px] text-[#090f0c] text-pretty w-full" data-sanity={ds("pageContact", "mention_medicale")}>{t("pageContact", "mention_medicale", "Merci de ne pas transmettre d'informations médicales via ce formulaire. Nous les aborderons ensemble lors d'un échange.")}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <label className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center pt-px relative shrink-0">
                  <input type="checkbox" name="consentement" required className="appearance-none border border-[var(--black-70\%,rgba(9,15,12,0.7))] border-solid cursor-pointer m-0 relative shrink-0 size-[16px] checked:bg-[var(--black,#090f0c)] checked:border-[var(--black,#090f0c)]" />
                </div>
                <p className={`[word-break:break-word] flex-[1_0_0] font-['Lexend:Regular'] font-normal leading-[1.1] min-w-px relative text-[16px] ${black70} text-balance`} data-sanity={ds("pageContact", "vertical_card_7")}>{t("pageContact", "vertical_card_7", "J’accepte que les informations saisies soient utilisées pour répondre à ma demande. Pour en savoir plus, consultez la politique de confidentialité.")} *</p>
              </label>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit" className="bg-[var(--black,#090f0c)] border border-[#3a3f3d] border-solid content-stretch cursor-pointer flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--grey,#f2f2f2)] text-pretty whitespace-nowrap" data-sanity={ds("pageContact", "vertical_card_8")}>{t("pageContact", "vertical_card_8", "Envoyer le message")}</p>
              </button>
              <p data-form-status hidden className={`[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] ${black70} text-balance w-full`} data-ok={t("pageContact", "formulaire_succes", "Merci, votre message est bien envoyé. Je vous réponds au plus vite.")} data-ko={t("pageContact", "formulaire_erreur", "L’envoi n’a pas fonctionné. Vous pouvez m’écrire directement par e-mail.")} />
            </div>
          </form>
          <div className="absolute bottom-0 h-[1236px] left-[-123px] pointer-events-none top-[-168px]">
            <div className="content-stretch flex flex-col gap-[8px] h-[436px] items-center justify-center pb-[112px] pointer-events-auto pr-[40px] pt-[178px] sticky top-0 w-[561px]">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" style={FV} data-sanity={ds("pageContact", "vertical_card_9")}>{t("pageContact", "vertical_card_9", "Parlons de votre projet")}</p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
                  <p className={`[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] ${black70} text-pretty w-full`} data-sanity={ds("pageContact", "vertical_card_10")}>{t("pageContact", "vertical_card_10", "Un projet, une situation ou une question ? Que vous représentiez une organisation ou que vous cherchiez un accompagnement pour vous ou un proche, parlons de vos besoins.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text : me contacter autrement */}
      {/* FAQ : mêmes questions que la page Tarifs */}
      <Faq cta={false} />
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" style={FV} data-sanity={ds("pageContact", "text_1")}>{t("pageContact", "text_1", "Me contacter autrement")}</p>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[461px]">
              {[
                [t('pageContact', 'autrement_email', 'E-mail'), site.settings.email || 'sara.pezzarini@gmail.com'],
                [t('pageContact', 'autrement_telephone', 'Téléphone'), site.settings.phone || '06 10 05 71 09'],
                [t('pageContact', 'autrement_doctolib', 'Doctolib'), t('pageContact', 'autrement_doctolib_lien', 'Voir sur Doctolib')],
              ].map(([k, v], i) => (
                <div key={k} className="contents">
                  {i > 0 && <div className="bg-[rgba(9,15,12,0.2)] h-px relative shrink-0 w-full" />}
                  <div className={`[word-break:break-word] content-stretch flex font-['Lexend:Regular'] font-normal items-center justify-between leading-[1.3] relative shrink-0 text-[18px] ${black70} text-pretty w-full`}>
                    <p className="relative shrink-0 w-[120px]">{k}</p>
                    <a href={[`mailto:${v}`, `tel:${String(v).replace(/\s/g, '')}`, site.settings.doctolib || undefined][i]} {...(i === 2 ? { target: '_blank', rel: 'noopener' } : {})} className={`lien flex-[1_0_0] min-w-px relative text-right${i === 2 ? ' [text-underline-position:from-font] decoration-from-font decoration-solid underline' : ''}`}>{v}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* image-text : zone d'intervention */}
      <div className="bg-[#f2f2f2] content-stretch flex gap-[24px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-name="image-text">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px p-[40px] relative">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" style={FV} data-sanity={ds("pageContact", "image_text_1")}>{t("pageContact", "image_text_1", "Ma zone d’intervention")}</p>
            <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full">
              <div className={`[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] ${black70} w-[min-content]`}>
                <p className="leading-[1.3] mb-0 text-pretty" data-sanity={ds("pageContact", "image_text_2")}>{t("pageContact", "image_text_2", "Autour de Mézy-sur-Seine")}</p>
                <p className="leading-[1.3] text-pretty" data-sanity={ds("pageContact", "image_text_3")}>{t("pageContact", "image_text_3", "Yvelines, Val-d’Oise, Eure")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start p-[8px] relative shrink-0 w-[995px]">
          {/* map-clip : sans effet en desktop ; en mobile, cadre qui recadre la carte réduite */}
          <div className="map-clip w-full">
          <div className="h-[887px] overflow-clip relative shrink-0 w-full">
            <div className="absolute flex h-[887px] items-center justify-center left-0 top-0 w-[979px]">
              <div className="flex-none rotate-180">
                <div className="h-[887px] relative rounded-[8px] w-[979px]" data-name="image 10">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-zone.png" />
                    <div className="absolute inset-0 mix-blend-color rounded-[8px]" style={{ backgroundImage: "linear-gradient(129.8873323028124deg, rgb(239, 125, 79) 0%, rgb(214, 60, 92) 83.333%)" }} />
                    <div className="absolute bg-[rgba(255,154,77,0.45)] inset-0 mix-blend-soft-light rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
            <Img inset="15.51% 18.58% 15.4% 18.82%" pad="-0.19%" src="/assets/map-circle-outer.svg" />
            <Img inset="38.5% 39.4% 38.38% 39.65%" pad="-0.29%" src="/assets/map-circle-inner.svg" />
            <Img inset="27.07% 29.05% 26.96% 29.3%" pad="-0.14%" src="/assets/map-circle-mid.svg" />
            <Img inset="29.46% 19.78% 28.02% 9.19%" pad="-1.09% -0.59%" src="/assets/map-seine.svg" />
            <Img inset="28.8% 24.6% 46.87% 63.46%" pad="-1.09% -2.02%" src="/assets/map-oise.svg" />
            <MapText inset="47.93% 53.21% 49.81% 40.25%" size="15.321px" color={BLUE}>La Seine</MapText>
            <MapText inset="35.17% 26.02% 62.57% 69.38%" size="15.321px" color={BLUE}>{`L'Oise`}</MapText>
            <MapText inset="23.48% 30.73% 73.36% 58.55%" size="21.214px" color="#090f0c">Val-d’Oise</MapText>
            <MapText inset="74.64% 47.17% 22.21% 41.7%" size="21.214px" color="#090f0c">YVELINES</MapText>
            <MapText inset="57.36% 81.79% 39.48% 13.4%" size="21.214px" color="#090f0c">Eure</MapText>
            {dots.map(([d, t, name, c]) => (
              <div key={name} className="contents">
                <Img inset={d} src="/assets/map-dot.svg" />
                <MapText inset={t} size="15.321px" color={name === 'Magny-en-Vexin' ? '#3a2a22' : K70} center={c}>{name}</MapText>
              </div>
            ))}
            <Img inset="47.13% 47.23% 47.02% 47.47%" src="/assets/map-center-halo.svg" />
            <Img inset="48.86% 48.79% 48.75% 49.04%" pad="-8.33%" src="/assets/map-center.svg" />
            <MapText inset="43.55% 41.28% 53.3% 42.48%" size="21.214px" color="#090f0c">Mézy-sur-Seine</MapText>
            <MapText inset="79.55% 10.36% 18.19% 85.76%" size="15.321px" color={K70} center>Paris</MapText>
            <MapText inset="81.68% 9.91% 16.07% 85.4%" size="15.321px" color="rgba(42,42,42,0.6)" center>40 km</MapText>
            <Img inset="74.64% 13.16% 21.78% 81.42%" pad="-2.78% -1.67%" src="/assets/map-paris-arrow.svg" />
          </div>
          </div>
        </div>
      </div>

      <Footer />
      <Nav />
    </div>
  );
}
