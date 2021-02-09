const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//? vai pegar todas a chaves do objeto
console.log(Object.values(pessoa))//? vai pegar todos os valores do objeto
console.log(Object.entries(pessoa))//? vai pegar todas as chaves/valores de um objeto

/* Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
}) */

//? destructuring - desestruturando os elementos de um array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//? define novas propriedades para o objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //? se for false não aparece na função keys
    writable: false, //? não aceita valores fora dessa função
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' //? vai ler o valor padrão - value: '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}

//? vai pegar o primeiro objeto que no caso é destino e vai concatenar com os outro objetos que vão vir depois no caso o o1 e o o2, se tiver algum atributo com a mesma chave o valor é sobrescrito no caso o a: 1 vai ser a: 4.
const obj = Object.assign(destino, o1, o2)
console.log(obj)

Object.freeze(obj) //? vai congelar o atributo
obj.c = 1234
console.log(obj)