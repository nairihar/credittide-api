const { User } = require('../../models')

exports.getUserByEmail = email => User.findOne({
    where: {
        email,
    },
})

exports.createUser = user => User.create(user)

exports.getUserById = user_id => User.findByPk(user_id)
