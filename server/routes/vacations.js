const router = require("express").Router()
const queries = require("../queries/queries")
const pool = require("../pool/connection")
const validateAdmin = require("../validations/validateAdmin")
const handleVacations = require("../utils/handleVacations")

router.get("/all", async (req, res) => {
    const { id } = req.headers.user
    const [result] = await pool.execute(queries.getVacationDetailsQuery, [id])
    res.json(handleVacations(result))
})

router.post("/add", validateAdmin, async (req, res) => {
    const { destination, price, check_in, check_out, description, imagesArray } = req.body
    const [result] = await pool.execute(queries.addVacationQuery, [description, destination, check_in, check_out, price])
    await imagesArray.forEach(image => {
        pool.execute(queries.addImageQuery, [result.insertId, image])
    });
    console.log();
})

router.post("/delete", validateAdmin, async (req, res) => {
    const { vacationId } = req.body
    const { id } = req.headers.user
    await pool.execute(queries.deleteVacationDetailsQuery, [vacationId])
    await pool.execute(queries.deleteVacationImagesQuery, [vacationId])
    await pool.execute(queries.deleteVacationFollowersQuery, [vacationId])
    const [vacationResult] = await pool.execute(queries.getVacationDetailsQuery, [id])
    res.send(handleVacations(vacationResult))
})

router.post("/edit", validateAdmin, async (req, res) => {
    const { id, destination, price, check_in, check_out, description, imagesArray } = req.body
    await pool.execute(queries.deleteVacationImagesQuery, [id])
    await imagesArray.forEach(image => {
        pool.execute(queries.addImageQuery, [id, image])
    });
    const [result] = await pool.execute(queries.editVacationQuery, [description, destination, check_in, check_out, price, id])

    res.send("ok")
})

module.exports = router