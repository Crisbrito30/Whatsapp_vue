<template>
  <div id="app">
    <section class="section">
      
      <div class="container">
          <div class="row   ">
             <div class="d-flex align-items-center "> 
                <i class="bi bi-whatsapp p-2 m-2"></i>
                <p class="cor">ZAP DO CRIS</p>
          </div>
        </div>

                 
        <div v-if="sessaoInicial" >
          <!-- Componente SessaoInicial -->
          <SessaoInicial  />
        </div>
        
        <div v-else class="columns">
          <!-- Coluna Esquerda: Lista de Conversas -->
          <div class="column is-4 lista-de-conversas">
            <div class="barra-superior" style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
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
              <mensagem-da-conversa-ativa v-for="(mensagem, indice_) in conversas[indiceAtivo].mensagens"
                :key="indice_" :conteudo="mensagem.conteudo" :horario="mensagem.horario" :verde="mensagem.verde" />
            </div>
            <div class="barra-inferior">
              <span class="icon" id="emoji-button">
                <i class="bi bi-emoji-grin"></i>
              </span>
              <emoji-picker style="display: none;" id="emoji-picker"></emoji-picker>
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
const sessaoInicial =ref(true);  


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
.cor{
  font:white;
}
.bi-whatsapp {
  color:white;
  font-size:35px;
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

.icon {
  cursor: pointer;
}
</style>
