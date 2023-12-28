<script setup lang="ts">
const rootEl = ref();
const currentHeadingId: Ref<string | null> = ref('');
const headingObserver: Ref<IntersectionObserver | undefined> = ref();
const videoObserver: Ref<IntersectionObserver | undefined> = ref();

const getDocTocLinks = (doc: any) => doc.body.toc?.links ?? [];

const onHeadingEnter = (heading: Element) => {
  currentHeadingId.value = heading.getAttribute('id');
}

const onVideoEnter = (video: HTMLVideoElement) => {
  if (video.paused) {
    video.play();
  }
}

const onVideoExit = (video: HTMLVideoElement) => {
  if (! video.paused) {
    video.pause();
  }
}

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
    <ContentDoc>
      <template v-slot="{ doc }">
        <section class="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)] gap-16">
          <article id="article-navigation" class="prose prose-zinc dark:prose-invert">
            <header class="mb-4">
              <h1 class="mb-0">{{ doc.title }}</h1>
              <time
                v-if="doc?.created_at"
                :datetime="doc.created_at"
                class="text-sm text-zinc-500 dark:text-zinc-400"
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
              class="lg:hidden not-prose"
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
      </template>
      <template #not-found>
        <section class="self-center text-center">
          <h1 class="mb-4 text-7xl lg:text-9xl">404</h1>
          <p class="mb-4 text-3xl md:text-4xl">Blog entry not found!</p>
          <p class="mb-4 text-lg">Sorry, we can't find the blog entry you're looking for.</p>
          <CustomButton class="px-5 py-2.5" to="/blog" type="primary" position="center">
            Back to overview
          </CustomButton>
        </section>
      </template>
    </ContentDoc>
  </div>
</template>
