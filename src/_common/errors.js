class InputError extends Error {
    constructor(message) {
        super()
        this.message = message
        this.name = 'InputError'
        this.status = 400
    }
}

class AuthError extends Error {
    constructor(message) {
        super()
        this.message = message
        this.name = 'AuthError'
        this.status = 401
    }
}

class ForbiddenError extends Error {
    constructor(message) {
        super()
        this.message = message
        this.name = 'ForbiddenError'
        this.status = 403
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super()
        this.message = message
        this.name = 'NotFoundError'
        this.status = 404
    }
}

class ServerError extends Error {
    constructor(message) {
        super()
        this.message = message
        this.name = 'ServerError'
        this.status = 500
    }
}

module.exports = {
    InputError,
    NotFoundError,
    ForbiddenError,
    AuthError,
    ServerError,
}
