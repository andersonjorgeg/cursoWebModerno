/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */

 //? resolução 1
function simboloMais(quantidade) {
    let resultado = ''
    for (let i = 0; i < quantidade; i++) {
        resultado += '+'
    }
    return resultado
}
console.log('resolução 1')
console.log(simboloMais(2))
console.log(simboloMais(4))

//? resolução 2
function simboloMais2(quantidade){
    return Array(quantidade).fill('+').join('')
}
console.log('resolução 2')
console.log(simboloMais2(2))
console.log(simboloMais2(4))

//? resolução 3

function simboloMais3(quantidade) {
    return '+'.repeat(quantidade)
}
console.log('resolução 3')
console.log(simboloMais3(2))
console.log(simboloMais3(4))
