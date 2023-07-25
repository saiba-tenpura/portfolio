<script setup lang="ts">
  const show = ref(false)
  const navigation = useAppConfig().navigation
  const toggleNav = () => {
    show.value = ! show.value
  }
</script>

<template>
  <nav class="max-w-4xl mx-auto py-4 px-6">
    <div class="flex flex-wrap justify-between items-center">
      <NuxtLink to="/" @click="show = false">
        Logo
      </NuxtLink>
      <button @click="toggleNav" class="inline-flex items-center p-2 rounded-lg md:hidden">
        <span class="sr-only">Toggle navigation menu</span>
        <font-awesome-icon :icon="show ? 'fa-xmark' : 'fa-bars'" class="link-hover" />
      </button>
      <div class="justify-between items-center w-full md:flex md:w-auto" :class="{ hidden: ! show }" :aria-expanded="show">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li v-for="link of navigation">
            <NuxtLink
              :key="link.path"
              :to="link.path"
              active-class="bg-zinc-200 dark:bg-zinc-800 font-semibold"
              class="block p-2 rounded hover:bg-zinc-700 md:p-0 md:bg-transparent md:hover:bg-transparent link-hover"
              @click="toggleNav"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
