<template>
  <div
    class="shadow-sm bg-white rounded-md p-6 h-full flex justify-around items-center gap-6 flex-col"
  >
    <NuxtLink :to="`/events/${product.id}`" class="flex h-full flex-col gap-6">
      <img :src="product.image" alt="" class="thumb" width="150" height="150" />
      <h2>{{ product.title }}</h2>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.thumb {
  width: 100%;
  max-width: 150px;
  max-height: 200px;
  margin: auto;
}
</style>
