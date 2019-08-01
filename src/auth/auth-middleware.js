const { doesUrlsMatch } = require('../_common/helpers/utils')
const { ForbiddenError } = require('../_common/errors')
const { getUserById } = require('../_common/helpers/users')
const { validateUserJWT } = require('./auth-utils')

const publicRoutes = [
    '/auth/**',
]

function validateRequest(req, res, next) {
    try {
        const { user_id } = validateUserJWT(req.headers.authorization)
        getUserById(user_id)
            .then((user) => {
                req.user = user.getPublicData()
                next()
            })
            .catch(next)
    } catch (err) {
        throw new ForbiddenError(err.message)
    }
}

function authentication(req, res, next) {
    const currentUrl = `${req._parsedUrl.pathname}/`

    // Skip authentication if is public or specific
    if (doesUrlsMatch(currentUrl, publicRoutes)) {
        return next()
    }

    validateRequest(req, res, next)
}


module.exports = authentication
