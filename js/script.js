// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui

let valor = 0;

const total = document.querySelector("#total");
const somar = document.querySelector("#somar");
const zerar = document.querySelector("#zerar");

// Ao carregar, mostra 0
total.textContent = valor;

// Botão Somar
somar.addEventListener("click", () => {
    valor++;
    total.textContent = valor;
});

// Botão Zerar
zerar.addEventListener("click", () => {
    valor = 0;
    total.textContent = valor;
});
