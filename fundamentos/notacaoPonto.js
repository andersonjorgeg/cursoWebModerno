console.log(typeof console)//? objeto

console.log(Math.ceil(6.1))//? arredondar pra cima 

const obj1 = {} //? notação literal
obj1.nome = 'Bola'
//? obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //? atributo
    this.exec = function () { //? função
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()