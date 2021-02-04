//? forma de escrever uma função
let dobro = function(a) {
    return 2 * a
}

//? função arrow com corpo
dobro = (a) => {//! função arrow sempre é uma função anônima
    return 2 * a
}

//? função arrow sem corpo e com forma reduzida
dobro = a => 2 * a//! nessa forma de escrever o return é implícito


console.log(dobro(Math.PI))


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //! possui um parâmetro

console.log(ola())


