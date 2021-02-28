//? simulando um map()
Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

//? map() normal
//? Retornar um array apenas com os preços
/* const jsonParaObjeto = json => JSON.parse(json)
const chavePreco = precos => precos.preco
console.log(carrinho.map(jsonParaObjeto).map(chavePreco)) */



//? Retornar um array apenas com os preços
const jsonParaObjeto = json => JSON.parse(json)
const chavePreco = precos => precos.preco
console.log(carrinho.map2(jsonParaObjeto).map2(chavePreco))


