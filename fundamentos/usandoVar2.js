//? escopo global
var numero = 1 
 {
     //? escopo de bloco
     var numero = 2
     console.log('Dentro = ', numero)
 }
 console.log('Fora = ', numero)