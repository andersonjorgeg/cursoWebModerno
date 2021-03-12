//? Arrow function 
const soma = (a, b) => a + b
console.log(soma(2, 4))

//? Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) 
lexico1()
lexico2()

//? parâmetros default
function log(texto = 'node') {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('anderson')

//? operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(numero => total += numero)
    return total
}
console.log(total(2, 3, 4, 5))