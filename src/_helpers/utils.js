const crypto = require('crypto')

exports.genRandomString = (l = 8) => crypto.randomBytes(l / 2).toString('hex')
