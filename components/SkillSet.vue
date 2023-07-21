<script setup lang="ts">
  defineProps({
    category: {
      type: String,
    },
    skills: {
      type: Array,
    },
  })
</script>

<template>
  <div class="mb-4">
    <h3 class="text-lg font-bold py-2">{{ category }}</h3>
    <ul class="list-disc list-inside text-zinc-700 dark:text-zinc-300">
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>
