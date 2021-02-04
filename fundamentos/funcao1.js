// ? Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// ! 2 + undefined = NaN
//imprimirSoma(2, 10, 4, 5, 6,7, 8)//? vai somar o que está na função e vai ignorar o resto
imprimirSoma()//! NaN - not a number

// ? Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
