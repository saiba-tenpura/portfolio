<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';

defineProps<{
 links: TocLink[];
}>();
</script>

<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.id"
    >
      <a :href="'#' + link.id" class="block mb-2 link-hover text-base whitespace-nowrap">{{ link.text }}</a>
      <TocSection v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>
