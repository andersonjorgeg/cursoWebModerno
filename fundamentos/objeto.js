const prod1 = {} //? chaves representa a criação de objeto vazio em js.
prod1.nome = 'Celular Ultra Mega' //? objeto criado dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //! evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

const prod3 = {//? notação literal de objetos
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod3)

//! exemplo de json
/* '{"nome": "Camisa Polo", "Preco": 79.90}' */
//! json não é a mesma coisa de objeto