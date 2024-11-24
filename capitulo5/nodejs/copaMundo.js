const teclado = require("prompt-sync")();
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair");
console.log("--------------------------------------------------");

do{
    const ano = Number(teclado("Informe o ano: "));
    if(ano === 0 || isNaN(ano)){
        break;
    }else if(ano === 1922 || ano === 1946){
        console.log(`No ano de ${ano} não hove copa do mundo devido a Segunda Guerra Mundial`);
    }else if(ano >= 1930 && ano % 4 === 2){
        console.log(`Sim! ${ano} é ano de Copa do Mundo`);
    }else{
        console.log(`Não..... ${ano} é ano de Copa do Mundo`);
    }
}while(true);
console.log("Bye, Bye....Obrigado por utilizar nosso programa");