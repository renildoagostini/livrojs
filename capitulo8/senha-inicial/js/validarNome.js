// forma "tradicional"
// const validarNome = nome => {
//   // se houver espaço no nome...
//   if (nome.includes(" ")) {
//     return true                   // ... retorna true
//   } else {
//     return false
//   }
// }

// forma simplificada
// observe que não é necessário o return
export const validarNome = nome => nome.includes(" ");
