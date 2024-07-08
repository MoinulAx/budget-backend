const express = require("express")
const cors = require("cors")
const app = express()

const transactionRouter = require("./controllers/transcationController")
//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.json('The main page')
})

app.use('/transaction', transactionRouter)

module.exports = app