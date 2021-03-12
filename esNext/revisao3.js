//? ES8 Object.values/Object.entries
const obj = { a:1, b: 2, c:3 }
console.log(Object.keys(obj))//? pega as chaves 
console.log(Object.values(obj))//? pega os valores
console.log(Object.entries(obj))//? pega as chaves e os valores

//? melhorias na notação literal de objeto
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//? Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())