/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: */

//? resolução 1
function receberPrimeiroEUltimoElemento(array) {
    const primeiro = array.shift()
    const ultimo = array.pop()
    return [primeiro, ultimo]
}

console.log('resolução 1')
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))

//? resolução 2
function receberPrimeiroEUltimoElemento2(array) {
    const indicePrimeiroElemento = 0
    const indiceUltimoElemento = array.length - 1
    const primeiroElemento = array[indicePrimeiroElemento]
    const ultimoElemento = array[indiceUltimoElemento]

    return [primeiroElemento, ultimoElemento]
}

console.log('resolução 2')
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16]))
console.log(receberPrimeiroEUltimoElemento2([7, 14, "olá"]))

//? resolução 3
function receberPrimeiroEUltimoElemento3([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    
    return [primeiroElemento, ultimoElemento]
}

console.log('resolução 3')
console.log(receberPrimeiroEUltimoElemento3([-100, "aplicativo", 16]))
console.log(receberPrimeiroEUltimoElemento3([7, 14, "olá"]))