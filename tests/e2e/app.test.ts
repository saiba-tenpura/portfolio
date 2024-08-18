import { $fetch, fetch, setup } from '@nuxt/test-utils/e2e';
import { describe, expect, test } from 'vitest';

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

  test('404 error page', async () => {
    const response = await fetch('/non-existent').then(r => r.text());
    expect(response).toContain('Page not found:');
  });
});
