const frm = document.querySelector("form"); //obtém os elementos da página
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
   e.preventDefault(); //evita o envio do form

   const nome = frm.inNome.value; //obtém o conteúdo do campo nome
   const peso = Number(frm.inPeso.value); //obtém o conteúdo do campo peso

   //chama a função que verifica se o peso já foi apostado
   if(verApostaExiste(peso)){
    alert("alguém já apostou este peso, informe outro...")
    frm.inPeso.focus();
    return;
   }

   //Se houver dados em localstorage
   if(localStorage.getItem("melanciaNome")){
    //obtém o conteúdo já salvo e acrescenta ";" + dados da resposta
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    localStorage.setItem("melanciaNome", melanciaNome); //salva os dados
    localStorage.setItem("melanciaPeso", melanciaPeso);
   }else{ //se não é a primeira resposta
    localStorage.setItem("melanciaNome", nome) //salva os dados sem ";"
    localStorage.setItem("melanciaPeso", peso)
   }

   mostrarAposta()
})