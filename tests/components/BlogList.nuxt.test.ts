import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, test, vi } from 'vitest';
import { BlogList } from '#components';

const { useAsyncData } = vi.hoisted(() => {
  return {
    useAsyncData: vi.fn().mockImplementation(() => {
      return { data: [] };
    }),
  };
});

mockNuxtImport('useAsyncData', () => {
  return useAsyncData;
});

describe('BlogList', async () => {
  test('empty state', async () => {
    const component = await mountSuspended(BlogList);
    expect(component.text()).toContain('There are no blog entries yet!');
  });

  test('rendering of blog entry', async () => {
    useAsyncData.mockImplementation(() => {
      return {
        data: [
          {
            _path: '/blog/test',
            title: 'Blog Entry Unit Test',
            description: 'This is just a test!',
            image: {
              src: '/blog/test/cover.png',
              alt: 'Blog Entry Test',
            },
            created_at: '2024-08-15T00:00:00.000Z',
          },
        ],
      };
    });

    const component = await mountSuspended(BlogList);
    expect(component.text()).toContain('Blog Entry Unit Test');
  });
});
