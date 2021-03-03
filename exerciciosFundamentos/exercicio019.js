/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
 */

//? resolução 1
function calcularMedia(array) {
    const somar = (acumulador, valorAtual) => acumulador + valorAtual
    return console.log(array.reduce(somar) / array.length)
}

console.log('resolução 1')
calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])


//? resolução 2
function calcularMedia2(array) {
    const quantidadeDeNumeros = array.length
    let somaTotal = 0

    for (numero of array) {
        somaTotal += numero
    }
    return console.log(somaTotal / quantidadeDeNumeros)
}

console.log('resolução 2')
calcularMedia2([0, 10])
calcularMedia2([1, 2, 3, 4, 5])