const nodemailer = require('nodemailer')
const configs = require('../../_configs/env')

const transporter = nodemailer.createTransport(configs.emailOptions)

const sendEmail = (to, subject, text, html) => {
    const mailOptions = {
        from: configs.emailOptions.auth.user,
        to,
        subject,
        text: html,
        html,
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}

module.exports = sendEmail
