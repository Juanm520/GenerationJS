import { calculadoraEdad } from "./task3.js"

export class EdadAmigo {
 constructor(nombre, anio, mes, dia){
    this.nombre = nombre
    this.anio = anio
    this.mes = mes
    this.dia = dia
    this.edad = calculadoraEdad(this.anio, this.mes, this.dia)
 }

 retornarEdad(){
    return `¡${this.nombre} tiene ${this.edad} años hoy!`
 }
}