const Joi = require("@hapi/joi");

const loginSchema = Joi.object({
    email: Joi.string().min(11).max(30).regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
    password: Joi.string().min(8).max(16).required(),
})

function loginValidation(req, res, next) {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.json({ messege: "Email or Password are incorrect", token: "", name: "", role: "" })
    next();
}
module.exports = loginValidation