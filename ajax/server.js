/* importando os arquivos */
const bodyParser = require('body-parser')
const express = require('express')

/* instanciando o express */
const app = express()

/* middlewares */
/* dentro da pasta atual sirva os arquivos estáticos */
app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/* iníciando o servidor */
app.listen(8080, () => console.log('Executando...'))