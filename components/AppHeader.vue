<script setup lang="ts">
onMounted(() => {
  const header = document.querySelector('#header');
  const observer = new IntersectionObserver(([entry]) => entry.target.classList.toggle('stuck', entry.intersectionRatio < 1), {
    rootMargin: '0px',
    threshold: 1.0,
  });

  observer.observe(header);
});
</script>

<template>
  <header id="header" class="sticky top-[-0.1px] bg-neutral-50/0 dark:bg-neutral-900/0 duration-150 ease-in transition-background backdrop-blur-sm z-50">
    <AppNavbar/>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

#header.stuck {
  @apply bg-neutral-50/80 dark:bg-neutral-900/80 shadow-lg;
}
</style>
