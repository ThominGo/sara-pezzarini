import { defaultCards, type ProjectCard } from '../figma/projets';
import { getProjects, urlFor } from './sanity';

// Vignettes des projets (page Projets et push-project de l'accueil) : mêmes données partout.
// Styles des vignettes repris de la maquette, dans l'ordre.
// Tolérant : une couverture vide ne doit pas faire échouer la génération du site
function coverUrl(c: any): string | undefined {
  if (!c?.asset) return undefined;
  try { return urlFor(c).width(1200).auto('format').url(); } catch { return undefined; }
}

export async function getProjectCards(): Promise<ProjectCard[]> {
  const projects = (await getProjects()) ?? [];
  return projects.length
    ? projects.map((p: any, i: number) => ({
        ...defaultCards[i % defaultCards.length],
        title: p.cardTitle || p.title,
        href: `/projets/${p.slug}`,
        image: coverUrl(p.cover),
      }))
    : defaultCards;
}
