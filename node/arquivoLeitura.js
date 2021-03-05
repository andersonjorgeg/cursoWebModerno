const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//? síncrono...
//? leia um arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//? assíncrono...
//? leia um arquivo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//? outra forma de ler um arquivo JSON - síncrona
const config = require('./arquivo.json')
console.log(config.db)


//? leitura de uma pasta usando file system
//? readdir - quer dizer leia um diretório
//? __dirname - quer dizer que está no diretório atual ou seja a pasta atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
