//? operador ... rest(juntar)/spread(espalhar)
//? rest como parâmetro de função


//? usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)
//?resultado
//{ ativo: true, nome: 'Maria', salario: 12348.99 }

//? usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
//?resultado
//[ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]