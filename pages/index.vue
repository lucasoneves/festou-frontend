<template>
  <div>
    <h2 class="font-bold text-4xl mb-6">Próximos eventos</h2>
    <EventList />
    <div class="text-center my-8 mx-auto">
      <NuxtLink
        :to="'/events'"
        class="p-2 px-6 bg-[var(--meadow)] text-white rounded-full"
        >Ver todos</NuxtLink
      >
    </div>

    <h2 class="font-bold text-4xl mb-6 mt-24">Eventos encerrados</h2>
    <EventList />
    <div class="text-center my-8 mx-auto">
      <NuxtLink
        :to="'/events'"
        class="p-2 px-6 bg-[var(--meadow)] text-white rounded-full"
        >Ver todos</NuxtLink
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
