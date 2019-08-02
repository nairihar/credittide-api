const { Credit } = require('../../models')

exports.getCreditsByUserId = user_id => Credit.findAll({
    where: {
        user_id,
    },
})

exports.getCreditById = credit_id => Credit.findByPk(credit_id)

exports.createCredit = credit => Credit.create(credit)

exports.updateCreditById = (credit_id, updatedCredit) => Credit.update(updatedCredit, {
    where: { credit_id },
})
