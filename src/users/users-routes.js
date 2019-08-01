const express = require('express')

const usersController = require('./users-controllers')

const usersRouter = express.Router()

usersRouter
    .get('/users/me', usersController.me)
    .put('/users/me', usersController.updateMe)

module.exports = usersRouter
