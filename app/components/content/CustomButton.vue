<script lang="ts">
const variants: Record<string, string> = {
  primary: 'bg-primary-400 hover:shadow-primary-400 hover:-translate-y-1 hover:shadow-surround focus:bg-primary-300 focus:dark:bg-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800',
  'primary-to-secondary': 'bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 focus:ring-primary-300 dark:focus:ring-primary-800',
  secondary: 'bg-secondary-500 hover:shadow-secondary-500 hover:-translate-y-1 hover:shadow-surround focus:bg-secondary-400 focus:dark:bg-secondary-600 focus:ring-secondary-300 dark:focus:ring-secondary-800',
  'secondary-to-primary': 'bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 focus:ring-secondary-300 dark:focus:ring-secondary-800',
};
</script>

<script setup lang="ts">
interface Props {
  as?: string | Object;
  variant: 'primary' | 'primary-to-secondary' | 'secondary' | 'secondary-to-primary';
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <component
    class="inline-block rounded-lg px-5 py-2.5 text-center text-sm text-neutral-100 no-underline transition-transform focus:ring-2 focus:outline-hidden focus-visible:border-neutral-50 focus-visible:border"
    :class="variants[variant]"
    :is="props.as"
  >
    <slot name="prepend"></slot>
    <slot mdc-unwrap="p"></slot>
    <slot name="append"></slot>
  </component>
</template>
