<template>
  <MainHeader :is-logged="true" :user="user" />
  <main class="p-6 max-w-screen-lg m-auto">
    <slot />
  </main>
  <MainFooter />
</template>

<script setup>
const user = ref({ name: "lucas" });
</script>

<style scoped>
/* Estilos para o cabeçalho */
</style>
