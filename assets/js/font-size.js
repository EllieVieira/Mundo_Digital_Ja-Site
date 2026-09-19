let tamanhoFonte = localStorage.getItem("tamanhoFonte");

if (tamanhoFonte === null) {
    tamanhoFonte = 1;
} else {
    tamanhoFonte = parseFloat(tamanhoFonte);
}

document.body.style.zoom = tamanhoFonte;

function aumentarFonte() {
    if (tamanhoFonte < 1.3) {
        tamanhoFonte += 0.1;
        tamanhoFonte = parseFloat(tamanhoFonte.toFixed(1));

        document.body.style.zoom = tamanhoFonte;
        localStorage.setItem("tamanhoFonte", tamanhoFonte);
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 0.8) {
        tamanhoFonte -= 0.1;
        tamanhoFonte = parseFloat(tamanhoFonte.toFixed(1));

        document.body.style.zoom = tamanhoFonte;
        localStorage.setItem("tamanhoFonte", tamanhoFonte);
    }
}

function tamanhoNormal() {
    tamanhoFonte = 1;

    document.body.style.zoom = tamanhoFonte;
    localStorage.setItem("tamanhoFonte", tamanhoFonte);
}