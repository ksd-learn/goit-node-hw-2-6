const { Contacts } = require('../../models/contacts');

const getById = async(req, res, next)=> {
  try {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await Contacts
      .findById({ _id: id, owner }, "-createdAt -updatedAt")
      .populate( "owner" , " subscription email");
    res.json(result);
  } catch (error) {
    next()
  }
}

module.exports = getById;