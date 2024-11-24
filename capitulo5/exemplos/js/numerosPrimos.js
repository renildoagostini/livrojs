const form = document.querySelector("form");
const h2 = document.querySelector("h2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    numero = Number(form.inNumero.value);

    let numeroDivisores = 0;

    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            numeroDivisores++;
        }
    }

    if(numeroDivisores == 2){
        h2.innerText = `O número ${numero} é primo`;
    }else{
        h2.innerText = `O número ${numero} não é primo`;
    }
});