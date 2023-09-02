'use strict'

const chats = [
    {
        cliente: 'Jerome Bueno',
        mensagem:'Posso realizar o pagamento por...',
        atendente: 'João Paulo',
        cor: '#FF905D',
        numero: 1,
        tempo: 10,
        imagem: './img/maria.jpg'
    },
    {
        cliente: 'Daniel Silva',
        mensagem:'Márcia diz: Bom dia, como posso ajuda...',
        atendente: 'João Paulo',
        cor:'#13B5B1',
        numero: 2,
        tempo: 30,
        imagem: './img/hugo.jpg'
    },
    {
        cliente: 'Bruno Adomo',
        mensagem:'Bom dia, gostaria de saber quant...',
        atendente: 'Joysi',
        cor:'#28f4ad',
        numero: 3,
        tempo: 30,
        imagem: './img/joao.jpg'
    },
    {
        cliente: 'Viviane Ribeiro',
        mensagem:'Adorei o atendimento, foi nota 10',
        atendente: 'Geovana',
        cor:'#1578d2',
        numero: 1,
        tempo: 20,
        imagem: './img/ana.jpg'
    },
    {
        cliente: 'Maria Joana',
        mensagem:'Jhonatan diz: A senhora necessita de mais a...',
        atendente: 'Jhonatan',
        cor:'#fffb59',
        numero: 1,
        tempo: 10,
        imagem: './img/hugo.jpg'
    },
    {
        cliente: 'Juliana Pereira',
        mensagem:'Joysi diz: Estarei enviando o comprovant...',
        atendente: 'Saulo',
        cor:'#FF5B5B',
        numero: 1,
        tempo: 40,
        imagem: './img/maria.jpg'
    },
    {
        cliente: 'Henrique Martins',
        mensagem:'Joysi diz: Estarei enviando o comprovant..',
        atendente: 'Joysi',
        cor:'#ff8e34',
        numero: 1,
        tempo: 30,
        imagem: './img/joao.jpg'
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
            
            <h2 style="background-color:${info.cor};" class="atendente">
                <i class="fa-regular fa-user"></i>
                ${info.atendente}
            </h2>

    `
    container.appendChild(cardDiv)
}

chats.forEach(criarCards)




    
   





