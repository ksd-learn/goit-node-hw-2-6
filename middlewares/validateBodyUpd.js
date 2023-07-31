const schemas = require("../schemas/contacts");

const validateBodyUpd = (req, res, next) => {
    const data = req.body;
    if (data && Object.keys(data).length === 0 && data.constructor === Object) {
      return res.status(400).json({ message: "missing fields" });
    }
    next()
}

module.exports = validateBodyUpd;