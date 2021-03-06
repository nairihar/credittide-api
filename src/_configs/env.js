const configs = {}

configs.port = parseInt(process.env.PORT, 10) || 3000

configs.corsOptions = {
    headers: [
        'Access-Control-Allow-Headers', 'Authorization',
        'Origin', 'X-Requested-With', 'Content-Type', 'Accept',
    ],
}

configs.db = {
    url    : process.env.DATABASE_URL || 'postgres://localhost:5432/postgres',
    options: {
        logging: process.env.LOG_DB_DISABLED ? false : console.log,
    },
}

configs.auth = {
    jwt_secret: process.env.AUTH_JWT_SECRET || '12345!@#$%',
}

configs.emailOptions = {
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth   : {
        user: process.env.EMAIL_ADDRESS || '',
        pass: process.env.EMAIL_PASSWORD || '',
    },
}

configs.ui_url = process.env.UI_URL || 'http://localhost:4000'

module.exports = configs
