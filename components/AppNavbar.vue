<script setup lang="ts">
const show = ref(false);
const navigation = useAppConfig().navigation;
const toggleNav = () => {
  show.value = ! show.value;
}

const dropdownHeight = computed(() => {
  const baseHeight = 16;
  const itemHeight = 40;
  return baseHeight + navigation.length * itemHeight;
});
</script>

<template>
  <nav class="max-w-4xl mx-auto py-4 px-6">
    <div class="flex flex-wrap justify-between items-center">
      <NuxtLink to="/" @click="show = false">
        <NuxtImg
          src="/logo.png"
          alt="Saiba Tenpura Logo"
          sizes="sm:36px md:42px"
          loading="lazy"
        />
      </NuxtLink>
      <button @click="toggleNav" class="inline-flex items-center p-2 rounded-lg md:hidden">
        <span class="sr-only">Toggle navigation menu</span>
        <font-awesome-icon :icon="show ? 'fa-xmark' : 'fa-bars'" class="link-hover" />
      </button>
      <div
        class="md:flex md:w-auto md:!h-full md:!opacity-100 justify-between items-center w-full overflow-hidden transition-all duration-500"
        :class="{ 'opacity-0': ! show, 'opacity-100': show }"
        :style="{ height: (show ? dropdownHeight : 0) + 'px' }"
        :aria-expanded="show">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li v-for="link of navigation">
            <NuxtLink
              :key="link.path"
              :to="link.path"
              active-class="bg-zinc-200 dark:bg-zinc-800 font-bold"
              class="block p-2 rounded hover:bg-zinc-700 md:p-0 md:bg-transparent md:hover:bg-transparent dark:md:bg-transparent dark:hover:md:bg-transparent link-hover"
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
