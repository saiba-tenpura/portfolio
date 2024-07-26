<script setup lang="ts">
const socials = useAppConfig().socials;
const roles = ['Full Stack Developer', 'DevOps', 'Hobbyist Game Dev'];
useSeoMeta({
  title: 'Saiba Tenpura',
  description: roles.join(' / '),
  ogDescription: roles.join(' / '),
});
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-bold py-2">Saiba Tenpura</h1>
      <section id="title-animation" class="h-7 text-lg overflow-hidden">
        <div v-for="role in roles" :key="role">
          <div class="inline-block">{{ role }}</div>
        </div>
      </section>
      <div class="py-2">
        <NuxtLink v-for="(link, social) in socials" :to="link" class="hover:text-neutral-300 dark:hover:text-neutral-400" target="_blank">
          <font-awesome-icon :icon="'fa-brands fa-' + social" size="xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
#title-animation div:first-child {
  animation: text-swap linear 4s infinite alternate;
}

@keyframes text-swap {
  0%, 20% {
    margin-top: 0;
  }
  30%, 70% {
    margin-top: -1.75rem;
  }
  80%, 100% {
    margin-top: -3.50rem;
  }
}
</style>
