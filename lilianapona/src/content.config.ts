/**
 * Long texts kept as Markdown files.
 * legal: src/content/legal/<language>/<page>.md  (privacy, returns, terms, disputes, consumer)
 * The list of legal pages is `legalDocs` in src/i18n/routes.ts.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    /** Page title (browser tab and search engines). */
    title: z.string(),
    /** Optional summary for search engines. */
    description: z.string().optional(),
  }),
});

export const collections = { legal };
