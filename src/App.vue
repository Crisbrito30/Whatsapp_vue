<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="secAO">
          <!-- Botão para Iniciar Sessão -->
          <button class="button is-primary p-3" @click="iniciarSessao">Iniciar Sessão</button>
          <!-- Exibe o QR Code se disponível -->
          <!-- Botão ou elemento que dispara a função obterQrCode -->
          <button @click="obterQrCode" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gerarQrCode">Obter QR Code</button>

          <button @click="closeSession">Encerrar Sessão</button>

          <div v-if="qrCodeUrl">
            <p>Escaneie o QR Code para autenticação:</p>
            <img :src="qrCodeUrl" alt="QR Code" />
          </div>


          <!-- Mensagem de Status da Sessão -->
          <div v-if="sessionStatus" :class="{ 'has-text-success': sessionSuccess, 'has-text-danger': !sessionSuccess }">
            {{ sessionStatus }}
          </div>
        </div>
        <div class="columns janela-principal">
          <!-- Coluna Esquerda -->
          <div class="column is-3 lista-de-conversas">
            <div class="barra-superior"
              style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
              <span style="font-weight: bold; font-size: 20px;">Chats</span>
              <span class="adicionar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                <i class="bi bi-plus-circle-fill"></i>
              </span>
            </div>
            <!-- Offcanvas Adicionar Chat -->
            <MenuLateral />
            <ItemDaListaDeConversa v-for="(conversa, indice) in conversas" :key="indice"
              :mensagemAtiva="indice === indiceAtivo" :nomeDoUsuario="conversa.usuario" :fotoUsuario="conversa.foto"
              :ultimaMensagem="conversa.mensagens[0].conteudo" v-on:click="indiceAtivo = indice" />
          </div>
          <!-- Coluna Direita -->
          <div class="column conversa-ativa">
            <!-- Barra Superior -->
            <div class="barra-superior">
              <img :src="conversas[indiceAtivo].foto" alt="foto do usuário" class="foto-usuario">
              <div class="infomracoes-usuario">
                <span>{{ conversas[indiceAtivo].usuario }}</span>
                <small class="bio">{{ conversas[indiceAtivo].bio }}</small>
              </div>
            </div>
            <!-- Mensagens -->
            <div class="lista-mensagens">
              <mensagem-da-conversa-ativa v-for="(mensagem, indice_) in conversas[indiceAtivo].mensagens" :key="indice_"
                :conteudo="mensagem.conteudo" :horario="mensagem.horario" :verde="mensagem.verde" />
            </div>
            <!-- Barra Inferior -->
            <div class="barra-inferior">
              <span class="icon" id="emoji-button">
                <i class="bi bi-emoji-grin"></i>
              </span>
              <!-- Seletor de Emoji -->
              <emoji-picker style="display: none;" id="emoji-picker"></emoji-picker>
              <input type="text" class="input" v-on:keyup.enter="enviarMensagem" placeholder="Insira sua mensagem"
                v-model="conteudoASerEnviado">
            </div>
          </div>
        </div>
      </div>
    </section>
    <QrCodeModal />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import conversasIniciais from './dado.js';
import ItemDaListaDeConversa from './components/ItemDaListaDeConversa.vue';
import MensagemDaConversaAtiva from './components/MensagemDaConversaAtiva.vue';
import MenuLateral from './components/MenuLateral.vue';
import axios from 'axios'; // Importa axios para fazer requisições HTTP
import QrCodeModal from './components/QrCodeModal.vue';


// Estado
const conversas = ref(conversasIniciais);
const indiceAtivo = ref(0);
const conteudoASerEnviado = ref('');
const sessionStatus = ref(''); // Armazena a mensagem de status da sessão
const sessionSuccess = ref(false); // Armazena o estado de sucesso da sessão
const qrCodeUrl = ref(''); // Inicializa como string vazia para armazenar a URL do QR Code
// Criando uma instância do Axios com a URL base
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Função para iniciar uma sessão
function iniciarSessao() {
  const apiKey = 'projetozap';
  const instance = 'projetozap1';

  // Fazendo a requisição ao backend para iniciar a sessão
  api.get(`/session/start/${instance}`, {
  headers: {
    'x-api-key': apiKey,
    'accept': 'application/json'
  }
})

  .then(response => {
    if (response.data.success) {
      console.log('Sessão iniciada com sucesso:', response.data.message);
      sessionStatus.value = 'Sessão iniciada com sucesso.';
      sessionSuccess.value = true;


    } else {
      console.log('Erro ao iniciar a sessão:', response.data.message);
      sessionStatus.value = 'Erro ao iniciar a sessão.';
      sessionSuccess.value = false;
    }
  })
  .catch(error => {
    console.error('Erro ao conectar com o servidor:', error);
    sessionStatus.value = 'Erro ao conectar com o servidor.';
    sessionSuccess.value = false;
  });
}

// Função para gerar o QR Code

// Função para encerrar a sessão usando o endpoint correto
const closeSession = async () => {
  try {
    const response = await fetch('http://localhost:3000/session/terminateAll', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-api-key': 'projetozap',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao encerrar a sessão');
    }

    const result = await response.json(); // Ler a resposta como JSON, se necessário
    console.log('Sessão encerrada com sucesso:', result);
    qrCodeUrl.value = null; // Opcional: Limpar o QR code ao encerrar a sessão
  } catch (error) {
    console.error('Erro ao encerrar a sessão:', error);
  }
};


// Função para enviar mensagem
// Função para enviar mensagem
const enviarMensagem = () => {
  const horarioAtual = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const novaMensagem = {
    horario: horarioAtual,
    conteudo: conteudoASerEnviado.value,
    verde: true,
  };

  // Adiciona a mensagem localmente
  conversas.value[indiceAtivo.value].mensagens.push(novaMensagem);

  // Substitua 'projetozap1' pela sua variável `apiKey` ou valor diretamente
  const apiKey = 'projetozap1';

  // Envia a mensagem para o backend com os parâmetros necessários
  fetch(`http://localhost:3000/client/sendMessage/${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'projetozap', // Inclui o cabeçalho da API Key
    },
    body: JSON.stringify({
      chatId: '5515998566622@c.us',
      contentType: 'string',
      content: conteudoASerEnviado.value,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Mensagem enviada com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao enviar mensagem:', error);
    });

  // Limpa o campo de mensagem após o envio
  conteudoASerEnviado.value = '';
};

// Montagem do Componente
onMounted(() => {
  const emojiButton = document.getElementById('emoji-button');
  const emojiPicker = document.getElementById('emoji-picker');

  // Ao clicar no botão de emoji
  emojiButton.addEventListener('click', () => {
    emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
  });

  // Evento de clique no emoji
  emojiPicker.addEventListener('emoji-click', event => {
    const emoji = event.detail.unicode;
    conteudoASerEnviado.value += emoji;
    emojiPicker.style.display = 'none'; // Fecha o seletor após escolher o emoji
  });
});

</script>


<style>
/* Estilo para as mensagens de status da sessão */
.has-text-success {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.has-text-danger {
  color: red;
  font-weight: bold;
  margin-top: 10px;
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

.secAO {
  position: relative;
  /* ou absolute, se necessário */
  z-index: 10;
  /* valor maior para trazer à frente */
  /* Ajuste de posição se necessário */
  margin-top: -50px;
  /* Exemplo de ajuste para mover o botão */
}

.icon {
  cursor: pointer;
}
</style>
