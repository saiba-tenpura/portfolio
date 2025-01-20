import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSitemapCollection({
        source: 'blog/*.md',
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
          created_at: z.date(),
        }),
      }),
    ),
  },
});
