//Ejercicio 6

const edad =20
const tieneEntrada =true
const esMayorDeEdad = edad >=18
const puedeIngresar = esMayorDeEdad && tieneEntrada
const necesitaAcompañante =!esMayorDeEdad ||!tieneEntrada

//Imprime condiciones
console.log(`Es mayor de edad: ${esMayorDeEdad}`)
console.log(`Puede ingresar: ${puedeIngresar}`)
console.log(`Necesita acompañante: ${necesitaAcompañante}`)

