<script setup lang="ts">
interface BlogEntry {
  _path: string,
  title: string,
  description: string,
  image: {
    src: string,
    alt: string,
  },
  created_at: string,
}

defineProps({
  blogEntry: {
    type: Object,
    required: true,
    validator: (value: BlogEntry) => {
      return value?._path && value.title;
    }
  },
});
</script>

<template>
  <NuxtLink :to="blogEntry._path" class="block mb-4 p-4 rounded-lg hover:shadow-lg max-lg:bg-neutral-200/50 max-lg:dark:bg-neutral-800/50 lg:hover:bg-neutral-200/40 lg:hover:dark:bg-neutral-800/40 lg:hover:scale-105">
    <article class="flex flex-col md:flex-row">
      <NuxtImg
        :src="blogEntry?.image?.src"
        :alt="blogEntry?.image?.alt"
        sizes="sm:100vw md:100vw lg:100vw"
        class="object-cover w-full h-48 rounded-lg md:h-auto md:w-64"
        loading="lazy"
      />
      <div class="flex flex-col justify-between p-4">
        <h2 class="text-xl font-bold mb-1 tracking-tight text-neutral-900 dark:text-neutral-100">{{ blogEntry.title }}</h2>
        <p class="mb-3 text-neutral-700 dark:text-neutral-200">{{ blogEntry.description }}</p>
        <time class="text-sm text-neutral-500 dark:text-neutral-400" :datetime="blogEntry.created_at">{{ formatDate(blogEntry.created_at) }}</time>
      </div>
    </article>
  </NuxtLink>
</template>
