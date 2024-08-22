import { fetch, setup, createPage } from '@nuxt/test-utils/e2e';
import { describe, expect, test } from 'vitest';

describe('app', async () => {
  await setup();

  const pages = {
    '/': 'Saiba Tenpura',
    '/about': 'About',
    '/blog': 'Blog',
  };

  for (const [path, heading] of Object.entries(pages)) {
    test('page: ' + path + ' to contain heading: ' + heading, async () => {
      const page = await createPage(path);
      expect(await page.getByRole('heading', { name: heading }).isVisible()).toBe(true);
    });
  }

  test('404 error page', async () => {
    const response = await fetch('/non-existent').then(r => r.text());
    expect(response).toContain('Page not found:');
  });
});
