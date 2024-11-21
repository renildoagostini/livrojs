// Cria referência ao form e aos elementos h2 e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    // Evita o envio do formulário
    e.preventDefault();

    // Obtém os dados do campo do formulário
    const lado1 = Number(frm.inLado1.value);
    const lado2 = Number(frm.inLado2.value);
    const lado3 = Number(frm.inLado3.value);

    // Verifica se os lados podem formar um triângulo
    if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)) {
        resp1.innerText = `Lados podem formar um triângulo`;

        // Determina o tipo de triângulo
        if (lado1 === lado2 && lado1 === lado3) {
            resp2.innerText = `Tipo: Equilátero`;
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resp2.innerText = `Tipo: Isósceles`;
        } else {
            resp2.innerText = `Tipo: Escaleno`;
        }
    } else {
        resp1.innerText = `Lados não podem formar um triângulo`;        
    }
});

addEventListener("reset", ()=> {
    resp1.innerText = "";
    resp2.innerText = "";
})
