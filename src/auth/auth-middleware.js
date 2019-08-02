const { doesUrlsMatch } = require('../_common/helpers/utils')
const { ForbiddenError, NotFoundError } = require('../_common/errors')
const { getUserById } = require('../_common/helpers/users')
const { validateUserJWT } = require('./auth-utils')

const publicRoutes = [
    '/auth/**',
    '/loans/**',
    '/banks/**',
    '/loans/**',
    '/conditions/**',
]

function validateRequest(req, res, next) {
    const { authorization } = req.headers
    if (!authorization) {
        throw new ForbiddenError('Auth token not specified!')
    }
    try {
        const { user_id } = validateUserJWT(authorization)
        getUserById(user_id)
            .then((user) => {
                if (!user || !user.is_active) {
                    return next(new NotFoundError('User not found or not activated!'))
                }
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
