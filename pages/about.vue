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
    <div class="mb-4">
      <h1 class="text-3xl font-bold py-2">About</h1>
      <div class="text-gray-700 dark:text-gray-400">
        <p class="mb-4">
          Hey I'm Jan, a 25 year old passionate <span class="font-bold">Full Stack Developer</span> based in Germany.
          My expertise lies in creating web applications, guiding them from the design phase to the full implementation, and ensuring their contionus improvement and maintenance.
        </p>
        <p>
          In my spare time, I like to learn about new technologies, tweaking my Linux desktop, and experiment with game engines, 3D modeling as well as 3D animation.
        </p>
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-bold py-2">Skills</h2>
      <div class="flex justify-between">
        <div v-for="(skills, category) in skill_list" class="mb-4">
          <h3 class="text-lg font-bold py-2">{{ category }}</h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-400">
            <li v-for="skill in skills">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
