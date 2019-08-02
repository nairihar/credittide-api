const { InputError } = require('../_common/errors')
const {
    createCredit, getCreditsByUserId, getCreditById, getCreditUpdatableFields,
    updateCreditById,
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

exports.update = (req, res, next) => {
    const { credit = {} } = req.body
    const { credit_id } = credit

    getCreditById(credit_id)
        .then((creditData) => {
            if (!creditData || creditData.user_id !== req.user.user_id) {
                throw new InputError('User doesn\'t have credentials not the credit!')
            }
            const updateData = getCreditUpdatableFields(credit)
            return updateCreditById(credit_id, updateData)
        })
        .then(() => getCreditById(credit_id))
        .then(creditData => res.json(creditData))
        .catch(next)
}
