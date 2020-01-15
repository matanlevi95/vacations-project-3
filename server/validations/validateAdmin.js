module.exports = ((req, res, next) => {
    const { role } = req.headers.user
    if (role !== "admin") res.send("not admin")
    else next()
})