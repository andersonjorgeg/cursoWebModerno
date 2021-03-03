/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

//? resolução 1
function filtrarNumeros(array) {
    const numeros = elementos => typeof elementos === 'number'
    return array.filter(numeros)
}

console.log('resolução 1')
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

//? resolução 2
function filtrarNumeros2(array) {
    const resultado = []

    for (let item of array)
        if (typeof item === 'number')
            resultado.push(item)

    return resultado
}

console.log('resolução 2')
console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros2(["a", "c"]))
