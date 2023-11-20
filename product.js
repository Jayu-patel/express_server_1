const mongoose = require('mongoose')
const link1 = 'mongodb+srv://JayuPatel:mernpassmongo@cluster1.hvuu6u9.mongodb.net/mernstack'

mongoose.connect(link1)

const scema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    company: String
})

module.exports = mongoose.model('product',scema)