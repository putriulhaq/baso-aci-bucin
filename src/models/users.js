const mongoose = require("mongoose")
const schema = mongoose.Schema

const usersSchema = new schema({
    username: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        minlength: 6,
        required: true,
      },
      role: {
        type: String,
        default: "Basic",
        required: true,
      },
})

module.exports = mongoose.model('Users', usersSchema)