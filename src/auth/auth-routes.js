const express = require('express')
const authController = require('./auth-controllers')

const authRouter = express.Router()

authRouter
    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)


module.exports = authRouter
