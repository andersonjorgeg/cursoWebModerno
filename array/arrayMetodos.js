const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log(pilotos.pop()) 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

console.log(pilotos.shift())
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//? splice pode adicionar e remover elementos

//? adicionar 
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//? remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //? novo array
console.log(pilotos)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(pilotos)
console.log(algunsPilotos2)