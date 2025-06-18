<script setup lang="ts">
const observer: Ref<IntersectionObserver | undefined> = ref();
const targetRefs: Ref<HTMLElement[]> = ref([]);

interface Props {
  category: string;
  skills: string[];
}

defineProps<Props>();

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
    <h3 class="py-2 text-2xl font-bold">{{ category }}</h3>
    <div class="flex flex-wrap">
      <div
        v-for="(skill, index) in skills"
        ref="targetRefs"
        class="delay-order mr-4 mb-2 flex translate-x-20 flex-col items-center opacity-0 transition duration-500"
        :key="skill"
        :style="'--order: ' + index"
      >
        <div class="mb-1 flex h-[86px] w-[86px] items-center justify-center rounded-lg bg-neutral-200 p-2 ring-1 ring-gray-100 dark:bg-neutral-800 dark:ring-0">
          <SkillIcon class="h-12 w-auto" :name="skill.replace(/\s+/g, '-').toLowerCase()" />
        </div>
        <div class="text-base whitespace-nowrap text-neutral-700 dark:text-neutral-300">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
