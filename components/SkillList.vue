<script setup lang="ts">
  const skill_list = useAppConfig().skill_list
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold py-2">Skills</h2>
    <div class="flex justify-between">
      <SkillSet v-for="(skills, category) in skill_list"
          :category="category"
          :skills="skills"
        />
    </div>
  </div>
</template>
