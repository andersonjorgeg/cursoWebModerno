const os = require('os')

const anonimo = process.argv.indexOf('-a') !== -1
//? console.log(anonimo)

if (anonimo) {
    process.stdout.write(`Fala anonimo!${os.EOL}`)
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, '')

        process.stdout.write(`Fala ${nome}!!${os.EOL}`)
        process.exit()
    })
}