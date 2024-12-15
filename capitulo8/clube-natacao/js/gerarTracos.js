export const gerarTracos = (nome) => {
    let tracos = "";

    for (const letra of nome) {
        tracos += letra !== " " ? "-" : " ";
    }

    return tracos;
};

;