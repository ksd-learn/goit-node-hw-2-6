const Joi = require('joi');

const emailReqExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

const registerSchema = Joi.object({
  email: Joi.string().email().pattern(emailReqExp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
    registerSchema,
}