
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
       
    })
}

funcionarOuNao('testando', 0.5)//? chance de erro
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(valor),
        err => console.log(`Erro especifico: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))//? tratando o erro
    .then(() => console.log(`Fim!`))
