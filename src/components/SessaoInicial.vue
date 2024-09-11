<template>
    <div class="columns  Sessão-incial shadow-lg">
        <div class="container text-center ">
            <div class="column  sessão-inicial ">

                <div class="container">
                    <div class="row">
                        <div class="col- d-flex align-items-center justify-content-between ">
                            <div
                                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x1k70j0n">
                                <span data-icon="wa-desktop" class=""><svg viewBox="0 0 76 68" height="55"
                                        preserveAspectRatio="xMidYMid meet" class="" fill="none">
                                        <title>wa-desktop</title>
                                        <rect x="9" y="14" width="58" height="38" fill="#00A884"></rect>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10 15H66V50.8837H10V15ZM7 50.8837V15C7 13.3431 8.34315 12 10 12H66C67.6569 12 69 13.3431 69 15V50.8837H76V52C76 54.2091 74.2091 56 72 56H66H10H4C1.79086 56 0 54.2091 0 52V50.8837H7Z"
                                            fill="#54656F"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10 15H66V50.8837H10V15ZM7 50.8837V15C7 13.3431 8.34315 12 10 12H66C67.6569 12 69 13.3431 69 15V50.8837H76V52C76 54.2091 74.2091 56 72 56H66H10H4C1.79086 56 0 54.2091 0 52V50.8837H7Z"
                                            fill="black" fill-opacity="0.6"></path>
                                        <rect x="21" y="30" width="34" height="34" rx="2" fill="#25D366" class="">
                                        </rect>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M30.4479 52.1996L29.6118 55.3882L32.8004 54.5521L33.4624 54.9318C34.7977 55.6976 36.3448 56.1361 38 56.1361C43.0457 56.1361 47.1361 52.0457 47.1361 47C47.1361 41.9543 43.0457 37.8639 38 37.8639C32.9543 37.8639 28.8639 41.9543 28.8639 47C28.8639 48.6552 29.3024 50.2023 30.0682 51.5376L30.4479 52.1996ZM27 58L28.4514 52.4649C27.528 50.8549 27 48.9891 27 47C27 40.9249 31.9249 36 38 36C44.0751 36 49 40.9249 49 47C49 53.0751 44.0751 58 38 58C36.0109 58 34.1451 57.472 32.5351 56.5486L27 58Z"
                                            fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M43.0401 49.2354C42.7664 49.0991 41.4208 48.4409 41.1697 48.3501C40.9187 48.2592 40.7365 48.2138 40.5542 48.4864C40.3719 48.7591 39.8472 49.3723 39.6875 49.5535C39.5279 49.7353 39.3682 49.7578 39.0945 49.6214C38.8209 49.4851 37.939 49.1978 36.8933 48.2706C36.0797 47.5488 35.5303 46.6577 35.3707 46.385C35.211 46.1124 35.3538 45.9651 35.4904 45.8298C35.6133 45.7076 35.764 45.5117 35.9011 45.3529C36.0382 45.1941 36.0834 45.0803 36.1748 44.899C36.2662 44.7172 36.2205 44.5585 36.1522 44.4221C36.0839 44.2858 35.5366 42.946 35.3081 42.4012C35.0859 41.8705 34.8601 41.9426 34.6926 41.9337C34.5329 41.9259 34.3506 41.9243 34.1679 41.9243C33.9851 41.9243 33.6888 41.9922 33.4378 42.2649C33.1867 42.5375 32.4797 43.1962 32.4797 44.5354C32.4797 45.8747 33.4604 47.1696 33.5975 47.3514C33.7345 47.5332 35.5276 50.2822 38.2731 51.4616C38.926 51.7421 39.4359 51.9098 39.8335 52.0351C40.4891 52.2425 41.0857 52.2133 41.5574 52.1432C42.0832 52.0649 43.1767 51.4846 43.4046 50.8489C43.6326 50.2132 43.6326 49.6679 43.5643 49.5545C43.496 49.4412 43.3133 49.3728 43.0396 49.2364L43.0401 49.2354Z"
                                            fill="white"></path>
                                    </svg></span>
                            </div>

                            <!-- Mensagem de Status da Sessão -->
                            <div v-if="sessionStatus"
                                :class="{ 'has-text-success': sessionSuccess,
                                 'has-text-danger': !sessionSuccess }">
                                {{ sessionStatus }}
                            </div>
                            <!-- <button class="button is-danger" @click="closeSession">Encerrar Sessão</button> -->
                        </div>
                        <div class="col-6 ">
                            <div class="_aj-7">
                                <div class="landing-title _aj-8">Use o WhatsApp no seu computador</div>

                                <div class="_aj-9"></div>
                                <ol class="_aj-b">
                                    <li class="_aj-c">Abra o <strong>WhatsApp</strong> no seu celular.</li>
                                    <li class="_aj-c">Toque em <strong>Mais opções <span class="x1rg5ohu x16dsc37"><svg
                                                    height="24px" viewBox="0 0 24 24" width="24px">
                                                    <rect fill="#f2f2f2" height="24" rx="3" width="24"></rect>
                                                    <path
                                                        d="m12 15.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5zm0-2c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm0-5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"
                                                        fill="#818b90"></path>
                                                </svg></span></strong> no Android ou em <strong>Configurações <span
                                                class="x1rg5ohu x16dsc37"><svg width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <rect fill="#F2F2F2" width="24" height="24" rx="3"></rect>
                                                    <path
                                                        d="M12 18.69c-1.08 0-2.1-.25-2.99-.71L11.43 14c.24.06.4.08.56.08.92 0 1.67-.59 1.99-1.59h4.62c-.26 3.49-3.05 6.2-6.6 6.2zm-1.04-6.67c0-.57.48-1.02 1.03-1.02.57 0 1.05.45 1.05 1.02 0 .57-.47 1.03-1.05 1.03-.54.01-1.03-.46-1.03-1.03zM5.4 12c0-2.29 1.08-4.28 2.78-5.49l2.39 4.08c-.42.42-.64.91-.64 1.44 0 .52.21 1 .65 1.44l-2.44 4C6.47 16.26 5.4 14.27 5.4 12zm8.57-.49c-.33-.97-1.08-1.54-1.99-1.54-.16 0-.32.02-.57.08L9.04 5.99c.89-.44 1.89-.69 2.96-.69 3.56 0 6.36 2.72 6.59 6.21h-4.62zM12 19.8c.22 0 .42-.02.65-.04l.44.84c.08.18.25.27.47.24.21-.03.33-.17.36-.38l.14-.93c.41-.11.82-.27 1.21-.44l.69.61c.15.15.33.17.54.07.17-.1.24-.27.2-.48l-.2-.92c.35-.24.69-.52.99-.82l.86.36c.2.08.37.05.53-.14.14-.15.15-.34.03-.52l-.5-.8c.25-.35.45-.73.63-1.12l.95.05c.21.01.37-.09.44-.29.07-.2.01-.38-.16-.51l-.73-.58c.1-.4.19-.83.22-1.27l.89-.28c.2-.07.31-.22.31-.43s-.11-.35-.31-.42l-.89-.28c-.03-.44-.12-.86-.22-1.27l.73-.59c.16-.12.22-.29.16-.5-.07-.2-.23-.31-.44-.29l-.95.04c-.18-.4-.39-.77-.63-1.12l.5-.8c.12-.17.1-.36-.03-.51-.16-.18-.33-.22-.53-.14l-.86.35c-.31-.3-.65-.58-.99-.82l.2-.91c.03-.22-.03-.4-.2-.49-.18-.1-.34-.09-.48.01l-.74.66c-.39-.18-.8-.32-1.21-.43l-.14-.93a.426.426 0 00-.36-.39c-.22-.03-.39.05-.47.22l-.44.84-.43-.02h-.22c-.22 0-.42.01-.65.03l-.44-.84c-.08-.17-.25-.25-.48-.22-.2.03-.33.17-.36.39l-.13.88c-.42.12-.83.26-1.22.44l-.69-.61c-.15-.15-.33-.17-.53-.06-.18.09-.24.26-.2.49l.2.91c-.36.24-.7.52-1 .82l-.86-.35c-.19-.09-.37-.05-.52.13-.14.15-.16.34-.04.51l.5.8c-.25.35-.45.72-.64 1.12l-.94-.04c-.21-.01-.37.1-.44.3-.07.2-.02.38.16.5l.73.59c-.1.41-.19.83-.22 1.27l-.89.29c-.21.07-.31.21-.31.42 0 .22.1.36.31.43l.89.28c.03.44.1.87.22 1.27l-.73.58c-.17.12-.22.31-.16.51.07.2.23.31.44.29l.94-.05c.18.39.39.77.63 1.12l-.5.8c-.12.18-.1.37.04.52.16.18.33.22.52.14l.86-.36c.3.31.64.58.99.82l-.2.92c-.04.22.03.39.2.49.2.1.38.08.54-.07l.69-.61c.39.17.8.33 1.21.44l.13.93c.03.21.16.35.37.39.22.03.39-.06.47-.24l.44-.84c.23.02.44.04.66.04z"
                                                        fill="#818b90"></path>
                                                </svg></span></strong> no iPhone</li>
                                    <li class="_aj-c">Toque em <strong>Dispositivos conectados</strong> e, em seguida,
                                        em <strong>Conectar dispositivo</strong>.</li>
                                    <li class="_aj-c"><span>Aponte seu celular para esta tela para escanear o QR
                                            code.</span></li>
                                </ol>
                            </div>

                        </div>
                        <!-- Exibe o QR Code se disponível -->
                        <div class="col-6">
                            <div class="qr-code-container">
                                <h4>Status da Sessão: </h4>
                                <div v-if="!qrCodeGenerated" class="d-flex justify-content-center my-4">
                                    <div class="spinner-border text-success" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>

                                <div v-if="qrCodeGenerated">
                                    <h2>QR Code Gerado:</h2>
                                    <img :src="qrCodeImage" alt="QR Code" />
                                </div>
                                <div v-else>
                                    <p>QR Code não gerado ainda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-2 status">
                <!-- Exibe os status dos contatos quando a sessão está pronta -->
                        <h2>Status dos Contatos</h2>

                        <div v-if="contactStatuses.length > 0">
                        <ul>
                            <li v-for="(status, index) in contactStatuses" :key="index">
                            {{ status.name }} - {{ status.status }}
                            </li>
                        </ul>
                        </div>
                        <div v-else>
                        <p>Não há status de contatos disponíveis.</p>
                        </div>
                    </div>
                    <div class="_ak5k">
                        <div class="landing-title _ak5l">Tutorial</div>

                        <div class="_ak5m"><a rel="noopener noreferrer" class="xt0b8zv link-secondary"
                                href="https://faq.whatsapp.com/1317564962315842?lang=pt-BR" target="_blank">Precisa de
                                ajuda para começar?</a>
                        </div>
                        <div class="_ak5n">
                            <div class="_ak5o">
                                <span class="">
                                    <video autoplay="" class="_ak5i" controls="" controlslist="nodownload">
                                        <source src="https://static.whatsapp.net/rsrc.php/yk/r/GoZyw2bTK6s.mp4"
                                            type="video/mp4">
                                    </video>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { io } from 'socket.io-client';

