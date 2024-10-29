<template>
  <div>
    <h2>Eventos</h2>
    <div v-for="product in products">
      <h2>{{ product.title }}</h2>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const { data: products } = await useFetch(`https://fakestoreapi.com/products`);
</script>

<style lang="scss" scoped></style>
