<script setup lang="ts">

type BlogEntry = {
  _path: string
  title: string
  description: string
  data: string
}

defineProps({
  blog_entry: {
    type: Object,
    required: true,
    validator: (value: BlogEntry) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
})
</script>

<template>
  <article>
    <NuxtLink :to="blog_entry._path" class="flex flex-col md:flex-row">
      <div class="object-cover w-full rounded-lg h-48 md:h-auto md:w-48">
        <div class="text-center">
          Image
        </div>
      </div>
      <div class="flex flex-col justify-between p-4">
        <h2 class="text-lg font-bold mb-2 tracking-tight text-zinc-900 dark:text-white">{{ blog_entry.title }}</h2>
        <p class="mb-3 text-zinc-700 dark:text-zinc-300">{{ blog_entry.description }}</p>
        <time class="text-sm text-zinc-500 dark:text-zinc-400" :datetime="blog_entry.created_at">{{ formatDate(blog_entry.created_at) }}</time>
      </div>
    </NuxtLink>
  </article>
</template>
