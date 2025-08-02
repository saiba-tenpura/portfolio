<script setup lang="ts">
import { NuxtLink } from '#components';

const rootEl = ref();
const url = useRequestURL();
const route = useRoute();
const currentHeadingId: Ref<string | null> = ref('');
const headingObserver: Ref<IntersectionObserver | undefined> = ref();
const videoObserver: Ref<IntersectionObserver | undefined> = ref();

const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

const getDocTocLinks = (doc: any) => doc.body.toc?.links ?? [];

const onHeadingEnter = (heading: Element) => {
  currentHeadingId.value = heading.getAttribute('id');
}

const onVideoEnter = (video: HTMLVideoElement) => {
  if (video.paused) {
    video.play();
  }
};

const onVideoExit = (video: HTMLVideoElement) => {
  if (! video.paused) {
    video.pause();
  }
};

useSafeOnMounted(rootEl, () => {
  headingObserver.value = onIntersect(document.querySelectorAll('article h2[id], article h3[id]'), onHeadingEnter, () => {}, false);
  videoObserver.value = onIntersect(document.querySelectorAll('video'), onVideoEnter, onVideoExit, false);
});

onUnmounted(() => {
  headingObserver.value?.disconnect();
  videoObserver.value?.disconnect();
});
</script>

<template>
  <div ref="rootEl" class="flex">
    <div v-if="doc">
      <Meta property="og:title" :content="doc.title" />
      <Meta property="og:description" :content="doc.description" />
      <Meta property="og:image" :content="url.origin + (doc?.image?.src ?? '/blog/my-portfolio/cover.png')" />
      <Meta property="og:image:alt" :content="doc?.image?.alt" />
      <section class="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)] gap-16">
        <article id="article-navigation" class="prose prose-neutral dark:prose-invert">
          <header class="mb-4">
            <h1 class="mb-0">{{ doc.title }}</h1>
            <time
              v-if="doc?.created_at"
              :datetime="doc.created_at"
              class="text-sm text-neutral-500 dark:text-neutral-400"
            >
              {{ formatDate(doc.created_at) }}
            </time>
            <NuxtImg
              v-if="doc?.image.src"
              :src="doc?.image.src"
              :alt="doc?.image.alt"
              sizes="sm:100vw md:100vw lg:100vw"
              loading="lazy"
            />
          </header>
          <TableOfContents
            v-if="getDocTocLinks(doc).length"
            class="not-prose lg:hidden"
            aria-labelledby="article-navigation"
            :links="getDocTocLinks(doc)"
            :current="currentHeadingId"
          />
          <ContentRenderer :value="doc" />
        </article>
        <TableOfContents
          v-if="getDocTocLinks(doc).length"
          class="hidden lg:flex lg:flex-col"
          aria-labelledby="article-navigation"
          :sticky="true"
          :links="getDocTocLinks(doc)"
          :current="currentHeadingId"
        />
      </section>
    </div>
    <section v-else class="self-center text-center">
      <h1 class="mb-3 text-7xl lg:text-9xl">404</h1>
      <p class="mb-2 text-3xl md:text-4xl">Blog entry not found!</p>
      <p class="mb-5 text-lg">
        Sorry, we can't find the blog entry you're looking for.
      </p>
      <CustomButton class="px-5 py-2.5" variant="primary" to="/blog" :as="NuxtLink">
        Return to overview
      </CustomButton>
    </section>
  </div>
</template>
