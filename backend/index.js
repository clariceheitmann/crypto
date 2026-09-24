const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')

//relacionamentos para poder trabalhar os relacionamentos 
//require('./models/rel)

const ciclistaController = require('./controller/ciclista.controller')
const authController = require('./controller/auth.controller')

//------------ Middleware ------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//------------ Rotas Públicas ------------
app.post('/ciclista', ciclistaController.cadastrar)
app.post('/login', authController.login)


app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!'})
})

//------------ Rotas Privadas ------------



//------------ Sincronizando o servidor com banco de dados ------------
conn.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em ${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro ao se conectar com o banco de dados!',err)
    })