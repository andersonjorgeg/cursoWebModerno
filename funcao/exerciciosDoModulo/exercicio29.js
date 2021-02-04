/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const contarNumeroIntervalo = function(vetor){
    let qtd1020 = 0
    let qtdFora = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtd1020++
        } else {
            qtdFora++
        }
    }
    console.log(`existem ${qtd1020} números dentro do intervalo de 10 até 20 e ${qtdFora} números estão fora do intervalo`)
}

const vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
contarNumeroIntervalo(vetor)