/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
 */
//? resolução 1
function checarAnoBissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0){
        console.log(true)
    } else if (ano % 400 == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}
console.log('Resolução 1')
checarAnoBissexto(2020)
checarAnoBissexto(2100) 

//? resolução 2
function checarAnoBissexto2(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log('Resolução 2')
console.log(checarAnoBissexto2(2020))
console.log(checarAnoBissexto2(2100))

//? resolução 3
//? checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias

function checarAnoBissexto3(ano) {
    return new Date(ano, 1, 29).getDate() === 29
}

console.log('Resolução 3')
console.log(checarAnoBissexto3(2020))
console.log(checarAnoBissexto3(2100))