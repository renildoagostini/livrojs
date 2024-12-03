//obtém elementos da página
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre")

//declara vetor global
const pacientes = [];

//cria função para adicionar pacientes

//Adicionar um ouvinte para o evento submit no botão adicionar
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); //evita o envio do formulário

    const nome = frm.inPaciente.value; //Obtém o nome do paciente
    pacientes.push(nome); //Adiciona o nome no final do vetor
    let lista = "";  //string para concatenar pacientes
    
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}º ${pacientes[i]}\n`;
    }
    respLista.innerText = lista; //exibe a lista de pacientes na página
    frm.inPaciente.value = ""; //Limpa o conteúdo da página
    frm.omPaciente.focus(); //Posiciona o cursor no campo Paciente
});

//cria a função urgência 


//Cria um ouvinte para o evento click no botão urgência
frm.btUrgencia.addEventListener("click", () =>{
    //verifica se as validações do form estão ok(no caso, inPaciente is required)
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido de caráter de urgência");
        frm.inPaciente.focus(); //posicionar o cursor na campo paciente
        return; //retorna ao form
    }    

    const nome = frm.inPaciente.value; // Obtém o nome do paciente
    pacientes.unshift(nome); //Adiciona paciente no inicio do vetor

    let lista = ""; //string para concatenar pacientes

    //forEach aplicado sobre o array de pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}º ${paciente}\n`));
    respLista.innerText = lista //exibe a lista de pacientes
    frm.inPaciente.value = "";
    frm.omPaciente.focus(); //Posiciona o cursor no campo Paciente
});

//Função atender
frm.btAtender.addEventListener("click", () => {
    //se o tamanho do vetor = 0
    if(pacientes.length === 0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return //retorna ao formulário
    }

    const atender = pacientes.shift(); //Remove do inicio da fila e obtém nome
    respNome.innerText = atender; //exibe o nome do paciente em atendimento
    let lista = ""; //string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}º ${paciente}\n`))
    respLista.innerText = lista; //exibe a lista de pacientes na página retirando o paciente que está em atendimento
});