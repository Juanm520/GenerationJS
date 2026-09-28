export function calculadoraCosto(monto) {
    const montoToNumber = Number(monto)
    return ((montoToNumber + 3) + (montoToNumber * 0.01))
}
