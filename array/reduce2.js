const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//? Desafio 1: Todos os alunos são bolsista?

const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})

console.log(`Todos os alunos são bolsista? ${todosBolsistas}`)

//? Desafio 2: algum alunos é bolsistas?

const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(`Algum aluno é bolsistas? ${alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)}`)


