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
    <TransitionGroup
      enter-from-class="opacity-0 translate-y-20"
      enter-to-class="opacity-100 translate-y-0"
      enter-active-class="transition duration-500 delay-order"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-20"
      leave-active-class="transition duration-500 delay-order"
    >
      <BlogEntry
        v-for="(blog_entry, index) in data"
        v-show="showBlogEntries"
        :key="blog_entry._id"
        :blogEntry="blog_entry"
        :style="'--order: ' + index"
      />
    </TransitionGroup>
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
