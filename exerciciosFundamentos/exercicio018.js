/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
 */
//? resolução 1
function despesasTotais(produtos) {
    const resultado = produtos.map(produto => produto.preco).reduce((acumulador, atual) => acumulador + atual)
    return console.log(resultado)
}

console.log('resolução 1')
despesasTotais([
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.90},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
])
despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
])

//? resolução 2
function despesasTotais2(produtos) {
    let total = 0

    for (let item of produtos){
        total += item.preco
    }
    return console.log(total)
}


console.log('resolução 2')
despesasTotais2([
    { nome: 'Jornal Online', categoria: 'Informação', preco: 89.90 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
])
despesasTotais2([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
])


//? resolução 3
function despesasTotais3(produtos) {
    return produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}


console.log('resolução 3')
console.log(despesasTotais3([
    { nome: 'Jornal Online', categoria: 'Informação', preco: 89.90 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
]))
console.log(despesasTotais3([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))