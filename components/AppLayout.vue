<script setup lang="ts">
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  });

  document
    .querySelectorAll('.fade-in')
    .forEach((element) => observer.observe(element));
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppLoadingBar />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
