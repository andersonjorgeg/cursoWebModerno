const peso1 = 1.0 //se o valor for 1.0 é true - se for 1.1 é false
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))//converte um número em número binário
console.log(typeof media.toString())//converte um número em string
console.log(typeof media)
console.log(typeof Number)