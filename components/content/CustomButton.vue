<script lang="ts">
const variants: Record<string, string> = {
  'primary': 'bg-primary-400 hover:bg-primary-500 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-800',
  'primary-to-secondary': 'bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 focus:ring-primary-300 dark:focus:ring-primary-800',
  'secondary': 'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-300 dark:focus:ring-secondary-800',
  'secondary-to-primary': 'bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 focus:ring-secondary-300 dark:focus:ring-secondary-800',
};
</script>

<script setup lang="ts">
const props = defineProps({
  as: {
    type: [String, Object],
    default: 'button',
  },
  variant: {
    type: String,
    validator: (value: string) => {
      return Object.keys(variants).includes(value);
    },
  },
});
</script>

<template>
  <component
    :is="props.as"
    class="inline-block text-center text-sm text-neutral-100 no-underline rounded-lg px-5 py-2.5 hover:text-neutral-300 focus:ring-2 focus:outline-none"
    :class="variants[variant]"
    type="button"
  >
    <slot name="prepend"></slot>
    <ContentSlot :use="$slots.default" unwrap="p" />
    <slot name="append"></slot>
  </component>
</template>
