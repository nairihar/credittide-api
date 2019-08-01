require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./src/routes')
const { port } = require('./src/_configs/env')

const app = express()

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(routes)

app.listen(port, () => console.log(`Server running on port ${port}!`))
