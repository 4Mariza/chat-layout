'use strict'

const chats = [
    {
        cliente: 'Jerome Bueno',
        mensagem:'Posso realizar o pagamento por...',
        atendente: 'João Paulo',
        cor: '#FF905D',
        numero: 1,
        tempo: 10,
        imagem: './img/maria.jpg',
        app: './img/whatsapp.svg'
    },
    {
        cliente: 'Daniel Silva',
        mensagem:'Márcia diz: Bom dia, como posso ajuda...',
        atendente: 'João Paulo',
        cor:'#13B5B1',
        numero: 2,
        tempo: 30,
        imagem: './img/hugo.jpg',
        app: './img/telegram.svg'
    },
    {
        cliente: 'Bruno Adomo',
        mensagem:'Bom dia, gostaria de saber quant...',
        atendente: 'Joysi',
        cor:'#28f4ad',
        numero: 3,
        tempo: 30,
        imagem: './img/joao.jpg',
        app: './img/messenger.svg'
    },
    {
        cliente: 'Viviane Ribeiro',
        mensagem:'Adorei o atendimento, foi nota 10',
        atendente: 'Geovana',
        cor:'#1578d2',
        numero: 1,
        tempo: 20,
        imagem: './img/ana.jpg',
        app: './img/messages.svg'
    },
    {
        cliente: 'Maria Joana',
        mensagem:'Jhonatan diz: A senhora necessita de mais a...',
        atendente: 'Jhonatan',
        cor:'#FFCF40',
        numero: 1,
        tempo: 10,
        imagem: './img/hugo.jpg',
        app: './img/linkedin.svg'
    },
    {
        cliente: 'Juliana Pereira',
        mensagem:'Saulo diz: Estarei enviando o comprovant...',
        atendente: 'Saulo',
        cor:'#FF5B5B',
        numero: 1,
        tempo: 40,
        imagem: './img/maria.jpg',
        app: './img/instagram.svg'
    },
    {
        cliente: 'Henrique Martins',
        mensagem:'Joysi diz: Estarei enviando o comprovant..',
        atendente: 'Joysi',
        cor:'#ff8e34',
        numero: 1,
        tempo: 30,
        imagem: './img/joao.jpg',
        app: './img/telegram.svg'
    },
]

//GERAR COR ALEATÓRIA PARA O ATENDENTE
// function gerarCor(){
//     return '#' + parseInt((Math.random() * 0xFFF))
//         .toString(16)
//         .padStart(3, '0');
// }


function criarCards(info){
    const container = document.getElementById('card-container')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardDiv.innerHTML = `
            <img src="${info.imagem}" alt="${info.cliente}">
            <div class="info">
                <div class="nome-cliente">
                    <h2>${info.cliente}</h2>
                    <label class="mensagens">${info.numero}</label>
                    <span class="tempo">Há ${info.tempo} minutos</span>
                    </div>
                    <p>${info.mensagem}</p>
                    </div>
                    <img class="app" src="${info.app}" alt="">
            
            <h2 style="background-color:${info.cor};" class="atendente">
                <i class="fa-regular fa-user"></i>
                ${info.atendente}
            </h2>

    `
    container.appendChild(cardDiv)
}

chats.forEach(criarCards)




    
   





