const userService = require("../services/auth.js")

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getServiceAllUsers()
        res.json({data: users, status: "success"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const createUsers = async (req, res) => {
    try {
        const users =  await userService.createServiceUsers(req.body)
        res.json({ data: users, status: "success"})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {getAllUsers, createUsers}