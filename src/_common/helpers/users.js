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
