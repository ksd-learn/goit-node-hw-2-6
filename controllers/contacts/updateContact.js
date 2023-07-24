const contacts = require("../../models/contacts");

const updateContact = async(req, res, next)=> {
  try {
      const { id } = req.params;
      const data = req.body;
    result = await contacts.updateContact(id, data);
    res.status(200).json(result)
  } catch(error) {
    next()
  }
}

module.exports = updateContact;