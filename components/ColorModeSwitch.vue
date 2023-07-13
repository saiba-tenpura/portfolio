<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <button aria-label="Color Mode" @click="onClick">
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
