let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar... ')

console.log(!!('' || null || 0 || ''))


let nome = 'Anderson'
console.log(nome || 'Desconhecido')//valor padrão de uma variável

let nome2 = ''
console.log(nome2 || 'Desconhecido')//?se a variável conter nome é impresso o nome se não será impresso o valor padrão que é o desconhecido.