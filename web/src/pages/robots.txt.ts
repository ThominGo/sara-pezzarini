import type { APIRoute } from 'astro';

// robots.txt : tout est fermé aux moteurs tant que le vrai domaine (PUBLIC_SITE_URL) n'est pas branché
export const prerender = true;
export const GET: APIRoute = ({ site }) => {
  const live = !!import.meta.env.PUBLIC_SITE_URL;
  const body = live
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
