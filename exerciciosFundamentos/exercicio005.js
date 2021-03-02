/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

function maiorOuIgual(numero1, numero2) {
    if (numero1 > numero2 || numero1 === numero2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))

//? resolução 2

function maiorOuIgual2(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo 
}

console.log(maiorOuIgual2(0, 0))
console.log(maiorOuIgual2(0, "0"))
console.log(maiorOuIgual2(5, 1))