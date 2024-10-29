<template>
  <div>
    <h2>{{ product.title }}</h2>
    <p>
      {{ product.title }}
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });
</script>

<style lang="scss" scoped></style>