const sessionStatus = ref(''); // Armazena a mensagem de status da sessão
const sessionSuccess = ref(true); // Indica se a sessão foi bem-sucedida

const qrCodeImage = ref(null); // URL base64 do QR Code
const qrCodeGenerated = ref(false); // Flag para indicar se o QR Code foi gerado
const socket = ref(null);
const contactStatuses = ref([]); // Lista de status dos contatos
// Função para armazenar token de autenticação no localStorage
function storeAuthToken(token) {
  localStorage.setItem('authToken', token);
}

// Função para recuperar token de autenticação do localStorage
function getAuthToken() {
  return localStorage.getItem('authToken');
}

// Inicializa o socket.io e configura os eventos necessários
onMounted(() => {
    const token = getAuthToken(); // Recupera o token de autenticação do localStorage
    if (token) {
        console.log('Token encontrado:', token);

        // Envia o token para o servidor se necessário
        // socket.value.emit('authenticate', token);
    }
    
    socket.value = io('http://localhost:3000', {
        query: { token } // Passa o token como uma query string, se necessário
    });

    socket.value.on('qr', (qr) => {
        qrCodeImage.value = qr; // Recebe a URL base64 do QR Code
        qrCodeGenerated.value = true;
    });

    socket.value.on('ready', (data) => {
        console.log('Cliente pronto:', data);
        // Armazena o token quando o cliente estiver pronto
        const token = data.token; // Supondo que o token seja recebido aqui
        if (token) {
            storeAuthToken(token);
        }
    });

    socket.value.on('message', (msg) => {
        console.log('Mensagem recebida:', msg);
        // Faça o que for necessário com a mensagem recebida
    });

    socket.value.on('qrCode', (data) => {
        console.log('QR Code recebido do servidor:', data);
    });

    // Exibe os status dos contatos quando recebidos
    socket.value.on('contacts-status', (statuses) => {
        console.log('Status dos contatos:', statuses);
        contactStatuses.value = statuses; // Armazena os status dos contatos
    });
});

