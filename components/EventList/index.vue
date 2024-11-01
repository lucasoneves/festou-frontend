<template>
  <div class="event-list grid grid-cols-auto-fill gap-5">
    <div v-for="productItem in products">
      <EventCard :product="productItem" />
    </div>
  </div>
</template>

<script setup>
/** 
 * 
 * Elementos:
    Nome do evento, data e local.
    Um indicador de contagem regressiva (“Faltam X dias”).
    Botão para "Ver detalhes" ou "Editar evento".

    Dica: Ordenar por proximidade de data para que o usuário veja primeiro os eventos mais urgentes.
 * 
*/

const props = defineProps(["limit"]);

const products = [
  {
    title: "Festa junina 2024",
    id: 1,
    remaining_time: "Faltam 20 dias",
    date: "20/06/2024",
    image:
      "https://images.unsplash.com/photo-1623289964499-4907d4c619fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aniversariantes do mês",
    id: 2,
    remaining_time: "Faltam 6 dias",
    date: "20/06/2024",
    image:
      "https://images.unsplash.com/photo-1614036342177-a1c34a03e350?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>

<style scoped></style>
