<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else>
    <h2>Total: {{ users.length }}</h2>
    <h3>Presença confirmada: 3</h3>
    <div
      v-for="user in users"
      class="mt-6 flex gap-20 justify-center items-center shadow-sm mb-4 bg-[var(--clear)] px-4 py-4 rounded-lg"
    >
      <div class="flex-1 flex justify-center flex-col items-start">
        <div class="flex items-center gap-2">
          <NuxtImg
            :src="user.avatar"
            width="40"
            height="40"
            class="bordered border-2 rounded-full bg-slate-200"
          />
          <div>
            <p class="text-md font-bold">{{ user.name }}</p>
            <span class="text-xs">{{
              user.status % 2 ? "Confirmada" : "Pendente"
            }}</span>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-end gap-4">
        <p class="text-xs">
          {{ user.payment ? "Pago" : "Pagamento pendente" }}
        </p>
      </div>
      <div class="flex gap-4">
        <button
          class="text-sm bg-[var(--france)] px-5 py-2 rounded-full text-white"
        >
          Reenviar convite
        </button>
        <button
          class="text-sm bg-[var(--amour-light)] px-5 py-2 rounded-full text-[var(--amour)]"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "events",
});

const { status, data: users } = await useLazyFetch("/api/guests");

</script>

<style lang="scss" scoped></style>
