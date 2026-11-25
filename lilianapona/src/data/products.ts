/**
 * The catalogue. One entry per product.
 *
 * To add a product:
 *   1. Put its photos in src/assets/images/products/<slug>/ named 1.png, 2.png, ... (1 is the main photo).
 *   2. Put the collection card photo in src/assets/images/collections/<slug>.jpg and, if the card has
 *      hand-lettering over the photo, the lettering in <slug>-lettering.png (optional).
 *   3. Add an entry below, in the order the pieces should appear on the Collections page.
 *      Every text block is a list of lines: each line starts on a new line on the page.
 *
 * Prices: `price: null` shows "(Preço sob consulta)" and the WhatsApp button, as the site does today.
 * A number (in euros) shows "€325 EUR" instead.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/routes';

type Localized<T> = Record<Lang, T>;
type Lines = string[];

export interface ProductText {
  /** Shown under the title on the collection card, e.g. "(Botões-de-Punho)". */
  cardLines: Lines;
  /** Shown under the title on the product page. */
  materialsLine: string;
  description: Lines;
  materials: Lines;
  care: Lines;
  size: Lines;
  shipping: Lines;
  contact: Lines;
}

export interface Product {
  slug: string;
  name: string;
  /** Collection the piece belongs to: shown in search results. */
  collection: string;
  /** Used by the collection card styles (lp-collection-card-<card>). */
  card: 'blue' | 'cat' | 'green' | 'black';
  /** Price in euros, or null for "price on request". */
  price: number | null;
  /** Extra words the search should match, in any language (e.g. the kind of piece). */
  keywords: string[];
  text: Localized<ProductText>;
}

const shippingPt: Lines = [
  'Devoluções gratuitas até 14 dias após receção. A peça deve ser devolvida em perfeitas condições e na embalagem original.',
  'Para mais informações consulte o regulamento das Políticas de Devolução.',
];
const shippingEn: Lines = [
  'Free returns up to 14 days after receipt. The piece must be returned in perfect condition and in its original packaging.',
  'For more information, please see our Returns Policy.',
];