onBeforeUnmount(() => {
    if (socket.value) {
        socket.value.disconnect(); // Desconecta o socket ao desmontar o componente
    }
});
</script>


<style scoped>
/* Adicione seu CSS personalizado aqui */
</style>


<style scoped>
/*stylo de seção inicial */
.qr-code-container {
    display: flex;
    flex-direction: column;
    /* Organiza o conteúdo verticalmente */
    align-items: center;
    /* Centraliza o conteúdo horizontalmente */
    padding: 20px;
    /* Adiciona preenchimento ao contêiner */
    border-radius: 10px;
    /* Adiciona bordas arredondadas ao contêiner */
}

canvas {
    margin-bottom: 10px;
    /* Adiciona uma margem inferior ao QR Code */
    border: 1px solid #ddd;
    /* Adiciona uma borda ao QR Code */
    width: 500px;
    /* Ajusta a largura do QR Code */
    height: 250px;
    /* Ajusta a altura do QR Code */
}

.generate-btn {
    display: inline-flex;
    align-items: center;
    /* Alinha o texto e o ícone verticalmente */
    margin-top: 10px;
    /* Adiciona uma margem superior ao botão */
    padding: 10px 20px;
    /* Ajusta o preenchimento do botão */
    font-size: 16px;
    /* Aumenta o tamanho da fonte do botão */
    color: #007bff;
    /* Define a cor do texto do botão */
    cursor: pointer;
    /* Adiciona um cursor pointer ao botão */
    text-decoration: none;
    /* Remove o sublinhado do link */
}

