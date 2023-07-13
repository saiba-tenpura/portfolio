<script setup lang="ts">
  const { data } = await useAsyncData(() => {
    return queryContent('/projects/')
      .sort({ createdAt: -1 })
      .find()
  })
</script>

<template>
  <div>
    <ProjectItem v-for="project in data" :key="project._id" :project="project" />
  </div>
</template>
