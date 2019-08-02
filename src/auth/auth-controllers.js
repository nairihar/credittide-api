const { generateUserJWT } = require('./auth-utils')
const { sendConfirmEmail } = require('../_services/email')
const { InputError, ForbiddenError, NotFoundError } = require('../_common/errors')
const {
    getUserByEmail, getUserBySSN, createUser, updateUserById,
    isUserDataValid,
} = require('../_common/helpers/users')

// TODO :: encrypt passwords

exports.signin = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new InputError('Email or Password not specified!')
    }

    getUserByEmail(email)
        .then((userData) => {
            if (!userData || userData.password !== password) {
                throw new ForbiddenError('User not found or wrong password!')
            }

            if (!userData.is_active) {
                throw new ForbiddenError('Please activate the account!')
            }

            const token = generateUserJWT(userData.user_id)
            res.json({
                token,
                user: userData.getPublicData(),
            })
        })

        .catch(next)
}

exports.signup = (req, res, next) => {
    const { user } = req.body
    if (!isUserDataValid(user)) {
        throw new InputError('Something missing in user data!')
    }

    getUserByEmail(user.email)
        .then((userData) => {
            if (userData) {
                throw new InputError('Email address already registered!')
            }
            return createUser(user)
                .then(() => sendConfirmEmail(user.email, user.ssn))
        })

        .then(() => {
            res.status(200).send('Please confirm your email address!')
        })

        .catch(next)
}

exports.verify = (req, res, next) => {
    if (!req.body.ssn) {
        throw new InputError('User identifier not specified!')
    }

    getUserBySSN(req.body.ssn)
        .then((userData) => {
            if (!userData) {
                throw new NotFoundError('User with this identifier not found!')
            }
            if (userData.is_active) {
                throw new InputError('User already activated!')
            }
            return updateUserById(userData.user_id, { is_active: true })
        })

        .then(() => {
            res.status(200).send('User successfully activated!')
        })

        .catch(next)
}
