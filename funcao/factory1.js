//? função factory -> é uma função que retorna um objeto

//? factory simples

function criarPessoa() {
    return {
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())