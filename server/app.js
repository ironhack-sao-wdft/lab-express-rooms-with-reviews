const express = require('express')

//BANCO DE DADOS
const db = require('./config/db.config')
db()

//PORTA
const PORT = 4000

const app = express()

app.use(express.json())

//ROTEADORES
const roomRouter = require('./routes/room.routes')
app.use('/', roomRouter)

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`)) 