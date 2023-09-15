<script setup lang="ts">
  type SkillSet = {
    category: string,
    skills: string[]
  }

  const skillSets = useAppConfig().skillSets as SkillSet[]
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold py-2">Skills</h2>
    <SkillSet v-for="(skillSet) in skillSets"
      :category="skillSet.category"
      :skills="skillSet.skills"
    />
  </section>
</template>
