<template> 
<div  class="columns columns2 sessao-segundaria ">
          <div class="column is-1 lista-de-ferramentas ">
            <span class="adicionar vstack gap-5 col-md-5 mx-auto" type="button">
              <i class="bi bi-chat-left-dots" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables."></i>
              <i class="bi bi-bar-chart" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip" data-bs-title="Aqui fica os gráficos de analise."></i>
              <i class="bi bi-box-fill" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip" data-bs-title="Aqui fica gerênciamneto de de status"></i>
              <i class="bi bi-gear" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip" data-bs-title="Aqui fica as configuração do sistemas"></i>
              <i class="bi bi-person-circle" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip" data-bs-title="Aqui fica os contatos"></i>
              <spam type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="bi bi-people-fill" data-bs-toggle="tooltip" data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip" data-bs-title="Aqui fica os grupos "></i>
              </spam>
            </span>
          </div>
          <!-- Modal -->
          <div class="modal fade  modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna Esquerda: Lista de Conversas -->
          <div class="column is-3 lista-de-conversas">
            <div class="barra-superior"
              style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
              <span style="font-weight: bold; font-size: 20px;">Chats</span>
              <span class="adicionar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                <div>
                  <i class="bi bi-plus-circle-fill" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip" data-bs-title="Aqui  vc pode adicionar usuário e grupos"></i>
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
</template>

<script setup>
import { ref,onMounted } from 'vue';
import ItemDaListaDeConversa from './ItemDaListaDeConversa.vue';
import MensagemDaConversaAtiva from './MensagemDaConversaAtiva.vue';
import MenuLateral from './MenuLateral.vue';
import conversasIniciais from '@/dado.js';
import * as bootstrap from 'bootstrap'; // Importação explícita


// // ESTADO//
const conteudoASerEnviado = ref('');
const conversas = ref(conversasIniciais);
const indiceAtivo = ref(0);
const emojiButton =ref(null);
const emojiPicker = ref (null);


// Inicialização dos tooltips
onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
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