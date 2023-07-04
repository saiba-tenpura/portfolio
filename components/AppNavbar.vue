<template>
  <nav class="w-full p-2 sm:px-2">
    <div class="max-w-3xl flex flex-wrap justify-between items-center mx-auto">
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
            <NuxtLink :to="link.path">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  const show = ref(false)

  const navigation = [
    {
      "title": "About",
      "path": "/",
    },
    {
      "title": "Articles",
      "path": "/articles",
    },
    {
      "title": "Contact",
      "path": "/contact",
    }
  ]
</script>
