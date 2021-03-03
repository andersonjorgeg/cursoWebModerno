/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]

 */

 //? resolução 1
function objetoParaArray(objeto) {
    const resultado = []

    for(let chave in objeto)
        resultado.push([chave, objeto[chave]])

    return resultado
}

console.log('resolução 1')
console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))

//? resolução 2
function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}

console.log('resolução 2')
console.log(objetoParaArray2({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray2({
    codigo: 11111,
    preco: 12000
}))

//? resolução 3
function objetoParaArray3(objeto) {
    return Object.entries(objeto)
}

console.log('resolução 3')
console.log(objetoParaArray3({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray3({
    codigo: 11111,
    preco: 12000
}))