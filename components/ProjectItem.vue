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
  <div>
    <h2>{{ project.title }}</h2>
    <div>{{ project.description }}</div>
    <NuxtLink :to="project._path">
      Read more ...
    </NuxtLink>
  </div>
</template>
