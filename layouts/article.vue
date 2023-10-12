<script setup lang="ts">
const route = useRoute();
const observer: Ref<IntersectionObserver | undefined> = ref();

const { data: post } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
const getTocLinks = computed(() => post.value?.body.toc.links ?? []);

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
  <div class="grid grid-cols-[auto_minmax(0,_1fr)] gap-4">
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
      <ContentDoc />
    </article>
    <aside class="lg:flex lg:flex-col">
      <div class="sticky top-16">
        <h2 class="text-lg font-bold mb-2 lg:mt-16 tracking-tight text-zinc-900 dark:text-white">Table of Contents</h2>
        <nav aria-labelledby="article-navigation">
          <ul>
            <li
              v-for="link in getTocLinks"
              :key="link.id"
            >
              <a
                :href="'#' + link.id"
                :class="{}"
                class="text-base mb-2"
              >{{ link.text }}</a>
              <ul v-if="link.children">
                <li v-for="sublink in link.children">
                  <a
                    :href="'#' + sublink.id"
                    :class="{}"
                    class="text-base mb-2"
                  >{{ sublink.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>
