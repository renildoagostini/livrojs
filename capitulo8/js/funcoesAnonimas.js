/*const mostrarHora = () => {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    console.log(`Atenção para o horário: ${hora}:${minutos}:${segundos}`);
}

setInterval(mostrarHora, 5000);*/

//Podemos construir esse mesmo script, utilizando uma função anonima
setInterval(() =>{
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();
    console.log(`Atenção para o horário: ${hora}:${minutos}:${segundos}`);
}, 5000);


