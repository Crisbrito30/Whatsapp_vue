<template>
    <!-- Estrutura do Modal -->
    <div class="modal fade" id="gerarQrCode" tabindex="-1" aria-labelledby="qrCodeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="qrCodeModalLabel">QR Code Gerado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Aqui vai a imagem do QR Code -->
                    <img v-if="qrCodeImage" :src="qrCodeImage" alt="QR Code" class="img-fluid" />
                    <p v-else>Gerando QR Code...</p>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const qrCodeImage = ref(''); // Esta será preenchida quando o QR code for gerado

// Função para gerar o QR code
const gerarQrCode = () => {
  fetch('http://localhost:3000/session/qr/projetozap1/image', {
    method: 'GET',
    headers: {
      'accept': 'image/png',
      'x-api-key': 'projetozap',
    },
  })
    .then(response => response.blob())
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      qrCodeImage.value = imageUrl; // Define a imagem do QR code
    })
    .catch(error => {
      console.error('Erro ao gerar QR code:', error);
    });
};

// Montagem do Componente
onMounted(() => {
  // Pode ser usado para inicializar qualquer lógica adicional, se necessário
  gerarQrCode(); // Gera o QR code quando o componente for montado
});
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>