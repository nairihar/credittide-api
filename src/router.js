const glob = require('glob')
const express = require('express')

const authentication = require('./auth/auth-middleware')

const router = express.Router()

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500).send(err.message)
}

const notFound = (req, res) => res.status(404).send('Not Found :(')

router.use(authentication)

// eslint-disable-next-line
glob.sync(`${__dirname}/**/*-routes.js`).forEach(name => router.use(require(name)))

router.use(errorHandler)

router.use(notFound)

module.exports = router
