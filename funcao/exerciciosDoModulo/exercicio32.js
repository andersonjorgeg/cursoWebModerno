/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const mediaVetor = function(vetor){
    let media = 0
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
        media = soma / vetor.length
    }
    return media
}

const vetor = [1, 2, 3, 4, 5]
console.log(mediaVetor(vetor)) 