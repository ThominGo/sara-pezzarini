// Typographie française : espace insécable avant « : ; ! ? » et dans les guillemets, pour qu'un signe ne passe jamais seul à la ligne.
export const nbsp = (s: string) => s.replace(/[  ]+([:;!?»])/g, ' $1').replace(/«[  ]+/g, '« ');

// Applique nbsp à tous les textes d'un objet, sauf identifiants, adresses et images.
const SKIP = /^(_id|_key|_type|_ref|slug|href|url|image|cover|asset|theme)$|Url$/;
export function nbspDeep<T>(v: T, key = ''): T {
  if (typeof v === 'string') return (SKIP.test(key) ? v : nbsp(v)) as any;
  if (Array.isArray(v)) return v.map((x) => nbspDeep(x, key)) as any;
  if (v && typeof v === 'object') {
    if ('asset' in (v as any)) return v;
    return Object.fromEntries(Object.entries(v as any).map(([k, x]) => [k, nbspDeep(x, k)])) as any;
  }
  return v;
}
