import { defineCollection, defineContentConfig } from '@nuxt/content';
import { defineSitemapSchema } from '@nuxtjs/sitemap/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        published: z.boolean(),
        created_at: z.date(),
        sitemap: defineSitemapSchema(),
      }),
    }),
  },
});
