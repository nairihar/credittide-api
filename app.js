require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./src/routes')
const { port, corsOptions } = require('./src/_configs/env')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// allow cross-origin requests
app.use(cors(corsOptions))

app.use('/api/1', routes)

app.listen(port, () => console.log(`Server running on port ${port}!`))
