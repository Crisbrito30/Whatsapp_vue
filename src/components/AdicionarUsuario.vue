<template>
    <form class="row g-3 needs-validation was-validated" novalidate @submit.prevent="salvarDados">
      <div class="col-12">
        <label for="validationCustom01" class="form-label">Nome</label>
        <input type="text" class="form-control" id="validationCustom01" v-model="nome"  required>
        <div class="invalid-feedback">
          Forneça um valor válido!
        </div>
      </div>
      <div class="col-12">
        <label for="validationCustom02" class="form-label">Sobrenome</label>
        <input type="text" class="form-control" id="validationCustom02" v-model="sobrenome" required>
        <div class="invalid-feedback">
          Preencha um Sobrenome válido!
        </div>
      </div>
      <div class="col-7">
        <label for="validationCustom03" class="form-label">Cidade</label>
        <input type="text" class="form-control" id="validationCustom03" v-model="cidade" required>
        <div class="invalid-feedback">
          Preencha uma cidade válida!
        </div>
      </div>
      <div class="col-5">
        <label for="validationCustom04" class="form-label">Status</label>
        <select class="form-select" id="validationCustom04" v-model="status" required>
          <option selected disabled value="">Choose...</option>
          <option>Ativo</option>
          <option>Inativo</option>
        </select>
        <div class="invalid-feedback">
          Selecione um status válido.
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-success" type="submit">Salvar</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'AdicionarUsuario',
    
    // Definindo o estado (dados) do componente
    data() {
      return {
        nome: '',
        sobrenome: '',
        cidade: '',
        status: '',
      };
    },
    
    methods: {
      // Função para salvar os dados no localStorage
      salvarDados() {
        // Verifica se todos os campos foram preenchidos
        if (this.nome && this.sobrenome && this.cidade && this.status) {
          // Cria um objeto com os valores dos campos
          const dadosUsuario = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            cidade: this.cidade,
            status: this.status,
          };
  
          // Converte o objeto em uma string JSON para armazenar no localStorage
          localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
  
          // Alerta que os dados foram salvos com sucesso
          alert('As alterações foram salvas com sucesso.');
  
          // Limpa os campos do formulário após salvar os dados
          this.nome = '';
          this.sobrenome = '';
          this.cidade = '';
          this.status = '';
        } else {
          // Se algum campo não foi preenchido, mostra uma mensagem de erro
          alert('Por favor, preencha todos os campos antes de salvar.');
        }
      },
    },
  };
  </script>
  
  
  
  