//Ejercicio 8

const perfil = {
    nombre:"María",
    apellido:"López",
    edad:28,
    profesion:"Diseñadora",
    ciudad:"Medellín"
}

//Imprime el objeto completo.
console.log(`Perfil completo: ${JSON.stringify(perfil)}`)

//Imprime el nombre usando notación de punto.
console.log(`Nombre: ${perfil.nombre}`)

//Imprime el apellido usando notación de corchetes.
console.log(`Apellido: ${perfil["apellido"]}`)

//Cambia la edad a 29.
const edadActualizada = 29
console.log(`Edad actualizada: ${perfil.edad = edadActualizada}`)

//Agrega una nueva propiedad  hobby con valor  "fotografía".
perfil.hobby = "fotografía"
console.log(`Después de agregar hobby: ${JSON.stringify(perfil)}`)

//Elimina la propiedad  ciudad.
delete perfil.ciudad
console.log(`Después de eliminar ciudad: ${JSON.stringify(perfil)}`)

//Imprime el objeto final.
console.log(`Perfil final: ${JSON.stringify(perfil)}`)

