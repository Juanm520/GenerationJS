//Ejercicio 4

let texto ="  JavaScript es Genial  "
let textoSinEspacios = texto.trim()

//Imprime texto original
console.log(`Original: '${texto}'`)

//Metodos para strings
//El texto sin espacios al inicio y final
console.log(`Sin espacios: '${textoSinEspacios}'`)

//El texto en mayusculas
console.log(`En mayúsculas: '${textoSinEspacios.toUpperCase()}'`)

//El texto en minúsculas
console.log(`En minúsculas: '${textoSinEspacios.toLowerCase()}'`)

//La longitud del texto original
console.log(`Longitud: ${texto.length}`)

//Si el texto incluye la palabra "Genial"
console.log(`¿Incluye "Genial"?: ${texto.includes("Genial")}`)
