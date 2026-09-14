//Ejercicio 3

const precioProducto = 50000;
const porcentajeIVA = 19;

//Calculo e impresion
const valorIVA = (precioProducto * porcentajeIVA) / 100;
const precioTotal = precioProducto + valorIVA;

console.log(`Precio del producto: ${precioProducto}`);
console.log(`IVA (19%) : ${valorIVA}`);
console.log(`Precio total con IVA: ${precioTotal}`);