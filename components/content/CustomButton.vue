<script lang="ts">
interface AssociativeArray<T> {
  [key: string]: T | undefined,
}

const positions: AssociativeArray<string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

const types: AssociativeArray<string> = {
  primary: "text-white bg-gradient-to-r from-secondary-500 to-primary-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-secondary-300 dark:focus:ring-secondary-800",
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
  if (props.to) return resolveComponent('NuxtLink');

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
