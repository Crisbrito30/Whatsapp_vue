<template>
  <div id="app">
    <section class="section">

      <div class="container">
        <div class="row   ">
          <div class="d-flex align-items-center ">
            <i class="bi bi-whatsapp p-2 m-2"></i>
            <p class="zap-cris text-white ">ZAP DO CRIS</p>
          </div>
        </div>
        <div class="button is-primary is-light " @click="toggleSessao">
          {{ sessaoInicial ? 'fechar Sessão Inicial' : 'abri Sessão inical' }} <i
            class="bi bi-arrow-right-square-fill"></i>
        </div>

        <div v-if="sessaoInicial">
          <!-- Componente SessaoInicial -->
          <SessaoInicial />
        </div>

        <div v-else class="columns">
          <div class="column is-1 lista-de-ferramentas ">
            <span class="adicionar vstack gap-5 col-md-5 mx-auto" type="button">
              <i class="bi bi-chat-left-dots" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables."></i>
              <i class="bi bi-bar-chart" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip"
                data-bs-title="Aqui fica os gráficos de analise."></i>
              <i class="bi bi-box-fill" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip"
                data-bs-title="Aqui fica gerênciamneto de de status"></i>
              <i class="bi bi-gear" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip"
                data-bs-title="Aqui fica as configuração do sistemas"></i>
              
            </span>

          </div>
          <!-- Coluna Esquerda: Lista de Conversas -->
          <div class="column is-4 lista-de-conversas">
            <div class="barra-superior"
              style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
              <span style="font-weight: bold; font-size: 20px;">Chats</span>
              <span class="adicionar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                <div>
                  <i class="bi bi-plus-circle-fill" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip"
                  data-bs-title="Aqui  vc pode adicionar usuário e grupos"></i>  
                </div>
              </span>
            </div>
            <!-- Offcanvas Adicionar Chat -->
            <MenuLateral />
            <ItemDaListaDeConversa v-for="(conversa, indice) in conversas" :key="indice"
              :mensagemAtiva="indice === indiceAtivo" :nomeDoUsuario="conversa.usuario" :fotoUsuario="conversa.foto"
              :ultimaMensagem="conversa.mensagens[0].conteudo" v-on:click="indiceAtivo = indice" />
          </div>

          <!-- Coluna Direita: Conversa Ativa -->
          <div class="column is-8 conversa-ativa">
            <div class="barra-superior">
              <img :src="conversas[indiceAtivo].foto" alt="foto do usuário" class="foto-usuario">
              <div class="infomracoes-usuario">
                <span>{{ conversas[indiceAtivo].usuario }}</span>
                <small class="bio">{{ conversas[indiceAtivo].bio }}</small>
              </div>
            </div>
            <div class="lista-mensagens">
              <mensagem-da-conversa-ativa v-for="(mensagem, indice_) in conversas[indiceAtivo].mensagens" :key="indice_"
                :conteudo="mensagem.conteudo" :horario="mensagem.horario" :verde="mensagem.verde" />
            </div>
            <!-- Barra de envio de mensagem -->
            <div class="barra-inferior">
              <!-- Botão de emoji -->
              <span class="icon" ref="emojiButton">
                <i class="bi bi-emoji-grin"></i>
              </span>

              <!-- Picker de emojis -->
              <div ref="emojiPicker" style="display: none;">
                <!-- Conteúdo do emoji picker aqui -->
              </div>

              <!-- Botão de anexo -->
              <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-paperclip"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <label class="dropdown-item">
                    <i class="bi bi-fast-forward-circle"></i> Video
                    <input type="file" accept="video/*" @change="enviarArquivo($event, 'video')" hidden />
                  </label>
                </li>
                <li>
                  <label class="dropdown-item">
                    <i class="bi bi-card-image"></i> Foto
                    <input type="file" accept="image/*" @change="enviarArquivo($event, 'foto')" hidden />
                  </label>
                </li>
                <li>
                  <label class="dropdown-item">
                    <i class="bi bi-file-earmark-spreadsheet"></i> Arquivo
                    <input type="file" @change="enviarArquivo($event, 'arquivo')" hidden />
                  </label>
                </li>
              </ul>

              <!-- Campo de texto para enviar mensagem -->
              <input type="text" class="input" v-on:keyup.enter="enviarMensagem" placeholder="Insira sua mensagem"
                v-model="conteudoASerEnviado">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue';
import conversasIniciais from './dado.js';
import ItemDaListaDeConversa from './components/ItemDaListaDeConversa.vue';
import MensagemDaConversaAtiva from './components/MensagemDaConversaAtiva.vue';
import MenuLateral from './components/MenuLateral.vue';
import SessaoInicial from './components/SessaoInicial.vue';

// Estado
const conversas = ref(conversasIniciais);
const indiceAtivo = ref(0);
const conteudoASerEnviado = ref('');
const sessaoInicial = ref(false);
const emojiButton = ref(null);
const emojiPicker = ref(null);

import * as bootstrap from 'bootstrap'; // Importação explícita


onMounted(() => {
  // Inicialização dos tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Manipulação do botão e do picker de emojis
  if (emojiButton.value && emojiPicker.value) {
    emojiButton.value.addEventListener('click', () => {
      emojiPicker.value.style.display =
        emojiPicker.value.style.display === 'none' ? 'block' : 'none';
    });

    emojiPicker.value.addEventListener('emoji-click', event => {
      const emoji = event.detail.unicode;
      conteudoASerEnviado.value += emoji;
      emojiPicker.value.style.display = 'none'; // Fecha o seletor após escolher o emoji
    });
  } else {
    console.error('Elemento não encontrado');
  }
});

// Método para alterar o estado da sessão inicial
const toggleSessao = () => {
  sessaoInicial.value = !sessaoInicial.value;
};

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

// Função para enviar mídia (foto, vídeo, arquivo)
const enviarArquivo = async (event) => {
  const file = event.target.files[0];
  const contactId = '5515998566622@c.us';
  if (file) {
    await uploadFile(file, contactId);
  }
};

const uploadFile = async (file, contactId) => {
  const url = 'http://localhost:3000/contact/getProfilePicUrl/projetozap1';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('contactId', contactId);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-api-key': 'projetozap',
        // 'Content-Type' não é necessário aqui; o navegador define automaticamente como 'multipart/form-data'
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erro na rede');
    }

    const data = await response.json();
    console.log('Upload bem-sucedido', data);
  } catch (error) {
    console.error('Erro no upload', error);
  }
};
</script>



<style>
.bi-whatsapp {
  color: white;
  font-size: 35px;
}
.custom-tooltip {
      --bs-tooltip-bg: #5bdd95 !important;/* Exemplo de cor personalizada */
      --bs-tooltip-color: #464444 !important; /* Exemplo de cor do texto */
    }

.bi-fast-forward-circle,
.bi-card-image,
.bi-file-earmark-spreadsheet, 
.bi-plus-circle-fill {
  margin: 15px;
  margin-left: 10px;
  font-size: 22px;
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
