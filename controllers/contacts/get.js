const { Contacts } = require('../../models/contacts');

const get = async(req, res, next)=> {
  try {
    const { page, limit, favorite } = req.query;
    const { _id: owner } = req.user;

    const pageNumber = parseInt(page, 10) || 1;
    const itemslimit = parseInt(limit, 10) || 10;
    const skipDocuments = (pageNumber - 1) * itemslimit;

    const filter = {owner};
    if (favorite) {
      filter.favorite = favorite;
    }

    const result = await Contacts
      .find(filter, "-createdAt -updatedAt")
      .skip(skipDocuments)
      .limit(itemslimit)
      .populate("owner", " subscription email");
    
    const totalContacts = await Contacts.countDocuments(filter);

    res.json({
      result,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalContacts / itemslimit),
    });
  } catch(error) {
    next(error)
  }
}

module.exports = get;