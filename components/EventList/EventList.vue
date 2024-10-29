<template>
  <ul>
    <li v-for="event in events" :key="event.id">
      <nuxt-link :to="`/events/${event.id}`">{{ event.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EventList',
  data() {
    return {
      events: [{ id: 1, name: "Festa do João" }, { id: 1, name: "Festa junina da família" }],
    };
  },
  mounted() {
  },
}
</script>

<style scoped>
/* Estilos para a lista de eventos */
</style>
