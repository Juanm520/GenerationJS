import { rubricaAprobadoReprobado } from "./task5.js"

export function rubricaExcelente(calificacion) {
    if ( calificacion > 8){
         return "Excelente"
        }
    return rubricaAprobadoReprobado(calificacion)
}