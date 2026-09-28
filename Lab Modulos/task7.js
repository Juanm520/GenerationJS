import { rubricaExcelente } from "./task6.js";

export function rubricaPerfecto(calificacion) {

    if (calificacion == 11){
        return "Perfecto"   
    }
    return rubricaExcelente(calificacion)
}