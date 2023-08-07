<script setup lang="ts">
  const route = useRoute()
  const { data: post } = await useAsyncData(route.path, () => {
    return queryContent(route.path)
      .findOne()
  })
</script>

<template>
  <article class="prose prose-zinc dark:prose-invert">
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
        class="rounded-lg"
        sizes="sm:100vw md:100vw lg:100vw"
        loading="lazy"
      />
    </header>
    <ContentDoc />
  </article>
</template>
