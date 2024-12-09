//obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    //obtém o nome do funcionario e retira os espaços em brando do inicio e final
    const funcionario = frm.inFuncionario.value;
    
   //Divide o nome em itens de um vetor, criados a cada ocorrência de espaço
   const partes = funcionario.split(" ");
   let email = ""; //vai concatenar letras

   for(let i = 0; i < partes.length - 1; i++){ //percorre os itens do vetor menos o ultimo
    email += partes[i].charAt(0); //obtém a letra inicial de cada item
   }

   //concatena as letras iniciais com a ultima parte (sobrenome) e empresa
   email += partes[partes.length - 1] + "@empresa.com.br";

   resp.innerText = `Email: ${email.toLowerCase()}`; //exibe o email em minusculo
})
