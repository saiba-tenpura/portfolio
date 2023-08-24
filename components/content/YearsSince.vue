<script setup lang="ts">
  const current_year = new Date().getFullYear()
  defineProps({
    year: {
      type: Number,
      required: true,
    },
  })
</script>

<template>
  <span>{{ current_year - year }}</span>
</template>
