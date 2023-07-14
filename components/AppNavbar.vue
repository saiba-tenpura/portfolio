<script setup lang="ts">
  const show = ref(false)
  const navigation = [
    {
      'title': 'About',
      '_path': '/about',
    },
    {
      'title': 'Projects',
      '_path': '/projects',
    },
  ]
</script>

<template>
  <nav class="max-w-4xl mx-auto py-4 px-6">
    <div class="flex flex-wrap justify-between items-center">
      <NuxtLink to="/">
        Logo
      </NuxtLink>
      <button @click="(show = !show)" class="inline-flex items-center p-2 rounded-lg md:hidden">
        <span class="sr-only">Toggle navigation menu</span>
        <font-awesome-icon :icon="show ? 'fa-xmark' : 'fa-bars'" />
      </button>
      <div class="justify-between items-center w-full md:flex md:w-auto" :class="{ hidden: ! show }" :aria-expanded="show">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li v-for="link of navigation">
            <NuxtLink
              :key="link._path"
              :to="link._path"
              active-class="text-blue-500"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
