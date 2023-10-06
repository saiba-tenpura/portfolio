<script setup lang="ts">
interface SkillSet {
  category: string,
  skills: string[],
}

const skillSets: SkillSet[] = useAppConfig().skillSets;
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold py-2">Skills</h2>
    <SkillSet
      v-for="(skillSet) in skillSets"
      :key="skillSet.category"
      :category="skillSet.category"
      :skills="skillSet.skills"
    />
  </section>
</template>
