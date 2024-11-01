<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <div class="flex flex-col gap-10">
      <img :src="eventInfo.image" alt="" class="rounded-lg" />
      <div class="info gap-10">
        <h2 class="text-4xl font-bold">{{ eventInfo.title }}</h2>
        <ul class="flex gap-6 my-6">
          <NuxtLink :to="`/events/${id}/guests`">Convidados</NuxtLink>
          <NuxtLink :to="`/events/${id}/budget`">Orçamento</NuxtLink>
          <NuxtLink :to="`/events/${id}/tasks`">Tarefas</NuxtLink>
          <NuxtLink :to="`/events/${id}/files`">Arquivos</NuxtLink>
        </ul>
        <!-- <span class="block mb-2">{{ eventInfo.date }} - {{ eventInfo.startsAt }}</span>
        <span class="block mb-2">{{ eventInfo.location }}</span>
        <p>{{ eventInfo.description }}</p> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log("ROTA", route);
const id = route.params._id;

const eventInfo = ref({
  id: id,
  title: "Festa junina 2024",
  date: "20/06/2024",
  location: "Rua Apeninos, 205",
  startsAt: "16h",
  description: "Lorem ipsum dolor sit amet, consectetur",
  image: "https://images.unsplash.com/photo-1623289964499-4907d4c619fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
});

if (!eventInfo.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>
