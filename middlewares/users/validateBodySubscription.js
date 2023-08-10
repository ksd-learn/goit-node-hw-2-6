const schemas = require("../../schemas/userSubscription");

const validateBodySubscription = (req, res, next) => {
  const data = req.body;
    const { error, value } = schemas.subscriptionSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "Error validation subscription" });
    }
    next()
}

module.exports = validateBodySubscription;