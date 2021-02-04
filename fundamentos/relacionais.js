console.log('01)', '1' == 1 ) //? == é igual?

console.log('02)', '1' === 1)//? === é estritamente igual?

console.log('03)', '3' != 3)//? != é diferente?

console.log('04)', '3' !== 3)//? !== é estritamente diferente?

console.log('05)', '3' < 2)//? é menor?

console.log('06)', '3' > 2)//? é maior?

console.log('07)', 3 <= 2)//? é menor ou igual?

console.log('08)', 3 >= 2)//? é maior ou igual?


//? datas em javascript

//? zero significa a data de referencia de javascript que é 01/01/1970
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

//? undefined são iguais mas são de tipos diferentes
console.log('12)', undefined == null)
console.log('13)', undefined === null)