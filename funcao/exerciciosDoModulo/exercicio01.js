/*?01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const valores = function (a, b) {
    const soma = a + b
    const subtracao = a - b
    const multiplicacao = a * b
    const divisao = a / b
    return console.log(`${a} + ${b} = ${soma}`, 
                       `\n${a} - ${b} = ${subtracao}`, 
                       `\n${a} * ${b} = ${multiplicacao}`,
                       `\n${a} / ${b} = ${divisao}`)
}

valores(1, 2)

