const Sequelize = require('sequelize')
const configs = require('./_configs/env')

const db = new Sequelize(configs.db.url, configs.db.options)

db.authenticate()
    .then(() => console.log('Database Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

const { Op } = Sequelize

const models = {
    User  : db.import(`${__dirname}/users/users-model.js`),
    Credit: db.import(`${__dirname}/credits/credits-model.js`),
}

models.User.hasMany(models.Credit, {
    foreignKey: 'user_id',
})

module.exports = {
    Op,
    Sequelize,
    ...models,
}
