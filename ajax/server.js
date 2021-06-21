/* importando os arquivos */
const bodyParser = require('body-parser')
const { response } = require('express')
const express = require('express')

/* instanciando o express */
const app = express()

/* middlewares */
/* dentro da pasta atual sirva os arquivos estáticos */
app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    /* definindo a pasta */
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    /* escolhendo o nome do arquivo */
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

/* iníciando o servidor */
app.listen(8080, () => console.log('Executando...'))