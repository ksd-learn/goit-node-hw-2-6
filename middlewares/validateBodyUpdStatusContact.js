const schemas = require("../schemas/contacts");

const updateStatusContact = (req, res, next) => {
    const data = req.body;
    if (!('favorite' in data)) {
      return res.status(400).json({ message: "missing field favorite" });
    }
    next()
}

module.exports = updateStatusContact;