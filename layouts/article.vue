<script setup lang="ts">
const route = useRoute();
const observer: Ref<IntersectionObserver | undefined> = ref();

const { data: post } = await useAsyncData(route.path, () => {
  return queryContent(route.path).findOne();
});

const onEnter = (video: HTMLVideoElement) => {
  if (video.paused) {
    video.play();
  }
}

const onExit = (video: HTMLVideoElement) => {
  if (! video.paused) {
    video.pause();
  }
}

onMounted(() => {
  observer.value = onIntersect(document.querySelectorAll('video'), onEnter, onExit, false);
});

onUnmounted(() => {
 observer.value.disconnect();
});
</script>

<template>
  <article class="prose prose-zinc dark:prose-invert">
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
    <ContentDoc />
  </article>
</template>
