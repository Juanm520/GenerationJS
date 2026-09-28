//Ejercicio 5

let primerNombre ="Juan"
let primerApellido ="Lanza"
let anioNacimiento =1991

//Generar nombre de usuario
const usuario = primerNombre[0].toLowerCase() + primerApellido.toLocaleLowerCase() + anioNacimiento.toString().slice(-2)

console.log(`Nombre de usuario generado: ${usuario}`)