const sendEmail = require('./send')
const { ui_url } = require('../../_configs/env')

const genConfirmEmailHtml = ssn => (`
    <a href="${ui_url}/auth/verify/${ssn}">Click to confirmation your email address</a>
`)

const sendConfirmEmail = (email, ssn) => {
    const subject = 'Credittide confirmation email'
    const html = genConfirmEmailHtml(ssn)
    sendEmail(email, subject, null, html)
}

module.exports = sendConfirmEmail
