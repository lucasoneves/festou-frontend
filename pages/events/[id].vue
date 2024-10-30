<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <div class="flex gap-10">
      <img :src="product.image" alt="" width="300" />
      <div class="info flex flex-col gap-10">
        <h2 class="text-4xl font-bold">{{ product.title }}</h2>
        <span class="flex font-bold text-4xl">$ {{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>
