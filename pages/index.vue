<script setup lang="ts">
const socials = useAppConfig().socials;
useSeoMeta({
  title: 'Saiba Tenpura',
  description: 'Full Stack Developer / DevOps / Hobbyist Game Dev',
  ogDescription: 'Full Stack Developer / DevOps / Hobbyist Game Dev',
});
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-bold py-2">Saiba Tenpura</h1>
      <section id="title-animation" class="h-7 text-lg overflow-hidden">
        <div>
          <div class="inline-block">Full Stack Developer</div>
        </div>
        <div>
          <div class="inline-block">DevOps</div>
        </div>
        <div>
          <div class="inline-block">Hobbyist Game Dev</div>
        </div>
      </section>
      <div class="py-2">
        <NuxtLink v-for="(link, social) in socials" :to="link" class="link-hover" target="_blank">
          <font-awesome-icon :icon="'fa-brands fa-' + social" size="xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
#title-animation div:first-child {
  animation: text-swap 8s infinite;
}

@keyframes text-swap {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -1.75rem;
  }
  30% {
    margin-top: -1.75rem;
  }
  40% {
    margin-top: -3.50rem;
  }
  60% {
    margin-top: -3.50rem;
  }
  70% {
    margin-top: -1.75rem;
  }
  80% {
    margin-top: -1.75rem;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}
</style>
