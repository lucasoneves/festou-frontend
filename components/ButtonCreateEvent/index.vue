<template>
  <button >

    <NuxtLink class="floating-button flex justify-center items-center" :to="`/events/create`"><span>+</span></NuxtLink>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--france);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 30px;
  cursor: pointer;
}
</style>
