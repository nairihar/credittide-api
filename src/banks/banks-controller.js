const _ = require('lodash')
const banksMock = require('./banks-mock')

// TODO :: Remove mock data
// store in database

exports.list = (req, res) => {
    res.json(banksMock)
}

exports.get = (req, res) => {
    const banksById = _.keyBy(banksMock, 'id')
    res.json(banksById[req.params.bank_id] || {})
}
