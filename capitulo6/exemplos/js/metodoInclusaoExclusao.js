const cidades = ["Fundão"]; //declara e define o conteúdo inicial do vetor
console.log(cidades);

cidades.push("Timbui");  //push adiciona no final do vetor
console.log(cidades);

cidades.unshift("Praia Grande");  //Adiciona no inicio do vetor
console.log(cidades);

cidades.pop(); //remove o ultimo elemento
console.log(cidades);

cidades.shift(); //remove o primeiro elemento do vetor
console.log(cidades);

cidades.push("Timbui", "Praia Grande", "Beira Rio");
console.log(cidades);

const cidades2 = cidades.slice(-2); //obtém as duas ultimas localidades
console.log(cidades2);

const cidades3 = cidades.slice(0, -1); // obtém do inicio até o final, exceto a ultima localidade
console.log(cidades3);

const retira = cidades.splice(2, 1) // remove a partir da posição 2, um elemento 
console.log(retira);
console.log(cidades);

