<template>
  <EventLayout>
    <h2>Total: 48</h2>
    <h3>Presença confirmada: 30</h3>
    <div v-for="user in users" class="flex gap-20 items-center shadow-sm mb-4 bg-[var(--clear)] px-4 py-2 rounded-lg">
      <div class="flex-1 flex items-center gap-4">
        <NuxtImg :src="user.avatar" width="40" class="bordered border-2 rounded-full" />
        <p class="text-md font-bold">{{ user.name }}</p>
      </div>
      <div class="flex-1 flex items-end gap-4">
        
        <div class="flex-1 text-sm">
          <span class="text-md">Presença:</span>
          {{ user.status % 2 ? 'Confirmada' : 'Pendente' }}
        </div>
        <p class="text-sm">{{ user.payment ? "Pago" : "Pagamento pendente" }}</p>
      </div>
      <div>
        <button>Reenviar convite</button>
        <button>Remover</button>
      </div>
    </div>
  </EventLayout>
</template>

<script setup>
import { guestsData } from '~/utils/data/guests';

const users = reactive(guestsData)
</script>

<style lang="scss" scoped>

</style>