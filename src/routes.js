const glob = require('glob')
const express = require('express')

const routes = express.Router()

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
    console.error(err)
    res.status(500).send(err.message)
}

const notFound = (req, res) => res.status(404).send('Not Found :(')

// eslint-disable-next-line
glob.sync(`${__dirname}/**/*-routes.js`).forEach(name => routes.use(require(name)))

routes.use(errorHandler)

routes.use(notFound)

module.exports = routes
