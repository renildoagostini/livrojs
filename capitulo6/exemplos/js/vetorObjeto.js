const carros = [];
carros.push({modelo: "Etios", preco:50.000});
carros.push({modelo: "Chevete", preco:10.000});

for(const carro of carros){
    console.log(`${carro.modelo} - R$: ${carro.preco}`);
}