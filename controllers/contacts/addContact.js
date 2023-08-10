const { Contacts } = require('../../models/contacts');

const addContact = async(req, res, next)=> {
  try {
    const {_id: owner} = req.user;
    const result = await Contacts.create({...req.body, owner});
    res.status(201).json(result)
  } catch(error) {
    next()
  }
}

module.exports = addContact;
