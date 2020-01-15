const router = require("express").Router()
const { getVacationDetails, addImage, addFollow, removeFollow, addVacation } = require("../queries/queries")
const pool = require("../pool/connection")
const moment = require("moment")
const validateAdmin = require("../validations/validateAdmin")
const handleVacations = require("../utils/handleVacations")

router.get("/all", async (req, res) => {
    const { id } = req.headers.user
    const [result] = await pool.execute(getVacationDetails(), [id])
    console.log(handleVacations(result));

    res.json(handleVacations(result))
})

router.post("/follow", async (req, res) => {
    const { vacationId, checked } = req.body
    const { id } = req.headers.user
    if (checked) {
        await pool.execute(addFollow(), [vacationId, id])
        const [result] = await pool.execute(getVacationDetails(), [id])
        res.send(handleVacations(result))
    }
    else {
        await pool.execute(removeFollow(), [vacationId, id])
        const [result] = await pool.execute(getVacationDetails(), [id])
        res.send(handleVacations(result))
    }
})

router.post("/add", validateAdmin, async (req, res) => {
    const { destination, price, check_in, check_out, description, imagesArray } = req.body
    const [result] = await pool.execute(addVacation(), [description, destination, check_in, check_out, price])
    await imagesArray.forEach(image => {
        pool.execute(addImage(), [result.insertId, image])
    });
    res.send("admin")
})

module.exports = router