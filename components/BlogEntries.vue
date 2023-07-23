<script setup lang="ts">
  const { data } = await useAsyncData(() => {
    return queryContent('/blog/')
      .sort({ created_at: -1 })
      .find()
  })
</script>

<template>
  <BlogEntry v-for="blog_entry in data" :key="blog_entry._id" :blog_entry="blog_entry" />
</template>
