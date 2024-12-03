const carros = [];


carros.push({modelo: "Etios", preco: 50000});
carros.push({modelo: "Chevete", preco: 10000});

for (const carro of carros) {

    const {modelo, preco} = carro  //desestrutura objeto carro em modelo preco
    
    console.log(`${modelo} - R$: ${preco}`);
}

console.log("***************************************************")

const paciente = ["Estevão", "Ana", "Esther"];
const[a, b, c] = paciente;

console.log(a);
console.log(b);
console.log(c);


console.log("***************************************************")
const pacientes = ["Renildo", "Estevão", "Ana", "Esther"];
const [atender, proximo, ...outros] = pacientes;
console.log(atender);
console.log(proximo);
console.log(outros);

console.log("***************************************************")

const carro = {modelo: "Corsa", preco: 59500};
const carro2 = {...carro, ano: 2020};
console.log(carro2);

console.log("***************************************************")

let nome = ["João", "sofia"];
nome = ["Ana", ...nome];
nome = [...nome, "Maria"]

console.log(nome);