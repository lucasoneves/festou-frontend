<template>
  <ul class="flex gap-6 my-6">
    <!-- <NuxtLink
      v-for="item in navItems"
      :to="`/events/${id}`"
      class="py-2 px-6"
      active-class="bg-[var(--meadow-dark)]	rounded-full text-white"
      >Informações</NuxtLink
    > -->
    <NuxtLink
      v-for="link in navItems"
      :to="`/events/${id}${link.path}`"
      class="py-2 px-6"
      active-class="bg-[var(--meadow-dark)]	rounded-full text-white"
      >{{ link.title }}</NuxtLink
    >
  </ul>
</template>

<script setup>
defineProps(["id"]);

const navItems = reactive([
{
    path: "/",
    title: "Informações",
  },
  {
    path: "/guests",
    title: "Convidados",
  },
  {
    path: "/budget",
    title: "Orçamento",
  },
  {
    path: "/tasks",
    title: "Tarefas",
  },
  {
    path: "/files",
    title: "Arquivos",
  },
]);
</script>

<style lang="scss" scoped></style>
