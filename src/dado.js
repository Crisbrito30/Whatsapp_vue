import Cristiano from './img/image.png';
import Josin from './img/shared-image.jpg';
import usuario from  './img/usuariosemfoto.png';

const conversasIniciais = [
    {
        "usuario": "Cristiano Neves",
        "foto":Cristiano,
        "bio": "Co-fundador da Zap",
        "mensagens": [
            {
                "horario": "10:15",
                "conteudo": "Jobs, quando sai o novo Iphone?",
                "verde": true
            },
            {
                "horario": "10:15",
                "conteudo": "Em setembro de 2019",
                "verde": false
            },
        ]
    },
    {
        "usuario": "Josin",
        "foto":Josin,
        "bio": "Co-fundador do Tik Tok",
        "mensagens": [
            {
                "horario": "10:15",
                "conteudo": "Eu queria umas dicas suas para o próximo Windows!",
                "verde": false
            },
            {
                "horario": "10:15",
                "conteudo": "Não sei se consigo... Estou meio enrolado.",
                "verde": true
            },
        ]
    },
    {
        "usuario": "Jeff Bezos",
        "foto":usuario,
        "bio": "Co-fundador dA Apple",
        "mensagens": [
            {
              
                "horario": "10:15",
                "conteudo": "O que você achou do novo recurso da AWS?!",
                "verde": false
            },
            {
                "horario": "10:15",
                "conteudo": "?!",
                "verde": false
            },
        ]
    }
];
export default conversasIniciais;