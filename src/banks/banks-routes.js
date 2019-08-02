const express = require('express')

const banksController = require('./banks-controller')

const banksRouter = express.Router()

banksRouter
    .get('/banks', banksController.list)
    .get('/banks/:bank_id', banksController.get)

module.exports = banksRouter
