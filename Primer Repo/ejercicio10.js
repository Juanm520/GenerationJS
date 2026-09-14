//Ejercicio 10

let producto ={
    nombre:"Smartphone Galaxy",
    precio:1800000,
    disponible:true,
    colores: ["negro","blanco","azul"],
    especificaciones: {
        marca:"Samsung",
        ram:"8GB",
        almacenamiento:"256GB",
        camara:"108MP"
        },
    vendedor:{
        nombre:"TechStore",
        ciudad:"Bogotá",
        calificacion:4.8
        }
}

//Imprime el nombre del producto.
console.log(`Nombre: ${producto.nombre}`)

//Imprime el precio del producto.
console.log(`Precio: ${producto.precio}`)

//Imprime el primer color disponible.
console.log(`Primer color: ${producto.colores[0]}`)

//Imprime la marca desde las especificaciones.
console.log(`Marca: ${producto.especificaciones["marca"]}`)

//Imprime la RAM desde las especificaciones.
console.log(`RAM: ${producto.especificaciones["ram"]}`)

//Imprime la ciudad del vendedor.
console.log(`Ciudad del vendedor: ${producto.vendedor["ciudad"]}`)

//Imprime la calificación del vendedor.
console.log(`Calificación: ${producto.vendedor["calificacion"]}`)

//Cambia la disponibilidad a  false.
producto.disponible = false
console.log(`Disponible actualizado: ${producto.disponible}`)

//Agrega un nuevo color "rojo" al arreglo de colores con .push().
producto.colores.push("rojo")
console.log(`Colores actualizados: ${producto.colores}`)

//Imprime el objeto completo actualizado.
console.log(`Producto completo: ${JSON.stringify(producto)}`)

