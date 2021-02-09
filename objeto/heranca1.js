const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//? __proto__ eu consigo acessar o objeto pai
console.log(ferrari.__proto__) 
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object) //? é uma função 
console.log(typeof MeuObjeto) //? é uma função 
console.log(MeuObjeto.__proto__, Object.__proto__)//? aponta para um objeto vazio
console.log(MeuObjeto.prototype, Object.prototype)