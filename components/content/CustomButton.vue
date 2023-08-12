<script setup lang="ts">
  defineProps({
    type: {
      type: String,
    }
  })
  const types = {
    primary: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
  }
</script>

<template>
  <button
    type="button"
    class="font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    :class="types[type]"
    >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </button>
</template>
