/**
 * Interface text in every language.
 * `pt` is the source of truth: `en` must have exactly the same keys (TypeScript checks this).
 * Strings whose key ends in "Html" may contain markup and are rendered as HTML.
 */
import type { Lang } from './routes';

const pt = {
  meta: {
    siteName: 'Liliana Pona Jewellery',
    defaultDescription:
      'Joias únicas e exclusivas, feitas à mão no Porto. Peças de joalharia e ourivesaria de autor em prata e ouro.',
  },

  skipToContent: 'Saltar para o conteúdo',

  nav: {
    home: 'Home',
    about: 'Sobre',
    products: 'Produtos',
    collections: 'Coleções',
    contact: 'Contacto',
  },

  header: {
    menu: 'Menu',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
    search: 'Pesquisar',
    account: 'A minha conta',
    wishlist: 'Favoritos',
    cart: 'Carrinho',
  },

  hero: {
    taglineAlt: 'Handmade just for you',
  },

  cta: {
    lines: [
      'Joias que contam histórias,',
      'evocam momentos significativos na vida das pessoas.',
      'Uma joia que pode passar de geração em geração,',
      'perpetuando laços de família, amizade e afeto.',
    ],
    heading: 'Ofereça joias.',
    link: 'Descobrir coleção',
    boxAlt: 'Caixa Liliana Pona Jewellery',
  },

  footer: {
    aboutHtml:
      'A Liliana<strong>Pona</strong> - Jewellery nasceu com o propósito de refletir a singularidade, sofisticação e autenticidade presentes em cada uma das suas peças de joalharia e ourivesaria. Desde o início, procuramos desenvolver uma identidade visual que traduzisse os valores de exclusividade, artesanato de alta qualidade e criatividade autoral, pilares essenciais para diferenciar a marca no mercado de luxo e design.',
    support: 'Assistência',
    privacy: 'Política de privacidade',
    returnsHtml: 'Política de devolução <br>e reembolso',
    terms: 'Termos e condições',
    disputes: 'Resolução de litígios',
    consumer: 'Informação ao consumidor',
    complaintsBook: 'Livro de reclamações',
    follow: 'Siga-nos',
    newsletterTitle: 'Não perca nada',
    newsletterText: 'Subscreva a nossa newsletter para estar a par de todas as novidades.',
    emailPlaceholder: 'Email',
    subscribe: 'Subscrever',
    consent: 'Aceito receber emails de marketing, novidades e ofertas especiais.',
    newsletterOk: 'Subscrição enviada com sucesso.',
    newsletterError: 'Não foi possível enviar a subscrição. Tente novamente.',
    copyright: 'LilianaPona-Jewellery ®, todos os direitos reservados.',
    design: 'Design',
    development: 'Desenvolvimento Web',
    fundingAlt: 'Logótipos de financiamento',
  },

  search: {
    dialogLabel: 'Pesquisar produtos',
    close: 'Fechar pesquisa',
    kicker: 'Liliana Pona Jewellery',
    title: 'O que procura?',
    placeholder: 'Pesquisar peça, coleção...',
    submit: 'Pesquisar',
    suggestionsLabel: 'Sugestões de pesquisa',
    suggestions: [
      { label: 'Anéis', term: 'anel' },
      { label: 'Colares', term: 'colar' },
      { label: 'Braceletes', term: 'bracelete' },
      { label: 'Botões de punho', term: 'botões de punho' },
    ],
    resultOne: '1 resultado encontrado',
    resultMany: '{n} resultados encontrados',
    emptyTitle: 'Nenhuma peça encontrada',
    emptyText: 'Experimente pesquisar por anel, colar, bracelete, coleção ou botões de punho.',
  },

  carousel: {
    previous: 'Anterior',
    next: 'Seguinte',
    open: 'Ver a coleção {name}',
  },

  product: {
    priceOnRequest: '(Preço sob consulta)',
    askInfo: 'Pedir informações',
    whatsappMessage: 'Olá, gostaria de saber mais informações sobre o produto: {name}. Link: {url}',
    addToWishlist: 'Adicionar aos favoritos',
    removeFromWishlist: 'Remover dos favoritos',
    photos: 'Fotografias do produto',
    photo: 'Ver fotografia {n}',
    consumerInfo: 'Informação ao consumidor: contrastaria e marcação',
    accordions: {
      description: 'Descrição',
      materials: 'Materiais',
      care: 'Cuidados e garantia',
      size: 'Tamanho e ajuste',
      shipping: 'Envios e devoluções',
      contact: 'Fale connosco',
    },
  },

  contact: {
    title: 'Contactos',
    mobileNote: 'Chamada para rede móvel nacional',
    formTitle: 'Fale connosco!',
    name: 'Nome',
    namePlaceholder: 'O seu nome',
    phone: 'Telefone',
    phonePlaceholder: 'O seu contacto',
    email: 'Email',
    emailPlaceholder: 'O seu email',
    subject: 'Assunto',
    subjectPlaceholder: 'Ex.: Informações sobre produtos, tamanhos, encomendas...',
    message: 'Mensagem',
    messagePlaceholder: 'Escreva aqui a sua mensagem...',
    privacyHtml: 'Li e aceito a <a href="{url}">política de privacidade</a>.',
    submit: 'Enviar mensagem',
    sending: 'A enviar...',
    ok: 'Obrigada pela sua mensagem! Brevemente entraremos em contacto.',
    error: 'Ocorreu um erro ao tentar enviar a sua mensagem. Por favor, tente de novo mais tarde.',
    invalid: 'Um ou mais campos com erros. Por favor, verifique e tente de novo.',
  },

  cart: {
    title: 'Carrinho',
    close: 'Fechar carrinho',
    empty: 'O seu carrinho está vazio.',
    continue: 'Continuar a comprar',
  },

  wishlist: {
    title: 'Favoritos',
    empty: 'Ainda não guardou nenhuma peça.',
    hint: 'Toque no coração de uma peça para a guardar aqui.',
    discover: 'Descobrir coleção',
  },

  about: {
    photoAlt: 'Trabalho artesanal de joalharia',
    letteringAlt: 'This one is mine',
    kicker: 'Mais do que uma marca',
    headingHtml: 'Liliana<strong>Pona</strong> é design, moda e estilo de vida',
    paragraphsHtml: [
      'A filosofia da marca LilianaPona reforça a criação de peças únicas ou em pequenas tiragens numeradas, privilegiando sempre um design original, sofisticado e artesanal, com um toque de industrialização leve.',
      'O compromisso passa pelo desenvolvimento de conceitos exclusivos sob encomenda, bem como coleções específicas para lançamento no mercado de luxo, respondendo às expectativas dos clientes mais exigentes.',
      'A marca valoriza parcerias estratégicas com setores como a moda, a arte, os espetáculos performativos e a indústria do luxo em geral, promovendo uma troca criativa que enriquece o universo da joalharia e fortalece a sua presença em diferentes segmentos de alto padrão.',
      'A marca e o logotipo foram concebidos como símbolos de uma identidade forte, refinada e inovadora, capazes de transmitir toda a essência da <strong>LilianaPona - Jewellery</strong>.',
    ],
    signatureName: 'Vitor Sarmento',
    signatureRole: 'Diretor Criativo',
    next: 'Ver missão, visão e valores',
    back: 'Voltar ao texto anterior',
    values: [
      {
        title: 'Missão',
        text: 'A LilianaPona - Jewellery é uma marca dedicada à criação e conceção de joias únicas e exclusivas, resultantes de um trabalho artesanal de alta qualidade realizado no nosso estúdio de design e oficina de joalharia e ourivesaria.',
      },
      {
        title: 'Visão',
        text: 'A nossa visão é consolidar a LilianaPona - Jewellery como uma referência nacional e internacional em joalharia artesanal de qualidade, reconhecida pela inovação, pelo design e pelo significado emocional das suas peças.',
      },
      {
        title: 'Valores',
        text: 'Na LilianaPona - Jewellery, seguimos princípios fundamentados na ética, criatividade e respeito. Valorizamos a honestidade, a integridade e a transparência em todas as nossas ações.',
      },
    ],
  },

  notFound: {
    title: 'Página não encontrada',
    text: 'A página que procura não existe ou foi movida.',
    back: 'Voltar à página inicial',
  },

  titles: {
    about: 'Sobre',
    products: 'Produtos',
    collections: 'Coleções',
    contact: 'Contactos',
    wishlist: 'Favoritos',
    cart: 'Carrinho',
    privacy: 'Política de Privacidade',
    returns: 'Política de devolução e reembolso',
    terms: 'Termos e Condições',
    disputes: 'Resolução de litígios',
    consumer: 'Informação ao consumidor',
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    siteName: 'Liliana Pona Jewellery',
    defaultDescription:
      'Unique, exclusive jewellery, handmade in Porto. Designer jewellery and goldsmithing pieces in silver and gold.',
  },

  skipToContent: 'Skip to content',

  nav: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    collections: 'Collections',
    contact: 'Contact',
  },

  header: {
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    search: 'Search',
    account: 'My account',
    wishlist: 'Wishlist',
    cart: 'Cart',
  },

  hero: {
    taglineAlt: 'Handmade just for you',
  },

  cta: {
    lines: [
      'Jewellery that tells stories',
      'and evokes meaningful moments in people’s lives.',
      'A jewel that can pass from generation to generation,',
      'perpetuating bonds of family, friendship and affection.',
    ],
    heading: 'Give jewellery.',
    link: 'Discover the collection',
    boxAlt: 'Liliana Pona Jewellery box',
  },

  footer: {
    aboutHtml:
      'Liliana<strong>Pona</strong> - Jewellery was born to reflect the uniqueness, sophistication and authenticity found in each of its jewellery and goldsmithing pieces. From the very beginning, we set out to develop a visual identity that conveys the values of exclusivity, high-quality craftsmanship and original creativity, the pillars that set the brand apart in the luxury and design market.',
    support: 'Support',
    privacy: 'Privacy policy',
    returnsHtml: 'Returns and <br>refunds policy',
    terms: 'Terms and conditions',
    disputes: 'Dispute resolution',
    consumer: 'Consumer information',
    complaintsBook: 'Complaints book',
    follow: 'Follow us',
    newsletterTitle: 'Don’t miss a thing',
    newsletterText: 'Subscribe to our newsletter to keep up with all the latest news.',
    emailPlaceholder: 'Email',
    subscribe: 'Subscribe',
    consent: 'I agree to receive marketing emails, news and special offers.',
    newsletterOk: 'Subscription sent successfully.',
    newsletterError: 'We could not send your subscription. Please try again.',
    copyright: 'LilianaPona-Jewellery ®, all rights reserved.',
    design: 'Design',
    development: 'Web development',
    fundingAlt: 'Funding logos',
  },

  search: {
    dialogLabel: 'Search products',
    close: 'Close search',
    kicker: 'Liliana Pona Jewellery',
    title: 'What are you looking for?',
    placeholder: 'Search for a piece, a collection...',
    submit: 'Search',
    suggestionsLabel: 'Search suggestions',
    suggestions: [
      { label: 'Rings', term: 'ring' },
      { label: 'Necklaces', term: 'necklace' },
      { label: 'Bracelets', term: 'bracelet' },
      { label: 'Cufflinks', term: 'cufflinks' },
    ],
    resultOne: '1 result found',
    resultMany: '{n} results found',
    emptyTitle: 'No pieces found',
    emptyText: 'Try searching for ring, necklace, bracelet, collection or cufflinks.',
  },

  carousel: {
    previous: 'Previous',
    next: 'Next',
    open: 'View the {name} collection',
  },

  product: {
    priceOnRequest: '(Price on request)',
    askInfo: 'Request information',
    whatsappMessage: 'Hello, I would like more information about the product: {name}. Link: {url}',
    addToWishlist: 'Add to wishlist',
    removeFromWishlist: 'Remove from wishlist',
    photos: 'Product photos',
    photo: 'View photo {n}',
    consumerInfo: 'Consumer information: hallmarks and assay office',
    accordions: {
      description: 'Description',
      materials: 'Materials',
      care: 'Care and warranty',
      size: 'Size and fit',
      shipping: 'Shipping and returns',
      contact: 'Talk to us',
    },
  },

  contact: {
    title: 'Contacts',
    mobileNote: 'Call to a Portuguese mobile network',
    formTitle: 'Talk to us!',
    name: 'Name',
    namePlaceholder: 'Your name',
    phone: 'Phone',
    phonePlaceholder: 'Your phone number',
    email: 'Email',
    emailPlaceholder: 'Your email',
    subject: 'Subject',
    subjectPlaceholder: 'E.g. information about products, sizes, orders...',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    privacyHtml: 'I have read and accept the <a href="{url}">privacy policy</a>.',
    submit: 'Send message',
    sending: 'Sending...',
    ok: 'Thank you for your message! We will be in touch shortly.',
    error: 'There was an error sending your message. Please try again later.',
    invalid: 'One or more fields have errors. Please check them and try again.',
  },

  cart: {
    title: 'Cart',
    close: 'Close cart',
    empty: 'Your cart is empty.',
    continue: 'Continue shopping',
  },

  wishlist: {
    title: 'Wishlist',
    empty: 'You have not saved any pieces yet.',
    hint: 'Tap the heart on a piece to keep it here.',
    discover: 'Discover the collection',
  },

  about: {
    photoAlt: 'Jewellery being made by hand',
    letteringAlt: 'This one is mine',
    kicker: 'More than a brand',
    headingHtml: 'Liliana<strong>Pona</strong> is design, fashion and lifestyle',
    paragraphsHtml: [
      'The LilianaPona brand philosophy is centred on creating one-of-a-kind pieces or small numbered editions, always favouring original, sophisticated, handcrafted design with a light touch of industrialisation.',
      'Our commitment includes developing exclusive concepts to order, as well as specific collections for launch in the luxury market, meeting the expectations of the most demanding clients.',
      'The brand values strategic partnerships with sectors such as fashion, art, the performing arts and the luxury industry in general, fostering a creative exchange that enriches the world of jewellery and strengthens its presence in different high-end segments.',
      'The brand and its logo were conceived as symbols of a strong, refined and innovative identity, able to convey the whole essence of <strong>LilianaPona - Jewellery</strong>.',
    ],
    signatureName: 'Vitor Sarmento',
    signatureRole: 'Creative Director',
    next: 'See mission, vision and values',
    back: 'Back to the previous text',
    values: [
      {
        title: 'Mission',
        text: 'LilianaPona - Jewellery is a brand dedicated to creating and designing unique, exclusive jewellery, the result of high-quality craftsmanship carried out in our design studio and jewellery and goldsmithing workshop.',
      },
      {
        title: 'Vision',
        text: 'Our vision is to establish LilianaPona - Jewellery as a national and international reference in quality handcrafted jewellery, recognised for innovation, design and the emotional meaning of its pieces.',
      },
      {
        title: 'Values',
        text: 'At LilianaPona - Jewellery we follow principles grounded in ethics, creativity and respect. We value honesty, integrity and transparency in everything we do.',
      },
    ],
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to the home page',
  },

  titles: {
    about: 'About',
    products: 'Products',
    collections: 'Collections',
    contact: 'Contacts',
    wishlist: 'Wishlist',
    cart: 'Cart',
    privacy: 'Privacy Policy',
    returns: 'Returns and refunds policy',
    terms: 'Terms and Conditions',
    disputes: 'Dispute resolution',
    consumer: 'Consumer information',
  },
};

const dictionaries: Record<Lang, Dictionary> = { pt, en };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}
