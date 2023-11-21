const mongoose = require('mongoose')
const link = process.env.LINK

mongoose.connect(link)

const scema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    company: String
})

module.exports = mongoose.model('product',scema)
