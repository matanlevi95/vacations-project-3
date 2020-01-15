require("dotenv").config()


const envirementCheck = (array) => {
    array.map(envirement => {


        if (!process.env[envirement]) {

            return console.log(`${envirement} dont exists`);
        }
    })
}
module.exports = envirementCheck