export const products: Product[] = [
  {
    slug: 'blue-rock-ring',
    name: 'Blue Rock Ring',
    collection: 'Blue Rock',
    card: 'blue',
    // The client's mock-up shows €550; the site does not show prices yet (see the note at the top).
    price: null,
    keywords: ['anel', 'anéis', 'ring', 'rings', 'lápis-lazúli', 'lápis-lázuli', 'lapis lazuli', 'azul', 'blue', 'natal', 'christmas'],
    text: {
      pt: {
        cardLines: ['Prata/Prata banhada a Ouro'],
        materialsLine: 'Prata/ Prata Dourada/ Ouro',
        description: [
          'O céu de uma noite eterna. Com um design exclusivo, inspirado numa noite muito especial.',
          'Único, cada anel é trabalhado individualmente, o que faz com que seja irrepetível. Cada peça nasce com a sua própria textura, forma e carácter, tal como a pedra única moldada pela natureza. A força do contraste entre a prata dourada e a pedra lápis-lázuli confere-lhe uma presença poderosa e expressiva, tornando-a uma peça pensada para quem procura autenticidade, impacto e uma jóia verdadeiramente singular. Perfeito para dar um toque de elegância e sofisticação a qualquer look.',
          'Fabricado artesanalmente com mestria no Porto, Portugal.',
          'Adquira já o seu!',
        ],
        materials: [
          'Prata 925 banho de ouro.',
          'Pedra de origem Lápis-Lázuli selecionada',
          'pela sua forma e textura.',
          'Acabamento brilhante.',
          'Pedra: Lápis-Lázuli',
          'Peso total: 15g (Prata)',
        ],
        care: [
          'Evitar contacto com água, perfumes e produtos químicos. Limpar com pano macio e guardar no estojo. Garantia legal de 2 anos contra defeitos de fabrico.',
        ],
        size: [
          'Aro é ajustável, permitindo adaptar o anel confortavelmente entre as medidas 15 e 20. Uma solução versátil que garante um encaixe perfeito e confortável em diferentes tamanhos de dedos.',
        ],
        shipping: shippingPt,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Ligue para +351 913 820 352 (Chamada para a rede móvel nacional)',
        ],
      },
      en: {
        cardLines: ['Silver/Gold-plated silver'],
        materialsLine: 'Silver/ Gold-plated silver/ Gold',
        description: [
          'The sky of an eternal night. An exclusive design, inspired by a very special night.',
          'Each ring is worked individually, which makes it one of a kind. Every piece is born with its own texture, shape and character, like a unique stone shaped by nature. The strong contrast between the gilded silver and the lapis lazuli stone gives it a powerful, expressive presence, making it a piece for those who seek authenticity, impact and a truly singular jewel. Perfect for adding a touch of elegance and sophistication to any look.',
          'Handcrafted with mastery in Porto, Portugal.',
          'Get yours now!',
        ],
        materials: [
          '925 silver, gold plated.',
          'Lapis lazuli stone, selected',
          'for its shape and texture.',
          'Polished finish.',
          'Stone: lapis lazuli',
          'Total weight: 15 g (silver)',
        ],
        care: [
          'Avoid contact with water, perfumes and chemicals. Clean with a soft cloth and store in the case. 2-year legal warranty against manufacturing defects.',
        ],
        size: [
          'The band is adjustable, so the ring fits comfortably between sizes 15 and 20. A versatile solution that ensures a perfect, comfortable fit on different finger sizes.',
        ],
        shipping: shippingEn,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Call +351 913 820 352 (call to a Portuguese mobile network)',
        ],
      },
    },
  },
  {
    slug: 'cats-brooch',
    name: 'Cat’s Brooch',
    collection: 'Cat',
    card: 'cat',
    price: null,
    keywords: ['botões de punho', 'botão de punho', 'cufflinks', 'gato', 'cat'],
    text: {
      pt: {
        cardLines: ['(Botões-de-Punho)', 'Prata/Prata banhada a Ouro'],
        materialsLine: 'Prata/ Prata Dourada/ Ouro',
        description: [
          'Realce o seu estilo com os nossos Botões-de-Punho ousados e desafiantes em dourado. Este deslumbrante conjunto apresenta um design exclusivo, inspirado no gato, perfeitos para dar um toque de elegância e sofisticação a qualquer look. Fabricado artesanalmente com mestria no Porto, Portugal.',
          'Compre já!',
        ],
        materials: [
          'Prata 925 banho de ouro.',
          'Banho de alta qualidade para um brilho duradouro,',
          'resistência e durabilidade.',
          'Pedras de Ônix.',
          'Peso total: 6,2g (Prata)',
        ],
        care: [
          'Evitar contacto com água, perfumes e produtos químicos. Limpar com pano macio e guardar no estojo. Garantia legal de 2 anos contra defeitos de fabrico.',
        ],
        size: ['Tamanho universal para camisas com punho duplo. Sistema de fecho seguro e confortável.'],
        shipping: shippingPt,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Ligue para +351 913 820 352 (Chamada para a rede móvel nacional)',
        ],
      },
      en: {
        cardLines: ['(Cufflinks)', 'Silver/Gold-plated silver'],
        materialsLine: 'Silver/ Gold-plated silver/ Gold',
        description: [
          'Elevate your style with our bold, daring gold-tone cufflinks. This stunning set features an exclusive design inspired by the cat, perfect for adding a touch of elegance and sophistication to any look. Handcrafted with mastery in Porto, Portugal.',
          'Buy now!',
        ],
        materials: [
          '925 silver, gold plated.',
          'High-quality plating for a lasting shine,',
          'strength and durability.',
          'Onyx stones.',
          'Total weight: 6.2 g (silver)',
        ],
        care: [
          'Avoid contact with water, perfumes and chemicals. Clean with a soft cloth and store in the case. 2-year legal warranty against manufacturing defects.',
        ],
        size: ['Universal size for double-cuff shirts. Secure and comfortable fastening.'],
        shipping: shippingEn,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Call +351 913 820 352 (call to a Portuguese mobile network)',
        ],
      },
    },
  },
  {
    slug: 'green-rock-ring',
    name: 'Green Rock Ring',
    collection: 'Green Rock',
    card: 'green',
    price: null,
    keywords: ['anel', 'anéis', 'ring', 'rings'],
    text: {
      pt: {
        cardLines: ['Prata/Prata banhada a Ouro'],
        materialsLine: 'Prata/ Prata Dourada/ Ouro',
        description: [
          'Realce o seu estilo com este anel ousado e diferenciado em dourado. Com um design exclusivo, inspirado na força da natureza. Absolutamente único, cada anel é uma peça irrepetível nas suas formas orgânicas e as suas pedras vibrantes de cor turquesa.',
          'Para quem procura autenticidade, impacto e arte. Perfeito para dar um toque de elegância e sofisticação a qualquer look.',
          'Fabricado artesanalmente com mestria no Porto, Portugal.',
          'Compre já!',
        ],
        materials: [
          'Prata 925 com banho de ouro.',
          'Acabamento brilhante detalhado que realça',
          'a sua textura.',
          'Pedra: Geodo natural',
          'Peso total: 13g (Prata)',
        ],
        care: [
          'Evitar contacto com água, perfumes e produtos químicos. Guardar no estojo fornecido e limpar com pano suave. Garantia legal de 2 anos.',
        ],
        size: [
          'Aro é ajustável, permitindo adaptar o anel confortavelmente entre as medidas 15 e 20. Uma solução versátil que garante um encaixe perfeito e confortável em diferentes tamanhos de dedos.',
        ],
        shipping: shippingPt,
        contact: [
          'WhatsApp +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Ligue para +351 913 820 352 (Chamada para rede móvel nacional)',
        ],
      },
      en: {
        cardLines: ['Silver/Gold-plated silver'],
        materialsLine: 'Silver/ Gold-plated silver/ Gold',
        description: [
          'Elevate your style with this bold, distinctive gold-tone ring. An exclusive design inspired by the force of nature. Absolutely unique, each ring is a one-of-a-kind piece, with its organic shapes and vibrant turquoise-coloured stones.',
          'For those who seek authenticity, impact and art. Perfect for adding a touch of elegance and sophistication to any look.',
          'Handcrafted with mastery in Porto, Portugal.',
          'Buy now!',
        ],
        materials: [
          '925 silver, gold plated.',
          'Detailed polished finish that brings out',
          'its texture.',
          'Stone: natural geode',
          'Total weight: 13 g (silver)',
        ],
        care: [
          'Avoid contact with water, perfumes and chemicals. Store in the case provided and clean with a soft cloth. 2-year legal warranty.',
        ],
        size: [
          'The band is adjustable, so the ring fits comfortably between sizes 15 and 20. A versatile solution that ensures a perfect, comfortable fit on different finger sizes.',
        ],
        shipping: shippingEn,
        contact: [
          'WhatsApp +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Call +351 913 820 352 (call to a Portuguese mobile network)',
        ],
      },
    },
  },
  {
    slug: 'black-rock-ring',
    name: 'Black Rock Ring',
    collection: 'Black Rock',
    card: 'black',
    price: null,
    keywords: ['anel', 'anéis', 'ring', 'rings'],
    text: {
      pt: {
        cardLines: ['Prata/Prata banhada a Ouro'],
        materialsLine: 'Prata/ Prata Dourada/ Ouro',
        description: [
          'Realce o seu estilo com o nosso anel ousado e diferenciado em dourado. Com um design exclusivo, inspirado na força da natureza.',
          'Único, cada anel é trabalhado individualmente, o que faz com que seja irrepetível. Cada peça nasce com a sua própria textura, forma e carácter, tal como uma rocha única moldada pela natureza. A força do contraste entre o metal dourado e a pedra negra confere-lhe uma presença poderosa e expressiva, tornando-a uma peça pensada para quem procura autenticidade, impacto e uma jóia verdadeiramente singular. Perfeito para dar um toque de elegância e sofisticação a qualquer look.',
          'Fabricado artesanalmente com mestria no Porto, Portugal.',
          'Compre já!',
        ],
        materials: [
          'Prata 925 banho de ouro.',
          'Pedra de origem vulcânica selecionada pela',
          'sua forma e textura.',
          'Acabamento brilhante.',
          'Pedra: Basalto',
          'Peso total: 15g (Prata)',
        ],
        care: [
          'Evitar contacto com água, perfumes e produtos químicos. Limpar com pano macio e guardar no estojo. Garantia legal de 2 anos contra defeitos de fabrico.',
        ],
        size: [
          'Aro é ajustável, permitindo adaptar o anel confortavelmente entre as medidas 15 e 20. Uma solução versátil que garante um encaixe perfeito e confortável em diferentes tamanhos de dedos.',
        ],
        shipping: shippingPt,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Ligue para +351 913 820 352 (Chamada para a rede móvel nacional)',
        ],
      },
      en: {
        cardLines: ['Silver/Gold-plated silver'],
        materialsLine: 'Silver/ Gold-plated silver/ Gold',
        description: [
          'Elevate your style with our bold, distinctive gold-tone ring. An exclusive design inspired by the force of nature.',
          'Each ring is worked individually, which makes it one of a kind. Every piece is born with its own texture, shape and character, like a unique rock shaped by nature. The strong contrast between the golden metal and the black stone gives it a powerful, expressive presence, making it a piece for those who seek authenticity, impact and a truly singular jewel. Perfect for adding a touch of elegance and sophistication to any look.',
          'Handcrafted with mastery in Porto, Portugal.',
          'Buy now!',
        ],
        materials: [
          '925 silver, gold plated.',
          'Stone of volcanic origin, selected for',
          'its shape and texture.',
          'Polished finish.',
          'Stone: basalt',
          'Total weight: 15 g (silver)',
        ],
        care: [
          'Avoid contact with water, perfumes and chemicals. Clean with a soft cloth and store in the case. 2-year legal warranty against manufacturing defects.',
        ],
        size: [
          'The band is adjustable, so the ring fits comfortably between sizes 15 and 20. A versatile solution that ensures a perfect, comfortable fit on different finger sizes.',
        ],
        shipping: shippingEn,
        contact: [
          'WhatsApp: +351 913 820 352',
          'E-mail: liliana.pona@lilianaponajewellery.pt.',
          'vitor.sarmento@lilianaponajewellery.pt.',
          'Call +351 913 820 352 (call to a Portuguese mobile network)',
        ],
      },
    },
  },
];

