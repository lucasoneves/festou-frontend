<template>
  <header class="p-6 flex gap-6 justify-between shadow-md bg-white">
    <h1 class="font-bold">Event Planner</h1>
    <nav class="flex gap-6 justify-between">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/events">Eventos</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
      <nuxt-link to="/register">Cadastro</nuxt-link>
    </nav>
  </header>
  <ButtonCreateEvent />
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
/* Estilos para o cabeçalho */
</style>
