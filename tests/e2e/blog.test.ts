import { fetch, setup } from '@nuxt/test-utils/e2e';
import { describe, expect, test } from 'vitest';

describe('blog', async () => {
  await setup();

  test('404 error page', async () => {
    const response = await fetch('/blog/non-existent').then(r => r.text());
    expect(response).toContain('Blog entry not found!');
  });
});
