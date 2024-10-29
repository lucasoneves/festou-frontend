<template>
  <header>
    <h1>Event Planner</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/events">Eventos</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
      <nuxt-link to="/register">Cadastro</nuxt-link>
    </nav>
  </header>
  <button-create-event />
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
/* Estilos para o cabeçalho */
</style>
