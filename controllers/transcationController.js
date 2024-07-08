const express = require("express")
const transactionData = require('../model/transactions')
const transactions = require("../model/transactions")

const transactionRouter = express.Router()

transactionRouter.get('/',(req,res) =>{
    res.json(transactionData)
})

transactionRouter.post('/',(req,res) =>{
    if (transactionData.length === 0){
        req.body.id = 1
    }else{
        
        req.body.id = transactionData[transactionData.length -1].id + 1

    }

    transactionData.push(req.body)
    
    res.json(transactionData[transactionData.length -1])
})


transactionRouter.get('/:id', (req,res) =>{
    const { id } = req.params
    if(transactionData.find(transaction => transaction.id === +id)){
        res.json(transactionData.find(transaction => transaction.id === +id))

    }else{
        res.status(404).json({ error: "page not found" });

    }
})


transactionRouter.delete('/:id',(req,res) =>{
     const {id} = req.params
    if(transactionData.find(transaction => transaction.id === +id)){
        
        const spliceIndex = transactionData.findIndex(transaction => transaction.id === +id)
        const deletedLog = transactionData.splice(spliceIndex, 1)
        res.status(200).json(deletedLog)
    }else{
        res.status(404).json({error:"log not found"})
    }
})

transactionRouter.put('/:id',(req,res) =>{
    const { id } = req.params


   if(transactionData.find(transaction => transaction.id === +id)){
        transactionData.splice(+id-1, 1, req.body)

        res.status(200).json(transactionData.find(transaction => transaction.id === +id))
    }else{
        res.status(404).json({error:"id out of bounds"})
    }

    
})


module.exports = transactionRouter