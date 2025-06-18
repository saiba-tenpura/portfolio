<script setup lang="ts">
const current_year = new Date().getFullYear();

defineProps<{
  year: number;
}>();
</script>

<template>
  <span>{{ current_year - year }}</span>
</template>
