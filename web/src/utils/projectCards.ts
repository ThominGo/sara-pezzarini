import { defaultCards, type ProjectCard } from '../figma/projets';
import { getProjects, urlFor } from './sanity';

// Vignettes des projets (page Projets et push-project de l'accueil) : mêmes données partout.
// Styles des vignettes repris de la maquette, dans l'ordre.
export async function getProjectCards(): Promise<ProjectCard[]> {
  const projects = (await getProjects()) ?? [];
  return projects.length
    ? projects.map((p: any, i: number) => ({
        ...defaultCards[i % defaultCards.length],
        title: p.title,
        href: `/projets/${p.slug}`,
        image: p.cover ? urlFor(p.cover).width(1200).auto('format').url() : undefined,
      }))
    : defaultCards;
}
