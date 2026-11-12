import { Fragment } from 'react';
import { ds } from '../utils/preview';
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

export default function Projets({ p = {} }: { p?: any }) {
  const hasData = !!p.title;
  const fallbackImages = ["/images/22638ffa4c.webp", "/images/3e60ebbcd7.webp", "/images/8076d6f385.webp", "/images/3e60ebbcd7.webp"];
  const mockSteps = [
    { title: "Comprendre le besoin", text: "Recueillir les difficultés rencontrées au quotidien par les participants et ce qu’ils attendent d’un outil." },
    { title: "Concevoir le support", text: "Choisir un format simple à prendre en main, puis classer les outils par difficulté." },
    { title: "Essayer et ajuster", text: "Tester le support en séance avec le public accompagné, recueillir les retours et ajuster." },
    { title: "Partager et accompagner", text: "Présenter l’outil lors d’une séance dédiée et accompagner chacun dans son usage." },
  ];
  // Sections facultatives : elles n'apparaissent que si le projet les renseigne (études de cas incomplètes possibles)
  const steps: any[] = hasData ? (p.steps ?? []).filter((s: any) => s?.title || s?.text) : mockSteps;
  const blocks: any[] = hasData ? (p.blocks ?? []).filter((b: any) => b?.title || b?.text) : [];
  const gallery: any[] = hasData ? (p.gallery ?? []).filter((g: any) => g?.imageUrl) : [];
  const others: any[] = p.others ?? [];
  const lower = (s: string, i: number) => (i ? s.charAt(0).toLowerCase() + s.slice(1) : s);
  const fiche: [string, string][] = hasData
    ? ([
        Array.isArray(p.public) && p.public.length ? ["Public", p.public.filter((x: any) => typeof x === "string").map(lower).join(", ")] : null,
        p.with ? ["Avec qui", p.with] : null,
        p.duration ? ["Durée", p.duration] : null,
      ].filter(Boolean) as [string, string][])
    : [];
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative size-full" data-node-id="414:6985" data-name="Projets">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[24px] h-[862px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6986" data-name="image-text">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px p-[40px] relative" data-node-id="I414:6986;196:5463">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I414:6986;196:5464">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="I414:6986;196:5465">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="I414:6986;196:5466" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, "title", "project")}>
                {p.title ?? "Répertoire d’outils d’autonomie pour adultes ayant un TSA"}
              </p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="I414:6986;196:5467">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I414:6986;196:5468">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:6986;196:5469" data-sanity={ds(p._id, "intro", "project")}>{p.intro ?? `Beaucoup d’adultes avec un TSA, diagnostiqués récemment ou de longue date, manquent d’un support clair et accessible pour comprendre leurs difficultés au quotidien (attention, planification, fatigue…) et trouver des stratégies adaptées. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start p-[8px] relative shrink-0 w-[995px]" data-node-id="I414:6986;196:5471">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-node-id="I414:6986;196:5472">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10" data-sanity={ds(p._id, "cover", "project")}>
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                    <img fetchPriority="high" alt="" className="absolute h-[313.35%] left-[-18.09%] max-w-none top-[-120.81%] w-[216.62%]" src={p.coverUrl ?? "/images/f367c067a6.webp"} />
                  </div>
                  <div className="absolute bg-[#7e8195] inset-0 mix-blend-color rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {fiche.length > 0 && (
        <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center py-[56px] relative shrink-0 w-[1512px]" data-name="fiche">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1190px]">
            {fiche.map(([label, value]) => (
              <div key={label} className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-sanity={ds(p._id, label === "Public" ? "public" : label === "Avec qui" ? "with" : "duration", "project")}>
                <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap">{label}</p>
                </div>
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-node-id="414:6987" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]" data-node-id="I414:6987;146:4290">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" data-node-id="I414:6987;146:4291" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, "contextTitle", "project")}>
            {p.contextTitle ?? "Rendre les séances de psychoéducation plus concrètes"}
          </p>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full" data-node-id="I414:6987;146:4292">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="I414:6987;146:4293" data-sanity={ds(p._id, "contextText", "project")}>
              {p.contextText ?? "Dans le cadre de séances de psychoéducation menées en collaboration avec le centre expert TSA de l’hôpital André-Mignot, j’ai conçu, avec un psychologue du centre expert, un répertoire thématique et cliquable : chaque difficulté renvoie à des outils concrets (stratégies, applications, méthodes d’organisation) testés avec le public accompagné en SAMSAH ou créés pour l’occasion."}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:6988" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]" data-node-id="414:6989">
          <div aria-hidden className="flex-[1_0_0] min-w-px" />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative">
            {steps.map((s: any, i: number) => (
              <Fragment key={i}>
                {i > 0 && <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" />}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
                <div className="flex items-center justify-center relative shrink-0 w-full">
                  <div className="-scale-y-100 flex-none rotate-180 w-full">
                    <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13" data-sanity={ds(p._id, `steps[_key=="${s._key}"].image`, "project")}>
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={s.imageUrl ?? fallbackImages[i % fallbackImages.length]} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, `steps[_key=="${s._key}"].title`, "project")}>
                    {s.title}
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-sanity={ds(p._id, `steps[_key=="${s._key}"].text`, "project")}>
                    {s.text}
                  </p>
                </div>
              </div>
              <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[-24px] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-0 w-[226px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="absolute bottom-0 h-[2795px] left-[-123px] pointer-events-none top-[-400px]" data-node-id="414:7018">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pb-[112px] pointer-events-auto pr-[40px] pt-[400px] sticky top-0 w-[561px]">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7019" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                La démarche
              </p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7020">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7021">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:7022">
                    Comment le projet s’est déroulé, étape par étape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {blocks[0] && (
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7024" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:7025">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:7026">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7027">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:7028">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:7029" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, `blocks[_key=="${blocks[0]._key}"].title`, "project")}>
                  {blocks[0].title}
                </p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7030">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7031">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:7032" data-sanity={ds(p._id, `blocks[_key=="${blocks[0]._key}"].text`, "project")}>{blocks[0].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:7033" data-name="wrapper">
          <div className="bg-[#d9d9d9] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7034" data-name="bg" data-sanity={ds(p._id, `blocks[_key=="${blocks[0]._key}"].image`, "project")}>{blocks[0].imageUrl && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={blocks[0].imageUrl} />}</div>
        </div>
      </div>
      )}
      {blocks[1] && (
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7035" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:7036" data-name="wrapper">
          <div className="bg-[#d9d9d9] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7037" data-name="bg" data-sanity={ds(p._id, `blocks[_key=="${blocks[1]._key}"].image`, "project")}>{blocks[1].imageUrl && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={blocks[1].imageUrl} />}</div>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:7038">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:7039">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7040">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:7041">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:7042" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, `blocks[_key=="${blocks[1]._key}"].title`, "project")}>
                  {blocks[1].title}
                </p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7043">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7044">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:7045" data-sanity={ds(p._id, `blocks[_key=="${blocks[1]._key}"].text`, "project")}>{blocks[1].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-node-id="414:7046" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]" data-node-id="414:7047">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="414:7048">
            <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-node-id="414:7049">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="414:7050">
                Résultat
              </p>
            </div>
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" data-node-id="414:7051" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, "resultTitle", "project")}>
              {p.resultTitle ?? "Un outil apprécié des participants et utilisé au-delà des séances prévues"}
            </p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full" data-node-id="414:7052">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="414:7053" data-sanity={ds(p._id, "resultText", "project")}>
              {p.resultText ?? "Plusieurs retours par mail soulignent son usage concret face à des situations du quotidien, comme la fatigue. D’après les retours, il leur permet de pouvoir trouver des outils ou des stratégies en fonction de certaines problématiques spécifiques sans se perdre dans les distractions que peut proposer internet. Certains se disent soulagés d’avoir cet outil dans leur téléphone en cas de besoin."}
            </p>
          </div>
        </div>
      </div>
      {p.citation?.texte && (
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap">
                Retour
              </p>
            </div>
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[900px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, "citation.texte", "project")}>
              « {p.citation.texte} »
            </p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-sanity={ds(p._id, "citation.auteur", "project")}>
              {p.citation.auteur}
            </p>
          </div>
        </div>
      </div>
      )}
      {gallery.length > 0 && (
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:7054" data-name="slider">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1190px]" data-node-id="I414:7054;146:4446">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="I414:7054;146:4447">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[440px]" data-node-id="I414:7054;146:4448" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, "galleryTitle", "project")}>
              {p.galleryTitle ?? "Captures et photos"}
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I414:7054;146:4449">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center opacity-40 overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:7054;146:4450" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:7054;146:4450;133:3473">
                  Précédent
                </p>
              </div>
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-node-id="I414:7054;146:4451" data-name="Cta">
                <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty whitespace-nowrap" data-node-id="I414:7054;146:4451;133:3433">
                  Suivant
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="I414:7054;146:4452">
            {gallery.map((g: any, i: number) => (
              <Fragment key={i}>
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="bg-[#d9d9d9] col-1 h-[425px] ml-0 mt-0 relative overflow-clip rounded-[8px] row-1 w-[340px]" data-name="image 13" data-sanity={ds(p._id, `gallery[_key=="${g._key}"].image`, "project")}>{g.imageUrl && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={g.imageUrl} />}</div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }} data-sanity={ds(p._id, `gallery[_key=="${g._key}"].title`, "project")}>
                    {g.title}
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-sanity={ds(p._id, `gallery[_key=="${g._key}"].text`, "project")}>
                    {g.text}
                  </p>
                </div>
              </div>
            </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      )}
      {others.length >= 2 && (
      <div className="bg-[#f2f2f2] content-stretch flex h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7055" data-name="image-text">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px mr-[-8px] p-[8px] relative" data-node-id="414:7056" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip p-[40px] relative rounded-[8px] w-full" data-node-id="414:7057" data-name="bg">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src="/images/a935537276.webp" />
              <div className="absolute bg-[#958a7e] inset-0 mix-blend-color rounded-[8px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="414:7058">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] h-[144px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-node-id="414:7059" data-name="Bouton">
                <div className="flex h-full items-center justify-center relative shrink-0" data-node-id="414:7060">
                  <div className="-scale-y-100 flex-none h-full rotate-180">
                    <div className="h-full relative rounded-[4px] w-[121px]" data-name="image 13">
                      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src="/images/a935537276.webp" />
                        <div className="absolute bg-[#958a7e] inset-0 mix-blend-color rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px p-[8px] relative" data-node-id="414:7061">
                  <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7062" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    {others[0].title}
                  </p>
                </div>
              </div>
              <Cta href={others[0].href} className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-full" label="Voir le projet" variants="secondary" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[8px] relative" data-node-id="414:7064" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7065" data-name="bg">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src="/images/61c0fecc5b.webp" />
              <div className="absolute bg-[#788d9a] inset-0 mix-blend-color rounded-[8px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="414:7066">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] h-[144px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-node-id="414:7067" data-name="Bouton">
                <div className="flex h-full items-center justify-center relative shrink-0" data-node-id="414:7068">
                  <div className="-scale-y-100 flex-none h-full rotate-180">
                    <div className="h-full relative rounded-[4px] w-[121px]" data-name="image 13">
                      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src="/images/61c0fecc5b.webp" />
                        <div className="absolute bg-[#788d9a] inset-0 mix-blend-color rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px p-[8px] relative" data-node-id="414:7069">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] min-h-px relative text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7070" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    {others[1].title}
                  </p>
                </div>
              </div>
              <Cta href={others[1].href} className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-full" label="Voir le projet" variants="secondary" />
            </div>
          </div>
        </div>
      </div>
      )}
      <PushContact />
      <Footer />
      <Nav />
    </div>
  );
}