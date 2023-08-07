const schemas = require("../../schemas/userRegister");

const validateBodyLogin = (req, res, next) => {
  const data = req.body;
  console.log(data)
    const { error, value } = schemas.registerSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "Error from Joi or another validation library" });
    }
    next()
}

module.exports = validateBodyLogin;