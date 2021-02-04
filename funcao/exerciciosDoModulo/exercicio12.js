/* 12) Faça um algoritmo que calcule o fatorial de um número */

function calculoFatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * calculoFatorial(numero - 1)
    }
}

console.log(calculoFatorial(10))
console.log(calculoFatorial(7))
console.log(calculoFatorial(6))
console.log(calculoFatorial(0))
