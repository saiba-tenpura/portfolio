<script setup lang="ts">
  const { data } = await useAsyncData(() => {
    return queryContent('/projects/')
      .sort({ created_at: -1 })
      .find()
  })
</script>

<template>
  <ProjectItem v-for="project in data" :key="project._id" :project="project" />
</template>
