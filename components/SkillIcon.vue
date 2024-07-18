<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const Icon = defineAsyncComponent(() => import(`@/assets/skill-icons/${props.name}.svg`));
</script>

<template>
  <Icon />
</template>
