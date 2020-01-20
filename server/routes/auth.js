const router = require("express").Router()
const pool = require("../pool/connection")
const queries = require("../queries/queries")
const hashPassword = require("../utils/hashPassword")
const jwt = require("jsonwebtoken")
const registerValidation = require("../validations/registerValidation")
const loginValidation = require("../validations/loginValidation")

router.post("/register", registerValidation, async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    hashedPassword = await hashPassword.hash(password)
    const [userResult] = await pool.execute(queries.checkIfUserExistsQuery, [email])
    const [exists] = userResult
    if (!exists) {
        await pool.execute(queries.registerQuery, [firstName, lastName, email, hashedPassword])
        res.json({ message: "register completed", redirect: true })
    }
    else {
        res.json({ message: "email already exists", redirect: false })
    }

})

router.post("/login", loginValidation, async (req, res) => {
    const { email, password } = req.body
    const [userResult] = await pool.execute(queries.checkIfUserExistsQuery, [email])
    const [exists] = userResult
    if (exists) {
        const { id, password: userPassword, role, name } = exists
        const compared = await hashPassword.compare(password, userPassword)
        if (compared) {
            await jwt.sign({ id, email, userPassword, role, name }, process.env.SECRET, { expiresIn: "1h" }, (err, token) => {
                if (err) {
                    console.error(err)
                }
                res.json({ message: "login successfully", token, name, role })
            })
        }
        else {
            res.json({ message: "failed to hash passwords", token: "", name: "", role: "" })
        }
    }
    else {
        res.json({ message: "Email or Password are incorrect", token: "", name: "", role: "" })
    }
})

router.get("/verify", (req, res) => {
    const { token } = req.headers
    if (!token) {
        res.send("error")
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json({ status: false, role: "", userId: "" })
            }
            else {
                const { role, id, name } = decoded
                return res.json({ status: true, role, userId: id, name })
            }
        })
    }
})

module.exports = router