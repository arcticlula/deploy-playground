/**
 * Languages and the URL of every page in each language.
 * To add a language: add it to `languages`, give every route a path, add a dictionary in ui.ts,
 * translate the content in src/data and src/content, and create the page files under src/pages/<lang>/.
 */
export const languages = ['pt', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'pt';

/** Label shown in the header switch (the live site labels English "UK"). */
export const langLabel: Record<Lang, string> = { pt: 'PT', en: 'UK' };

/** Value for <html lang> and hreflang. */
export const htmlLang: Record<Lang, string> = { pt: 'pt-PT', en: 'en-GB' };

export const routes = {
  home: { pt: '/', en: '/en/' },
  about: { pt: '/sobre/', en: '/en/about/' },
  products: { pt: '/produtos/', en: '/en/products/' },
  collections: { pt: '/colecoes/', en: '/en/collections/' },
  contact: { pt: '/contactos/', en: '/en/contact/' },
  wishlist: { pt: '/wishlist/', en: '/en/wishlist/' },
  cart: { pt: '/carrinho/', en: '/en/cart/' },
  privacy: { pt: '/politica-de-privacidade/', en: '/en/privacy-policy/' },
  returns: { pt: '/politica-de-devolucao-e-reembolso/', en: '/en/returns-and-refunds/' },
  terms: { pt: '/termos-e-condicoes/', en: '/en/terms-and-conditions/' },
  disputes: { pt: '/resolucao-de-litigios/', en: '/en/dispute-resolution/' },
  consumer: { pt: '/informacao-ao-consumidor/', en: '/en/consumer-information/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Pages whose text is a Markdown file in src/content/legal/<language>/<key>.md */
export const legalDocs = ['privacy', 'returns', 'terms', 'disputes', 'consumer'] as const satisfies readonly RouteKey[];
export type LegalDoc = (typeof legalDocs)[number];

/** Pages listed in the menus, in order. Their labels are in ui.ts under `nav`. */
export const mainNav = ['home', 'about', 'products', 'collections', 'contact'] as const satisfies readonly RouteKey[];

const productBase: Record<Lang, string> = { pt: '/produto/', en: '/en/product/' };

/**
 * Where the site lives: "" at the root of its domain (the real site), or a sub-path such as
 * "/deploy-playground/lilianapona" for a preview copy (set with SITE_BASE, see astro.config.mjs).
 * The addresses above never include it; links made with the functions below do.
 */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Puts the site's sub-path, if any, in front of an address that starts with "/". */
export function withBase(address: string): string {
  return `${base}${address}`;
}

/** Link to a page. */
export function path(key: RouteKey, lang: Lang): string {
  return withBase(routes[key][lang]);
}

/** Address of a product page without the sub-path: names the generated page. Links use productPath(). */
export function productRoute(slug: string, lang: Lang): string {
  return `${productBase[lang]}${slug}/`;
}

/** Link to a product page. */
export function productPath(slug: string, lang: Lang): string {
  return withBase(productRoute(slug, lang));
}

/** A page is identified either by a route key or by a product slug. */
export type PageRef = { route: RouteKey } | { product: string };

export function pagePath(page: PageRef, lang: Lang): string {
  return 'route' in page ? path(page.route, lang) : productPath(page.product, lang);
}
