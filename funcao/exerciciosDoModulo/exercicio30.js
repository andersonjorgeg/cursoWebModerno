/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

const maiorMenor = function(vetor){
    let maior 
    let menor
    for(let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

const vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))