<script lang="ts" setup>
  const { data } = await useAsyncData(() => {
    return queryContent('/projects/').find()
  })
</script>

<template>
  <div>
    <ProjectItem v-for="project in data" :key="project._id" :project="project" />
  </div>
</template>
