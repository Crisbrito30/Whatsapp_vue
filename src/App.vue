<template>
  <div id="app">
    <section class="section">

      <div class="container">
        <div class="row   ">
          <div class="d-flex align-items-center start-0">
            <i class="bi bi-whatsapp p-2 m-2"></i>
            <p class="zap-cris text-white  Fs-2">ZAP DO CRIS</p>
            
          </div>
        </div>

        <!-- Tela de sessão  inical -->
        <div v-if="sessaoInicial">
          <!-- Componente SessaoInicial -->
          <SessaoInicial />
        </div>
        <!--Tela secundáira -->
        <div v-else class="SessaoSecundaria">
          <SessaoSecundaria  />
        
        </div>
      </div>
    </section>
  </div>
</template>




<script setup>
import { ref, onMounted, onBeforeUnmount  } from 'vue';
import SessaoInicial from './components/SessaoInicial.vue';
import { io } from 'socket.io-client'; // Importa o socket.io-client
import SessaoSecundaria from './components/SessaoSecundaria.vue';


// Estado
// const SessaoSecundaria= ref(null);
// const conversas = ref(conversasIniciais);
// const indiceAtivo = ref(0);
// const conteudoASerEnviado = ref('');
const sessaoInicial = ref(true);
// const emojiButton = ref(null);
// const emojiPicker = ref(null);
const contactStatuses = ref([]); // Adiciona a lista de status dos contatos
let socket; // Declara a variável socket



onMounted(() => {
  // Inicializa o socket conectando ao servidor
  socket = io('http://localhost:3000'); // Altere a URL se necessário

  // Ouve o evento 'contacts-status' e atualiza a lista de status
  socket.on('contacts-status', (statuses) => {
    console.log('Status dos contatos recebidos:', statuses);
    contactStatuses.value = statuses;
  });

  //  conexão QR code estabelecida 
  socket.on('qr-code-connected', () => {
    sessaoInicial.value = false; // Abre automaticamente a sessão após a conexão
    console.log('Sessão inicial alterada para:', sessaoInicial.value);

  });

  
});

// Limpeza ao desmontar o componente
onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect();
  }
});


</script>



<style>
.bi-whatsapp {
  color: white;
  font-size: 35px;
}

.columns2 {
  border-radius: 22px;

}

.custom-tooltip {
  --bs-tooltip-bg: #5bdd95 !important;
  /* Exemplo de cor personalizada */
  --bs-tooltip-color: #464444 !important;
  /* Exemplo de cor do texto */
}

.icon-container {
  position: relative;
  display: inline-block;
  width: 1.5em;
  /* Ajuste o valor conforme o tamanho desejado */
  height: 1.5em;
}

.custom-icon {
  position: absolute;
  top: -20px;
  left: 0;
  transition: opacity 0.3s ease;
  font-size: 1.5rem;
}

.hidden {
  opacity: 0;
}


.bi-fast-forward-circle,
.bi-card-image,
.bi-file-earmark-spreadsheet {
  font-size: 22px;
  padding: auto;
}

/* Resto do estilo existente */

.janela-principal {
  min-height: 1200px;
  box-shadow: 0 3rem 3rem -1rem rgba(10, 10, 10, .2);
  position: relative;
}

.barra-superior {
  display: flex;
  align-items: center;
  margin: 0;
  height: 60px;
  background: #EDEDED;
  border-right: 1px solid #E1E1E1;
  border-bottom: 1px solid rgb(200, 200, 200);
  padding-left: 20px;
}

.foto-usuario {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.barra-superior span {
  line-height: 30px;
  margin-left: 25px;
  font-weight: 500;
  display: block;
}

.barra-superior .bio {
  font-size: 12px;
  color: gray;
  margin-top: -5px;
}

.infomracoes-usuario {
  display: flex;
  flex-direction: column;
}

.lista-de-conversas {
  padding: 0;
  background: white;
  position: relative;
}

.lista-de-ferramentas {
  padding: 15px;
  background: white;
  position: relative;
  align-items: center;
  font-size: x-large;

}

.conversa-ativa {
  padding: 0;
  background: #E5DDD5;
  position: relative;
}

.lista-mensagens {
  height: 900px;
  overflow-y: auto;
  padding: 0 15px;
}

.barra-inferior {
  height: 50px;
  padding: 15px;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
}

.input {
  flex: 1;
  margin: 0 15px;
}

.icon {
  cursor: pointer;
}
</style>
