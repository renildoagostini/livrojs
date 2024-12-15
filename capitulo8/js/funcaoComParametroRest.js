const calcularMedia = (...notas) =>{
    const numero = notas.length  //notas é um array
    if(numero === 0){
        console.log("Informe, no mínimo, uma nota");
        return;
    }
    let soma = 0; // vai acumular a soma das notas

    for(const nota of notas){
        soma += nota;//soma o valor dos argumentos
    }
    const media = soma / numero; //calcula a media
    console.log(`Média: ${media.toFixed(1)}`);
}

calcularMedia(6, 7, 8); //Média: 7.0
calcularMedia(2, 10); //Média: 6.0
calcularMedia(7.5, 10, 8, 9.5); //Média: 8.8
calcularMedia(); //Informe, no mínimo, uma nota
