<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <main class="flex min-h-screen">
    <section class="flex flex-auto items-center justify-center">
      <div class="text-center">
        <div class="mb-3">
          <NuxtImg v-if="error?.statusCode == 404" src="/404.svg" />
          <NuxtImg v-else="error?.statusCode == 500" src="/500.svg" />
          <h1 v-else class="text-7xl lg:text-9xl">{{ error?.statusCode }}</h1>
        </div>
        <p class="mb-5 text-lg">{{ error?.message }}</p>
        <CustomButton class="px-5 py-2.5" variant="primary" @click="handleError">
          Back to home
        </CustomButton>
      </div>
    </section>
  </main>
</template>
