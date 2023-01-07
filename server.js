const express = require('express')
const mongoose = require('./api/user/db.js')
const jwt = require('jsonwebtoken');

const app = express()
const userRouter = require('./api/user/user.routes');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRouter);

app.listen(3000, () => {
    console.log('server is  running')
});