/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

//?resolução 1
function repetir(item, repetidor) {
    let resultado = []
    for (let i = 0; i < repetidor; i++) {
        resultado.push(item)
    }
    return resultado
}

console.log("resolução 1")
console.log(repetir("codigo", 2))
console.log(repetir(7, 3))

//? resolução 2

function repetir2(item, repetidor){
    return Array(repetidor).fill(item)
}

console.log("resolução 2")
console.log(repetir2("codigo", 2))
console.log(repetir2(7, 3))
