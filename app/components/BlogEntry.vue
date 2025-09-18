<script setup lang="ts">
interface BlogEntry {
  title: string,
  description: string,
  path?: string,
  image: {
    src: string,
    alt: string,
  },
  created_at: string,
}

defineProps<{
  blogEntry: BlogEntry;
}>();
</script>

<template>
  <NuxtLink :to="blogEntry.path" class="mb-4 block rounded-lg p-4 backdrop-blur-sm hover:shadow-lg max-lg:bg-neutral-200/50 lg:hover:scale-105 lg:hover:bg-neutral-200/40 max-lg:dark:bg-neutral-800/50 lg:hover:dark:bg-neutral-800/40">
    <article class="flex flex-col md:flex-row">
      <NuxtImg
        class="h-48 w-full rounded-lg object-cover md:h-auto md:w-64"
        format="webp"
        sizes="100vw sm:50vw md:16rem"
        :src="blogEntry?.image?.src"
        :alt="blogEntry?.image?.alt"
      />
      <div class="flex flex-col justify-between p-4">
        <h2 class="mb-1 text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {{ blogEntry.title }}
        </h2>
        <p class="mb-3 text-neutral-700 dark:text-neutral-200">
          {{ blogEntry.description }}
        </p>
        <time class="text-sm text-neutral-500 dark:text-neutral-400" :datetime="blogEntry.created_at">{{ formatDate(blogEntry.created_at) }}</time>
      </div>
    </article>
  </NuxtLink>
</template>
