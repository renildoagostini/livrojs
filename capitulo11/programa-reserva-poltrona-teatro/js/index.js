const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //constante com o número de poltronas do teatro

const reservadas = []; //vetor com as poltronas reservadas pelo cliente

window.addEventListener("load", () => {
    //operador ternário: Se houver dados salvos em localStorage, faz o split(";") e
    //atribui esse dados ao array, caso contrário, o array é inicializado vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    //repetição para montar o nª total de poltronas (definidas na constante)
    for(let i = 1; i <= POLTRONAS; i++){
        const figure = document.createElement("figure"); //cria a tag figure
        const imgStatus = document.createElement("img"); //cria a tag 
        
        //se a posição consta em ocupada, exibe a imagem ocupada, senão disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? "/img/ocupada.jpg" : "/img/disponivel.jpg";
        imgStatus.className = "poltrona"; //classe com a dimensão da img

        const figureCap = document.createElement("figcaption"); //cria a figcaption

        //quantidade de zeros antes do número de poltronas
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`); //cria texto

        figureCap.appendChild(num); //define os pais de cada tag criada
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        //se i modulo 24 == 12 (é o corredor: define margem direita 60px)
        if(i % 24 == 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure); //indica que figure é filha de divPalco

        //se i modulo 24 == 0: o comando após o && será executado (insere quebra de linha)
        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));
    }
});

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do formulário

    const poltrona = Number(frm.inPoltrona.value); //obtém o conteúdo de inPoltrona

    //valida o preenchimento do campo de entrada... não pode ser maior que a const
    if(poltrona > POLTRONAS){
        alert("Informe um número de poltrona válido");
        frm.inPoltrona.focus();
        return;
    }
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    //se poltrona escolhida já está ocupada(existe em localStorage)
    if(ocupadas.includes(poltrona.toString())){
        alert(`Poltrona ${poltrona} já está ocupada`);
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    //captura a imagem da poltrona, filha de divPalco
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

    imgPoltrona.src = "/img/reservada.jpg"; //modifica o atributo da imagem

    reservadas.push(poltrona); //adiciona poltrona ao vetor reservada

    frm.inPoltrona.value; //limpa campo
    frm.inPoltrona.focus(); //joga o focus em inPoltrona.
});

frm.btConfirmar.addEventListener("click", () => {
    if(reservadas.length === 0){
        alert("Não há poltronas reservadas");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    //se for decrescente, pois as reservas vão sendo removidas a cada 
    //alteração da imagem
    for(let i = reservadas.length - 1; i>= 0; i--){
        ocupadas.push(reservadas[i]);

        //captura a imagem da poltrona, filha da divPalco
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i]- 1];

        imgPoltrona.src = "/img/ocupada.jpg"; //modifica o atributo da imagem

        reservadas.pop(); //remove do vetor a reserva já alterada;
    }
    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));    
});

frm.reset();