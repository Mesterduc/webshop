const express = require('express')
const router = express.Router()
// const cors = require('cors')

// const app = express()
// app.use(express.json())
// app.use(cors())

const products = require('./api/products')
app.use('/', products)


module.exports = router

// const medarbejder = require('./routes/api/medarbejder')
// app.use('/medarbejder', medarbejder)

// const login = require('./routes/api/login')
// app.use('/login', login)