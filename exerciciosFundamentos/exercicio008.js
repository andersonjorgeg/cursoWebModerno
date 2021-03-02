/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de multiplicação.
 */

function multiplicar(numero1, numero2){
    let resultado = 0

/* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
realizada aqui para diminuir a quantidade de loops */
    for (let i = 0; i < numero2 ; i++) {
        resultado += numero1
    }
    return resultado
}

console.log('resolução 1')
console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

//? resolução 2
function multiplicar2(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador - 1)
}

console.log('resolução 2')
console.log(multiplicar2(5, 5))
console.log(multiplicar2(0, 7))

//? resolução 3

function multiplicar3(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            numero : 
            numero + multiplicarRecursivamente(numero, multiplicador -1)
        )
    }

    //? nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}

console.log('resolução 3')
console.log(multiplicar2(5, 5))
console.log(multiplicar2(0, 7))