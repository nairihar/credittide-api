const express = require('express')

const creditsController = require('./credits-controllers')

const creditsRouter = express.Router()

creditsRouter
    .get('/credits', creditsController.list)
    .post('/credits', creditsController.create)

    .get('/credits/:credit_id', creditsController.get)
    .put('/credits/:credit_id', creditsController.update)

module.exports = creditsRouter
