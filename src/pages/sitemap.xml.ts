import type { APIRoute } from 'astro';
import { LOCALES } from '../config';

// One entry per page and language, with the alternates that tell search engines the translations.
const PATHS = ['/', '/privacy/'];
const LASTMOD = '2026-11-13';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://jobshell.dev');
  const urls = LOCALES.flatMap((locale) =>
    PATHS.map((path) => {
      const loc = new URL(`/${locale}${path}`, base).href;
      const alternates = LOCALES.map(
        (other) => `    <xhtml:link rel="alternate" hreflang="${other}" href="${new URL(`/${other}${path}`, base).href}" />`,
      ).join('\n');
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n${alternates}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
