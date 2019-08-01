const express = require('express')
const authController = require('./auth-controllers')

const authRouter = express.Router()

authRouter
    .post('/auth/signin', authController.signin)
    .post('/auth/signup', authController.signup)

    .post('/auth/verify', authController.verify)


module.exports = authRouter
