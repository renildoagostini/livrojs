const teclado = require("prompt-sync")(); // Pacote de entrada de dados
const parcelas = Number(teclado("Informe o Número de Parcelas: ")); // Lê o número de parcelas

const data = new Date(); //data atual

for (let i = 1; i <= parcelas; i++){
    data.setMonth(data.getMonth() + 1); //aumenta um mes a data
    const dia = data.getDate();
    const mes = data.getMonth() + 1 //mes varia de 0 a 11, por isso mais 1
    const ano = data.getFullYear();

    const diaZero = dia < 10 ? "0" + dia : dia //acrescenta 0 se dia menor que 10
    const mesZero = mes < 10 ? "0" + mes : mes //acrescenta 0 se mes menor que 10

    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}


