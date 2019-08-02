const conditionsMock = require('./conditions-mock')

// TODO :: Remove mock data
//  implement some job which will automatically generate the conditions and save in db

exports.list = (req, res) => {
    res.json(conditionsMock)
}
