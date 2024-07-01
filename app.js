const express = require("express")
const cors = require("cors")
const app = express()
//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('joe')
})

module.exports = app