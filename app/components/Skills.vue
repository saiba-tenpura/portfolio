<script setup lang="ts">
interface SkillSet {
  category: string;
  skills: string[];
}

const skillSets: SkillSet[] = useAppConfig().skillSets;
</script>

<template>
  <section>
    <h2 class="py-2 text-3xl font-bold">Skills</h2>
    <SkillSet
      v-for="skillSet in skillSets"
      :key="skillSet.category"
      :category="skillSet.category"
      :skills="skillSet.skills"
    />
  </section>
</template>
