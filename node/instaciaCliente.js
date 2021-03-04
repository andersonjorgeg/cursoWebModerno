const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//? novas instâncias criadas a partir de uma factory
const contadorC = require('./instaciaNova')()//? esse parêntese é usado para retornar uma função factory
const contadorD = require('./instaciaNova')()

//? como o node faz cache dos módulos o contadorA está afetando o contadorB 
contadorA.incrementar()
contadorA.incrementar()
console.log(contadorA.valor, contadorB.valor)

//? para resolver isso foi criado uma função factory para o contadorC não afetar o contadorD   
contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor)