function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    /* .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...')) */

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`valor inicial: ${valor}`)

    await esperarPor(1500)
    console.log(`valor mais 1: ${valor + 1}`)
    
    await esperarPor(1500)
    console.log(`valor mais 2: ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()



/* async function executarSemAwait() {
    esperarPor(1500)
    console.log('Async sem Await 1...')

    esperarPor(1500)
    console.log('Async sem Await 2...')

    esperarPor(1500)
    console.log('Async sem Await 3...')
}
async function executarComAwait() { 

    await esperarPor(1500)
    console.log('Async com Await 1...')

    await esperarPor(1500)
    console.log('Async com Await 2...')

    await esperarPor(1500)
    console.log('Async com Await 3...')
}
 */

