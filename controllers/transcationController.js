const express = require("express")
const transactionData = require('../model/transactions')

const transactionRouter = express.Router()

transactionRouter.get('/',(req,res) =>{
    res.json(transactionData)
})

transactionRouter.post('/',(req,res) =>{
    req.body.id = transactionData[transactionData.length -1].id + 1

    transactionData.push(req.body)
    
    res.json(transactionData[transactionData.length -1])
})


transactionRouter.get('/:id', (req,res) =>{
    const { id } = req.params
    if(transactionData[id]){
        res.json(transactionData[id])

    }else{
        res.status(404).json({ error: "page not found" });

    }
})


transactionRouter.delete('/:id',(req,res) =>{
     const {id} = req.params
    if(transactionData[id]){
        const deletedLog = transactionData.splice(+id, 1)
        res.status(200).json(deletedLog)
    }else{
        res.status(404).json({error:"log not found"})
    }
})

transactionRouter.put('/:id',(req,res) =>{
    const { id } = req.params

    transactionData.splice(+id, 1, req.body)
    if(transactionData[id]){
        res.status(200).json(transactionData[+id])
    }else{
        res.status(404).json({error:"id out of bounds"})
    }

    
})


module.exports = transactionRouter