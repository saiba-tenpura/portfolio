<script setup lang="ts">
const rootEl = ref();
const showBlogEntries = ref(false);
const { data } = await useAsyncData(() => {
  return queryCollection('blog')
    .where('published', '=', true)
    .order('created_at', 'DESC')
    .all();
});

useSafeOnMounted(rootEl, () => {
  showBlogEntries.value = true;
});
</script>

<template>
  <section ref="rootEl" v-if="Array.isArray(data) && data.length > 0">
    <h1 class="mb-4 py-2 text-4xl font-bold">Blog</h1>
    <BlogEntry
      v-for="(blogEntry, index) in data"
      class="transition duration-300"
      :class="[
        showBlogEntries
          ? 'delay-order translate-y-0 opacity-100'
          : 'delay-order translate-y-20 opacity-0',
      ]"
      :key="blogEntry._id"
      :blogEntry="blogEntry"
      :style="'--order: ' + index"
    />
  </section>
  <section v-else class="flex items-center justify-center">
    <div class="text-center">
      <h2 class="mb-3 text-3xl font-bold">There are no blog entries yet!</h2>
      <div class="text-neutral-700 dark:text-neutral-300">
        Please check back later when some have been added.
      </div>
    </div>
  </section>
</template>
