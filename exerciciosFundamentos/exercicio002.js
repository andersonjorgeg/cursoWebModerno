/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.

 */

function converterIdadeEmAnosParaDias(idade) {
    const anos = idade * 365
    return anos
}

console.log(converterIdadeEmAnosParaDias(25))
console.log(converterIdadeEmAnosParaDias(70))