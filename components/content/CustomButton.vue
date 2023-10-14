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
defineProps({
  icon: {
    type: String,
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
</script>

<template>
  <div
    class="flex"
    :class="positions[position]"
  >
    <button
      type="button"
      class="font-medium rounded-lg text-sm text-center px-5 py-2.5 mr-2 mb-2"
      :class="types[type]"
    >
      <font-awesome-icon v-if="icon" class="mr-2" :icon="icon" size="lg" />
      <ContentSlot :use="$slots.default" unwrap="p" />
    </button>
  </div>
</template>
