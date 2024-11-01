<template>
  <NuxtLink :to="`/events/${product.id}`" class="flex h-full flex-col gap-6">
    <div
      class="shadow-sm bg-white rounded-md p-6 h-full flex justify-around gap-6 flex-col"
    >
      <img
        :src="product.image"
        alt=""
        class="m-auto w-full rounded-lg"
        width="250"
        height="250"
      />
      <h2 class="font-bold text-xl">{{ product.title }}</h2>
      <span class="text-sm"
        >{{ product.remaining_time }} - {{ product.date }}</span
      >
    </div>
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>

</style>
