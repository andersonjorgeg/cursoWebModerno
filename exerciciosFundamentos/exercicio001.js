/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

function cumprimentar(nome) {
    return console.log(`Olá, ${nome}!`)
}

/* cumprimentar("Anderson")
cumprimentar("Arruda") */

//? resolução 
function cumprimentar2(nome) {
    const saudação = "Olá"
    return [saudação, nome].join(', ').concat("!")
}

console.log(cumprimentar2("Anderson"))
console.log(cumprimentar2("Arruda"))