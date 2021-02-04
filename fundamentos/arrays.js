const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// ?resultado undefined - indefinido

valores[4] = 10
console.log(valores[4])
console.log(valores)

valores[5] = 11
console.log(valores)//? resultado [ 7.7, 8.9, 6.3, 9.2, 10, <1 empty items>, 11 ] 5 intens vazios.

console.log(valores.length)//? resultado 6 elementos

valores.push({id: 3}, false, null, 'teste', )

console.log(valores)

console.log(valores.pop())//? retira do array o ultimo valor
delete valores[0]//? deleta o valor escolhido
console.log(valores)

console.log(typeof valores)//? em java script um array é do tipo objeto