<script setup>
  onMounted(() => {
    const header = document.querySelector('#header')
    const observer = new IntersectionObserver(
      ([entry]) => entry.target.classList.toggle('stuck', entry.intersectionRatio < 1),
      { threshold: [1] }
    )

    observer.observe(header)
  })
</script>

<template>
  <header id="header" class="sticky top-[-1px] bg-zinc-50 dark:bg-zinc-900">
    <AppNavbar />
  </header>
</template>

<style scoped>
#header.stuck {
  @apply shadow-lg;
}
</style>
