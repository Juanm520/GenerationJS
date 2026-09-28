//Ejercicio 9

let carrito =[
{producto:"Laptop",precio:2500000,cantidad:1},
{producto:"Mouse",precio:80000,cantidad:2},
{producto:"Teclado",precio:150000,cantidad:1}
]

//Imprime el carrito completo.
console.log(`Carrito completo: ${JSON.stringify(carrito)}`)

//Imprime el nombre del primer producto.
console.log(`Primer producto: ${carrito[0].producto}`)

//Imprime el precio del segundo producto.
console.log(`Precio del segundo producto: ${carrito[1].precio}`)

//Imprime la cantidad del tercer producto.
console.log(`Cantidad del tercer producto: ${carrito[2].cantidad}`)


//Agrega un nuevo producto:  { producto: "Monitor", precio: 800000, cantidad: 1 } con .push().
const agregarProducto = carrito.push({producto:"Monitor", precio:800000, cantidad:1})

//Imprime el nombre del nuevo producto agregado.
console.log(`Nuevo producto agregado: ${JSON.stringify(agregarProducto)}`)

//Calcula el total a pagar (suma de  precio * cantidad de cada producto).
let totalPagarFor = 0
for (const producto of carrito){
    totalPagarFor += producto.precio * producto.cantidad
}

console.log(`Total a pagar con for: $${totalPagarFor}`)

//ó con el metodo del array reduce.
const totalPagarReduce = carrito.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0)

//Imprime el total a pagar.
console.log(`Total a pagar con reduce: $${totalPagarReduce}`)
