const router = require("express").Router()
const { addFollowQuery, removeFollowQuery, getVacationDetailsQuery } = require("../queries/queries")
const pool = require("../pool/connection")
const handleVacations = require("../utils/handleVacations")

router.post("/", async (req, res) => {
    const { vacationId, checked } = req.body
    const { id } = req.headers.user

    if (checked) {
        await pool.execute(addFollowQuery(), [vacationId, id])

    }
    else {
        await pool.execute(removeFollowQuery(), [vacationId, id])
    }
    const [result] = await pool.execute(getVacationDetailsQuery(), [id])
    res.json(handleVacations(result))
})

module.exports = router