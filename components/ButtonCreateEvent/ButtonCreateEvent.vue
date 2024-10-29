<template>
  <button @click="goToCreateEvent" class="floating-button">+</button>
</template>

<script>
export default {
  name: 'FloatingButton',
  methods: {
    goToCreateEvent() {
      this.$router.push('/events/create');
    },
  },
}
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 30px;
  cursor: pointer;
}
</style>
