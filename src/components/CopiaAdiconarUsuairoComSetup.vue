<tempalte>
    <script setup>
import { ref } from 'vue';

// Criação das referências para os campos do formulário
const nome = ref('');
const sobrenome = ref('');
const cidade = ref('');
const status = ref('');

// Função para salvar os dados no localStorage
const salvarDados = () => {
  // Verifica se todos os campos foram preenchidos
  if (nome.value && sobrenome.value && cidade.value && status.value) {
    // Cria um objeto com os valores dos campos
    const dadosUsuario = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      cidade: cidade.value,
      status: status.value,
    };

    // Converte o objeto em uma string JSON para armazenar no localStorage
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

    // Alerta que os dados foram salvos com sucesso
    alert('As alterações foram salvas com sucesso.');

    // Limpa os campos do formulário após salvar os dados
    nome.value = '';
    sobrenome.value = '';
    cidade.value = '';
    status.value = '';
  } else {
    // Se algum campo não foi preenchido, mostra uma mensagem de erro
    alert('Por favor, preencha todos os campos antes de salvar.');
  }
};
</script>




</tempalte>