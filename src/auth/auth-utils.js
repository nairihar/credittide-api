const jwt = require('jsonwebtoken')

const configs = require('../_configs/env')

exports.generateUserJWT = user_id => jwt.sign({ user_id }, configs.auth.jwt_secret)

exports.validateUserJWT = (encoded) => {
    const token = encoded.split(' ')[1]
    return jwt.verify(token, configs.auth.jwt_secret)
}
