<script setup lang="ts">
  defineProps({
    icon: {
      type: String,
    },
    position: {
      type: String,
      default: 'start',
      validator: (value) => {
        return ['start', 'center', 'end'].includes(value)
      },
    },
    type: {
      type: String,
      validator: (value) => {
        return ['primary'].includes(value)
      },
    }
  })

  const positions = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }

  const types = {
    primary: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
  }
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
