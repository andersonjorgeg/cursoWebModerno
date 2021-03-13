const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

/* console.log(tecnologias.react) */ //!errado

console.log(tecnologias.get('react'))
//? resultado
// { framework: false }

console.log(tecnologias.get('react').framework)
//? resultado
// false

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//? sobescreveu o a
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
//?resultado 
/*Map(4) {
[Function(anonymous)] => 'Função',
    {} => 'Objeto',
        123 => 'b',
            456 => 'b'
} */