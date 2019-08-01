const { generateUserJWT } = require('./auth-utils')
const { InputError, ForbiddenError } = require('../_common/errors')
const { getUserByEmail, createUser } = require('../_common/helpers/users')

// TODO :: encrypt passwords

exports.login = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new InputError('Email or Password not specified!')
    }

    getUserByEmail(email)
        .then((userData) => {
            if (!userData || userData.password !== password) {
                throw new ForbiddenError('User not found or wrong password!')
            }
            const token = generateUserJWT(userData.user_id)
            res.json({
                token,
                user: userData.getPublicData(),
            })
        })

        .catch(next)
}

exports.register = (req, res, next) => {
    if (!req.body.user) {
        throw new InputError('User object not specified!')
    }

    const { user } = req.body

    getUserByEmail(user.email)
        .then((userData) => {
            if (userData) {
                return userData
            }
            return createUser(user)
        })

        .then((userData) => {
            const token = generateUserJWT(userData.user_id)
            res.json({
                token,
                user: userData.getPublicData(),
            })
        })

        .catch(next)
}
