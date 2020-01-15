const jwt = require("jsonwebtoken")

module.exports = ((req, res, next) => {
    const { token } = req.headers

    if (!token) {
        res.json({ error: "error" })
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            const { id, role } = decoded
            if (err) {
                return res.json({ status: false })
            }
            else {
                req.headers.user = { id, role }
                next()
            }
        })
    }
})
