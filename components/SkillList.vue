<script setup lang="ts">
  const skill_list= {
    "Frontend": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Nuxt.js",
      "Vue.js",
      "Next.js",
      "Bootstrap",
    ],
    "Backend": [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Redis",
    ],
    "DevOps": [
      "Bash",
      "Git",
      "Linux",
      "Ansible",
      "Docker",
      "Jenkins",
    ],
  }
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
