<template>
  <div class="mt-7 max-w-sm mx-auto text-center rounded-lg bg-white p-4 shadow-md">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops...</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7 bg-blue-800 p-2 px-8 text-center text-white rounded-md hover:bg-blue-700" @click="handleCleanError">Go home...</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleCleanError = () => clearError({ redirect: '/'});

</script>

<style lang="scss" scoped></style>
