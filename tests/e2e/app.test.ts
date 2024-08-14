import { setup } from '@nuxt/test-utils/e2e';
import { describe, test, expect } from 'vitest';

describe('app', async () => {
  await setup();

  const pages = {
    '/': 'Saiba Tenpura',
    '/about': 'About',
    '/blog': 'Blog',
  };

  for (const [page, heading] of Object.entries(pages)) {
    test('page: ' + page + ' to contain heading: ' + heading, async () => {
      const html = await $fetch<string>(page);
      expect(html).toMatch(heading + '</h1>');
    });
  }
});
