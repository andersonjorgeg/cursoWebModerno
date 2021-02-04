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