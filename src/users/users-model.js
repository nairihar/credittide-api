const _ = require('lodash')

const User = (sequelize, DataTypes) => {
    const UsersModel = sequelize.define('User', {
        user_id: {
            type         : DataTypes.INTEGER,
            field        : 'user_id',
            primaryKey   : true,
            autoIncrement: true,
            unique       : true,
        },
        phone: {
            type  : DataTypes.STRING,
            field : 'phone',
            unique: true,
        },
        email: {
            type  : DataTypes.STRING,
            field : 'email',
            unique: true,
        },
        ssn: {
            type    : DataTypes.INTEGER,
            field   : 'ssn',
            unique  : true,
            validate: {
                min: 1000000000,
            },
        },
        first_name: {
            type : DataTypes.STRING,
            field: 'first_name',
        },
        last_name: {
            type : DataTypes.STRING,
            field: 'last_name',
        },
        password: {
            type : DataTypes.STRING,
            field: 'password',
        },
    },
    {
        timestamps: false,
        tableName : 'users',
    })

    UsersModel.prototype.getPublicData = function () {
        const userData = _.extend({}, this.get({ plain: true }))

        // Exclude these keys from result
        return _.omit(userData, [
            'password',
        ])
    }

    return UsersModel
}


module.exports = User
