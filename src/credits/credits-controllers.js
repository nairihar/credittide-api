const { InputError } = require('../_common/errors')
const {
    createCredit, getCreditsByUserId, getCreditById,
} = require('../_common/helpers/credits')

// TODO :: add pagination and add count to list endpoints

exports.list = (req, res, next) => {
    const { user_id } = req.user
    getCreditsByUserId(user_id)
        .then(credits => res.json(credits))
        .catch(next)
}

exports.create = (req, res, next) => {
    const { credit } = req.body
    if (!credit) {
        throw new InputError('Credit not specified!')
    }

    const { user_id } = req.user

    createCredit({ ...credit, user_id })
        .then((creditData) => {
            res.json({
                credit: creditData,
            })
        })

        .catch(next)
}

exports.get = (req, res, next) => {
    const { credit_id } = req.params
    getCreditById(credit_id)
        .then(credit => res.json(credit || null))
        .catch(next)
}
