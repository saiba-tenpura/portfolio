<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <AppLayout>
    <NuxtLayout>
      <section class="self-center text-center">
        <div class="mb-3">
          <img v-if="error?.statusCode == 404" src="/404.svg" width="404" />
          <img v-else-if="error?.statusCode == 500" src="/500.svg" width="500" />
          <h1 v-else class="text-7xl lg:text-9xl">{{ error?.statusCode }}</h1>
        </div>
        <div class="text-lg mb-5">
          <p v-if="error?.statusCode != 404">{{ error?.message }}</p>
          <p v-else>The page you're looking for doesn't exist.</p>
        </div>
        <CustomButton class="px-5 py-2.5" variant="primary" @click="handleError">
          Return to the homepage
        </CustomButton>
      </section>
    </NuxtLayout>
  </AppLayout>
</template>
