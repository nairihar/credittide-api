const loansMock = require('./loans-mock')

// TODO :: Remove mock data
//  implement some job which will automatically generate the loans and save in db

exports.list = (req, res) => {
    res.json(loansMock)
}

exports.get = (req, res) => {
    res.json(loansMock[req.params.loan_id || 0] || null)
}
