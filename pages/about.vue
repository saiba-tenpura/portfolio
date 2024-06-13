<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'A short summary of me and my ambitions.',
  ogDescription: 'A short summary of me and my ambitions.',
});

const getAge = (birthYear: number) => {
  const today: Date = new Date();
  return today.getFullYear() - birthYear;
}
</script>

<template>
  <div>
    <section class="mb-4">
      <h1 class="text-3xl font-bold py-2">About</h1>
      <div class="text-zinc-700 dark:text-zinc-300">
        <p class="mb-4">
          Hello I'm Jan, a dedicated {{ getAge(1998) }}-year-old <span class="font-bold">Full Stack Developer</span> based in Germany. I specialize in crafting web applications from the initial design all the way through to the full implementation, with a commitment to continous improvement and providing a seamless user experience.
        </p>
        <p class="mb-4">
          In my free time, I'm an avid tech enthusiast, constantly exploring and embracing new technologies to stay at the forefront of the industry. I also enjoy customizing my Linux desktop to optimize my workfow and make it uniquely mine.
        </p>
        <p class="mb-4">
          Additionally, I work on my creative side by channeling it into experimenting with game engines, 3D modeling and 3D animation. These pursuits not only serve for my personal enjoyment but also provide me with a fresh perspective and problem-solving skills that I bring into my web development projects.
        </p>
        <p>
          Whether it's coding, tech exploration, or artistic endeavours, I'm always eager to take on new challenges and oppurtunities, striving for excellence in both of my professional work and personal hobbies.
        </p>
      </div>
    </section>
    <Skills />
  </div>
</template>
