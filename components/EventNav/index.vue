<template>
  <ul class="flex gap-2 sm:gap-6 my-6 flex-wrap">
    <NuxtLink
      v-for="link in navItems"
      :to="`/events/${id}${link.path}`"
      class="p-2 px-6 bg-[var(--ballerina)] rounded-full"
      active-class="bg-[var(--meadow-dark)]	text-white"
    >
    {{ link.title }}
    </NuxtLink
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
