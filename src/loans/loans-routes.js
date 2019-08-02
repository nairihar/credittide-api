const express = require('express')

const loansController = require('./loans-controller')

const loansRouter = express.Router()

loansRouter
    .get('/loans', loansController.list)
    .get('/loans/:loan_id', loansController.get)

module.exports = loansRouter
