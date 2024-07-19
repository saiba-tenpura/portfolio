<script lang="ts">
const positions: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

const types: Record<string, string> = {
  primary: "bg-gradient-to-r from-primary-500 to-secondary-500 text-neutral-100 no-underline hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800",
};
</script>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: 'start',
    validator: (value: string) => {
      return Object.keys(positions).includes(value);
    },
  },
  type: {
    type: String,
    validator: (value: string) => {
      return Object.keys(types).includes(value);
    },
  }
});

const component = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink');
  }

  return 'button';
});
</script>

<template>
  <div
    class="flex"
    :class="positions[position]"
  >
    <component
      class="font-medium rounded-lg text-sm text-center px-5 py-2.5 mr-2 mb-2"
      :class="types[type]"
      :is="component"
      :to="to"
    >
      <slot name="prepend"></slot>
      <ContentSlot :use="$slots.default" unwrap="p" />
      <slot name="append"></slot>
    </component>
  </div>
</template>
