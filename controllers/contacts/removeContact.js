const contacts = require("../../models/contacts");

const removeContact = async(req, res, next)=> {
  try {
    const { id } = req.params;
    await contacts.removeContact(id);
    res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    next()
  }
}

module.exports = removeContact;