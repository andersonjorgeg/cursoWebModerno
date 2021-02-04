console.log('Trabalhando com ForEach')
const meuNomeCompleto = [
    { nome: 'Anderson' },
    { nome: 'Jorge'},
    { nome: 'Arruda'},
]

console.log('Logando o valor de cada parte do nome')
meuNomeCompleto.forEach(umaParteDoNome => {
    console.log(umaParteDoNome.nome)
})

console.log('Logando o indice de cada parte do nome\n')
meuNomeCompleto.forEach(function(umaParteDoNome, posicao){
    console.log(`A parte ${umaParteDoNome.nome} está na posição ${posicao}`)
})

console.log('Logando cada nome e o array completo')
meuNomeCompleto.forEach((umaParteDoNome, posicao, arrayCompleto) => {
    console.log(umaParteDoNome.nome)
    console.log(posicao)
    console.log(arrayCompleto)
})