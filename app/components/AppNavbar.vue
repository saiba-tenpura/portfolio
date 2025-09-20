<script setup lang="ts">
const navigation = useAppConfig().navigation;
const show: Ref<boolean> = ref(false);
const toggleNav = () => show.value = !show.value;

const dropdownHeight = computed(() => {
  const baseHeight = 16;
  const itemHeight = 48;
  return baseHeight + navigation.length * itemHeight;
});
</script>

<template>
  <nav class="mx-auto max-w-7xl p-4 lg:p-2">
    <div class="flex flex-wrap items-center justify-between">
      <NuxtLink to="/" @click="show = false">
        <span class="sr-only">Logo</span>
        <Logo class="h-9 w-auto" />
      </NuxtLink>
      <button @click="toggleNav" class="inline-flex items-center rounded-lg p-2 md:hidden" aria-controls="navbar" :aria-expanded="show">
        <span class="sr-only">Toggle navigation menu</span>
        <svg
          class="menu-icon d-flex items-center overflow-visible hover:text-neutral-300 dark:hover:text-neutral-400"
          viewBox="0 0 100 100"
        >
          <g>
            <path id="top" class="path" d="m 20,20 h 30 30 c 20,0 18.227928,30 20,55 0.0356,7.961535 0,12.5 -7.5,12.5 C 88.792524,87.5 87.022601,85.888733 80,80 L 50,50 20,20" />
            <path id="middle" class="path" d="M 20,50 H 81" />
            <path id="bottom" class="path" d="m 20,80 h 30 30 c 20,0 18.227928,-30 20,-55 0.0356,-7.961535 0,-12.5 -7.5,-12.5 -3.707476,0 -5.477399,1.611267 -12.5,7.5 L 50,50 20,80" />
          </g>
        </svg>
      </button>
      <div
        id="navbar"
        class="w-full overflow-hidden transition-all duration-500 md:!h-full md:w-auto md:overflow-visible md:!opacity-100"
        :class="{ 'opacity-0': !show, 'opacity-100': show }"
        :style="{ height: (show ? dropdownHeight : 0) + 'px' }"
      >
        <div
          class="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:gap-8"
        >
          <NuxtLink
            v-for="link of navigation"
            :key="link.path"
            :to="link.path"
            active-class="bg-neutral-200 dark:bg-neutral-800 font-bold"
            class="m-1 block rounded-sm p-2 hover:bg-neutral-700 hover:text-neutral-300 md:bg-transparent md:p-0 md:hover:bg-transparent dark:hover:text-neutral-400 dark:md:bg-transparent dark:hover:md:bg-transparent"
            @click="toggleNav"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@reference 'tailwindcss';

.menu-icon {
  @apply stroke-neutral-950 dark:stroke-neutral-100;
  fill: none;
  width: 1.25em;
  stroke-width: 0.75em;
  stroke-linecap: round;
}

.menu-icon .path {
  stroke-linejoin: round;
  transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms, opacity 400ms 100ms;
}

.menu-icon :is(#top, #bottom) {
  stroke-dasharray: 60 1000;
}

.menu-icon #middle {
  stroke-dasharray: 60;
}

button[aria-expanded="true"] .menu-icon :is(#top, #bottom) {
  stroke-dasharray: 155 1000;
  stroke-dashoffset: -155;
}

button[aria-expanded="true"] .menu-icon #middle {
  stroke-dasharray: 0 50;
  stroke-dashoffset: 30;
  opacity: 0;
}
</style>
