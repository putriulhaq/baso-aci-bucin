const userModel = require("../models/users.js")

const getServiceAllUsers = async () => {
    return await userModel.find()
}

const createServiceUsers = async (user) => {
    return userModel.create(user)
}

module.exports = {getServiceAllUsers, createServiceUsers}