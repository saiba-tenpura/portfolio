import { fetch, setup, createPage } from '@nuxt/test-utils/e2e';
import { describe, expect, test } from 'vitest';

describe('blog', async () => {
  await setup();

  test('existing entry & table of contents', async () => {
    const page = await createPage('/blog/my-portfolio');
    expect(await page.getByRole('heading', { name: 'My Portfolio' }).isVisible()).toBe(true);
    expect(await page.getByRole('link', { name: 'Tech Stack' }).getAttribute('href')).toBe('#tech-stack');
    expect(await page.getByRole('link', { name: 'Logo' }).last().getAttribute('href')).toBe('#logo');
  });

  test('404 error page', async () => {
    const response = await fetch('/blog/non-existent').then(r => r.text());
    expect(response).toContain('Blog entry not found!');
  });
});
