const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))//todo retorna vazio

// ?valor do carácter na TABELA ASCII https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))//?https://www.w3schools.com/jsref/jsref_indexof.asp


console.log(escola.substring(1))//?https://www.w3schools.com/jsref/jsref_substr.asp
console.log(escola.substring(0, 3))

console.log('escola '.concat(escola).concat(" !"))//todo concatenando strings
console.log('escola ' + escola + ' !')

console.log(escola.replace(3, 'e'))//?https://www.w3schools.com/jsref/jsref_replace.asp

console.log('Ana,Maria,Pedro'.split(','))
