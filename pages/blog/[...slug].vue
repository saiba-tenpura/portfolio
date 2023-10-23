<script setup lang="ts">
const route = useRoute();
const currentHeadingId: Ref<string | null> = ref('');
const headingObserver: Ref<IntersectionObserver | undefined> = ref();
const videoObserver: Ref<IntersectionObserver | undefined> = ref();

const { data: post } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
const getTocLinks = computed(() => post.value?.body.toc?.links ?? []);

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

onMounted(() => {
  headingObserver.value = onIntersect(document.querySelectorAll('article h2[id], article h3[id]'), onHeadingEnter, () => {}, false);
  videoObserver.value = onIntersect(document.querySelectorAll('video'), onVideoEnter, onVideoExit, false);
});

onUnmounted(() => {
 headingObserver.value?.disconnect();
 videoObserver.value?.disconnect();
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)] gap-16">
    <article id="article-navigation" class="prose prose-zinc dark:prose-invert">
      <header class="mb-4">
        <h1 class="mb-0">{{ post?.title }}</h1>
        <time
          v-if="post?.created_at"
          :datetime="post.created_at"
          class="text-sm text-zinc-500 dark:text-zinc-400"
        >
          {{ formatDate(post.created_at) }}
        </time>
        <NuxtImg
          v-if="post?.cover"
          :src="post.cover"
          :alt="post?.title"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
        />
      </header>
      <TableOfContents
        v-if="getTocLinks.length"
        class="lg:hidden not-prose"
        :links="getTocLinks"
        :current="currentHeadingId"
      />
      <ContentDoc />
    </article>
    <TableOfContents
      v-if="getTocLinks.length"
      class="hidden lg:flex lg:flex-col"
      :sticky="true"
      :links="getTocLinks"
      :current="currentHeadingId"
    />
  </div>
</template>
