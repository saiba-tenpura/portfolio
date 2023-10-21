<script setup lang="ts">
const showBlogEntries = ref(false);
const { data } = await useAsyncData(() => {
  return queryContent('/blog/')
    .sort({ created_at: -1 })
    .find();
});

onMounted(() => {
  nextTick(() => showBlogEntries.value = true);
});
</script>

<template>
  <section v-if="Array.isArray(data) && data.length > 0">
    <h1 class="text-3xl font-bold py-2 mb-4">Blog</h1>
    <BlogEntry
      v-for="(blogEntry, index) in data"
      class="transition duration-500 delay-order"
      :class="[showBlogEntries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
      :key="blogEntry._id"
      :blogEntry="blogEntry"
      :style="'--order: ' + index"
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
