<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const Icon = defineAsyncComponent(() => import(`@/assets/skill-icons/${props.name}.svg`));
</script>

<template>
  <Icon />
</template>
