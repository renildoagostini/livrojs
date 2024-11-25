const frm = document.querySelector("form");
const h2 = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const numero = Number(frm.inNumero.value);

    let resposta = "";
    for(let i = 1; i <= numero - 1; i++){
            resposta += `${fruta} * `;
    }
    resposta += `${fruta} `;

    h2.innerText = resposta;
});