import { sanityClient } from 'sanity:client';
import { getSecret } from 'astro:env/server';
import { defineQuery } from 'groq';
import { createImageUrlBuilder } from '@sanity/image-url';
import { PREVIEW } from './preview';

const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// En aperçu : lecture des brouillons avec un jeton (secret côté serveur, jamais envoyé au navigateur)
export function client() {
  if (!PREVIEW) return sanityClient;
  const token = getSecret('SANITY_API_READ_TOKEN');
  if (!token) throw new Error('SANITY_API_READ_TOKEN manquant pour la version aperçu');
  return sanityClient.withConfig({ token, perspective: 'drafts', useCdn: false });
}

// Si Sanity est injoignable ou vide, on garde les contenus de la maquette.
export async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await client().fetch<T>(query, params);
  } catch (e) {
    console.warn('[sanity] lecture impossible, contenu de la maquette utilisé :', (e as Error).message);
    return null;
  }
}

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{ email, phone, calendly, doctolib, zone, socials, formKey, analyticsToken }`);
export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)] | order(order asc, _createdAt asc){ _id, title, "slug": slug.current, cover }`
);
export const PROJECT_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{ _id, _type, title, cover, intro, contextTitle, contextText, steps[]{title, text, image}, blocks[]{title, text, image}, resultTitle, resultText, gallery }`
);
export const PAGES_QUERY = defineQuery(`*[_type in $types]`);

export type Settings = { email?: string; phone?: string; calendly?: string; doctolib?: string; zone?: string; socials?: { label?: string; url?: string }[]; formKey?: string; analyticsToken?: string };

export const getSettings = () => safeFetch<Settings>(SETTINGS_QUERY);
export const getProjects = () => safeFetch<any[]>(PROJECTS_QUERY);
export const getProject = (slug: string) => safeFetch<any>(PROJECT_QUERY, { slug });
