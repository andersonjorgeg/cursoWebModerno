/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */

const divisao = function(dividendo, divisor) {
    console.log("Resultado: " + parseInt(dividendo / divisor))
    console.log(`Resto: ${dividendo % divisor}`)  
} 

divisao(11, 4)