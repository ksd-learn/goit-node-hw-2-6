const { Contacts } = require('../../models/contacts');

const addContact = async(req, res, next)=> {
  try {
    const data = req.body;
    const result = await Contacts.create(data);
    res.status(201).json(result)
  } catch(error) {
    next()
  }
}

module.exports = addContact;
