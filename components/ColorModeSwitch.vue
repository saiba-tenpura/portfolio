<script setup lang="ts">
const colorMode = useColorMode();
const swapColorMode = () => {
  const values: string[] = ['system', 'light', 'dark'];
  const index: number = values.indexOf(colorMode.preference);
  const next: number = (index + 1) % values.length;
  colorMode.preference = values[next];
}
</script>

<template>
  <button aria-label="Swap Color Mode" class="hover:text-neutral-300 dark:hover:text-neutral-400" @click="swapColorMode">
    <ColorScheme>
      <template v-if="colorMode.preference === 'dark'">
        <font-awesome-icon icon="fa-moon" />
      </template>
      <template v-else-if="colorMode.preference === 'light'">
        <font-awesome-icon icon="fa-sun" />
      </template>
      <template v-else>
        <font-awesome-icon icon="fa-display" />
      </template>
    </ColorScheme>
  </button>
</template>
