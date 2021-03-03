/* Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

//? resolução 1
function removerPropriedade(objeto, nomePropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomePropriedade]
    return copia 
}

console.log('resolução 1')
console.log(removerPropriedade({ a: 1, b: 2 }, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao")) 

//? resolução 2
function removerPropriedade2(objeto, nomePropriedade) {
    const copia = {... objeto}
    delete copia[nomePropriedade]
    return copia
}

console.log('resolução 2')
console.log(removerPropriedade2({ a: 1, b: 2 }, "a"))
console.log(removerPropriedade2({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))