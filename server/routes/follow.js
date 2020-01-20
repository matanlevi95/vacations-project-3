const router = require("express").Router()
const queries = require("../queries/queries")
const pool = require("../pool/connection")
const handleVacations = require("../utils/handleVacations")

router.post("/", async (req, res) => {
    const { vacationId, checked } = req.body
    const { id } = req.headers.user

    if (checked) {
        await pool.execute(queries.addFollowQuery, [vacationId, id])

    }
    else {
        await pool.execute(queries.removeFollowQuery, [vacationId, id])
    }
    const [result] = await pool.execute(queries.getVacationDetailsQuery, [id])
    res.json(handleVacations(result))
})

module.exports = router