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
        amount: {
            type : DataTypes.INTEGER,
            field: 'amount',
        },
        type: {
            type : DataTypes.TEXT,
            field: 'type',
        },
        subtype: {
            type : DataTypes.TEXT,
            field: 'subtype',
        },
        duration_in_month: {
            type : DataTypes.INTEGER,
            field: 'duration_in_month',
        },
        status: {
            type        : DataTypes.JSONB,
            field       : 'status',
            defaultValue: {},
        },
    },
    {
        timestamps: false,
        tableName : 'credits',
    })
)

module.exports = CreditsModel
