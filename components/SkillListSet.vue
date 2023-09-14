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
    <h3 class="text-xl font-bold py-2">{{ category }}</h3>
    <div class="flex flex-wrap">
      <div v-for="skill in skills" class="flex flex-col items-center h-[86px] w-[86px] bg-zinc-800 rounded-lg p-2 mt-2 mr-2">
        <font-awesome-icon icon="fa-brands fa-html5" class="w-[auto] h-8 text-4xl text-[#f16524] mb-2" />
        <div class="whitespace-nowrap text-lg text-zinc-700 dark:text-zinc-300">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
