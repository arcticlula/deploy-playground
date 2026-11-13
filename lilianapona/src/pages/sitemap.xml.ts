/**
 * /sitemap.xml: every public page in every language, with links to its translations.
 * Built from the same lists as the pages (src/i18n/routes.ts and src/data/products.ts),
 * so new pages and products appear here on their own. Cart and wishlist are left out:
 * they are personal pages and tell search engines not to list them.
 */
import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { site } from '../data/site';
import { defaultLang, htmlLang, languages, path, productPath, routes, type Lang, type RouteKey } from '../i18n/routes';

const leaveOut: RouteKey[] = ['cart', 'wishlist'];

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = astroSite ?? new URL(site.url);
  const absolute = (path: string) => new URL(path, origin).href;

  // Each entry: the address of one page in every language.
  const inEveryLanguage = (address: (lang: Lang) => string) =>
    Object.fromEntries(languages.map((lang) => [lang, address(lang)])) as Record<Lang, string>;

  const pages: Record<Lang, string>[] = [
    ...(Object.keys(routes) as RouteKey[])
      .filter((key) => !leaveOut.includes(key))
      .map((key) => inEveryLanguage((lang) => path(key, lang))),
    ...products.map((product) => inEveryLanguage((lang) => productPath(product.slug, lang))),
  ];

  const entries = pages.flatMap((page) =>
    languages.map((lang) =>
      [
        '  <url>',
        `    <loc>${absolute(page[lang])}</loc>`,
        ...languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${absolute(page[l])}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(page[defaultLang])}"/>`,
        '  </url>',
      ].join('\n'),
    ),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
