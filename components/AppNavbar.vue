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
  <nav class="max-w-6xl mx-auto px-6 py-4">
    <div class="flex flex-wrap justify-between items-center">
      <NuxtLink to="/" @click="show = false">
        <div class="flex">
          <NuxtImg
            src="/logo.png"
            alt="Logo"
            sizes="sm:32px md:36px"
            loading="lazy"
          />
          <div class="self-end text-2xl font-bold ml-1">
            Saiba Tenpura
          </div>
        </div>
      </NuxtLink>
      <button @click="toggleNav" class="inline-flex items-center p-2 rounded-lg md:hidden">
        <span class="sr-only">Toggle navigation menu</span>
        <svg class="menu-icon link-hover d-flex items-center overflow-visible" viewBox="0 0 100 100" :aria-expanded="show">
          <g>
            <path id="top" class="path" d="m 20,20 h 30 30 c 20,0 18.227928,30 20,55 0.0356,7.961535 0,12.5 -7.5,12.5 C 88.792524,87.5 87.022601,85.888733 80,80 L 50,50 20,20" />
            <path id="middle" class="path" d="M 20,50 H 81" />
            <path id="bottom" class="path" d="m 20,80 h 30 30 c 20,0 18.227928,-30 20,-55 0.0356,-7.961535 0,-12.5 -7.5,-12.5 -3.707476,0 -5.477399,1.611267 -12.5,7.5 L 50,50 20,80" />
          </g>
        </svg>
      </button>
      <div
        class="justify-between items-center w-full overflow-hidden transition-all duration-500 md:flex md:w-auto md:!h-full md:overflow-visible md:!opacity-100"
        :class="{ 'opacity-0': ! show, 'opacity-100': show }"
        :style="{ height: (show ? dropdownHeight : 0) + 'px' }"
        :aria-expanded="show"
      >
        <div class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8">
          <NuxtLink
            v-for="link of navigation"
            :key="link.path"
            :to="link.path"
            active-class="bg-neutral-200 dark:bg-neutral-800 font-bold"
            class="block m-1 p-2 rounded hover:bg-neutral-700 md:p-0 md:bg-transparent md:hover:bg-transparent dark:md:bg-transparent dark:hover:md:bg-transparent link-hover"
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

.menu-icon[aria-expanded="true"] :is(#top, #bottom) {
  stroke-dasharray: 155 1000;
  stroke-dashoffset: -155;
}

.menu-icon[aria-expanded="true"] #middle {
  stroke-dasharray: 0 50;
  stroke-dashoffset: 30;
  opacity: 0;
}
</style>
