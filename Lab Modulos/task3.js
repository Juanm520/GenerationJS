export function calculadoraEdad(anio, mes, dia) {

    const fechaActual = new Date()
    const fechaNacimiento = new Date(`${anio}-${mes}-${dia}`)
    const difEnDias = Math.ceil(fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24)
    
    return Math.floor(difEnDias / 365)
}
