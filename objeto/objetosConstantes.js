//? pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//? pessoa -> 456 -> {...}
//! pessoa = { nome: 'Ana' } vai dar erro


/* a função freeze Impede a modificação de atributos e valores de propriedade existentes e impede a adição de novas propriedades. */
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa.end)


const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)