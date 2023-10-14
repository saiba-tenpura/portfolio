<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';

defineProps<{
 links: TocLink[];
 current?: string;
}>();
</script>

<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.id"
    >
      <a
        :href="'#' + link.id"
        class="block mb-2 link-hover text-base whitespace-nowrap"
        :class="{ 'font-bold': link.id == current }"
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
