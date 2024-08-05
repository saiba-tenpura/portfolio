<template>
  <div class="flex justify-center">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
