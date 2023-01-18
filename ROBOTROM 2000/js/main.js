const controle = document.querySelectorAll("[data-controle]");
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);

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