.generate-btn i {
    margin-left: 5px;
    /* Adiciona uma margem esquerda ao ícone */
}

.qr-code-container {
    position: relative;

}

.qr-icon {
    font-size: 250px;
    /* Ajuste o tamanho do ícone conforme necessário */
    color: #2b2b2b;
    /* Escolha a cor do ícone */
}

.qr-code-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    /* Fundo levemente transparente */
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

._ak5o {
    position: relative;
    flex: none;
}

._ak5m {
    margin: 0 auto 40px;
    text-align: center;
    font-size: 14px;
}

._aj-9 {
    height: 28px;
}

._aj-c+._aj-c {
    margin-top: 18px;
}

._aj-c {
    font-size: 18px;
    line-height: 28px;
    color: var(--gray-700);
}

.aj- {
    height: 28px;
}

.aj-b {
    padding: 0 0 0 24px;
    margin: 0;
    list-style-type: decimal;
}

.landing-title {
    font-size: 28px;
    font-weight: 300;
    line-height: normal;
    color: #41525d;
}

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

/* Exemplo de estilo para garantir que o SessaoInicial ocupe 100% da coluna */
.janela-principal {
    /* Assegura que a coluna ocupe todo o espaço disponível */
    width: 100%;
    height: 100%;
}

.Sessão-incial {
    display: flex;
    border-radius: 8px;
    min-height: 900px;
    height: 900px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    /* Outros estilos necessários para o componente */
}

.justify-content-between {
    border: 2px solid #ccc;
    /* Cor e espessura da borda */
    border-radius: 10px;
    /* Arredondamento dos cantos */
    padding: 10px;
    /* Espaçamento interno para que a borda não fique muito colada ao conteúdo */
    display: inline-block;
    /* Garante que a borda siga o tamanho do conteúdo */
}
</style>