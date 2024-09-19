<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-center start-0">
            <i class="bi bi-whatsapp p-2 m-2"></i>
            <p class="zap-cris text-white Fs-2">ZAP DO CRIS</p>
          </div>
        </div>

        <!-- Tela de sessão inicial -->
        <div v-if="sessaoInicial">
          <!-- Componente SessaoInicial -->
          <SessaoInicial />
        </div>

        <!-- Tela secundária -->
        <div v-else-if="mostrarNotificacao" class="notificacao">
          <p>Cliente autenticado!</p>
        </div>
        
        <div v-else class="SessaoSecundaria">
          <SessaoSecundaria />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SessaoInicial from './components/SessaoInicial.vue';
import SessaoSecundaria from './components/SessaoSecundaria.vue';
import { io } from 'socket.io-client';

const sessaoInicial = ref(true);
const mostrarNotificacao = ref(false);
let socket;

onMounted(() => {
  socket = io('http://localhost:3000');

  socket.on('authenticated', () => {
    mostrarNotificacao.value = true; // Exibe a notificação
    setTimeout(() => {
      mostrarNotificacao.value = false; // Oculta a notificação após o delay
      sessaoInicial.value = false; // Troca para a segunda sessão
    }, 3000); // Delay de 3 segundos
  });
});

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect();
  }
});
</script>

<style>
.notificacao {
  background: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
