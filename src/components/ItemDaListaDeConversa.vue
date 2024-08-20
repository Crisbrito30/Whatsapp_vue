<template>
  <div class="item" :class="{ ativo: mensagemAtiva }">
    <div class="usuario-info">
      <div class="infomracoes-usuario"> 
      <img :src="fotoUsuario" alt="Foto do usuáiro" class="foto-usuario">
      <div class="detalhes">
          <div class="title is-6">{{ nomeDoUsuario }}</div>
          
          <div class="subtitle is-6">{{ bioUsuario }}</div>
        </div>
        <div class="subtitle is-6">{{ ultimaMensagem }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemDaListaDeConversa',
  props: ['nomeDoUsuario', 'ultimaMensagem', 'mensagemAtiva', 'fotoUsuario','bioUsuario'],
}
</script>

<style>
.subtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gray;
}

.item {
  border-bottom: 1px solid #F2F2F2;
  padding: 15px 30px;
  margin-bottom: 0 !important;
}

.item:hover {
  background: #F5F5F5;
  cursor: pointer;
}

.item.ativo {
  background: rgb(235, 235, 235);
}
.foto-usuario{
  width: 40px;
  height: 40px;
  border-radius:50%;
  margin-right: 15px;
}
.infomracoes-usuario{
  display: flex;
  flex-direction: column;
}
</style>