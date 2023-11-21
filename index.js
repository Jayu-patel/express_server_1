const express = require('express')
const app = express()
const cors = require('cors')
const product = require('./product')

app.use(cors())
app.use(express.json())

app.get('/',(_,res)=>{
    res.send("Server is ready to serve 👍")
})

app.post('/add',async(req,res)=>{
    const item = new product(req.body)
    const result = await item.save()
    res.send(result)
})

app.get('/products',async(_,res)=>{
    const data = await product.find()
    res.send(data)
})

app.get('/products/:id',async(req,res)=>{
    const data = await product.findOne({_id:req.params.id})
    res.send(data)
})

app.delete('/products/:id',async(req,res)=>{
    const result = await product.deleteOne({_id: req.params.id})
    res.send(result)
})

app.put('/products/:id',async(req,res)=>{
    const result = await product.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    )
    res.send(result)
})

app.get('/search/:key',async(req,res)=>{
    const data = await product.find({
        '$or': [
            { name : { $regex: req.params.key} },
            { company : { $regex: req.params.key} },
            { type : { $regex: req.params.key} }
        ]
    })
    res.send(data)
})

const port = process.env.PORT || 4500
app.listen(port)
