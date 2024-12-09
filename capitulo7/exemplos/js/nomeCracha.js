//Obtem os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    //obtém o nome informado e retira espaços em branco no inicio e final da string
    //const nome = frm.inNome.value.trimStart().trimEnd(); 
    const nome = frm.inNome.value.trim();


    if (!nome.includes(" ")) { //Se o nome não possui espaço
        alert("Informe o nome completo");
        return
    }

    const primeiroEspaco = nome.indexOf(" "); //posição do primeiro espaço
    const ultimoEspaco = nome.lastIndexOf(" "); //Posição do ultimo espaço

    const cracha = nome.substring(0, primeiroEspaco) + nome.substring(ultimoEspaco);

    resp.innerText = `Crachá: ${cracha}`;
})