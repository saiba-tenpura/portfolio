<script setup lang="ts">
interface BlogEntry {
  _path: string,
  title: string,
  description: string,
  data: string,
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
  <NuxtLink :to="blogEntry._path" class="block mb-4 p-4 scale-95 rounded-lg hover:bg-zinc-200/80 hover:dark:bg-zinc-800/80 hover:scale-100 hover:shadow-lg">
    <article class="flex flex-col md:flex-row">
      <NuxtImg
        :src="blogEntry.cover"
        :alt="blogEntry.title"
        sizes="sm:100vw md:100vw lg:100vw"
        class="object-cover w-full rounded-lg h-48 md:h-auto md:w-64"
        loading="lazy"
      />
      <div class="flex flex-col justify-between p-4">
        <h2 class="text-lg font-bold mb-2 tracking-tight text-zinc-900 dark:text-white">{{ blogEntry.title }}</h2>
        <p class="mb-3 text-zinc-700 dark:text-zinc-300">{{ blogEntry.description }}</p>
        <time class="text-sm text-zinc-500 dark:text-zinc-400" :datetime="blogEntry.created_at">{{ formatDate(blogEntry.created_at) }}</time>
      </div>
    </article>
  </NuxtLink>
</template>
