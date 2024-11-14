<template>
  <MainHeader :is-logged="true" :user="user" />
  <main class="p-6 max-w-screen-lg my-20 mx-auto">
    <EventLayout>
    <slot />
  </EventLayout>
  </main>
  
  <MainFooter />
</template>

<script setup>
const user = ref({ name: "lucas" });
</script>

<style lang="scss" scoped></style>
