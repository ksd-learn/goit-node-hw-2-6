const contacts = require("../../models/contacts");

const getById = async(req, res, next)=> {
  try {
    const { id } = req.params;
    const result = await contacts.getById(id);
    res.json(result);
  } catch (error) {
    next()
  }
}

module.exports = getById;