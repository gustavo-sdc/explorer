export function imcCalculator(height, weight){
    const imc = (weight / ((height / 100)**2)).toFixed(1)
    return `O seu IMC é ${imc}`
}
