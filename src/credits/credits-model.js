const CreditsModel = (sequelize, DataTypes) => (
    sequelize.define('Credit', {
        credit_id: {
            type         : DataTypes.INTEGER,
            field        : 'credit_id',
            primaryKey   : true,
            autoIncrement: true,
            unique       : true,
        },
        user_id: {
            type  : DataTypes.INTEGER,
            field : 'user_id',
            unique: true,
        },
    },
    {
        timestamps: false,
        tableName : 'credits',
    })
)

module.exports = CreditsModel
