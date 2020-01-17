const router = require("express").Router()
const { getVacationDetailsQuery, addImageQuery, addFollowQuery, removeFollowQuery, addVacationQuery } = require("../queries/queries")
const pool = require("../pool/connection")
const moment = require("moment")
const validateAdmin = require("../validations/validateAdmin")
const handleVacations = require("../utils/handleVacations")

router.get("/all", async (req, res) => {
    const { id } = req.headers.user
    const [result] = await pool.execute(getVacationDetailsQuery(), [id])
    res.json(handleVacations(result))
})

router.post("/follow", async (req, res) => {
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

router.post("/add", validateAdmin, async (req, res) => {
    const { destination, price, check_in, check_out, description, imagesArray } = req.body
    const [result] = await pool.execute(addVacationQuery(), [description, destination, check_in, check_out, price])
    await imagesArray.forEach(image => {
        pool.execute(addImageQuery(), [result.insertId, image])
    });
    res.send("admin")
})

module.exports = router