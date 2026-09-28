//Ejercicio 7

const inventario =["laptop","mouse","teclado","monitor","cable HDMI"]

//Imprime el arreglo completo.
console.log(`Inventario completo: ${inventario}`)

//Imprime el primer elemento.
console.log(`Primer elemento: ${inventario[0]}`)

//Imprime el último elemento (usando  .length - 1).
console.log(`Último elemento: ${inventario[inventario.length - 1]}`)

//Agrega  "webcam" al final con  .push().
inventario.push("webcam")
console.log(`Después de push('webcam'): ${inventario}`)

//Elimina el último elemento con  .pop() e imprime el elemento eliminado.
ultimoElementoEliminado = inventario.pop()
console.log(`Elemento eliminado: ${ultimoElementoEliminado}`)
console.log(`Después de pop(): ${inventario}`)

//Agrega  "audífonos" al principio con  .unshift().
inventario.unshift("audífonos")
console.log(`Después de unshift('audífonos'): ${inventario}`)

//Elimina el primer elemento con  .shift() e imprime el elemento eliminado.
const elementoEliminado = inventario.shift()
console.log(`Elemento eliminado: ${elementoEliminado}`)
console.log(`Después de shift(): ${inventario}`)

//Imprime la cantidad total de elementos.
console.log(`Cantidad total de elementos: ${inventario.length}`)
