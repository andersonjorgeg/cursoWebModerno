const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }//? versão nova
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//? versão nova
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {
    funcao1: function () { //? versão antiga
        return 2 + 4
    }, 
    funcao2(){ //? versão nova
        return 2 + 4
    }
}

console.log(obj5)
console.log(obj5.funcao1())
console.log(obj5.funcao2())