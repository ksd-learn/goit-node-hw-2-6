const { Contacts } = require('../../models/contacts');

const updateContact = async(req, res, next)=> {
  try {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const data = req.body;
    const result = await Contacts
      .findOneAndUpdate({ _id: id, owner }, { ...data, owner }, { new: true })
      .populate( "owner" , " subscription email");
    res.status(200).json(result)
  } catch(error) {
    next()
  }
}

module.exports = updateContact;