<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent('/blog/')
    .sort({ created_at: -1 })
    .find();
});
</script>

<template>
  <section v-if="Array.isArray(data) && data.length > 0">
    <h1 class="text-3xl font-bold py-2 mb-4">Blog</h1>
    <BlogEntry
      v-for="blog_entry in data"
      :key="blog_entry._id"
      :blogEntry="blog_entry"
    />
  </section>
  <section v-else class="flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-3">There are no blog entries yet!</h2>
      <div class="text-zinc-700 dark:text-zinc-300">
        Please check back later when some have been added.
      </div>
    </div>
  </section>
</template>
