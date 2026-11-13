/** Product search used by the search overlay. Runs in the browser, no server needed. */

export interface SearchItem {
  name: string;
  collection: string;
  url: string;
  image: string;
  price: string;
  /** All the text the search looks at. */
  haystack: string;
}

/**
 * Words that mean the same thing. Searching for one finds products that mention any of them,
 * so "rings" finds a product described as "anel".
 */
const synonyms: string[][] = [
  ['anel', 'aneis', 'ring', 'rings'],
  ['colar', 'colares', 'necklace', 'necklaces'],
  ['bracelete', 'braceletes', 'pulseira', 'pulseiras', 'bracelet', 'bracelets'],
  ['botoes de punho', 'botao de punho', 'cufflinks', 'cufflink'],
  ['brinco', 'brincos', 'earring', 'earrings'],
  ['alfinete', 'alfinetes', 'broche', 'broches', 'brooch', 'brooches'],
];

/** Lower case, no accents, punctuation turned into spaces: "Botões-de-Punho" -> "botoes de punho". */
export function normalise(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * True when every word of `phrase` starts a word of `haystack` (both already normalised).
 * Matching the start of words keeps "ring" from finding "daring", while "ane" still finds "anel".
 */
function containsAllWords(haystack: string, phrase: string): boolean {
  const padded = ` ${haystack}`;
  return phrase
    .split(' ')
    .filter((word) => word.length > 1)
    .every((word) => padded.includes(` ${word}`));
}

export function searchProducts(index: SearchItem[], term: string): SearchItem[] {
  const query = normalise(term);
  if (query.length < 2) return [];

  const group = synonyms.find((words) => words.includes(query));
  const phrases = group ?? [query];

  return index.filter((item) => {
    const haystack = normalise(item.haystack);
    return phrases.some((phrase) => containsAllWords(haystack, phrase));
  });
}
