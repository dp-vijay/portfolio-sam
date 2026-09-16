import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One-line pitch shown on the card. Aim for under 140 characters. */
    summary: z.string(),
    /** Controls ordering — lower numbers come first. */
    order: z.number().default(99),
    /** Show on the homepage. Keep 3–4 featured for a tight landing page. */
    featured: z.boolean().default(false),
    /** Rendered as pills on the card. First 4 are shown. */
    tech: z.array(z.string()).default([]),
    year: z.number().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };
