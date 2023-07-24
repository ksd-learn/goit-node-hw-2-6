const contacts = require("../../models/contacts");
const { nanoid } = require("nanoid");

const addContact = async(req, res, next)=> {
  try {
    const data = req.body;
    const newContact = {
      id: nanoid(),
      ...data,
    };
    result = await contacts.addContact(newContact);
    res.status(201).json(result)
  } catch(error) {
    next()
  }
}

module.exports = addContact;