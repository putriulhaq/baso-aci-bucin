const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const connectDb = require('./src/application/database.js')
const express = require('express');
const app = express();

//connect to db
connectDb()

//middleware
app.use(express.json());

//Router
const productRouter = require("./src/router/product.js");
app.use("/api/products", productRouter);

const usersRouter = require("./src/router/auth.js")
app.use("/api/users", usersRouter)

app.listen(process.env.BACK_PORT, () => {
    console.log(`Server Started at ${process.env.BACK_PORT}`)
})