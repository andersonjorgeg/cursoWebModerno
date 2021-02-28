const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Pedra', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const produtoFragil = produto => produto.fragil//? automaticamente ja está dizendo que é fragil
const produtosCaros = produto => produto.preco >= 500

console.log(produtos.filter(produtosCaros).filter(produtoFragil))

