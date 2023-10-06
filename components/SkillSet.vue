<script setup lang="ts">
defineProps({
  category: {
    type: String,
  },
  skills: {
    type: Array as PropType<string[]>,
  },
});
</script>

<template>
  <div class="mb-4">
    <h3 class="text-xl font-bold py-2">{{ category }}</h3>
    <div class="flex flex-wrap">
      <div
        v-for="skill in skills"
        :key="skill"
        class="flex flex-col items-center mr-4 mb-2"
      >
        <div class="flex justify-center items-center h-[86px] w-[86px] ring-1 ring-gray-100 dark:ring-0 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-1 p-2">
          <NuxtImg
            :src="'/images/skill-icons/' + skill.replace(/\s+/g, '-').toLowerCase() + '.svg'"
            :alt="skill"
            class="w-auto h-12"
            loading="lazy"
          />
        </div>
        <div class="whitespace-nowrap text-base text-zinc-700 dark:text-zinc-300">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
