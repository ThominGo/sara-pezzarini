import { ds } from '../utils/preview';
import { content } from '../utils/content';
import Nav from './components/Nav';
import Footer from './components/Footer';
import type { Legal, Rubrique } from '../data/legal';

// Pages légales (Figma, Maquette - v2 : Mentions légales 257:3508, Politique de confidentialité 307:1760).
// Classes copiées de la maquette. Le plan du site reprend la même mise en page (sans maquette).
const bric = { fontVariationSettings: '"opsz" 14, "wdth" 100' };

function Lines({ texte, lien }: { texte: string; lien?: string }) {
  const lines = texte.split('\n');
  return (
    <div className="[word-break:break-word] flex-[1_0_0] font-['Lexend:Regular'] font-normal leading-[0] min-w-px relative text-[0px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))]">
      {lines.map((l, i) => {
        const cls = `leading-[1.3] ${i < lines.length - 1 ? 'mb-0 ' : ''}text-[18px] text-pretty`;
        if (lien && i === 0)
          return (
            <a key={i} href={lien} target="_blank" rel="noopener" className={`${cls} block lien text-[#090f0c] underline [text-underline-position:from-font] decoration-from-font decoration-solid`}>
              {l}
            </a>
          );
        return <p key={i} className={cls}>{l || '​'}</p>;
      })}
    </div>
  );
}

export function RubriqueBloc({ r, first, docId, i, children }: { r: Rubrique; first?: boolean; docId?: string; i?: number; children?: any }) {
  return (
    <div className={`content-stretch flex flex-col ${r.encadre ? 'gap-[24px] ' : ''}items-start overflow-clip relative shrink-0 w-full`} data-name="Rubrique">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className={`content-stretch flex flex-col ${first ? 'gap-[8px]' : 'gap-[16px]'} items-start justify-center relative shrink-0 w-full`} data-sanity={docId != null && i != null ? ds(docId, `rubriques[${i}]`) : undefined}>
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--black,#090f0c)] text-balance w-full" style={bric}>
            {r.titre}
          </p>
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">{children ?? <Lines texte={r.texte} lien={r.lien} />}</div>
        </div>
      </div>
      {r.encadre && (
        <div className="bg-[var(--white,white)] border border-[var(--black-70\%,rgba(9,15,12,0.7))] border-solid content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Encadré">
          <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black,#090f0c)] text-pretty w-full">{r.encadre}</p>
        </div>
      )}
    </div>
  );
}

export function LegalLayout({ titre, date, docId, children }: { titre: string; date?: string; docId?: string; children: any }) {
  // titre sur deux lignes comme dans la maquette (« Mentions / légales »)
  const words = titre.split(' ');
  const cut = titre.length <= 14 ? words.length : words.length > 2 ? 2 : 1;
  const l1 = words.slice(0, cut).join(' ');
  const l2 = words.slice(cut).join(' ');
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Légal">
      <div className="bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col items-center justify-center pb-[120px] pt-[220px] relative shrink-0 w-[1512px]" data-name="legal">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[942px]">
          <p aria-hidden className="[word-break:break-word] flex-[1_0_0] font-['Bricolage_Grotesque:Regular'] font-normal leading-none min-w-px relative text-[40px] text-[transparent] text-balance" style={bric}>
            {titre}
          </p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px overflow-clip relative" data-name="Rubriques">
            {children}
          </div>
          <div className="absolute bottom-0 left-[-123px] pointer-events-none top-[-196px]" data-name="Titre légal">
            <div className="content-stretch flex flex-col gap-[8px] h-[436px] items-center justify-center pb-[112px] pointer-events-auto pr-[40px] pt-[178px] sticky top-0 w-[561px]">
              <h1 className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[40px] text-[color:var(--black,#090f0c)] w-full whitespace-pre-wrap" style={bric} data-sanity={docId ? ds(docId, 'titre') : undefined}>
                <span className="block leading-none mb-0 text-balance">{l1}</span>
                {l2 && <span className="block leading-none text-balance">{l2}</span>}
              </h1>
              {date && (
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start pl-[120px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
                      <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty w-full" data-sanity={docId ? ds(docId, 'date') : undefined}>
                        {date}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Nav />
    </div>
  );
}

// Texte de la fiche Sanity si elle est remplie, sinon textes de la maquette
export function legalContent(type: string, fallback: Legal): Legal {
  const d = content[type];
  const rubriques = Array.isArray(d?.rubriques) && d.rubriques.length
    ? d.rubriques.map((r: any) => ({ titre: r.titre ?? '', texte: r.texte ?? '', encadre: r.encadre || undefined, lien: fallback.rubriques.find((f) => f.titre === r.titre)?.lien }))
    : fallback.rubriques;
  return { titre: d?.titre || fallback.titre, date: d?.date || fallback.date, rubriques };
}

export default function LegalPage({ type, fallback }: { type: string; fallback: Legal }) {
  const c = legalContent(type, fallback);
  return (
    <LegalLayout titre={c.titre} date={c.date} docId={type}>
      {c.rubriques.map((r, i) => (
        <RubriqueBloc key={i} r={r} first={i === 0} docId={type} i={i} />
      ))}
    </LegalLayout>
  );
}
