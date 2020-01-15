const bcrypt = require("bcryptjs")

async function hash(password) {
    const salt = await bcrypt.genSalt(10)
    hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

async function compare(password, hash) {
    const isMatch = await bcrypt.compare(password, hash)
    if (isMatch) return true
    return false
}

module.exports = { hash, compare }


