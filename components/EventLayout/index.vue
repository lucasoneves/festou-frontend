<template>
  <div class="bg-white p-6 shadow-md rounded-lg min-h-lvh mb-72">
    <div class="flex flex-col gap-8">
      <img
        :src="eventInfo.image"
        alt=""
        class="rounded-lg max-h-80 object-cover object-center w-full"
      />
      <div class="info gap-10">
        <h2 class="text-4xl font-bold">{{ eventInfo.title }}</h2>
        <div class="flex items-center mt-4 gap-2">
          <span class="block text-sm">Criado por: {{ eventInfo.owner.name }}</span
          ><NuxtImg width="20" height="20" :src="eventInfo.owner.avatar" />
        </div>
        <p class="mt-4">
          Data: <strong>{{ eventInfo.date }}</strong> às
          {{ eventInfo.startsAt }}
        </p>
        <p>Local: {{ eventInfo.location }}</p>
        <EventNav :id="eventInfo.id" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
console.log("ROTA", route);
const id = route.params._id;

const eventInfo = ref({
  id: '1',
  title: "Festa junina 2024",
  date: "20/06/2024",
  location: "Rua Apeninos, 205",
  startsAt: "16h",
  owner: {
    avatar: "https://avatar.iran.liara.run/public",
    name: "Lucas Neves",
  },
  description: "Lorem ipsum dolor sit amet, consectetur",
  image:
    "https://images.unsplash.com/photo-1623289964499-4907d4c619fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
