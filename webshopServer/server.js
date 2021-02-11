const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config')

const app = express()

app.set("view engine", "ejs");
app.use(express.json())
// app.use(express.static('../public'))
app.use(cors())

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

// app.use('../public', express.static( '../public'))

const products = require('./routes/api/products')
app.use('/products', products)
// require('./routes/index')
const category = require('./routes/api/category')
app.use('/category', category)

// const medarbejder = require('./routes/api/medarbejder')
// app.use('/medarbejder', medarbejder)

// const login = require('./routes/api/login')
// app.use('/login', login)

app.listen(config.port, () => console.log(`Server started on port ${config.port}`))


