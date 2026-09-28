export function rubricaAprobadoReprobado(calificacion) {
    if (calificacion < 0 && calificacion >= 12){
        return `Ingrese un numero entre 0 - 11.`
    }
    if (calificacion >= 5){
        return "Aprobado"
    }
    return "Reprobado"
}