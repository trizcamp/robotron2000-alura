const controle = document.querySelectorAll("[data-controle");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//ao clicar ele procura cada elemento e busca qual elemento estamos clicando
controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle , evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca) //para ver qual peca foi clicada
        
    })
}) 

//controle é o pai do elemento clicado
function manipulaDados(operacao, controle) {
    //toda vez que clicar no controle-contador irá buscar quem é o controle-contador do item
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
        
    }
}

function atualizaEstatisticas(peca){
    console.log(pecas[peca])
    //ao clicar na peça percorre suas estatisticas cm cada valor
    estatisticas.forEach( (elemento) => {
        //para cada vez que somarmos ele atualiza o valor de força...
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}