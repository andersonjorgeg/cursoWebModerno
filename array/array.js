console.log(typeof Array) //? é uma função
console.log(typeof new Array) //? é um objeto
console.log(typeof []) //? é um objeto

let aprovados = new Array('Bia', 'Carlos', 'Ana')//? notação não recomendada 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//? notação recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//? adicionando um elemento no array
aprovados[3] = 'Paulo' 
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
//? ordenado o array
aprovados.sort()
console.log(aprovados)

//? apagando elementos do array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 2) //? exclui elementos
console.log(aprovados)
aprovados.splice(1, 0, 'elemento1', 'elemento2') //? adicionando elementos
console.log(aprovados)