/* ---------------------------------------------------------------------------
   Images: picked up automatically from the folders described at the top.
--------------------------------------------------------------------------- */

type ImageModule = { default: ImageMetadata };

const galleryFiles = import.meta.glob<ImageModule>('../assets/images/products/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
});
const cardFiles = import.meta.glob<ImageModule>('../assets/images/collections/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

/** Product photos in order: 1 is the main photo. */
export function productImages(slug: string): ImageMetadata[] {
  return Object.entries(galleryFiles)
    .filter(([file]) => file.includes(`/products/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod.default);
}

function cardFile(name: string): ImageMetadata | undefined {
  return Object.entries(cardFiles).find(([file]) => file.split('/').pop()?.split('.')[0] === name)?.[1].default;
}

/** Photo and, when there is one, hand-lettering overlay for the collection card. */
export function cardImages(slug: string): { photo: ImageMetadata; lettering?: ImageMetadata } {
  const photo = cardFile(slug);
  if (!photo) throw new Error(`Missing collection image "${slug}" in src/assets/images/collections/`);
  return { photo, lettering: cardFile(`${slug}-lettering`) };
}

export function getProduct(slug: string): Product {
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error(`Unknown product "${slug}"`);
  return product;
}

/** "€325 EUR", "€325,50 EUR", or null when the price is on request. */
export function formatPrice(price: number | null): string | null {
  if (price === null || price <= 0) return null;
  const whole = Number.isInteger(price);
  const formatted = price.toLocaleString('pt-PT', {
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  });
  return `€${formatted} EUR`;
}
