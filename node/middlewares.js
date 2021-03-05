//? middleware pattern (chain of responsibility) cadeia de responsabilidades
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const executar = (contexto, ...middlewares) => {
    executarPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const contexto = {}
executar(contexto, passo1, passo2, passo3)
console.log(contexto)
