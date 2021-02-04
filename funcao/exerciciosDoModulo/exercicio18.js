/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.Use o comando
switch.Crie um case default que escreva ‘Número fora do intervalo.’ */

const leitorNumero = function(numero){
    switch(numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2: 
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7: 
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(leitorNumero(0))
console.log(leitorNumero(1))
console.log(leitorNumero(2))
console.log(leitorNumero(3))
console.log(leitorNumero(4))
console.log(leitorNumero(5))
console.log(leitorNumero(6))
console.log(leitorNumero(7))
console.log(leitorNumero(8))
console.log(leitorNumero(9))
console.log(leitorNumero(10))
console.log(leitorNumero(11))