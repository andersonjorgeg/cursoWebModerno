const pularLinha = () => console.log()
console.log('percorrendo uma string')
for (let letra of "Cod3r") {
    console.log(letra)
}
pularLinha()

const assuntosEcma = ['Map', 'Set', 'Promise']

console.log('percorrendo as chaves de um Array')
for (let indice in assuntosEcma) {//? for...in percorre em cima dos indices
    console.log(indice)
}
pularLinha()

console.log('percorrendo os valores de um Array')
for (let assunto of assuntosEcma) {//? for...of percorre em cima dos valores
    console.log(assunto)
}
pularLinha()

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promises', {abordado: false}]
])

console.log('percorrendo as chave e valor do Map')
for (let assunto of assuntoMap) {
    console.log(assunto)
}
pularLinha()


console.log('percorrendo as chave do Map')
for (let chave of assuntoMap.keys()) {
    console.log(chave)
}
pularLinha()

console.log('percorrendo os valores do Map')
for (let valor of assuntoMap.values()) {
    console.log(valor)
}
pularLinha()

console.log('percorrendo as entries')
//? [chave, valor] desestruturando as entradas
for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}
pularLinha()

const s =  new Set(['a', 'b', 'c'])

console.log('percorrendo um Set')
for (let letra of s) {
    console.log(letra)
}

