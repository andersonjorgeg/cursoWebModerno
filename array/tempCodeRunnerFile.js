const jsonParaObjeto = json => JSON.parse(json)
const chavePreco = precos => precos.preco
console.log(carrinho.map2(jsonParaObjeto).map2(chavePreco))