Object.prototype.atributo0 = 'Z' //!EVITE FAZER ISSO!!!

//? tem o Object.prototype
const avo = { atributo1: 'A' }

//? para ligar o pai ao avô usa o __proto__
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' }
const filho = { __proto__: pai, atributo3: 'C'}
const sobrinho = {atributo4: 'D'}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)