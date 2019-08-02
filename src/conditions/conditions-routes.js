const express = require('express')

const conditionsController = require('./conditions-controller')

const conditionsRouter = express.Router()

conditionsRouter
    .get('/conditions', conditionsController.list)

module.exports = conditionsRouter
