<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public;
useSeoMeta({
  title: 'Saiba Tenpura',
  ogTitle: 'Saiba Tenpura',
  description: 'Hi, I\'m Jan, a dedicated full stack developer with a passion for problem solving, technology, and learning. Taking web applications from concept to completion, I enjoy experimenting with new technologies and exploring the intersection of art and science through 3D modeling and game development.',
  ogDescription: 'Full Stack Developer / Hobbyist Game Dev',
  ogImage: siteUrl + '/blog/my-portfolio/cover.png',
  twitterCard: 'summary',
});
</script>

<template>
  <AppLayout>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AppLayout>
</template>
