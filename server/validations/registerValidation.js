const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
    email: Joi.string().min(11).max(30).regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
    password: Joi.string().min(8).max(16).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
})

function registerValidation(req, res, next) {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.json({ messege: "One of your fields are incorrect", redirect: false })
    next();
}
module.exports = registerValidation