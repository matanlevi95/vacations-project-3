const nodemailer = require("nodemailer")
const { MAIL_ADDRESS, MAIL_PASSWORD } = process.env
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: MAIL_ADDRESS,
        pass: MAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false }
})

function mailOptions(_to, name) {
    return {
        from: MAIL_ADDRESS,
        to: _to,
        subject: `Welcome ${name}`,
        text: `Welcome to our application !`
    }
}

transporter.close();
module.exports = { transporter, mailOptions }
