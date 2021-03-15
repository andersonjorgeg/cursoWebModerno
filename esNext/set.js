// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) //? tamanho do Set
console.log(times.has('vasco')) //? true || false. se o elemento existe
console.log(times.has('Vasco')) //? true || false. se o elemento existe
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)