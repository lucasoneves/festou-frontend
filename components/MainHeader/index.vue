<template>
  <header class="p-6 flex gap-6 justify-between shadow-md bg-white fixed w-full top-0">
    <h1 class="font-bold">Festa.app</h1>
    <nav class="flex gap-6 justify-between">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/events">Eventos</nuxt-link>
      <slot v-if="!props.isLogged">
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/register">Cadastro</nuxt-link>
      </slot>
      <slot v-else>
        <span>Olá, {{ props.user.name }}!</span>
        <Avatar />
      </slot>
    </nav>
  </header>
  <ButtonCreateEvent />
</template>

<script setup>
  const props = defineProps(['isLogged', 'user'])
</script>

<style scoped>
/* Estilos para o cabeçalho */
</style>
