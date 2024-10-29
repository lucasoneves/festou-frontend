<template>
  <div class="event-list grid grid-cols-auto-fill gap-5">
    <div v-for="productItem in products">
      <EventCard :product="productItem" />
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch(`https://fakestoreapi.com/products`);
</script>

<style scoped>

</style>
