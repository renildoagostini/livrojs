//cria referência ao form e aos elementos h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria a arrow function para acionar o botão submit


frm.addEventListener("submit", (e) => {
    //Obtém o conteúdo dos campos
    const titulo = frm.inTitulo.value; 
    const duracao = frm.inDuracao.value;

    const horas = Math.floor(duracao / 60); //arredonda para baixo
    const minutos = duracao % 60; //obtém o resto da divisão

    //exibe as respostas (h3 e h4)
    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();
})