const Joi = require('joi');

const emailReqExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailReqExp).required()
});

module.exports = {
    verifyEmailSchema
}