/**
 * Site-wide facts. Change them here and every page picks them up.
 */
export const site = {
  name: 'Liliana Pona Jewellery',
  url: 'https://lilianaponajewellery.pt',

  /** Address that receives the contact form and newsletter sign-ups (also set in public/api/config.php). */
  email: 'geral@lilianaponajewellery.pt',

  /** Number behind the "Pedir informações" button on product pages (international format, digits only). */
  whatsapp: '351925020880',

  contacts: [
    { email: 'liliana.pona@lilianaponajewellery.pt', phone: '(+351) 913 820 352' },
    { email: 'vitor.sarmento@lilianaponajewellery.pt', phone: '(+351) 925 020 880' },
  ],

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100064028774112',
    instagram: 'https://www.instagram.com/lilianaponajewellery/',
  },

  /** Portuguese online complaints book: a legally required link. */
  complaintsBook: 'https://www.livroreclamacoes.pt/Inicio/',

  /** Credits in the footer's bottom bar. */
  credits: {
    design: 'Vitor Sarmento',
    development: 'Luis Sousa',
  },

  /**
   * Switches for parts of the shop that are not live yet.
   * - cart: header bag icon + the (always empty, for now) cart page.
   * There is no account icon: the site has no login. Add it back in HeaderActions.astro
   * (the "account" drawing is already in Icon.astro) when customer accounts exist.
   */
  features: {
    cart: true,
  },
} as const;
