<script setup lang="ts">
const observer: Ref<IntersectionObserver | undefined> = ref();
const targetRefs: Ref<HTMLElement[]> = ref([]);

defineProps({
  category: {
    type: String,
  },
  skills: {
    type: Array as PropType<string[]>,
  },
});

const onEnter = (target: HTMLElement) => {
  target.classList.add('opacity-100', 'translate-x-0');
  target.classList.remove('opacity-0', 'translate-x-20');
}

onMounted(() => {
  observer.value = onIntersect(targetRefs.value, onEnter);
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <div class="mb-4">
    <h3 class="text-2xl font-bold py-2">{{ category }}</h3>
    <div class="flex flex-wrap">
      <div
        ref="targetRefs"
        v-for="(skill, index) in skills"
        :key="skill"
        class="flex flex-col items-center mr-4 mb-2 transition duration-500 opacity-0 translate-x-20 delay-order"
        :style="'--order: ' + index"
      >
        <div class="flex justify-center items-center h-[86px] w-[86px] ring-1 ring-gray-100 dark:ring-0 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-1 p-2">
          <SkillIcon class="w-auto h-12" :name="skill.replace(/\s+/g, '-').toLowerCase()" />
        </div>
        <div class="whitespace-nowrap text-base text-neutral-700 dark:text-neutral-300">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
