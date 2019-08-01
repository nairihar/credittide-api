const express = require('express')
const checksController = require('./checks-controllers')

const checksRouter = express.Router()

checksRouter.post('/auth/scan', uploadCheckImage, checksController.scan)

module.exports = checksRouter
