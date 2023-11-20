const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const link1 = 'mongodb+srv://JayuPatel:mernpassmongo@cluster1.hvuu6u9.mongodb.net/mernstack'
const link2 = 'mongodb://127.0.0.1:27017/mern'
app.use(cors())
app.use(express.json())

mongoose.connect(link2)

const scema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})
const products = mongoose.model('data',scema)

app.post("/sign",async(req,res)=>{
    const product = new products(req.body)
    let result = await product.save()
    result = result.toObject()
    delete result.password
    res.send(result)
})

app.post('/login',async(req,res)=>{
    let user = await products.findOne(req.body).select("-password")
    if(user)
        res.send(user)
    else
        res.send({error: "user not found"})
})
app.listen(5000)