
const controle = document.querySelectorAll("[data-controle]");
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
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robo = document.querySelector("#id-robo");
let numero = 0;
const cores = ["azul", "amarelo", "branco", "preto", "rosa", "vermelho"];
robo.setAttribute("src", `img/robos/robotron_${cores[numero]}.png`);


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);


    })
})

function manipulaDados (eData, controle) {
    const peca = controle.querySelector("[data-contador]");
    if(eData === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
};

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function mudaRobo () {
    
    if(numero < cores.length-1){
        numero = numero + 1;
    }else{
        numero = 0;
    }
    robo.setAttribute("src", `img/robos/robotron_${cores[numero]}.png`);
}








