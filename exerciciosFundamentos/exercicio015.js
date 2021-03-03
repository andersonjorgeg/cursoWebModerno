/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */
//? resolução 1
function receberSomenteOsParesDeIndicesPares(numeros) {
    const resultado = []

    for (let item in numeros){
        if (item % 2 == 0  && numeros[item] % 2 == 0) {
            resultado.push(numeros[item])
        }
    }
    return resultado
}

console.log('resolução 1')
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

//? resolução 2
function receberSomenteOsParesDeIndicesPares2(numeros) {
    let resultado = []

    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 == 0

        if (numeroPar){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log('resolução 2')
console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43]))

//? resolução 3
function receberSomenteOsParesDeIndicesPares3(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        
        return numeroPar && indicePar
    })
}

console.log('resolução 3')
console.log(receberSomenteOsParesDeIndicesPares3([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares3([10, 70, 22, 43]))