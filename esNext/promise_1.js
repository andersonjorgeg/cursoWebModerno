let p = new Promise (function(resolve) {
    resolve(3)
}) 

p.then(function(valor) {
    console.log(valor)
})

//? ************************************************************
let p2 = new Promise (function(resolve) {
    resolve({
        x: 3,
        y: 4
    })
}) 

p2.then(function(valor) {
    console.log(valor.x, valor.y)
})

//? *******************************************************
let p3 = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p3.then(function(valor) {
    for (let nome of valor) {
        console.log(nome)
    }
})

//? *********************************************************
let p4 = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p4.then(valor => console.log(valor))

//? **********************************************************
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra =>  letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})  
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
