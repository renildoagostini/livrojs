/*
   METODO MAP
   
   Cria um novo vetor com o resultado do processamento realizado sobre cada um do elementos original
*/

/*const numeros = [10, 13, 20, 8, 15];  //vetor inicial
const dobro = numeros.map(num => num * 2); //cada número é obtido e multiplicado por 2, criando um novo array 

console.log(dobro.join(", "));

*/

/*const amigos = [{nome: "Ana", idade: 12}, {nome: "Estevão", idade: 17}, {nome: "Esther", idade: 10}];

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2024 - aux.idade}));

for(const amigo of amigos2){
    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`);
}*/

//MÉTODO FILTER

/*const numeros = [10, 13, 20, 8, 15]; //VETOR INICIAL

const pares = numeros.filter(num => num % 2 == 0); //condição para o filtro

console.log(pares.join(", "));*/

/*const amigos = [{nome: "Ana", idade: 20}, {nome: "Bruno", idade: 17}, {nome: "Cátia", idade: 25}];

const amigos2 = amigos.filter(aux => aux.idade >= 30 || aux.nome.includes("D"));

for(const amigo of amigos2){
    console.log(`${amigo.nome} - idade: ${amigo.idade} anos`);
}

if(amigos2.length === 0){
    console.log("Não há amigos com essas condições");
}*/

//MÉTODO REDUCE

/*const numeros = [10, 13, 20 ,8, 15];

const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(`Soma: ${soma}`);
*/

/*const amigos = [
    { nome: "Ana", idade: 20 },
    { nome: "Bruno", idade: 17 },
    { nome: "Cátia", idade: 25 }
  ];
  
  // Soma das idades
  const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0);
  
  // Obtendo os nomes com vírgula entre eles
  const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "");
  
  console.log(`Soma: ${soma}`);
  console.log(`Todos: ${todos}`); */

  const numeros = [10, 13, 20, 8, 15]; //VETOR INICIAL
  const maior = numeros.reduce((a,b) => Math.max(a, b), 0);
  console.log(`Maior: ${maior}`);
  


