<script setup lang="ts">

type Project = {
  _path: string
  title: string
  description: string
  data: string
}

defineProps({
  project: {
    type: Object,
    required: true,
    validator: (value: Project) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
})
</script>

<template>
  <NuxtLink :to="project._path" class="flex flex-col md:flex-row">
    <div class="object-cover w-full rounded-lg h-48 md:h-auto md:w-48">
      <div class="text-center">
        Image
      </div>
    </div>
    <div class="flex flex-col justify-between p-4">
      <h2 class="text-lg font-bold mb-2 tracking-tight text-gray-900 dark:text-white">{{ project.title }}</h2>
      <p class="mb-3 text-gray-700 dark:text-gray-400">{{ project.description }}</p>
      <span class="text-sm text-gray-500 dark:text-gray-300">{{ formatDate(project.created_at) }}</span>
    </div>
  </NuxtLink>
</template>
