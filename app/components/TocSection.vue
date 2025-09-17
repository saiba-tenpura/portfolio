<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';

defineProps<{
  links: TocLink[];
  current?: string;
}>();
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <a
        class="mb-2 block text-base whitespace-nowrap hover:text-neutral-300 dark:hover:text-neutral-400"
        :class="{ 'font-bold': link.id == current }"
        :href="'#' + link.id"
      >{{ link.text }}</a>
      <TocSection
        v-if="link.children"
        class="pl-4"
        :links="link.children"
        :current="current"
      />
    </li>
  </ul>
</template>
