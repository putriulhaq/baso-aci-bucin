const mongoose = require("mongoose")
const schema = mongoose.Schema

const productSchema = new schema({
    name: String
})

module.exports = mongoose.model('Product', productSchema)