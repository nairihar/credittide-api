const {
    updateUserById, getUserUpdatableFields, getUserById,
} = require('../_common/helpers/users')

exports.me = (req, res) => {
    res.json(req.user)
}

exports.updateMe = (req, res, next) => {
    const { user_id } = req.user
    const { user = {} } = req.body
    const updateData = getUserUpdatableFields(user)
    updateUserById(user_id, updateData)
        .then(() => getUserById(user_id))
        .then(userData => res.json(userData.get({ plain: true })))
        .catch(next)
}
