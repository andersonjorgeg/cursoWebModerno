/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora.A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
 */

function calcularSalarioLiquido(qtdHoras, valorHora) {
    const salarioBruto = qtdHoras * valorHora
    const salarioLiquido = Math.round(salarioBruto * 0.70)
    const string = 'Salário igual a R$ '
    return string.concat(salarioLiquido)
}

console.log(calcularSalarioLiquido(150, 40.5))
console.log(calcularSalarioLiquido(144, 15.5))
console.log(calcularSalarioLiquido(180, 60))