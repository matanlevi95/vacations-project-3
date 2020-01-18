const express = require("express")
const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const authRouter = require("./routes/auth")
const envirementCheck = require("./utils/envirementCheck")
const validateToken = require("./validations/validateToken")
const emailSender = require("./utils/emailSender")
const vacationsRouter = require("./routes/vacations")
const followRouter = require("./routes/follow")
envirementCheck(["PORT"])
const port = process.env.PORT ? process.env.PORT : 5000

app.use(cors())
app.use(bodyParser.json())
app.use("/user", authRouter)
app.use(validateToken)
app.use("/follow", followRouter)
app.use("/vacations", vacationsRouter)
app.listen(port, (err) => {
    if (err) {
        console.log("error with the listening");
    }
    console.log(`listening to port ${port}`)
})