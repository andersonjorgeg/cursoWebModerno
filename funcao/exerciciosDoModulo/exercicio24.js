/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while */

const helloWorld = function(){
    let contador = 1
    while (contador < 12) {
        console.log(`${contador} Hello World`)
        contador++
    }
}

helloWorld()