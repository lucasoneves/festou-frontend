<template>
  <div>
    <h2 class="text-4xl font-bold mb-6">Eventos</h2>
    <EventList />
    <div>Resultado: {{ data }}</div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })

  const { data } = await useFetch('/api/currency/BRL');

</script>

<style lang="scss" scoped></style>
