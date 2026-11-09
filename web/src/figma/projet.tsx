import { ds } from '../utils/preview';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PushContact from './components/PushContact';


type CtaProps = {
  className?: string;
  label?: string;
  state?: "default";
  variants?: "primary" | "secondary";
};

function Cta({ className, label = "button label", state = "default", variants = "primary" }: CtaProps) {
  const isSecondary = variants === "secondary";
  return (
    <div className={className || `border border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] ${isSecondary ? "bg-[var(--white,white)] border-[#c2c2c2]" : "bg-[var(--black,#090f0c)] border-[#3a3f3d]"}`} id={isSecondary ? "node-133_3436" : "node-133_3437"}>
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
    </div>
  );
}

export default function Projets({ p = {} }: { p?: any }) {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative size-full" data-node-id="414:6985" data-name="Projets">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[24px] h-[862px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:6986" data-name="image-text">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px p-[40px] relative" data-node-id="I414:6986;196:5463">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I414:6986;196:5464">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="I414:6986;196:5465">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="I414:6986;196:5466" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
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
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                    <img alt="" className="absolute h-[313.35%] left-[-18.09%] max-w-none top-[-120.81%] w-[216.62%]" src={p.coverUrl ?? "/images/f367c067a6.webp"} />
                  </div>
                  <div className="absolute bg-[#7e8195] inset-0 mix-blend-color rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-node-id="414:6987" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]" data-node-id="I414:6987;146:4290">
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" data-node-id="I414:6987;146:4291" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            {p.contextTitle ?? "Lorem ipsum dolore ergothérapeute et j’ai plus internet mais tu écrit ce que tu veux"}
          </p>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full" data-node-id="I414:6987;146:4292">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="I414:6987;146:4293">
              {p.contextText ?? "Dans le cadre de séances de psychoéducation menées en collaboration avec le centre expert TSA de l’hopital de Mignot, j’ai conçu, avec un psychologue du centre expert, un répertoire thématique et cliquable : chaque difficulté renvoie à des outils concrets (stratégies, applications, méthodes d’organisation) testés avec le public accompagné en SAMSAH ou créés pour l’occasion."}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:6988" data-name="vertical-card">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]" data-node-id="414:6989">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" data-node-id="414:6990" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            Trois façons de travailler ensemble
          </p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-w-px relative" data-node-id="414:6991">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="414:6992">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="414:6993">
                <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="414:6994">
                  <div className="-scale-y-100 flex-none rotate-180 w-full">
                    <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={p.steps?.[0]?.imageUrl ?? "/images/22638ffa4c.webp"} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:6995">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:6996" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    {p.steps?.[0]?.title ?? "Comprendre le besoin"}
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:6997">
                    {p.steps?.[0]?.text ?? "Besoins et attentes des personnes concernées : texte à venir."}
                  </p>
                </div>
              </div>
              <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[-24px] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-0 w-[226px]" data-node-id="414:6998" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                01
              </p>
              <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[-24px] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-[637px] w-[226px]" data-node-id="414:6999" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                02
              </p>
              <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[-24px] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-[1274px] w-[226px]" data-node-id="414:7000" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                03
              </p>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:7001" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7002">
              <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="414:7003">
                <div className="-scale-y-100 flex-none rotate-180 w-full">
                  <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={p.steps?.[1]?.imageUrl ?? "/images/3e60ebbcd7.webp"} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:7004">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7005" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  {p.steps?.[1]?.title ?? "Concevoir le support"}
                </p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:7006">
                  {p.steps?.[1]?.text ?? "Choix du format et principes du jeu : texte à venir."}
                </p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-node-id="414:7007" />
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7008">
              <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="414:7009">
                <div className="-scale-y-100 flex-none rotate-180 w-full">
                  <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={p.steps?.[2]?.imageUrl ?? "/images/8076d6f385.webp"} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:7010">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7011" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  {p.steps?.[2]?.title ?? "Essayer et ajuster"}
                </p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:7012">
                  {p.steps?.[2]?.text ?? "Modalités d’essai et adaptations éventuelles : texte à venir."}
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7013">
              <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="414:7014">
                <div className="-scale-y-100 flex-none rotate-180 w-full">
                  <div className="aspect-[459/459] relative rounded-[8px] size-full" data-name="image 13">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={p.steps?.[3]?.imageUrl ?? "/images/3e60ebbcd7.webp"} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="414:7015">
                <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7016" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  {p.steps?.[3]?.title ?? "Partager et accompagner"}
                </p>
                <p className="font-['Lexend:Regular'] leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:7017">
                  {p.steps?.[3]?.text ?? "Modalités de transmission et d’accompagnement : texte à venir."}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-[2795px] left-[-123px] pointer-events-none top-[-400px]" data-node-id="414:7018">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pb-[112px] pointer-events-auto pr-[40px] pt-[400px] sticky top-0 w-[561px]">
              <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7019" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                La démarche
              </p>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7020">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7021">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-node-id="414:7022">
                    Trame d’étude de cas à renseigner : ces étapes ne décrivent pas encore le déroulement réel du projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] left-[calc(33.33%+240px)] text-[24px] text-[color:var(--black,#090f0c)] text-balance text-right top-[2007px] w-[226px]" data-node-id="414:7023" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          04
        </p>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7024" data-name="image-text">
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:7025">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:7026">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7027">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:7028">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:7029" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  {p.blocks?.[0]?.title ?? "Un jeu qui permet de pouvoir exprimer ses difficultés et trouver des solutions"}
                </p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7030">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7031">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:7032">{p.blocks?.[0]?.text ?? `Ce répertoire est présenté lors d’une séance de psychoéducation nommée : comment gérer mon fonctionnement au quotidien. Pour rendre cette séance dynamique et permettre aux participants d’être acteur, nous avons créé un jeu qui permet à chacun de pouvoir exprimer ses difficultés et pouvoir trouver des solutions grâce aux autres ou aux outils créés (répertoire d’outils, classeurs mis à disposition pour inspirer des réponses). `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:7033" data-name="wrapper">
          <div className="bg-[#d9d9d9] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7034" data-name="bg" />
        </div>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[16px] h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7035" data-name="image-text">
        <div className="content-stretch flex flex-col h-[903px] items-start p-[8px] relative shrink-0 w-[753px]" data-node-id="414:7036" data-name="wrapper">
          <div className="bg-[#d9d9d9] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7037" data-name="bg" />
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center p-[40px] relative shrink-0 w-[744px]" data-node-id="414:7038">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="414:7039">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="414:7040">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="414:7041">
                <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[465px]" data-node-id="414:7042" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                  {p.blocks?.[1]?.title ?? "Construction de séance sur l’insertion professionnelle"}
                </p>
              </div>
              <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full" data-node-id="414:7043">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="414:7044">
                  <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[535px]" data-node-id="414:7045">{p.blocks?.[1]?.text ?? `Six mois de préparation, puis trois sessions de psychoéducation pour 8 adultes par sessions. J’ai pu également participer à la construction d’une autre séance en lien avec une psychiatre sur le thème de l’insertion professionnelle. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[140px] relative shrink-0 w-[1512px]" data-node-id="414:7046" data-name="text">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1190px]" data-node-id="414:7047">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="414:7048">
            <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-node-id="414:7049">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.1] relative shrink-0 text-[16px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="414:7050">
                Résultalt
              </p>
            </div>
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[673px]" data-node-id="414:7051" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
              {p.resultTitle ?? "Un outil apprécié des participants et utilisé au-delà des séances prévues"}
            </p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[122px] relative shrink-0 w-full" data-node-id="414:7052">
            <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[461px]" data-node-id="414:7053">
              {p.resultText ?? "Plusieurs retours par mail soulignent son usage concret face à des situations du quotidien, comme la fatigue. D’après les retours, il leur permet de pouvoir trouver des outils ou des stratégies en fonction de certaines problématiques spécifiques sans se perdre dans les distractions que peut proposé internet. Certains se disent soulagés d’avoir cet outil dans leur téléphone en cas de besoin."}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-[1512px]" data-node-id="414:7054" data-name="slider">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1190px]" data-node-id="I414:7054;146:4446">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="I414:7054;146:4447">
            <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-none relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] text-balance w-[440px]" data-node-id="I414:7054;146:4448" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
              Photos de l’outil
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
            <div className="flex flex-row items-center self-stretch" data-node-id="I414:7054;146:4453">
              <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I414:7054;146:4454">
                  <div className="bg-[#d9d9d9] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="I414:7054;146:4455" data-name="image 13" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:7054;146:4458">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:7054;146:4459" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    Stages
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:7054;146:4460">
                    SAMSAH TC 40
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="I414:7054;146:4461">
              <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I414:7054;146:4462">
                  <div className="bg-[#d9d9d9] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="I414:7054;146:4463" data-name="image 13" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:7054;146:4466">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:7054;146:4467" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    EHPAD
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:7054;146:4468">
                    Jeanne Mauléon
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="I414:7054;146:4469">
              <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I414:7054;146:4470">
                  <div className="bg-[#d9d9d9] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="I414:7054;146:4471" data-name="image 13" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:7054;146:4474">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:7054;146:4475" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    Psychiatrie GHNE
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:7054;146:4476">
                    Service de psychiatrie du GHNE
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="I414:7054;146:4477">
              <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[340px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I414:7054;146:4478">
                  <div className="bg-[#d9d9d9] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[340px]" data-node-id="I414:7054;146:4479" data-name="image 13" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-full" data-node-id="I414:7054;146:4482">
                  <p className="font-['Bricolage_Grotesque:Regular'] leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance whitespace-nowrap" data-node-id="I414:7054;146:4483" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    SAMSAH spécialisé TSA
                  </p>
                  <p className="font-['Lexend:Regular'] leading-[1.3] min-w-full relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-[min-content]" data-node-id="I414:7054;146:4484">
                    SAMSAH spécialisé TSA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex h-[903px] items-center overflow-clip relative shrink-0 w-full" data-node-id="414:7055" data-name="image-text">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px mr-[-8px] p-[8px] relative" data-node-id="414:7056" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip p-[40px] relative rounded-[8px] w-full" data-node-id="414:7057" data-name="bg">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src="/images/a935537276.webp" />
              <div className="absolute bg-[#958a7e] inset-0 mix-blend-color rounded-[8px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="414:7058">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] h-[144px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[320px]" data-node-id="414:7059" data-name="Bouton">
                <div className="flex h-full items-center justify-center relative shrink-0" data-node-id="414:7060">
                  <div className="-scale-y-100 flex-none h-full rotate-180">
                    <div className="h-full relative rounded-[4px] w-[121px]" data-name="image 13">
                      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                        <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src="/images/a935537276.webp" />
                        <div className="absolute bg-[#958a7e] inset-0 mix-blend-color rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px p-[8px] relative" data-node-id="414:7061">
                  <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7062" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    Plan 3D d’aménagement de chambre pour une personne autiste
                  </p>
                </div>
              </div>
              <Cta className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-full" label="Voir le projet" variants="secondary" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[8px] relative" data-node-id="414:7064" data-name="wrapper">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[120px] py-[40px] relative rounded-[8px] w-full" data-node-id="414:7065" data-name="bg">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src="/images/61c0fecc5b.webp" />
              <div className="absolute bg-[#788d9a] inset-0 mix-blend-color rounded-[8px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="414:7066">
              <div className="bg-[var(--white,white)] border border-[#ccc] border-solid content-stretch flex gap-[4px] h-[144px] items-start overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[320px]" data-node-id="414:7067" data-name="Bouton">
                <div className="flex h-full items-center justify-center relative shrink-0" data-node-id="414:7068">
                  <div className="-scale-y-100 flex-none h-full rotate-180">
                    <div className="h-full relative rounded-[4px] w-[121px]" data-name="image 13">
                      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                        <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src="/images/61c0fecc5b.webp" />
                        <div className="absolute bg-[#788d9a] inset-0 mix-blend-color rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px p-[8px] relative" data-node-id="414:7069">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] min-h-px relative text-[18px] text-[color:var(--black,#090f0c)] text-balance w-full" data-node-id="414:7070" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                    Sensibilisation au TSA en milieu professionnel
                  </p>
                </div>
              </div>
              <Cta className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0 w-full" label="Voir le projet" variants="secondary" />
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