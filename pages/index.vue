<script setup lang="ts">
const socials = useAppConfig().socials;
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-bold py-2">Saiba Tenpura</h1>
      <h2 class="text-lg">Full Stack Developer / DevOps / Hobbyist Game Dev</h2>
      <div class="py-2">
        <NuxtLink v-for="(link, social) in socials" :to="link" class="link-hover" target="_blank">
          <font-awesome-icon :icon="'fa-brands fa-' + social" size="xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
