<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns janela-principal">
          
          <!-- Coluna Esquerda -->
          <div class="column is-3 lista-de-conversas">
            <div class="barra-superior" style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
              <span style="font-weight: bold; font-size: 20px;">Chats</span>
              <span class="adicionar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                <i class="bi bi-person-plus-fill"></i>
              </span>
            </div>
            
            <!-- Offcanvas Adicionar Chat -->
            <MenuLateral />

            <item-lista-de-conversa
              v-for="(conversa, indice) in conversas"
              :key="indice"
              :mensagemAtiva="indice === indiceAtivo"
              :nomeDoUsuario="conversa.usuario"
              :fotoUsuario="conversa.foto"
              :ultimaMensagem="conversa.mensagens[0].conteudo"
              v-on:click="indiceAtivo = indice" />
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
              <mensagem-da-conversa-ativa
                v-for="(mensagem, indice_) in conversas[indiceAtivo].mensagens"
                :key="indice_"
                :conteudo="mensagem.conteudo"
                :horario="mensagem.horario"
                :verde="mensagem.verde" />
            </div>

            <!-- Barra Inferior -->
            <div class="barra-inferior">
              <span class="icon" id="emoji-button">
                <i class="bi bi-emoji-grin"></i>
              </span>
              <!-- Seletor de Emoji -->
              <emoji-picker style="display: none;" id="emoji-picker"></emoji-picker>

              <input type="text" class="input" v-on:keyup.enter="enviarMensagem" placeholder="Insira sua mensagem" v-model="conteudoASerEnviado">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import conversasIniciais from './dado.js';
import ItemDaListaDeConversa from './components/ItemDaListaDeConversa.vue';
import MensagemDaConversaAtiva from './components/MensagemDaConversaAtiva.vue';
import MenuLateral from './components/MenuLateral.vue';

export default {
  data() {
    return {
      conversas: conversasIniciais,
      indiceAtivo: 0,
      conteudoASerEnviado: ""
    };
  },
  components: {
    'item-lista-de-conversa': ItemDaListaDeConversa,
    'mensagem-da-conversa-ativa': MensagemDaConversaAtiva,
    MenuLateral
  },
  methods: {
    enviarMensagem() {
      const horarioAtual = new Date().getHours() + ":" + new Date().getMinutes();
      const novaMensagem = {
        horario: horarioAtual,
        conteudo: this.conteudoASerEnviado,
        verde: true
      };
      this.conversas[this.indiceAtivo].mensagens.push(novaMensagem);
      this.conteudoASerEnviado = "";
    }
  },
  mounted() {
    const emojiButton = document.getElementById('emoji-button');
    const emojiPicker = document.getElementById('emoji-picker');

    // Ao clicar no botão de emoji
    emojiButton.addEventListener('click', () => {
      emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
    });

    // Evento de clique no emoji
    emojiPicker.addEventListener('emoji-click', event => {
      const emoji = event.detail.unicode;
      this.conteudoASerEnviado += emoji;
      emojiPicker.style.display = 'none';  // Fecha o seletor após escolher o emoji
    });
  }
};
</script>

<style>
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
  height: 90%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.barra-inferior {
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 10px;
  position: absolute;
  background: #f0f0f0;
}

.barra-inferior input {
  border: none;
  padding: 10px;
  margin: 0 50px;
  width: 90%;
  border-radius: 15px;
  font-size: 16px;
}

.bi {
  font-size: 24px;
}
</style>



