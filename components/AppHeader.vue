<script setup lang="ts">
onMounted(() => {
  const header = document.querySelector('#header')
  const observer = new IntersectionObserver(([entry]) => entry.target.classList.toggle('stuck', entry.intersectionRatio < 1), {
    rootMargin: '0px',
    threshold: 1.0,
  });

  observer.observe(header);
});
</script>

<template>
  <header id="header" class="sticky top-[-1px] bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur z-50">
    <AppNavbar/>
  </header>
</template>

<style scoped>
#header.stuck {
  @apply shadow-lg;
}
</style>
