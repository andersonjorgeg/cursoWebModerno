//? criação de um servidor backend node.js

//? importando o express
const express = require('express')

//? instanciando o express em uma variável
const app = express()

//? importando o body-server
const bodyParser = require('body-parser')

//? o body-parser vai pegar o que está com corpo da requisição
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)