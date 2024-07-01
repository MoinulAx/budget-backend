const express = require("express")

const transactionRouter = express.Router()

transactionRouter.get('/',(req,res) =>{
    res.send('main')
})
transactionRouter.post('/',(req,res) =>{
    res.send('main')
})


transactionRouter.get('/:id', (req,res) =>{
    const { id } = req.params
    res.send(id)
})


transactionRouter.delete('/:id',(req,res) =>{
    res.send('delte')
})

transactionRouter.put('/:id',(req,res) =>{
    res.send('put')
})


module.exports = transactionRouter