import { ds } from '../utils/preview';
import { t } from '../utils/content';
import Nav from './components/Nav';

// Page 404 (Figma, Maquette - v2 : Erreur 404 228:10040). Classes copiées de la maquette,
// fond : une des formes de dégradé du site (même animation d'apparition que les heros).
const bric = { fontVariationSettings: '"opsz" 14, "wdth" 100' };

export default function Erreur404() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="404">
      <div className="hero-404 bg-[var(--grey,#f2f2f2)] content-stretch flex flex-col h-screen-fig items-start overflow-clip relative shrink-0 w-[1512px]" data-name="hero" data-hero>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px relative w-full">
            <div className="flex-none rotate-180 size-full">
              <div className="relative rounded-[8px] size-full" data-name="image 10">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <img alt="" className="gshape absolute inset-0 max-w-none size-full" src="/gradients/shape-push.png" />
                  <div className="absolute bg-[#917e95] inset-0 mix-blend-color rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] w-[704px]">
            <div role="heading" aria-level={1} className="[word-break:break-word] font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[80px] text-[color:var(--white,white)] text-center w-[min-content]" style={bric}>
              <p className="leading-none mb-0 text-balance" data-sanity={ds('page404', 'titre_1')}>{t('page404', 'titre_1', 'Erreur 404')}</p>
              <p className="leading-none text-balance" data-sanity={ds('page404', 'titre_2')}>{t('page404', 'titre_2', 'Page introuvable')}</p>
            </div>
            <a href="/" className="bg-[var(--white,white)] border border-[#c2c2c2] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[4px] shrink-0" data-name="Cta">
              <p className="[word-break:break-word] font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[#090f0c] text-[18px] text-pretty whitespace-nowrap" data-sanity={ds('page404', 'bouton')}>{t('page404', 'bouton', "Retour à l'accueil")}</p>
            </a>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
