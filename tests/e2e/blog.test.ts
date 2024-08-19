import { fetch, setup } from '@nuxt/test-utils/e2e';
import { describe, expect, test } from 'vitest';

describe('blog', async () => {
  await setup();

  test('existing page', async () => {
    const response = await fetch('/blog/my-portfolio').then(r => r.text());
    expect(response).toContain('My Portfolio');
  });

  test('404 error page', async () => {
    const response = await fetch('/blog/non-existent').then(r => r.text());
    expect(response).toContain('Blog entry not found!');
  });
});
