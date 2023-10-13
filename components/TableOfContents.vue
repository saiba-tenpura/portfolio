<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';

withDefaults(defineProps<{
 links: TocLink[];
 sticky?: boolean;
}>(), {
  sticky: false,
});
</script>

<template>
  <aside>
    <div :class="{ 'sticky top-32': sticky }">
      <h2 class="text-lg font-bold mb-2 tracking-tight text-zinc-900 dark:text-white" :class="{ 'mt-10': sticky }">Table of Contents</h2>
      <nav class="mt-4" aria-labelledby="article-navigation">
        <TocSection :links="links" />
      </nav>
    </div>
  </aside>
</template>
