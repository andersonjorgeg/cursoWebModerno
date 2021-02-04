/* 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
 */
let vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdiciona){
    for(let i = 0; i < vetorAdiciona.length; i++){
        console.log(vetorAdiciona[i])
        vetorPilha.push(vetorAdiciona[i])
    }
    console.log('vetor adicionado: ' + vetorAdiciona)
    console.log(`vetor resultado: ${vetorInicial}`)
}

adicionaVetor(vetorPilha, vetorAdiciona)