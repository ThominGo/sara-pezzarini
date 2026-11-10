import { LegalLayout, RubriqueBloc } from './legal';
import type { ProjectCard } from './projets';

// Plan du site : pas de maquette, même mise en page que les pages légales (titre collant à gauche, rubriques à droite).
type Lien = { label: string; href: string };

function Liens({ items }: { items: Lien[] }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      {items.map((l) => (
        <a key={l.href + l.label} href={l.href} className="lien [word-break:break-word] block font-['Lexend:Regular'] font-normal leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--black-70\%,rgba(9,15,12,0.7))] text-pretty">
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Plan({ projets }: { projets: ProjectCard[] }) {
  const sections: { titre: string; items: Lien[] }[] = [
    {
      titre: 'Les pages',
      items: [
        { label: 'Accueil', href: '/' },
        { label: 'Mon approche', href: '/mon-approche' },
        { label: 'Pour qui', href: '/pour-qui' },
        { label: 'Projets', href: '/projets' },
        { label: 'Tarifs et financement', href: '/tarifs' },
        { label: 'Mon parcours', href: '/parcours' },
        { label: 'Me contacter', href: '/contact' },
      ],
    },
    { titre: 'Projets', items: projets.filter((p, i, a) => p.href !== '/projets' && a.findIndex((q) => q.href === p.href && q.title === p.title) === i).map((p) => ({ label: p.title, href: p.href })) },
    {
      titre: 'Informations',
      items: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'Politique de confidentialité', href: '/confidentialite' },
        { label: 'Plan du site', href: '/plan-du-site' },
      ],
    },
  ];
  return (
    <LegalLayout titre="Plan du site">
      {sections.filter((s) => s.items.length).map((s, i) => (
        <RubriqueBloc key={s.titre} r={{ titre: s.titre, texte: '' }} first={i === 0}>
          <Liens items={s.items} />
        </RubriqueBloc>
      ))}
    </LegalLayout>
  );
}
