export const verCategoria = (idade) => {
    if (idade <= 12) {
        return "Infantil";
    } else if (idade <= 18) {
        return "Juvenil";
    } else {
        return "Adulto";
    }
};