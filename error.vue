<script setup lang="ts">
defineProps<{
  error: {
    url: string,
    statusCode: number,
    statusMessage: string,
    message: string,
    description: string,
    data: any,
  },
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <main class="flex min-h-screen">
    <section class="flex flex-auto items-center justify-center">
      <div class="text-center">
        <h1 class="mb-4 text-7xl lg:text-9xl">{{ error.statusCode }}</h1>
        <p class="mb-4 text-lg">{{ error.message }}</p>
        <CustomButton class="px-5 py-2.5" type="primary" position="center" @click="handleError">
          Back to home
        </CustomButton>
      </div>
    </section>
  </main>
</template>
