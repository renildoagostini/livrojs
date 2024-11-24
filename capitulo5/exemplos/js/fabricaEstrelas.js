const frm = document.querySelector("form");
const h2 = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);


    let estrelas = "";

    for(let i = 0; i<= numero; i++){
        if(i % 2 === 1){
            estrelas = estrelas + "*";
        }else{
            estrelas = estrelas + "-";
        }
    } 
    h2.innerText = estrelas;
});






