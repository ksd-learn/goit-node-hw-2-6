const schemas = require("../../schemas/userVerifyEmail");

const validateBodyEmail = (req, res, next) => {
  const data = req.body;
    const { error, value } = schemas.verifyEmailSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "Error validation Email" });
    }
    next()
}

module.exports = validateBodyEmail;