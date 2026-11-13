/**
 * Slides of the big carousel on the Products page, in order.
 *
 * To add an ordinary slide (two photos side by side):
 *   1. Put its two images in src/assets/images/carousel/ named <id>-1.png (left) and <id>-2.png (right).
 *   2. Add a line below. `name` is the text read by screen readers and search engines.
 *
 * Slides with a `layout` are composed pages with their own component in src/components/slides/
 * and their own images in src/assets/images/carousel/<id>/.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/routes';

export interface Slide {
  id: string;
  /** A product name, or one text per language. */
  name: string | Record<Lang, string>;
  /** Leave out for an ordinary slide. */
  layout?: 'blue-rock' | 'christmas';
}

export const slides: Slide[] = [
  { id: 'blue-rock', name: 'Blue Rock', layout: 'blue-rock' },
  // Christmas message (seasonal): delete this line to take it down after the holidays.
  { id: 'christmas', name: { pt: 'Mensagem de Natal', en: 'Christmas message' }, layout: 'christmas' },
  { id: 'cleopatra', name: 'Cleopatra' },
  { id: 'green-rock', name: 'Green Rock' },
  { id: 'black-rock', name: 'Black Rock' },
  { id: 'succulentus', name: 'Succulentus' },
  { id: 'bouquet', name: 'Bouquet' },
  { id: 'rosemary', name: 'Rosemary' },
  { id: 'cat-brooch', name: 'Cat Brooch' },
];

export function slideName(slide: Slide, lang: Lang): string {
  return typeof slide.name === 'string' ? slide.name : slide.name[lang];
}

/**
 * Text of the Christmas slide (the client's "Blue_Rock_Texto Natal.pdf").
 * On wide screens every line starts on a new line, as in the PDF; on narrow screens long lines wrap.
 * The headline, greeting and signature are images: their text is repeated here for screen readers.
 */
export const christmasMessage: Record<
  Lang,
  { photoAlt: string; headlineAlt: string; greetingAlt: string; lines: string[]; signatureAlt: string }
> = {
  pt: {
    photoAlt: 'Anel Blue Rock no seu estojo azul Liliana Pona Jewellery, sob um céu estrelado',
    headlineAlt: 'O Céu de uma Noite Eterna',
    greetingAlt: 'Bom Natal. Merry Christmas. Feliz Ano Novo. Happy New Year.',
    lines: [
      'Dizem as lendas que há noites em que o firmamento se veste',
      'de um azul tão profundo que o tempo parece parar.',
      'Noites em que a terra se molda e as estrelas se alinham para desenhar um caminho.',
      'O ‘Blue Rock Ring’ nasceu desse silêncio sagrado.',
      'Esta não é apenas uma jóia esculpida pelas mãos do joalheiro.',
      'É um fragmento eterno dessa noite mística.',
      'Na sua textura robusta e orgânica, reside a força da terra,',
      'na sua gema azul e magnética, guarda-se a imensidão do céu do Oriente,',
      'e no seu brilho lapidado, vive a promessa da Estrela de Belém,',
      'aquela luz guia que nunca se apaga.',
      'Quem oferece esta peça, não entrega um adorno efémero.',
      'Oferece um talismã, uma bússola de afeto, um legado de luz para guiar',
      'os passos de quem mais ama através das gerações.',
      'Que este anel seja a sua estrela guia.',
      'Hoje, e sempre.',
    ],
    signatureAlt: 'Blue Rock Ring',
  },
  en: {
    photoAlt: 'The Blue Rock Ring in its blue Liliana Pona Jewellery case, under a starry sky',
    headlineAlt: 'O Céu de uma Noite Eterna (The Sky of an Eternal Night)',
    greetingAlt: 'Bom Natal. Merry Christmas. Feliz Ano Novo. Happy New Year.',
    lines: [
      'Legend has it that there are nights when the heavens are clothed',
      'in a blue so deep that time seems to stand still.',
      'Nights when the earth takes shape and the stars align to draw a path.',
      'The ‘Blue Rock Ring’ was born of that sacred silence.',
      'This is not just a jewel sculpted by the jeweller’s hands.',
      'It is an eternal fragment of that mystical night.',
      'In its strong, organic texture lies the strength of the earth;',
      'in its blue, magnetic gem, the vastness of the Eastern sky is kept;',
      'and in its polished brilliance lives the promise of the Star of Bethlehem,',
      'that guiding light that never fades.',
      'Whoever gives this piece does not give a fleeting ornament.',
      'They give a talisman, a compass of affection, a legacy of light to guide',
      'the steps of those they love most, through the generations.',
      'May this ring be your guiding star.',
      'Today, and always.',
    ],
    signatureAlt: 'Blue Rock Ring',
  },
};

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/carousel/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

function file(name: string): ImageMetadata {
  const entry = Object.entries(files).find(([path]) => path.split('/').pop()?.split('.')[0] === name);
  if (!entry) throw new Error(`Missing carousel image "${name}" in src/assets/images/carousel/`);
  return entry[1].default;
}

/** Left and right image of an ordinary slide. */
export function slideImages(id: string): { left: ImageMetadata; right: ImageMetadata } {
  return { left: file(`${id}-1`), right: file(`${id}-2`) };
}
