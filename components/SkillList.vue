<script setup lang="ts">
  const skill_list = useAppConfig().skill_list
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold py-2">Skills</h2>
    <div class="flex justify-between">
      <SkillListSet v-for="(skills, category) in skill_list"
        :category="category"
        :skills="skills"
      />
    </div>
  </section>
</template>
