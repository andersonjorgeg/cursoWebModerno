let valor // ? não inicializada
console.log(valor) // ? resultado undefined
//console.log(valor2) // ! gera erro no código por que a variável não foi definida

valor = null // ? significa ausência de valor 
console.log(valor)

//console.log(valor.toString()) // ! Erro de tipo: não é possível ler a propriedade 'toString' de nulo

const produto = {}
console.log(produto.preco) // ? resultado undefined
//console.log(produto.preco.a) // ! Erro de tipo: não é possível ler a propriedade 'a' de indefinido

console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // ! evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //? se vc quiser tirar um atributo de um objeto.
console.log(produto)

produto.preco = null // ? sem preço
console.log(!!produto.preco)
console.log(produto)
