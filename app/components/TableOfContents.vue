<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';

interface TableOfContents {
  ariaLabelledby?: string;
  links: TocLink[];
  sticky?: boolean;
  current?: string;
}

withDefaults(defineProps<TableOfContents>(), {
  sticky: false,
});
</script>

<template>
  <aside>
    <div :class="{ 'sticky top-32': sticky }">
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100" :class="{ 'mt-10': sticky }">
        Table of Contents
      </h2>
      <nav :aria-labelledby="ariaLabelledby">
        <TocSection :links="links" :current="current" />
      </nav>
    </div>
  </aside>
</template>
