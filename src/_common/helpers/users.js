const _ = require('lodash')
const { User } = require('../../models')

exports.getUserByEmail = email => User.findOne({
    where: {
        email,
    },
})

exports.createUser = user => User.create(user)

exports.getUserById = user_id => User.findByPk(user_id)

exports.getUserBySSN = ssn => User.findOne({
    where: {
        ssn,
    },
})

exports.updateUserById = (user_id, updatedUser) => User.update(updatedUser, {
    where: { user_id },
})

exports.getUserUpdatableFields = user => _.pick(user, [
    'first_name', 'last_name', 'phone',
])

const userNeededFields = ['email', 'phone', 'first_name', 'last_name', 'password', 'ssn']

exports.isUserDataValid = user => !(!user || !_.has(user, userNeededFields))
