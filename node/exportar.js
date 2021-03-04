console.log(module.exports)
console.log(module.exports === this)//? module.exports aponta para this

console.log(module.exports === exports)//? module.exports aponta para exports


this.a = 1 //? significa que 'a' agora vai ser visível fora do arquivo

exports.b = 2 //? significa que 'b' agora vai ser visível fora do arquivo

module.exports.c = 3 //? significa também que 'c' vai ser visível fora do arquivo

exports = null

console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }