//? funcionamento interno de filter()
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Pedra', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const produtoFragil = produto => produto.fragil//? automaticamente ja está dizendo que é fragil
const produtosCaros = produto => produto.preco >= 500

console.log(produtos.filter2(produtosCaros).filter2(produtoFragil))

