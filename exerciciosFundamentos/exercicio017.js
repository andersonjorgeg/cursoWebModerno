/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */
//? resolução 1
function somarNumeros(array) {
    const somar = (acumulador, valorAtual) => acumulador + valorAtual
    return array.reduce(somar)
}

console.log('resolução 1')
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))

//? resolução 2
function somarNumeros2(array) {
    const quantidadeDeNumeros = array.length

    return (quantidadeDeNumeros === 0) ? 0 : array[0] + somarNumeros2(array.slice(1))
}

console.log('resolução 2')
console.log(somarNumeros2([10, 10, 10]))
console.log(somarNumeros2([15, 15, 15, 15]))

//? resolução 3
function somarNumeros3(array) {
    let soma = 0
    array.forEach(elemento => soma += elemento)

    return soma
}

console.log('resolução 3')
console.log(somarNumeros3([10, 10, 10]))
console.log(somarNumeros3([15, 15, 15, 15]))
