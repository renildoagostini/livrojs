/*const idades = [12, 20, 15, 17, 14];
for(const idade of idades){
    if(idade >= 18){
        console.log(idade);
    }
}*/

console.log("******************************************");

const idades = [12, 15, 17, 14];
let maiores = 0;
for(const idade of idades){
    if(idade >= 18){
        console.log(idade);
        maiores = 1;
    }
    
}

if(!maiores){
    console.log("Não há idades maiores que 18 na lista");
}