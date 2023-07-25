const schemas = require("../schemas/contacts");

const validateBodyAdd = (req, res, next) => {
    const data = req.body;
    const { error, value } = schemas.addSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "missing required name field" });
    }
    next()
}

module.exports = validateBodyAdd;